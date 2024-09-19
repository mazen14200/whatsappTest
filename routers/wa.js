const express = require("express");

const {sendMedia,sendMessage_text,generateQrCode} = require("../controllers/waController");

const router = express.Router();



/*router.get("/api", (req,res)=>{
    res.json({status : "OK" });
});*/
router.get("/generateQrCode", generateQrCode);
// router.get("/api/sendMedia", sendMedia);
// router.post("/api/sendMedia", sendMedia);
// router.get("/api/sendMessage_text", sendMessage_text);
// router.post("/api/sendMessage_text", sendMessage_text);

module.exports = router;