const express = require('express')
const getlogin = require('../controllers/getlogin')
const postlogin = require('../controllers/postlogin')
const router = express.Router()

router.use((req, res, next) => {
    
    // res.setHeader("Content-Type", "application/json");
      // if(req.headers['x-api-key']!= undefined && controller.check_x_api_key(req)){
      next()
         
      // }else{
      //     res.status(403)
      //     res.send({message:"Forbidden"})  
      // }
  
  })
  
  router.get("/",(req,res)=>{
    res.setHeader('Cache-Control', 'no-store');  
    console.log(req.session);
    res.render('index', { title: 'หน้าหลัก',session:req.session});
  })
  router.get("/home",(req,res)=>{
    res.render('login', { title: 'หน้าหลัก',session:req.session});
  })

  // GET
  router.get("/login",getlogin)


  // POST
  router.post("/login",postlogin)
  
  module.exports = router