const con = require("./connectMysql");
const { encrypt_data ,decrypt_data} = require("./encrypt_data");


const postlogin = (req,res)=>{

    let { username , password} =  req.body
    // console.log(req.body);
   
    con.query("SELECT * FROM users WHERE username = ?"
    ,[username],
    (err,result) =>{
        if(err){
            console.log(err)
           return   res.redirect("/login")
        }
   
        if(result.length > 0){
            if( password == decrypt_data(result?.[0]?.password) ){
                req.session.userid = encrypt_data(result?.[0]?.id)
                req.session.role =  result?.[0]?.role
                return   res.redirect("/")
            }else{
                return   res.redirect("/login")
            }
        }
        return   res.redirect("/login")
     
        // req.session.userid = encrypt_data(result.insertId)
   
    })
    
}
module.exports =  postlogin