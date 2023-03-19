const mysql = require('mysql2')

const con = mysql.createPool({
    host: 'localhost', 
    user:'root',
    password:'',
    database:'meeting_room',
    port:3306,

    
})

con.getConnection((err)=>{
    if(err){
        console.error('\x1b[31m%s\x1b[0m',err)
        return con.connect() ;
        
    }
    console.log('\x1b[32m%s\x1b[0m',"[Mysql] =>  Connecting Succesfully!")
    
})

module.exports = con