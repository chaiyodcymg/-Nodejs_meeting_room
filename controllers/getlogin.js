const getlogin = (req,res)=>{
    res.render('login', { title: 'หน้าหลัก',session:req.session});
}
module.exports =  getlogin