const con = require("./connectMysql");
const { encrypt_data,decrypt_data } = require("./encrypt_data");

const index =async (req,res)=>{
    const id = decrypt_data(req.session.userid) 
   const query = await  con.promise().query(`SELECT * FROM room WHERE deleteAt IS  NULL`)
   const query2 = await  con.promise().query(`SELECT rs.id , rs.users_id , rs.room_id , rs.reserve_name , 
   rs.start_datetime,rs.end_datetime , rs.detail ,
   r.image_url,r.room_name , r.room_status 
   FROM reservation as rs 
   JOIN room as r ON r.id = rs.room_id
   WHERE rs.users_id = ? AND rs.deleteAt IS NULL AND r.deleteAt IS NULL`,[id])
//    req.session.userid = encrypt_data("1")
//    req.session.role =  1
    const flash = await req.consumeFlash('index');
    res.setHeader('Cache-Control', 'no-store');  
    res.render('index', {session:req.session,listroom:query?.[0],listreserve:query2?.[0],index:flash});
}
module.exports = index