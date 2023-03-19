const getregister = (req,res)=>{
    res.setHeader('Cache-Control', 'no-store');  
    res.render('register', { title: 'หน้าหลัก',session:req.session});
}
module.exports = getregister