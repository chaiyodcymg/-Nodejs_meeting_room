const randomstring = require("randomstring")
const path = require("path")
const fs = require("fs")
const con = require("./connectMysql")
const addroom = (req,res)=>{


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
        const {room_name,room_detail,room_location,room_status,room_seats} = req.body
        con.query(`INSERT INTO room (room_name , room_detail , room_location , image_url , room_seats,room_status  ) VALUES(?,?,?,?,?,?)`
        ,[room_name,room_detail,room_location,image_url,room_seats,room_status],
        (err,result) =>{
            if(err){
                console.log(err)
              return  res.status(500).send({status:false,text:"เกิดข้อผิดพลาด"})
            }
            return   res.redirect("back")
    
        })
    }
 
   
}
module.exports = addroom
