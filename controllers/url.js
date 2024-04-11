const { nanoid } = require('nanoid');
const URL =require('../models/url')

async function handlegenerateNewShortURL (req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error:'URL is required'})
    const shortId= nanoid(8);
    await URL.create({
        shortid:{
            shortId:shortId,
            redirectURL: body.url,
            visitHistory: [],
        }
    })
    return response.json({ id:shortId });
}

module.exports = {handlegenerateNewShortURL}