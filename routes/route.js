const express = require('express')
const index = require('../controllers')
const requireAuth = require('../controllers/requireAuth')
const getlogin = require('../controllers/getlogin')
const getregister = require('../controllers/getresgister')
const postlogin = require('../controllers/postlogin')
const postregister = require('../controllers/postregister')
const preventAuth = require('../controllers/preventAuth')
const addroom = require('../controllers/addroom')
const requireAdmin = require('../controllers/requireAdmin')
const editroom = require('../controllers/editroom')
const deleteroom = require('../controllers/deleteroom')
const logout = require('../controllers/logout')
const reservedetail = require('../controllers/reservedetail')
const addreservation = require('../controllers/addreservation')
const findReserveByid = require('../controllers/findReserveByid')

const router = express.Router()

router.use((req, res, next) => {
  next()
})

// GET
router.get("/login",preventAuth,getlogin)
router.get("/register",preventAuth,getregister)
router.get("/",requireAuth,index)
router.get("/deleteroom",requireAdmin,deleteroom)
router.get("/logout",logout)
router.get("/reservedetail/:id",requireAuth,reservedetail)
router.get("/findreservebyid/:id",requireAuth,findReserveByid)



// POST
router.post("/login",postlogin)
router.post("/register",postregister)
router.post("/addroom",requireAdmin,addroom)
router.post("/editroom",requireAdmin,editroom)
router.post("/addreservation",requireAuth,addreservation)
  module.exports = router