const { mongo, default: mongoose } = require("mongoose")
//this is the schema for the notes to define the structure of the notes
const noteSchema = new mongoose.Schema({
    id:{
        type: String,
        unique: true,
        required: true
    },
    userid:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
    }, 
    dateadded:{
        type: Date,
        default: Date.now
    }
});
//module.exports is used to export the schema to be used in other files
module.exports=mongoose.model('Note',noteSchema);