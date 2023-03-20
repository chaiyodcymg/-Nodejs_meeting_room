const con = require("./connectMysql");

const reservedetail =async (req,res)=>{
    const { id } = req.params
    const query = await  con.promise().query(`SELECT * FROM room WHERE deleteAt IS  NULL AND room_status = 'ใช้งานได้' AND id = ?`,[id])

   
    // console.log(query?.[0]);
    const flash = await req.consumeFlash('reservedetail');
    res.setHeader('Cache-Control', 'no-store');  
    if(query?.[0].length > 0){
       return res.render('reservedetail', { session:req.session,room:query?.[0][0],reservedetail:flash});
    }
    return   res.redirect("back")
}
module.exports = reservedetail