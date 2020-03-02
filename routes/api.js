var express = require('express');
var router = express.Router();
var Travling = require('../models/TravlingComment');


router.get('/',(req,res)=>{
    Travling.find({}).then((Travling)=>{
        res.status(200).json({
            status:"All Data Comment",
            data:Travling
        })
    })
})

router.get('/:id',(req,res)=>{
    Travling.find({_id:req.params.id}).then((Travling)=>{
        res.status(200).json({
            status:"Data by ID",
            data:Travling
        })
    })
})

router.post('/tambah',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    Travling.create(req.body,function(err){
        if(err){
        res.status(500).json({
            status:"error",
        })
    }
 })

 Travling.find({}).then(()=>{
    res.status(200).json({
        status:"Tambah Data Sukses",
    })
})
})


router.put('/update/:id',(req,res)=>{
Travling.findByIdAndUpdate({_id:req.params.id},req.body,(err)=>{
    res.status(200).json({
        status:"Data Sukses Terupdate",
    })
})
})

router.delete('/hapus/:id',(req,res)=>{
    Travling.findByIdAndDelete({_id:req.params.id},()=>{
        res.json({
            status:"Delete data Berhasil"
        })
    });
    
    })

    module.exports = router;