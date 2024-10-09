
const { Client,LocalAuth,MessageMedia, List } = require('whatsapp-web.js');

//const puppeteer = require('puppeteer');
const jwt = require('jsonwebtoken');

const path = require('path');
const mysql = require('mysql');

//const qrcode = require('qrcode-terminal');

// تحديد مسار المجلد
//const authDir = path.join(__dirname, '../.wwebjs_auth');
const authDir = path.join(__dirname, '../sessions');
//const cachDir = path.join(__dirname, '../caches');
//const chromepath = path.join(__dirname, '../usr/bin/chromium-browser');
//const chromepath = path.join(__dirname, '../chrome/win64-127.0.6533.88/chrome-win64/chrome.exe');
console.log(authDir);
//const fs = require('fs');
const fs = require('graceful-fs');
//const sessionData = process.env.WHATSAPP_SESSION ? JSON.parse(process.env.WHATSAPP_SESSION) : null;
//const rimraf = require('rimraf');
const sid = "client5";
//const auth_dataPath =   './.wwebjs_auth' || process.env.WWEBJS_AUTH_PATH;
//const auth_userDataDir =   './.wwebjs_auth'+'/session-'+sid || process.env.WWEBJS_AUTH_PATH +'/session-'+sid;
//const cachePath =  './.wwebjs_cache' || process.env.WWEBJS_CACHE_PATH;



var connection = mysql.createConnection({
  host: "localhost",
  user: "bnanwhats",
  password: "Maz@123456en",
  database: "whats_db"
  
});

function connect(){
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);
    });
  });
}

  function insert_source(source_id){
    connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        //var sql = "INSERT INTO source (source_id) VALUES ('4004', 'Highway 37')";
        var sql = "INSERT INTO source (source_id) VALUES ('"+ source_id +"')";
        connection.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
      });
  }
  //insert_source("4005");
  function insert_source_user_mob(source_id,source_name,source_mobile){
    connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        //var sql = "INSERT INTO source (source_id) VALUES ('4004', 'Highway 37')";
        var sql = "INSERT INTO source (source_id,source_name,source_mobile) VALUES ('"+ source_id +"','"+ source_name +"','"+ source_mobile +"')";
        connection.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
      });
  }
  //insert_source_user_mob('4006','mazen مازن عصام','201112847004');
  
  function update_source_user_mob(source_id,source_name,source_mobile){
    connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "UPDATE source SET source_name = '"+source_name+"' , source_mobile = '"+source_mobile+"' WHERE source_id = '"+source_id+"'";
        connection.query(sql, function (err, result) {
          if (err) throw err;
          console.log(result.affectedRows + " record(s) updated");
        });
      });
  }
  //update_source_user_mob('4006','maze','201104');
// // //     function get_source_Data(source_id) {
// // //     connection.connect(function(err) {
// // //         if (err) throw err;
// // //         console.log("Connected!");
// // //         var sql = "SELECT * FROM source  WHERE source_id = '"+source_id+"'";
// // //         connection.query(sql, function (err, result,fields) {
// // //           if (err) throw err;
// // //           console.log(result[0].source_name);
// // //           return [result[0].source_name,result[0].source_mobile];
// // //         });
// // //       });
// // //   }
// // //   get_source_Data('4006').then(results=>
// // //     console.log(results)
// // //   );

  function getListOfStringsFromDB() {
    return new Promise((resolve, reject) => {
        const query = 'SELECT source_name FROM source'; 

        connection.query(query, (error, results) => {
            if (error) {
                return reject(error); 
            }

            // تحويل النتائج إلى قائمة من السلاسل النصية
            const names = results.map(row => row.source_name);
            resolve(names); // إرجاع قائمة السلاسل النصية
        });
    });
}

// استخدام الدالة مع then()
getListOfStringsFromDB()
    .then((names) => {
        console.log('Product names:', names); // طباعة قائمة أسماء المنتجات
    })
    .catch((error) => {
        console.error('Error:', error);
    });

function get_source_Data(source_id) {
    return new Promise((resolve, reject) => {
        const query = 'SELECT source_name,source_mobile FROM source where source_id='+"'"+source_id+"'"

        connection.query(query, (error, results) => {
            if (error) {
                return reject(error); 
            }

            // تحويل النتائج إلى قائمة من السلاسل النصية
            //const names = results.map(row => row.source_name);
            //resolve(names); // إرجاع قائمة السلاسل النصية
            resolve(results); // إرجاع قائمة السلاسل النصية
        });
    });
}

