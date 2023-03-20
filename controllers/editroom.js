const randomstring = require("randomstring")
const path = require("path")
const fs = require("fs")
const con = require("./connectMysql")
const editroom = (req,res)=>{

   let { id } = req.query
   id = parseInt(id)
    if(req.files){
        const file = req.files.image
        const extname = path.extname(file.name)

        let filename_random = __dirname.split('/controllers')[0]+"/public/images/"+randomstring.generate(20)+extname
        if (fs.existsSync(filename_random )) {
           filename_random  = __dirname.split('/controllers')[0]+"/public/images/"+randomstring.generate(25)+extname
          file.mv(filename_random)
        }else{
          file.mv(filename_random)
        }
        const image_url = filename_random.split("/public")[1]
        const {room_name,room_detail,room_location,room_seats,room_status} = req.body
        con.query(`UPDATE room SET room_name = ?, room_detail = ? , room_location =?, image_url =?, room_seats =? , updateAt = now() ,room_status=?  WHERE id = ?`
        ,[room_name,room_detail,room_location,image_url,room_seats,room_status,id],
        (err,result) =>{
            if(err){
                console.log(err)
              return  res.status(500).send({status:false,text:"เกิดข้อผิดพลาด"})
            }
            return   res.redirect("back")
    
        })
    }else{
        const {room_name,room_detail,room_location,room_seats,room_status} = req.body
        con.query(`UPDATE room SET room_name = ?, room_detail = ? , room_location =?, room_seats =?  , updateAt = now() , room_status = ? WHERE id = ?`
        ,[room_name,room_detail,room_location,room_seats,room_status,id],
        (err,result) =>{
            if(err){
                console.log(err)
              return  res.status(500).send({status:false,text:"เกิดข้อผิดพลาด"})
            }
            return   res.redirect("back")
    
        })
    }
}
module.exports = editroom