
const { Client,LocalAuth,MessageMedia } = require('whatsapp-web.js');

//const puppeteer = require('puppeteer');

const client1 = new Client({
    authStrategy : new LocalAuth({clientId: 'client1'}),
});

const client2 = new Client({
    authStrategy : new LocalAuth({clientId: 'client2'}),
});

const client3 = new Client({
    authStrategy : new LocalAuth({clientId: 'client3'}),
});
// Done client
const client = client2;

const qrcode = require('qrcode-terminal');



        
//client.on('qr', (qr) => {
// client.on('qr', (qr) => {
//     // Generate and scan this code with your phone
//     qrcode.generate(qr,{small : true});
//     //console.log('QR RECEIVED', qr);
// });

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('authenticated', (session) => {
    console.log('Authenticated successfully');
    // يمكنك هنا حفظ بيانات الجلسة إذا كنت ترغب في ذلك
});

client.on('auth_failure', (message) => {
    console.error('Authentication failed:', message);
});


client.on('disconnected', (reason) => {
    console.log('Client was logged out', reason);
});

// client.on('message', msg => {
//     if (msg.body === '!ping') {
//         //msg.reply('pong');
//         client.sendMessage(msg.from ,'pong');
//     }
// });

// الاستماع للرسائل الواردة والرد عليها تلقائيًا
client.on('message', message => {
    console.log(`Received message: ${message.body}`);
    console.log(`Received message ID: ${message.id.id}`);
    console.log(`Received message From: ${message.from}`);
    console.log(`Received message To: ${message.to}`);
    console.log(`Received message time: ${message.timestamp}`);

    
    // الرد برسالة تلقائية
    if (message.body.toLowerCase() === 'hello') {
        message.reply('Hello! How can I assist you today?');
    } 
    // else {
    //     message.reply('This is an automated response.');
    // }
});

client.on('message', message => {
    if (message.body.toLowerCase().includes('help')) {
        message.reply('How can I assist you?');
    } else if (message.body.includes('bye')) {
        message.reply('Goodbye!');
    } 
    // else {
    //     message.reply('I did not understand your message.');
    // }
});

client.initialize();



function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

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

        // انتظر لمدة 7 ثواني (7000 مللي ثانية)
        await wait(7000);  
        console.log('7 seconds later...');

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
        // انتظر لمدة 7 ثواني (7000 مللي ثانية)
        await wait(7000);  
        console.log('7 seconds later...');

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


const generateQrCode = async(req,res,next) =>{
    
    // // const timeout = 3000; // 30000 مللي ثانية = 30 ثواني
    // // res.setTimeout(timeout, () => {
    // //     console.log('Request has timed out.');
    // //     //res.status(503).send({status:"false",response:'Request timed out.'});
    // //     res.status(200).send({status:"false",response:'Request timed out.'});
    // // });

    // // next();

    try {
        //const client = new Client(...)
        let qr = await new Promise((resolve, reject) => {
            client.once('qr', (qr) => resolve(qr));
            setTimeout(() => {
                return reject(new Error("QR event wasn't emitted in 30 seconds."));
            }, 30000)
        
    });

    ////qrcode.generate(qr,{small : true})

    res.status(200).json({
        status: true,
        response: {qr : qr  },
    }); 
        //res.write("<img id='img_qr' name='img_qr' src='"+qr+"'/>");
        //res.send(qr);
    } catch (err) {
        res.send(err.message);
    }
        //client.on('qr', async(qr) => {
   try{ 
//    client.once('qr', async(qr) => {
//         // Generate and scan this code with your phone
//         //qrcode.generate(qr,{small : true})
//         return res.status(200).json({
//                 status: true,
//                 response: {qr : qr  },
//             });
//           //var infClient = client.info;
//         //console.log('QR RECEIVED', qr);
//    });
    
    client.once('ready', () => {
        //var infClient = client.info;
        console.log('Client is ready!');
        //return res.status(301).json({name : infClient.pushname , sourcePhone : infClient.wid.user});
    });

    // client.once('authenticated', (session) => {
    //     console.log('Authenticated successfully');
    //     // يمكنك هنا حفظ بيانات الجلسة إذا كنت ترغب في ذلك
    // });
    
    // client.once('auth_failure', (message) => {
    //     console.error('Authentication failed:', message);
    // });

    // انتظر لمدة 2 ثواني (2000 مللي ثانية)
    await wait(2000);  
    console.log('2 seconds later...');
    
    var infClient2 = client.info;
    if(infClient2 !==undefined &&  infClient2 !==null){
        console.log('Client is ready222!');
        return res.status(301).json({name : infClient2.pushname , sourcePhone : infClient2.wid.user});
    }


    // client.once('disconnected', () => {
    //     //var infClient = client.info;
    //     console.log('Client is disconnected!');
    //     //res.status(302).json({name : client.info.pushname , sourcePhone : client.info.wid.user});
    // });
    
    /*client.once('message', msg => {
        if (msg.body == '!ping') {
            msg.reply('pong');
        }
    });*/

} catch (error) {
    console.log(error);
    return res.status(500).json({status:"false",error:"Error Server from Generate QrCode"});
}
}

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