// استخدام الدالة مع then()
get_source_Data('4006')
    .then((nresult) => {
        console.log('Product names:', nresult); // طباعة قائمة أسماء المنتجات
        console.log(nresult[0].source_name); // طباعة قائمة أسماء المنتجات
        console.log(nresult[0].source_mobile); // طباعة قائمة أسماء المنتجات
    })
    .catch((error) => {
        console.error('Error:', error);
    });

// مفتاح سري لتوقيع الـ JWT
const SECRET_KEY = 'your-secret-key';

// تخزين الجلسات
let sessions = {};
const id = '4005'
//const pathSession = './sessions/session_'+id+'.json';

// // تحميل الجلسات المحفوظة
// if (fs.existsSync('session.json')) {
//     sessions = JSON.parse(fs.readFileSync('session.json', 'utf8'));
// }
// // تحميل الجلسات المحفوظة
// if (fs.existsSync(pathSession)) {
//     sessions = JSON.parse(fs.readFileSync(pathSession, 'utf8'));
// }
// else{ // غير موجود اذا انشأ ملف بهذا الاسم
//     var createStream = fs.createWriteStream(pathSession);
// createStream.end();
// }

// دالة لحذف ملف
function deleteFile(filePath) {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error('فشل في حذف الملف:', err);
        } else {
            console.log('تم حذف الملف بنجاح');
        }
    });
}

// دالة لحذف المجلد
function deleteFolder(folderPath) {
    fs.rm(folderPath, { recursive: true, force: true }, err => {
        if (err) {
            console.error('فشل في حذف المجلد:', err);
        } else {
            console.log('تم حذف المجلد بنجاح');
        }
    });
}

const client5 = new Client({
    authStrategy : new LocalAuth({
        //dataPath: authDir,
        clientId: 'client_4001',
        //userDataDir : auth_userDataDir
    }),
    //session: sessions, // إذا كانت الجلسة موجودة، يتم استخدامها
    puppeteer: {
        //executablePath: '/usr/bin/google-chrome',  // أو مسار Chrome المثبت محليًا
        //executablePath: chromepath,  // أو مسار Chrome المثبت محليًا
        headless: true, // تشغيل المتصفح في وضع headless
        args: ['--no-sandbox', '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',  // تقليل استخدام الذاكرة المشتركة
            '--disable-extensions',
            '--disable-gpu'  // إذا كان GPU غير مطلوب
        ],
        timeout: 29000, // زيادة وقت الانتظار إلى 29 ثانية
        ignoreHTTPSErrors: true, // تجاهل أخطاء SSL
        //userDataDir : auth_userDataDir
        }
    // puppeteer: {
    //     args: ['--no-sandbox', '--disable-setuid-sandbox'],
    //     timeout: 27000, // تعيين مهلة زمنية أطول إذا لزم الأمر
    // }

});

const client2 = new Client({
    authStrategy : new LocalAuth({
        //dataPath: auth_dataPath,        
        clientId: 'client2',
    }),
    session: sessions, // إذا كانت الجلسة موجودة، يتم استخدامها
    puppeteer: {
        headless: true, // تشغيل المتصفح في وضع headless
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        timeout: 29000, // زيادة وقت الانتظار إلى 29 ثانية
        ignoreHTTPSErrors: true, // تجاهل أخطاء SSL
        ////cachePath: cachePath
        }

});

const client3 = new Client({
    authStrategy : new LocalAuth({   
        //dataPath: auth_dataPath,         
        clientId: 'client3',
    }),
    session: sessions, // إذا كانت الجلسة موجودة، يتم استخدامها
    puppeteer: {
        headless: true, // تشغيل المتصفح في وضع headless
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        timeout: 29000, // زيادة وقت الانتظار إلى 29 ثانية
        ignoreHTTPSErrors: true, // تجاهل أخطاء SSL
        ////cachePath: cachePath
    }
});
// Done client
const client = client5;




        
//client.on('qr', (qr) => {
// // client.on('qr', (qr) => {
// //     // Generate and scan this code with your phone
// //     qrcode.generate(qr,{small : true});
// //     console.log('QR RECEIVED', qr);
// // });

client.on('ready', () => {
    console.log('Client is ready!');
});

// client.on('disconnected', (reason) => {
//     console.log('Client was disconnected:', reason);
//     client.initialize(); // إعادة التهيئة تلقائيًا عند الانفصال
// });

// // حفظ الجلسة عند نجاح المصادقة
// client.on('authenticated', (session) => {
//     //sessions = session;
//     console.log(session);
//     fs.writeFile(pathSession, JSON.stringify(session), (err) => {
//         if (err) {
//             console.error('فشل في حفظ بيانات الجلسة:', err);
//         } else {
//             console.log('تم حفظ بيانات الجلسة بنجاح.');
//         }
//     });
// });

