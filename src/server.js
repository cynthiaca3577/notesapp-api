const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const Note = require('./models/Note');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://cynthiaca3577:rqtphzvr@cluster0.rdmqwtz.mongodb.net/notesdb').then(function(){
    app.get('/',function(req,res){
        //req is what we send from frontend to this server
        //res is what we send from server to the frontend
        // res.send('This is the home page');
        res.json({
            message:'API is working'
        })
    });
    const noteRouter = require('./routes/Note');
    app.use('/notes',noteRouter);// /notes/add or /notes/update


    // app.get('/notes/list',async function (req,res){
    //     //notes will get all the notes from the database
    //     var notes = await Note.find();
    //     res.json(notes);
    // });
    // //this will add a new note to the database
    // app.post('/notes/add',async function (req,res){
    //     const newNote = new Note({
    //         id:req.body.id,
    //         userid:req.body.userid,
    //         title:req.body.title,
    //         content:req.body.content,
    //     });
    //     await newNote.save();
    //     const response = {
    //         message:`New note created with id: ${req.body.id}`,
    //     };
    //     res.json(response);
    // });
    // app.put('/notes/update',async function(req,res){
    //     var updateNode = await Note.findOneAndUpdate(
    //         {id: req.body.id},//condition
    //         {
    //             title:req.body.title,
    //             content:req.body.content,
    //         },//what we want to update
    //         {new:true});//this will return the updated data note which will be stored in the updateNote variable
    //         const response = {
    //             message:`Note with id: ${req.body.id} has been updated`,
    //             note:updateNode,
    //             };
    //             res.json(response);
        
    // });
    // app.delete('/notes/delete',async function(req,res){
    //     var deleteNote = await Note.findOneAndDelete({id:req.body.id});
    //     var response = {
    //         message:`Note has been deleted with id ${req.body.id}`,
    //         note:deleteNote,
    //     };
    //     res.json(response);
    // })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{console.log('Server is running on port: '+PORT)});// server setup