const cal_diff_dates = require("./cal_diff_dates");
const con = require("./connectMysql");
const { decrypt_data } = require("./encrypt_data");


const addreservation = async (req,res)=>{

    const  { 
        id,
        reserve_name,
        start_datetime,
        end_datetime,
        detail
      } = req.body

      const cal_dif =  cal_diff_dates(start_datetime,end_datetime)
      if(cal_dif < 60){
          req.flash('reservedetail', 'จองได้ตั้งแต่ 1 ชั่วโมงขึ้นไป');
          return  res.redirect("back")
      }else if(cal_dif > 180){
        req.flash('reservedetail', 'คุณสามารถจองได้ไม่เกิน 3 ชั่วโมง');
        return  res.redirect("back")
      }
     
      const query = await  con.promise().query(`SELECT * FROM reservation WHERE start_datetime BETWEEN ? AND ? AND room_id = ?`,
      [start_datetime,end_datetime,id])
      console.log(query?.[0]);
      if(query?.[0].length > 0){
        req.flash('reservedetail', 'ไม่สามารถจองซํ้ากับผู้อื่นได้');
        return  res.redirect("back")
      }
    let users_id =  decrypt_data(req.session.userid)

    con.query("INSERT INTO reservation (users_id , room_id , reserve_name , start_datetime, end_datetime , detail) VALUES(?,?,?,?,?,?)"
    ,[users_id,id,reserve_name,start_datetime,end_datetime,detail],
    (err,result) =>{
        if(err){
            console.log(err)
            req.flash('reservedetail', 'เกิดข้อผิดพลาด');
          return   res.redirect("back")
        }
        return   res.redirect("back")

    })
  
    // req.flash('reservedetail', 'เวลา');
    // res.redirect("back")
}
module.exports = addreservation