// // التعامل مع فقدان الجلسة
// client.on('auth_failure', (msg) => {
//     console.error('فشل المصادقة:', msg);
//     fs.unlinkSync(SESSION_FILE_PATH); // حذف ملف الجلسة إذا فشلت المصادقة
// });

//deleteFolder('.wwebjs_auth/session-client1');


// client.on('disconnected', async(reason) => {
//     console.log('العميل تم فصله بسبب: Client was logged out ', reason);
//     // استدعاء الدالة مع مسار الملف
//     await wait(2000);  
//     client.removeAllListeners(); // إزالة جميع المستمعين للحدث 'qr'
//     await wait(2000);  
//     deleteFolder('.wwebjs_auth/session-client5');
//     await wait(6000);
//     console.log('العميل تم فصله : Client was logged out ');  
//     client.destroy().then(() => client.initialize());
// });

// client.on('disconnected', (reason) => {
//     console.log('Client was logged out', reason);
//     client.destroy();  // تأكد من تدمير العميل بشكل صحيح
// });

client.on('disconnected', async (error) => {
    console.error('An error occurred:', error);
    await client.destroy();  // تأكد من تدمير العميل وإغلاق المتصفح
    process.exit(1);
});

client.on('error', async (error) => {
    console.error('An error occurred:', error);
    await client.destroy();  // تأكد من تدمير العميل وإغلاق المتصفح
    process.exit(1);
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

//client.initialize();



function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// إنشاء أو تحميل عميل WhatsApp
function createClient(id) {
    let client;
    if (sessions[id]) {
        client = new Client({ session: sessions[id] });
    } else {
        client = new Client();
        client.on('qr', qr => {
            console.log(`QR for client ${id}: ${qr}`);
        });
        client.on('authenticated', (session) => {
            sessions[id] = session;
            fs.writeFileSync('session.json', JSON.stringify(sessions));
        });
    }
    
    client.initialize();
    return client;
}

// إنشاء API Token جديد لكل عميل
function generateToken(id) {
    //return jwt.sign({ id }, SECRET_KEY, { expiresIn: '1h' });
    return jwt.sign({ id }, SECRET_KEY);
}

// مثال لإضافة عميل جديد والحصول على رمز API
const addNewClient = async (req, res) => {
    const id = req.params.id;
    const client = createClient(id);
    
    // توليد رمز API للعميل الجديد
    const token = generateToken(id);
    
    res.json({ success: true, token });
};

const sendMedia = async (req,res)=> {
        
    req.setTimeout(10000); // 10000 مللي ثانية (10 ثانية)
    res.setTimeout(22000); // 22000 مللي ثانية (22 ثانية)

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
    
    req.setTimeout(10000); // 10000 مللي ثانية (10 ثانية)
    res.setTimeout(22000); // 22000 مللي ثانية (22 ثانية)
    
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


const test = async (req,res)=> {

    res.setTimeout(35000); // 35000 مللي ثانية (35 ثانية)
        // انتظر لمدة 3 ثواني (3000 مللي ثانية)
        await wait(3000);  
        console.log('3 seconds later...');

    try {

        res.json({status:"true", response: "hello مازن mazen New2 !!!"})

    } catch (error) {
        console.log(error);
        res.status(500).json({status:"false",error:"Error Server"});
    }
    
};


const generateQrCode = async(req,res,next) =>{
    console.log(client.info);

    const id = req.params.id;
    client.removeAllListeners('qr'); // إزالة جميع المستمعين للحدث 'qr'

    //req.setTimeout(10000); // 10000 مللي ثانية (10 ثانية)
    res.setTimeout(35000); // 35000 مللي ثانية (35 ثانية)

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
                //reject(res.json({status:"false",error:"QR event wasn't emitted in 30 seconds."}));
                //return res.json({status:"false",error:"QR event wasn't emitted in 30 seconds."});
                if(!res.headersSent){
                    res.status(301).json({status:"false",error:"QR event wasn't emitted in 30 seconds."});
                    return;
                }
            }, 30000)
        
    });

    ////qrcode.generate(qr,{small : true})
    
    var infClient2 = client.info;
    if(infClient2 !==undefined &&  infClient2 !==null){
        console.log('Client is ready222!');
        if(!res.headersSent){
            res.status(301).json({name : infClient2.pushname , sourcePhone : infClient2.wid.user});
            return;
        }
    }

    // انتظر لمدة 2 ثواني (2000 مللي ثانية)
    await wait(2000);  
    console.log('2 seconds later...');
    console.log(id);


    //console.log(res.headersSent);
    if(!res.headersSent){
        client.initialize();
        res.status(200).json({
            status: true,
            //response: {qr : qr  },
        });
        return;
    }

    if(res.headersSent){
        return;
    }

        //res.write("<img id='img_qr' name='img_qr' src='"+qr+"'/>");
        //res.send(qr);
    } catch (error) {
        console.log(error);
        if(!res.headersSent){
            res.status(500).json({status:"false",error:"Error Server from Generate QrCode"});
            return;
        }   
    }
