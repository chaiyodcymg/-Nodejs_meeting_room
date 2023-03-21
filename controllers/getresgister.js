const getregister = async(req,res)=>{
    const flash = await req.consumeFlash('register');
    res.setHeader('Cache-Control', 'no-store');  
    res.render('register', { title: 'หน้าหลัก',session:req.session,register:flash});
}
module.exports = getregister