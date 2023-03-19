const con = require("./connectMysql");
const { encrypt_data } = require("./encrypt_data");

const index =async (req,res)=>{
   const query = await  con.promise().query(`SELECT * FROM room WHERE deleteAt IS  NULL`)
//    req.session.userid = encrypt_data("1")
//    req.session.role =  1
    res.setHeader('Cache-Control', 'no-store');  
    res.render('index', { title: 'หน้าหลัก',session:req.session,listroom:query?.[0]});
}
module.exports = index