//         //client.on('qr', async(qr) => {
//    try{ 
//     client.once('qr', async(qr) => {
//         // Generate and scan this code with your phone
//         //qrcode.generate(qr,{small : true})
//         return res.status(200).json({
//                 status: true,
//                 response: {qr : qr  },
//             });
//           //var infClient = client.info;
//         //console.log('QR RECEIVED', qr);
//    });
    
//     client.once('ready', () => {
//         //var infClient = client.info;
//         console.log('Client is ready!');
//         //return res.status(301).json({name : infClient.pushname , sourcePhone : infClient.wid.user});
//     });

//     // client.once('authenticated', (session) => {
//     //     console.log('Authenticated successfully');
//     //     // يمكنك هنا حفظ بيانات الجلسة إذا كنت ترغب في ذلك
//     // });
    
//     // client.once('auth_failure', (message) => {
//     //     console.error('Authentication failed:', message);
//     // });




//     // client.once('disconnected', () => {
//     //     //var infClient = client.info;
//     //     console.log('Client is disconnected!');
//     //     //res.status(302).json({name : client.info.pushname , sourcePhone : client.info.wid.user});
//     // });
    
//     /*client.once('message', msg => {
//         if (msg.body == '!ping') {
//             msg.reply('pong');
//         }
//     });*/

// } catch (error) {
//     console.log(error);
//     res.status(500).json({status:"false",error:"Error Server from Generate QrCode"});
//     return;
// }
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



const generateQrCodeNew = async(req,res,next) =>{
    //console.log(client.info);

    //const id = req.params.id;
    //client.removeAllListeners('qr'); // إزالة جميع المستمعين للحدث 'qr'

    //req.setTimeout(10000); // 10000 مللي ثانية (10 ثانية)
    res.setTimeout(35000); // 35000 مللي ثانية (35 ثانية)

    // // const timeout = 3000; // 30000 مللي ثانية = 30 ثواني
    // // res.setTimeout(timeout, () => {
    // //     console.log('Request has timed out.');
    // //     //res.status(503).send({status:"false",response:'Request timed out.'});
    // //     res.status(200).send({status:"false",response:'Request timed out.'});
    // // });

    // // next();
    try {
        //const client = new Client(...)
    // //     let qr = await new Promise((resolve, reject) => {
    // //         client.once('qr', (qr) => resolve(qr));
    // //         setTimeout(() => {
    // //             //reject(res.json({status:"false",error:"QR event wasn't emitted in 30 seconds."}));
    // //             //return res.json({status:"false",error:"QR event wasn't emitted in 30 seconds."});
    // //             if(!res.headersSent){
    // //                 res.status(301).json({status:"false",error:"QR event wasn't emitted in 30 seconds."});
    // //                 return;
    // //             }
    // //         }, 30000)
        
    // // });

    ////qrcode.generate(qr,{small : true})
    
    // var infClient2 = client.info;
    // if(infClient2 !==undefined &&  infClient2 !==null){
    //     console.log('Client is ready222!');
    //     if(!res.headersSent){
    //         res.status(301).json({name : infClient2.pushname , sourcePhone : infClient2.wid.user});
    //         return;
    //     }
    // }

    // // انتظر لمدة 2 ثواني (2000 مللي ثانية)
    // await wait(2000);  
    // console.log('2 seconds later...');
    // console.log(id);


    // //console.log(res.headersSent);
    // if(!res.headersSent){
    //     //client.initialize();
    //     res.status(200).json({
    //         status: true
    //     });
    //     return;
    // }

    // if(res.headersSent){
    //     return;
    // }

    //     //res.write("<img id='img_qr' name='img_qr' src='"+qr+"'/>");
    //     //res.send(qr);
    // } catch (error) {
    //     console.log(error);
    //     if(!res.headersSent){
    //         res.status(500).json({status:"false",error:"Error Server from Generate QrCode"});
    //         return;
    //     }   
    // }
//         //client.on('qr', async(qr) => {
    //try{ 
    client.once('qr', async(qr) => {
        // Generate and scan this code with your phone
        //qrcode.generate(qr,{small : true})
        try {

        return res.status(200).json({
                status: true,
                response: {qr : qr  },
            });

        } catch (error) {
            console.log(error);
            res.status(500).json({status:"false",error:"Error Server from Generate QrCode New: "+error.message});
            return;
        }
          //var infClient = client.info;
        //console.log('QR RECEIVED', qr);
   });
    
//     client.once('ready', () => {
//         //var infClient = client.info;
//         console.log('Client is ready!');
//         //return res.status(301).json({name : infClient.pushname , sourcePhone : infClient.wid.user});
//     });

//     // client.once('authenticated', (session) => {
//     //     console.log('Authenticated successfully');
//     //     // يمكنك هنا حفظ بيانات الجلسة إذا كنت ترغب في ذلك
//     // });
    
//     // client.once('auth_failure', (message) => {
//     //     console.error('Authentication failed:', message);
//     // });


} catch (error) {
    console.log(error);
    res.status(500).json({status:"false",error:"Error Server from Generate QrCode"});
    return;
}
}


