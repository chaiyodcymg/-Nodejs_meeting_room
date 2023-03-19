const con = require("./connectMysql")
const deleteroom =  (req,res)=>{
    let { id } = req.query
    con.query(`UPDATE room SET  deleteAt = now()  WHERE id = ?`
    ,[id],
    (err,result) =>{
        if(err){
            console.log(err)
          return  res.status(500).send({status:false,text:"เกิดข้อผิดพลาด"})
        }
        return   res.redirect("back")

    })

}

module.exports = deleteroom 