
const con = require("./connectMysql");
const { decrypt_data } = require("./encrypt_data");

const reserved_owner = async(req,res,next)=>{
    const  {id } = req.query
    const userid = decrypt_data(req.session.userid)
    const query = await  con.promise().query(`SELECT * FROM reservation WHERE  id = ?  AND users_id =? `,[id ,userid])
    if(query?.[0].length == 0){
        return  res.redirect("back")
    }else{
       return  next()
    }


}
module.exports = reserved_owner