const isClientReady_data = async(req,res,next) =>{
    //console.log(client.info);

    const id = req.params.id || req.body.id;
    //client.removeAllListeners('qr'); // إزالة جميع المستمعين للحدث 'qr'

    //req.setTimeout(10000); // 10000 مللي ثانية (10 ثانية)
    res.setTimeout(45000); // 45000 مللي ثانية (45 ثانية)

    try {
        let client_id = "client_"+id;
        let this_client = new Client({
            authStrategy : new LocalAuth({
                //dataPath: authDir,
                clientId: client_id,
            }),
            puppeteer: {
                //executablePath: chromepath,  // أو مسار Chrome المثبت محليًا
                headless: true, // تشغيل المتصفح في وضع headless
                args: ['--no-sandbox', '--disable-setuid-sandbox',
                    '--disable-dev-shm-usage',  // تقليل استخدام الذاكرة المشتركة
                    '--disable-extensions',
                    '--disable-gpu'  // إذا كان GPU غير مطلوب
                ],
                timeout: 29000, // زيادة وقت الانتظار إلى 29 ثانية
                ignoreHTTPSErrors: true, // تجاهل أخطاء SSL
                //userDataDir : auth_userDataDir
                }
        });

        this_client.initialize();

        // this_client.destroy().then(() => {
        //     console.log('Client has been destroyed and the session is closed.');
        //     this_client.initialize();
        // }).catch((error) => {
        //     console.error('Error while destroying the client:', error);
        //     this_client.initialize();
        // });

        this_client.on('ready', () => {
            let infClient = this_client.info;
            console.log('Client is ready!');
            res.status(200).json({status:"true",response:{name : infClient.pushname , sourcePhone : infClient.wid.user}});
            return;
        });
        this_client.once('auth_failure', () => {
            console.log('Client not ready');
            res.status(200).json({status:"false" , response:"not connected with whatsapp"});
            return;
        });

        
        this_client.once('disconnected', () => {
            console.log('Client not connected');
            res.status(200).json({status:"false" , response:"not connected with whatsapp"});
            return;
        });
        // console.log(client_id);
         await wait(35000);
         if(!res.headersSent){
            if(this_client.info === undefined){
                res.status(200).json({status:"false" , response:"not connected with whatsapp"});
                return;
            }
            else{
                let infClient2 = this_client.info;
                console.log('Client is read2222y!');
                res.status(200).json({status:"infClient2",response:{name : infClient2.pushname , sourcePhone : infClient2.wid.user}});
                return;
            }
         }


    } catch (error) {
        console.log(error);
        res.status(500).json({status:"false",error:"Error Server from isClientReady_data: "+error.message});
        return;
    }
}

    
//     client.once('ready', () => {
//         //var infClient = client.info;
//         console.log('Client is ready!');
//         //return res.status(301).json({name : infClient.pushname , sourcePhone : infClient.wid.user});
//     });

//     // client.once('authenticated', (session) => {
//     //     console.log('Authenticated successfully');
//     //     // يمكنك هنا حفظ بيانات الجلسة إذا كنت ترغب في ذلك
//     // });
    
//     // client.once('auth_failure', (message) => {
//     //     console.error('Authentication failed:', message);
//     // });



module.exports = {sendMedia,sendMessage_text, generateQrCode,test,addNewClient,generateQrCodeNew,isClientReady_data};


