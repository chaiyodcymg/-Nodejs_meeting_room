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
// POST
router.post("/login",postlogin)
router.post("/register",postregister)
router.post("/addroom",requireAdmin,addroom)

router.post("/editroom",requireAdmin,editroom)
  module.exports = router