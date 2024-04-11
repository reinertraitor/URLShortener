const mongoose= require("mongoose")

const urlschema = new mongoose.Schema({
    shortId:{
        type:string,
        required:true,
        unique:true,
    },
    redirect_url:{
        type:string,
        required:true,

    },
    VisitHistory:[{
        timestamp: {type:Number}
    }],

},
{timestamps:true}
);

const URL =schema.model('url',urlschema);

module.exports = URL;

