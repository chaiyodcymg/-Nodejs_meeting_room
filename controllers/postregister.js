const con = require("./connectMysql");
const { encrypt_data } = require("./encrypt_data");


const postregister = (req,res)=>{
    let { username , password} =  req.body
    password = encrypt_data(password)
    // console.log(req.body);
    let role = 0
    con.query("INSERT INTO users (username,password,role) VALUES(?,?,?)"
    ,[username,password,role],
    (err,result) =>{
        if(err){
            console.log(err)
          return  res.status(200).send({status:false,text:"เกิดข้อผิดพลาด"})
        }
        // console.log(result);
        req.session.userid = encrypt_data(result.insertId)
        req.session.role = role
        return   res.redirect("/")

    })
  
}
module.exports = postregister 