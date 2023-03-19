
const requireAuth = (req,res,next)=>{

    if(req.session.userid){
        return next()
    }else{
        return res.redirect("/login") 
    }
       
    
}
module.exports =  requireAuth