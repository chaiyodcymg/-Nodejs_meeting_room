const con = require("./connectMysql");


const postlogin = (req,res)=>{

    const { username , password} =  req.body
    console.log(req.body);

    con.query("SELECT * FROM users WHERE username = ? AND password = ? "
    ,[username,password],
    (err,result) =>{
        if(err){
            console.log(err)
            res.status(200).send({status:false,text:"เกิดข้อผิดพลาด",session:"",email:"" ,name:"",role:0})
        }
        console.log(result);

    })
}
module.exports =  postlogin