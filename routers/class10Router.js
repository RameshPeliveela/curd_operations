var mongoose = require('mongoose');
var class10 = require('..//modules/class10Module');
var express = require('express');

router = express.Router();

//fetching all the data
router.get('/', async (req, res)=>{

    try{
        const data = await class10.find();
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(400).json({Error: "can't fetch the details"});
    }
})

//inserting data
router.post('/', async (req, res)=>{
    try{
        const newData = req.body;
        const newModel = new class10(newData);
        const response = await newModel.save();
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(400).json({Error:"error in saving data"})
    }
})

//deleting the data
router.delete('/:username', async (req, res)=>{
    try{
        personUname = req.params.username;
        person = (await class10.findOne({username:personUname}));

        if(!person){
            return res.status(500).json({Error: "Person didn't exist"});
        }
        
        personId = person.id;
        const response = await class10.findByIdAndDelete(personId)
            res.status(200).json({Message:" data deleted syuccessfully"});
    }
    catch(err){
        console.log(err);
        res.status(400).json({Error: 'Internal server error'});
    }
})

//Updating the data
router.put('/:username', async (req, res)=>{

    try{

        const newData = req.body;
        personUname = req.params.username;
        person = (await class10.findOne({username:personUname}));
    
        if(!person){
            return res.status(500).json({Error: "Person didn't exist"});
        }

        id = person.id;
        const response = await class10.findByIdAndUpdate(id,newData, {new:true, runValidators: true});

        res.status(200).json({message: 'Data updated successfully'});

    }

    catch(err){
        console.log(err);
        res.status(400).json({Error: 'Internal server error'});
    }

})

module.exports = router;