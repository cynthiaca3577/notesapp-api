const express = require('express');
const router = express.Router();
const Note = require('../models/Note');


router.get('/list/:userid',async function (req,res){
    //notes will get all the notes from the database
    var notes = await Note.find({userid:req.params.userid});
    res.json(notes);
});
//this will add a new note to the database
router.post('/add',async function (req,res){
    const newNote = new Note({
        id:req.body.id,
        userid:req.body.userid,
        title:req.body.title,
        content:req.body.content,
    });
    await newNote.save();
    const response = {
        message:`New note created with id: ${req.body.id}`,
    };
    res.json(response);
});
router.put('/update',async function(req,res){
    var updateNode = await Note.findOneAndUpdate(
        {id: req.body.id},//condition
        {
            title:req.body.title,
            content:req.body.content,
        },//what we want to update
        {new:true});//this will return the updated data note which will be stored in the updateNote variable
        const response = {
            message:`Note with id: ${req.body.id} has been updated`,
            note:updateNode,
            };
            res.json(response);
    
});
router.delete('/delete',async function(req,res){
    var deleteNote = await Note.findOneAndDelete({id:req.body.id});
    var response = {
        message:`Note has been deleted with id ${req.body.id}`,
        note:deleteNote,
    };
    res.json(response);
})

module.exports = router;
