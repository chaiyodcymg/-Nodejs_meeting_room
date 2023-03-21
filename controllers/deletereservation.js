const con = require("./connectMysql")
const deletereservation =(req,res)=>{
    let { id } = req.query
    con.query(`UPDATE reservation SET  deleteAt = now()  WHERE id = ?`
    ,[id],
    (err,result) =>{
        if(err){
            console.log(err)
            return  req.flash('index', "เกิดข้อผิดพลาด");
        }
        return   res.redirect("back")

    })
}
module.exports = deletereservation