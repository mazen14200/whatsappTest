const express = require("express");

const {sendMedia,sendMessage_text,generateQrCode,test,addNewClient,generateQrCodeNew} = require("../controllers/waController");

const router = express.Router();



/*router.get("/api", (req,res)=>{
    res.json({status : "OK" });
});*/
router.get("/api/generateQrCodeNew", generateQrCodeNew);
router.get("/api/generateQrCode", generateQrCode);
router.get("/api/generateQrCode/:id", generateQrCode);
router.post("/api/generateQrCode/:id", generateQrCode);
router.get("/api/test", test);
router.get("/api/sendMedia", sendMedia);
router.post("/api/sendMedia", sendMedia);
router.get("/api/sendMessage_text", sendMessage_text);
router.post("/api/sendMessage_text", sendMessage_text);
router.post("/api/add-client/:id", addNewClient);
module.exports = router;