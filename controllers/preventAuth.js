
const preventAuth = (req,res,next)=>{
    if(req.session.userid){
        return res.redirect("/") 
        
    }else{
        return next()
    }
       
    
}
module.exports =  preventAuth