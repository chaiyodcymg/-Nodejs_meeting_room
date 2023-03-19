
const requireAdmin = (req,res,next)=>{
    if(req.session.role == 1){
        return next()
    }else{
        return res.redirect("/login") 
    }
       
}
module.exports = requireAdmin