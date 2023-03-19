const getlogin = (req,res)=>{
    res.setHeader('Cache-Control', 'no-store');  
    res.render('login', { title: 'หน้าหลัก',session:req.session});
}
module.exports =  getlogin