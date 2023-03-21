const con = require("./connectMysql")


const findReserveByid =async (req,res)=>{
    const {id } = req.params
    const query = await  con.promise().query(` SELECT id, start_datetime as start , end_datetime as end ,
     reserve_name as title, detail FROM reservation WHERE room_id = ? AND deleteAt IS NULL`,[id])
     res.json(query?.[0])
}
module.exports = findReserveByid