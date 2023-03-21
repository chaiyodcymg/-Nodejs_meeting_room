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

            if(err.code == "ER_DUP_ENTRY"){
               req.flash('register', 'Username มีผู้ใช้งานแล้ว กรุณาใช้ Username อื่น');
              return   res.redirect("back")
            }
            req.flash('register', "เกิดข้อผิดพลาด");
            return   res.redirect("back")
        }

      
        req.session.userid = encrypt_data(result.insertId)
        req.session.role = role
        req.session.username =  username
        return   res.redirect("/")

    })
  
}
module.exports = postregister 