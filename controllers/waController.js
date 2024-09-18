
const { Client,LocalAuth,MessageMedia } = require('whatsapp-web.js');

const client = new Client({
    authStrategy : new LocalAuth(),
});
const qrcode = require('qrcode-terminal');

// //client.on('qr', (qr) => {
// client.on('qr', (qr) => {
//     // Generate and scan this code with your phone
//     qrcode.generate(qr,{small : true});
//     //console.log('QR RECEIVED', qr);
// });

// client.once('ready', () => {
//     console.log('Client is ready!');
// });

// client.once('message', msg => {
//     if (msg.body == '!ping') {
//         msg.reply('pong');
//     }
// });

client.initialize();

const sendMedia = async (req,res)=> {
    const Token = "Bnan_fgfghgfhnbbbmhhjhgmghhgghhgj";
    let phone = req.query.phone || req.body.phone;
    const message = req.query.message || req.body.message;
    let apiToken = req.query.apiToken || req.body.apiToken;
    const mediaFile = req.query.mediaFile || req.body.mediaFile;

    phone = phone + "@c.us";
    
    if(apiToken !== Token){
        return res
        .status(401).json({status:"false",error:"This invalid Token"});
    }
    try {
        const user = await client.isRegisteredUser(phone);
        if(user){

            if(mediaFile !== undefined && mediaFile !== null && mediaFile !== ""){
              let media = await MessageMedia.fromUrl(mediaFile, {unsafeMime : true});
              await client.sendMessage(phone, media, { caption : message}).then((result) => {
                res.status(200).json({
                    status: true,
                    response: {messageId : result.id.id, source : phone ,message:message  },
                });
              });
              //var infClient = client.info;
              //res.json({status : "true", file : media.filename , message : message,infClient:infClient});

            }
            else{
                await client.sendMessage(phone,message).then((result) => {
                res.json({status:"true", response: {messageId : result.id.id, source : phone ,message:message  }})
            });
        }            
            
        }else{
            res.json({status:"false", error:"this phone not registed in whatsapp"});
        }

        console.log(message);
        console.log(phone);

        //res.json({message,phone});
    } catch (error) {
        console.log(error);
        res.status(500).json({status:"false",error:"Error Server"});
    }
    
};


const sendMessage_text = async (req,res)=> {
    const Token = "Bnan_fgfghgfhnbbbmhhjhgmghhgghhgj";
    let phone = req.query.phone || req.body.phone;
    const message = req.query.message || req.body.message;
    let apiToken = req.query.apiToken || req.body.apiToken;

    phone = phone + "@c.us";
    
    if(apiToken !== Token){
        return res
        .status(401).json({status:"false",error:"This invalid Token"});
    }
    try {
        const user = await client.isRegisteredUser(phone);
        if(user){
            await client.sendMessage(phone,message).then((result) => {
            res.json({status:"true", response: {messageId : result.id.id, source : phone ,message:message  }})
        });
        
            
        }else{
            res.json({status:"false", error:"this phone not registed in whatsapp"});
        }

        console.log(message);
        console.log(phone);

        //res.json({message,phone});
    } catch (error) {
        console.log(error);
        res.status(500).json({status:"false",error:"Error Server"});
    }
    
};


// const generateQrCode = async(req,res) =>{
    
//     // try {
//     //     //const client = new Client(...)
//     //     let qr = await new Promise((resolve, reject) => {
//     //         client.once('qr', (qr) => resolve(qr));
//     //         setTimeout(() => {
//     //             reject(new Error("QR event wasn't emitted in 40 seconds."));
//     //         }, 40000)
//     //     });
//     //     res.status(200).json({
//     //         status: true,
//     //         response: {qr : qr  },
//     //     });
//     //     //res.write("<img id='img_qr' name='img_qr' src='"+qr+"'/>");
//     //     //res.send(qr);
//     // } catch (err) {
//     //     res.send(err.message);
//     // }
//         //client.on('qr', async(qr) => {
//    client.once('qr', async(qr) => {
//         // Generate and scan this code with your phone
//         //qrcode.generate(qr,{small : true})
//         res.status(200).json({
//                 status: true,
//                 response: {qr : qr  },
//             });
//           var infClient = client.info;
//         console.log('QR RECEIVED', qr);
//    });
    
//     client.once('ready', () => {
//         var infClient = client.info;
//         console.log('Client is ready!');
//         res.status(301).json({name : client.info.pushname , sourcePhone : client.info.wid.user});
//     });

//     /*client.once('disconnected', () => {
//         var infClient = client.info;
//         console.log('Client is disconnected!');
//         res.status(302).json({name : client.info.pushname , sourcePhone : client.info.wid.user});
//     });*/
    
//     /*client.once('message', msg => {
//         if (msg.body == '!ping') {
//             msg.reply('pong');
//         }
//     });*/
// }

/*router.get('/', async (req, res) => {
    try {
        const client = new Client(...)
        let qr = await new Promise((resolve, reject) => {
            client.once('qr', (qr) => resolve(qr))
            setTimeout(() => {
                reject(new Error("QR event wasn't emitted in 15 seconds."))
            }, 15000)
        })
        res.send(qr)
    } catch (err) {
        res.send(err.message)
    }
}*/

module.exports = {sendMedia,sendMessage_text, generateQrCode};


