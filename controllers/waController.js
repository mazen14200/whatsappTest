
const { Client,LocalAuth,MessageMedia } = require('whatsapp-web.js');
//const puppeteer = require('puppeteer');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const path = require('path');
const { saveSession, loadSession, removeSession } = require('./session'); // استيراد وظائف الجلسة

//const qrcode = require('qrcode-terminal');

// تحديد مسار المجلد
//const authDir = path.join(__dirname, '../.wwebjs_auth');
const authDir = path.join(__dirname, '../sessions');
//const cachDir = path.join(__dirname, '../caches');
//const chromepath = path.join(__dirname, '../usr/bin/chromium-browser');
const chromepath = path.join(__dirname, '../chrome/win64-127.0.6533.88/chrome-win64/chrome.exe');
//const fs = require('fs');
//const fs = require('graceful-fs');
//const { promises } = require('dns');
//const sessionData = process.env.WHATSAPP_SESSION ? JSON.parse(process.env.WHATSAPP_SESSION) : null;
//const rimraf = require('rimraf');
//const auth_dataPath =   './.wwebjs_auth' || process.env.WWEBJS_AUTH_PATH;
//const auth_userDataDir =   './.wwebjs_auth'+'/session-'+sid || process.env.WWEBJS_AUTH_PATH +'/session-'+sid;
//const cachePath =  './.wwebjs_cache' || process.env.WWEBJS_CACHE_PATH;


//const {connection ,get_source_Data , update_source_user_mob ,insert_source_user_mob ,insert_source } = require('./dbContext');


// Initiating async function
async function stop(path) {
 
    // Creating and initiating directory's
    // underlying resource handle
    const dir = await fs.promises.opendir(path);
     
    // Asynchronously closing the directory's
    // underlying resource handle
    const promise = dir.close();
   
    // Display the result
    console.log(promise);
  }
   
  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



//const mysql = require('mysql');
//const connection = require('msnodesqlv8');
//const { console } = require('inspector');


// var connectionString = {
//     host: "localhost",
//     //user: "bnanwhats",
//     //password: "Maz@123456en",
//     database: "whats_db"
    
//   };

  
const mssql = require('mssql');
//const { insert_source_user_mob } = require('./dbContext');


const connectionString ='Server=localhost,14333;Database=whats_db;User Id=bnanwhats;Password=Maz@123456en;TrustServerCertificate=True;';
//const connectionString ='Server=localhost,14333;Database=whats_db;User Id=bnanwhats;Password=Maz@123456en;Trusted_Connection=True;TrustServerCertificate=True;';

    async function executeQuery(source_id) {
        return new Promise(async function(resolve, reject){
        try{
            let query1 = "INSERT INTO source (source_id) VALUES ('"+ source_id +"')";
            poolconnection = await mssql.connect(connectionString);
            const request = await poolconnection.request();
            const result = await request.query(query1);
    
            resolve(result.rowsAffected[0]);
            //return result.rowsAffected[0];
        }catch(err){
            console.log('Error in DB connection: ',err);
            reject(err);
        }
        });
      }

    //   executeQuery('4003').then(result=>{
    //     console.log("Affected rowes: ",result," :Rows");
    //   });

    // // //   const results = await executeQuery('4002');
    // // //   console.log("Affected rowes: ",results," :Rows");



    async function insert_setup_installation(company_id,company_name) {
        return new Promise(async function(resolve, reject){
        try{
            let query1 = "INSERT INTO setup_installation (company_id,company_name,company_status) VALUES ('"+ company_id +"',N'" +company_name+"','" +"A"+"')";
            poolconnection = await mssql.connect(connectionString);
            const request = await poolconnection.request();
            const result = await request.query(query1);
            resolve(result.rowsAffected[0]);
            //return result.rowsAffected[0];
        }catch(err){
            console.log('Error in DB connection: ',err);
            reject(err);
        }
        });
      }

      async function getListOfAll_Companies_FromDB() {
        return new Promise(async function(resolve, reject){
        try{
            let query1 = 'SELECT company_id,company_name,company_status FROM setup_installation'; 

            poolconnection = await mssql.connect(connectionString);
            const request = await poolconnection.request();
            const results = await request.query(query1);
            var string=JSON.stringify(results);
            //console.log('>> string: ', string );
            var json =  JSON.parse(string);
            console.log('>> json: ', json);
            resolve(json);
            //resolve(result.rowsAffected[0]);
        }catch(err){
            console.log('Error in DB connection: ',err);
            reject(err);
        }
        });
      }
      
      getListOfAll_Companies_FromDB().then(result=>{
        console.log("Affected rowes: ",result," :Rows");
      });


      async function get_source_spacific_A_N(source_id) {
        return new Promise(async function(resolve, reject){
        try{
            poolconnection = await mssql.connect(connectionString);
            const request = await poolconnection.request();
            let source_status ='A';
            console.log("my id is :",source_id);
            //let currentTime = new Date();
            //let currentTime_login = currentTime.toISOString().slice(0, 19).replace('T', ' ');
            //let query1 = "SELECT * FROM source WHERE source_id = '"+source_id+"' AND source_status ='"+source_status+"'";
            let query1 = "SELECT * FROM source WHERE (( source_id = '"+source_id+"' AND source_status ='"+source_status+"' AND source_Login_Datetime IS NOT NULL) OR ( source_id = '"+source_id+"' AND source_status ='N' AND source_Login_Datetime IS NULL))";
            const results = await request.query(query1);
            //console.log(results.recordsets);
            //console.log(results.recordsets[0]);
            //console.log(results.recordset[0]);
            //console.log(results);
            //console.log(results.recordset[0]);
            if(results.recordset[0] === undefined){
                console.log("get_source_spacific_A_N : NULL")
                resolve("NULL");
            }
            else{
                console.log("get_source_spacific_A_N : ",results.recordset[0])
                resolve(results);
            }
            //resolve(result.rowsAffected[0]);
        }catch(err){
            console.log('Error in DB connection: ',err);
            reject(err);
        }
        });
      }
      
      async function get_source_spacific_A_only(source_id) {
        return new Promise(async function(resolve, reject){
        try{
            poolconnection = await mssql.connect(connectionString);
            const request = await poolconnection.request();
            let source_status ='A';
            console.log("my id is :",source_id);
            //let currentTime = new Date();
            //let currentTime_login = currentTime.toISOString().slice(0, 19).replace('T', ' ');
            //let query1 = "SELECT * FROM source WHERE source_id = '"+source_id+"' AND source_status ='"+source_status+"'";
            let query1 = "SELECT * FROM source WHERE ( source_id = '"+source_id+"' AND source_status ='"+source_status+"' AND source_Login_Datetime IS NOT NULL) ";
            const results = await request.query(query1);
            //console.log(results.recordsets);
            //console.log(results.recordsets[0]);
            //console.log(results.recordset[0]);
            //console.log(results);
            //console.log(results.recordset[0]);
            if(results.recordset[0] === undefined){
                console.log("get_source_spacific_A_only : NULL")
                resolve("NULL");
            }
            else{
                console.log("get_source_spacific_A_only : ",results.recordset[0])
                resolve(results);
            }
            //resolve(result.rowsAffected[0]);
        }catch(err){
            console.log('Error in DB connection: ',err);
            reject(err);
        }
        });
      }

      async function insert_source_New(source_id ,source_status) {
        get_source_spacific_A_N(source_id).then(res=>{
            if(res == "NULL"){
                console.log("i will insert");
                return new Promise(async function(resolve, reject){
                    try{
                        poolconnection = await mssql.connect(connectionString);
                        const request = await poolconnection.request();
                        //let currentTime = new Date();
                        //let currentTime_login = currentTime.toISOString().slice(0, 19).replace('T', ' ');
                        let query1 = "INSERT INTO source (source_id,source_status) VALUES( '"+source_id+"','"+source_status+"')";
                        const results = await request.query(query1);
                        console.log("inserted sucess");
                        resolve(results);
                        //resolve(result.rowsAffected[0]);
                    }catch(err){
                        console.log('Error in DB connection: ',err);
                        reject(err);
                    }
                    });
            }
        }); 
      }




    //   async function insert_source_user_mob(source_id,source_name,source_mobile,source_deviceType ,source_isBussenis ,source_status) {
    //     return new Promise(async function(resolve, reject){
    //     try{
    //         poolconnection = await mssql.connect(connectionString);
    //         const request = await poolconnection.request();
    //         let currentTime = new Date();
    //         let currentTime_login = currentTime.toISOString().slice(0, 19).replace('T', ' ');
    //         let query1 = "INSERT INTO source (source_id,source_name,source_mobile,source_deviceType,source_isBussenis,source_Login_Datetime,source_status) VALUES( '"+source_id+"', N'"+source_name+"' ,'"+source_mobile+"' ,'"+source_deviceType+"' ,'"+source_isBussenis+"' ,'"+currentTime_login+"','"+source_status+"')";
    //         const results = await request.query(query1);
    //         resolve(results);
    //         //resolve(result.rowsAffected[0]);
    //     }catch(err){
    //         console.log('Error in DB connection: ',err);
    //         reject(err);
    //     }
    //     });
    //   }

//     //insert_source_user_mob('4006','mazen مازن عصام','201112847004');
    
    async function update_source_user_mob(source_id,source_name,source_mobile,source_deviceType ,source_isBussenis ,source_status) {
        return new Promise(async function(resolve, reject){
        try{

            poolconnection = await mssql.connect(connectionString);
            const request = await poolconnection.request();
            //let currentTime = new Date();            
            //let currentTime_login = currentTime.toISOString().slice(0, 19).replace('T', ' ');
            let tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
            let local_currentTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
            let currentTime_login = local_currentTime;
            let query1 = "UPDATE source SET source_name = N'"+source_name+"' , source_mobile = '"+source_mobile+"' , source_deviceType = '"+source_deviceType+"' , source_isBussenis = '"+source_isBussenis+"' , source_status = '"+source_status+"' , source_Login_Datetime = '"+currentTime_login+"' WHERE source_id = '"+source_id+"'";
            const results = await request.query(query1);
            resolve(results);
            //resolve(result.rowsAffected[0]);
        }catch(err){
            console.log('Error in DB connection: ',err);
            reject(err);
        }
        });
    }



    async function update_source_by_id_Logout(source_id) {
        return new Promise(async function(resolve, reject){
        try{

            poolconnection = await mssql.connect(connectionString);
            const request = await poolconnection.request();
            //let currentTime = new Date();            
            //let source_LogOut_Datetime = currentTime.toISOString().slice(0, 19).replace('T', ' ');
            let source_status = 'N';
            let tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
            let local_currentTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
            let source_LogOut_Datetime = local_currentTime;
            let query1 = "UPDATE source SET source_status = '"+source_status+"' , source_LogOut_Datetime = '"+source_LogOut_Datetime+"' WHERE source_id = '"+source_id+"'";
            const results = await request.query(query1);
            resolve(results);
            //resolve(result.rowsAffected[0]);
        }catch(err){
            console.log('Error in DB connection: ',err);
            reject(err);
        }
        });
    }


    // async function update_setup_install_by_id_Active(company_id) {
    //     return new Promise(async function(resolve, reject){
    //     try{

    //         poolconnection = await mssql.connect(connectionString);
    //         const request = await poolconnection.request();
    //         let company_status = 'A';
    //         let query1 = "UPDATE setup_installation SET company_status = '"+company_status+"' WHERE company_id = '"+company_id+"'";
    //         const results = await request.query(query1);
    //         resolve(results);
    //         //resolve(result.rowsAffected[0]);
    //     }catch(err){
    //         console.log('Error in DB connection: ',err);
    //         reject(err);
    //     }
    //     });
    // }

    async function update_setup_install_by_id_Disconnected(source_id) {
        return new Promise(async function(resolve, reject){
        try{

            poolconnection = await mssql.connect(connectionString);
            const request = await poolconnection.request();
            let source_status = 'D';
            let tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
            let local_currentTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
            let source_LogOut_Datetime = local_currentTime;
            let query1 = "UPDATE source SET source_status = '"+source_status+"',source_LogOut_Datetime= '"+source_LogOut_Datetime+"' WHERE source_id = '"+source_id+"' AND source_status ='A'";
            const results = await request.query(query1);
            resolve(results);
            //resolve(result.rowsAffected[0]);
        }catch(err){
            console.log('Error in DB connection: ',err);
            reject(err);
        }
        });
    }

    // // async function insert_source_user_mob(source_id,source_name,source_mobile,source_deviceType ,source_isBussenis ,source_status) {
    // //     return new Promise(async function(resolve, reject){
    // //     try{

    // //         poolconnection = await mssql.connect(connectionString);
    // //         const request = await poolconnection.request();
    // //         let currentTime = new Date();
    // //         let currentTime_login = currentTime.toISOString().slice(0, 19).replace('T', ' ');
    // //         let query1 = "UPDATE source SET source_name = '"+source_name+"' , source_mobile = '"+source_mobile+"' , source_deviceType = '"+source_deviceType+"' , source_isBussenis = '"+source_isBussenis+"' , source_status = '"+source_status+"' , source_Login_Datetime = '"+currentTime_login+"' WHERE source_id = '"+source_id+"'";
    // //         const results = await request.query(query1);
    // //         resolve(results);
    // //         //resolve(result.rowsAffected[0]);
    // //     }catch(err){
    // //         console.log('Error in DB connection: ',err);
    // //         reject(err);
    // //     }
    // //     });
    // // }

    async function update_source_disconnected(source_id) {
        return new Promise(async function(resolve, reject){
        try{

            poolconnection = await mssql.connect(connectionString);
            const request = await poolconnection.request();
            //let currentTime = new Date();            
            //let currentTime_out = currentTime.toISOString().slice(0, 19).replace('T', ' ');
            let source_status = 'N';
            let tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
            let local_currentTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
            let currentTime_out = local_currentTime;
            let query1 = "UPDATE source SET source_status = '"+source_status+"' , source_LogOut_Datetime = '"+currentTime_out+"' WHERE source_id =  '"+source_id+"' AND source_LogOut_Datetime IS NULL ";
            const results = await request.query(query1);
            resolve(results);
            //resolve(result.rowsAffected[0]);
        }catch(err){
            console.log('Error in DB connection: ',err);
            reject(err);
        }
        });
    }

    async function get_source_Data(source_id) {
        return new Promise(async function(resolve, reject){
        try{

            poolconnection = await mssql.connect(connectionString);
            const request = await poolconnection.request();
//           let query1 = 'SELECT source_name,source_mobile FROM source where source_id='+"'"+source_id+"' AND source_status ='A' "
            let query1 = "SELECT * FROM source  WHERE source_id = '"+source_id+"' AND source_status ='A'";
            const results = await request.query(query1);
            //var string=JSON.stringify(results);
            //console.log('>> string: ', string );
            //var json =  JSON.parse(string);
            //console.log('>> json: ', json);
            //resolve(json);
            console.log('>> data of ready: ', results.recordset);
            resolve(results.recordset);
            //resolve(result.rowsAffected[0]);
        }catch(err){
            console.log('Error in DB connection: ',err);
            reject(err);
        }
        });
    }
//     //update_source_user_mob('4006','maze','201104','A');

async function getListOfStringsFromSourceDB(source_id) {
    return new Promise(async function(resolve, reject){
    try{

        poolconnection = await mssql.connect(connectionString);
        const request = await poolconnection.request();
        let query1 = 'SELECT source_name FROM source'; 
        const results = await request.query(query1);
        // تحويل النتائج إلى قائمة من السلاسل النصية
        const names = results.map(row => row.source_name);
        resolve(names); // إرجاع قائمة السلاسل النصية       
        //resolve(result.rowsAffected[0]);
    }catch(err){
        console.log('Error in DB connection: ',err);
        reject(err);
    }
    });
}

async function getListOfStringsFrom_Setup_Active_DB() {
    return new Promise(async function(resolve, reject){
    try{

        poolconnection = await mssql.connect(connectionString);
        const request = await poolconnection.request();
        let query1 = "SELECT company_id FROM setup_installation WHERE company_status <> 'N'"; 
        const results = await request.query(query1);
        // تحويل النتائج إلى قائمة من السلاسل النصية
        //const names = results.map(row => row.company_id);
        resolve(results.recordset); // إرجاع قائمة السلاسل النصية       
        //resolve(result.rowsAffected[0]);
    }catch(err){
        console.log('Error in DB connection: ',err);
        reject(err);
    }
    });
}

async function getListOfStringsFrom_Setup_NotSub_DB() {
    return new Promise(async function(resolve, reject){
    try{

        poolconnection = await mssql.connect(connectionString);
        const request = await poolconnection.request();
        let query1 = "SELECT company_id FROM setup_installation WHERE company_status = 'N'"; 
        const results = await request.query(query1);
        // تحويل النتائج إلى قائمة من السلاسل النصية
        //const names = results.map(row => row.company_id);
        resolve(results.recordset); // إرجاع قائمة السلاسل النصية       
        //resolve(results.recordset[0].company_id); // إرجاع قائمة السلاسل النصية       
        //resolve(result.rowsAffected[0]);
    }catch(err){
        console.log('Error in DB connection: ',err);
        reject(err);
    }
    });
}

async function getListOfStringsFrom_All_Setup_Ids_DB() {
    return new Promise(async function(resolve, reject){
    try{

        poolconnection = await mssql.connect(connectionString);
        const request = await poolconnection.request();
        let query1 = "SELECT company_id FROM setup_installation"; 
        const results = await request.query(query1);
        // تحويل النتائج إلى قائمة من السلاسل النصية
        //const names = results.map(row => row.company_id);
        resolve(results.recordset); // إرجاع قائمة السلاسل النصية       
        //resolve(results.recordset[0].company_id); // إرجاع قائمة السلاسل النصية       
        //resolve(result.rowsAffected[0]);
    }catch(err){
        console.log('Error in DB connection: ',err);
        reject(err);
    }
    });
}

getListOfStringsFrom_Setup_Active_DB().then(result =>{
    console.log("All Ids of Setup_Active", result);
});

getListOfStringsFrom_Setup_NotSub_DB().then(result =>{
    console.log("All Ids of Setup_NotSub", result);
});

getListOfStringsFrom_All_Setup_Ids_DB().then(result =>{
    console.log("All Ids of All_Setup_Ids", result);
});
//   function get_source_Data(source_id) {
//       return new Promise((resolve, reject) => {
//           const query = 'SELECT source_name,source_mobile FROM source where source_id='+"'"+source_id+"' AND source_status ='A' "
  
//           connection.query(connectionString,query, (error, results) => {
//               if (error) {
//                   return reject(error); 
//               }
  
//               // تحويل النتائج إلى قائمة من السلاسل النصية
//               //const names = results.map(row => row.source_name);
//               //resolve(names); // إرجاع قائمة السلاسل النصية
//               resolve(results); // إرجاع قائمة السلاسل النصية
//           });
//       });
//   }
  
//   // استخدام الدالة مع then()
//   get_source_Data('4006')
//       .then((nresult) => {
//           console.log('Product names:', nresult); // طباعة قائمة أسماء المنتجات
//           console.log(nresult[0].source_name); // طباعة قائمة أسماء المنتجات
//           console.log(nresult[0].source_mobile); // طباعة قائمة أسماء المنتجات
//       })
//       .catch((error) => {
//           console.log('Error:', error);
//           console.log('No Data as : its not connected'); // طباعة قائمة أسماء المنتجات
//       });



//module.exports ={connection ,get_source_Data , update_source_user_mob ,insert_source_user_mob ,insert_source };





var myList = new Array();
var myindixes = new Array();

async function setAllsessions_Initializing(id){
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

this_client.on('ready', async() => {
    console.log('Client is ready!: ',id);
    let clientInfo = this_client.info;
    console.log(clientInfo);

    insert_source_New(id,'N').then(result=>{
    update_source_user_mob(id, clientInfo.pushname, clientInfo.wid.user, clientInfo.platform , clientInfo.isBusiness ,'A').then(result=>{
        console.log("Subscriped is saved in DB Successfully");       
        //wait(3000);
        //update_setup_install_by_id_Active(id).then(res=>{
        //});
    });
    });
    
    //console.log(this_client.info,this_client.info.platform);
});

this_client.on('authenticated', async(session) => {
    //sessions = session;
    //console.log(session);
    //saveSession(session,id);
    console.log("session Saved sucessfully: ",id);

});

// التعامل مع فقدان الجلسة
this_client.on('auth_failure', async(msg) => {
    console.log('فشل المصادقة:', msg);
    removeSession(id);
    //fs.unlinkSync(SESSION_FILE_PATH); // حذف ملف الجلسة إذا فشلت المصادقة
});

this_client.on('disconnected', (resson) => {
    process.on('uncaughtException', (err) => {
        console.error('An error occurred_1_disconnected:', err);
        //this_client.initialize();  // تأكد من تدمير العميل وإغلاق المتصفح
        //await process.exit(1);
    });
    console.log('Client disconnected: ',id, resson);
    console.log('Client disconnected: ',id, resson);
    console.log('Client disconnected: ',id, resson);

    update_setup_install_by_id_Disconnected(id).then(result=>{
        insert_source_New(id,'N').then(res=>{
            console.log("Un Subscriped (Disconnected) is saved in DB Successfully");
        });
    });
    // Catching error
    //wait (5000);
    // // await wait (3000);
    // // console.log('I waited 3 seconds');
    // // let path_to = './.wwebjs_auth/session-client_'+id.toString()+'/Default';
    // // // // //fs.rmSync(path_to, { recursive: true, force: true });
    // // stop(path_to).catch(console.error);
    // // // // await wait (6000);
    // // // // console.log('I waited 6 seconds');
    //this_client.destroy();  // تأكد من تدمير العميل وإغلاق المتصفح
    // // await wait (11000);
    // // console.log('I waited 11 seconds');
    //setAllsessions_Initializing(id);
    //await this_client.destroy();  // تأكد من تدمير العميل وإغلاق المتصفح
    //removeSession(id);
    //await process.exit(1);
});

this_client.on('error', async (error) => {
    console.error('An error occurred_2_error:', error);
    //this_client.destroy();  // تأكد من تدمير العميل وإغلاق المتصفح
    //removeSession(id);
    //process.exit(1);
});

this_client.initialize();

//myList.push(this_client);
let myid = id.substring(1);
let numId = Number(myid);
myList.splice(numId, 0, this_client);
myindixes.splice(numId, 0, numId);

}

// for(x=4001 ; x<4010 ; x++){
//     setAllsessions_Initializing(x.toString())
// }
    
getListOfStringsFrom_All_Setup_Ids_DB().then(result =>{
    result.forEach(element => {
        console.log("All Ids of ", element.company_id);

        setAllsessions_Initializing(element.company_id.toString())
    });
    //console.log(myList);
    //console.log(myindixes.indexOf(32));
    //console.log(myList[myindixes.indexOf(32)]);
    //console.log("All Ids of All_Setup_Ids", result);
});

// مفتاح سري لتوقيع الـ JWT
const SECRET_KEY = 'your-secret-key';

// تخزين الجلسات
let sessions = {};
//const id = '4005'
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
//setAllsessions_Initializing('4020');
// دالة لحذف ملف
function deleteFile(filePath) {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.log('فشل في حذف الملف:', err);
        } else {
            console.log('تم حذف الملف بنجاح');
        }
    });
}

// دالة لحذف المجلد
function deleteFolder(folderPath) {
    fs.rm(folderPath, { recursive: true, force: true }, err => {
        if (err) {
            console.log('فشل في حذف المجلد:', err);
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

// Done client
const client = client5;




  

// // client.on('disconnected', (reason) => {
// //     console.log('Client was disconnected:', reason);
// //     client.initialize(); // إعادة التهيئة تلقائيًا عند الانفصال
// // });


// // client.on('disconnected', async(reason) => {
// //     console.log('العميل تم فصله بسبب: Client was logged out ', reason);
// //     // استدعاء الدالة مع مسار الملف
// //     await wait(2000);  
// //     client.removeAllListeners(); // إزالة جميع المستمعين للحدث 'qr'
// //     await wait(2000);  
// //     deleteFolder('.wwebjs_auth/session-client5');
// //     await wait(6000);
// //     console.log('العميل تم فصله : Client was logged out ');  
// //     client.destroy().then(() => client.initialize());
// // });

// // client.on('disconnected', (reason) => {
// //     console.log('Client was logged out', reason);
// //     client.destroy();  // تأكد من تدمير العميل بشكل صحيح
// // });


// client.on('error', async (error) => {
//     console.error('An error occurred:', error);
//     await client.destroy();  // تأكد من تدمير العميل وإغلاق المتصفح
//     process.exit(1);
// });

// // client.on('message', msg => {
// //     if (msg.body === '!ping') {
// //         //msg.reply('pong');
// //         client.sendMessage(msg.from ,'pong');
// //     }
// // });

// // الاستماع للرسائل الواردة والرد عليها تلقائيًا
// client.on('message', message => {
//     console.log(`Received message: ${message.body}`);
//     console.log(`Received message ID: ${message.id.id}`);
//     console.log(`Received message From: ${message.from}`);
//     console.log(`Received message To: ${message.to}`);
//     console.log(`Received message time: ${message.timestamp}`);

    
//     // الرد برسالة تلقائية
//     if (message.body.toLowerCase() === 'hello') {
//         message.reply('Hello! How can I assist you today?');
//     } 
//     // else {
//     //     message.reply('This is an automated response.');
//     // }
// });

// client.on('message', message => {
//     if (message.body.toLowerCase().includes('help')) {
//         message.reply('How can I assist you?');
//     } else if (message.body.includes('bye')) {
//         message.reply('Goodbye!');
//     } 
//     // else {
//     //     message.reply('I did not understand your message.');
//     // }
// });





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
    let id = req.query.id || req.body.id;

    phone = phone + "@c.us";
    
    //////////
    // // let sessionData = loadSession(id); // تحميل الجلسة من الملف
    // // //let client_id = "client_"+id;
    // // const this_client = new Client({
    // //     session: sessionData  // تمرير بيانات الجلسة إذا كانت موجودة
    // // });
    let myid = id.substring(1);
    let numId = Number(myid);
    console.log(id);
    console.log(myid);
    console.log(numId);
    
    //// let this_client = myList[numId - 1];
    let this_client = myList[myindixes.indexOf(numId)];
    
     ////////////

    if(apiToken !== Token){
        return res
        .status(401).json({status:"false",error:"This invalid Token"});
    }
        // انتظر لمدة 7 ثواني (7000 مللي ثانية)
        await wait(7000);  
        console.log('7 seconds later...');

    try {
        const result_A = await get_source_spacific_A_only(id);
        if(result_A !== "NULL"){
            const user = await this_client.isRegisteredUser(phone);
            if(user){
                await this_client.sendMessage(phone,message).then((result) => {
                res.json({status:"true", response: {messageId : result.id.id, source : phone ,message:message  }})
            });
            
                
            }else{
                res.json({status:"false", error:"this phone not registed in whatsapp"});
            }
    
            console.log(message);
            console.log(phone);
        }
        else{
            res.json({status:"false", error:"this Company is Disconnected From whatsapp"});
        }
        

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


const isClientReady_data = async(req,res) =>{
    //console.log(client.info);

    const id = req.params.id || req.body.id;
    //client.removeAllListeners('qr'); // إزالة جميع المستمعين للحدث 'qr'

    //req.setTimeout(10000); // 10000 مللي ثانية (10 ثانية)
    res.setTimeout(45000); // 45000 مللي ثانية (45 ثانية)

    //get_source_Data('4006')
    get_source_Data(id)
    .then((nresult) => {
        console.log('Product names:', nresult); // طباعة قائمة أسماء المنتجات
        console.log(nresult[0].source_name); // طباعة قائمة أسماء المنتجات
        console.log(nresult[0].source_mobile); // طباعة قائمة أسماء المنتجات
        res.json({
            status: true,
            message: 'Data fetched successfully',
            data: {name:nresult[0].source_name,mobile:nresult[0].source_mobile,deviceType:nresult[0].source_deviceType,isBussenis:nresult[0].source_isBussenis}
        });
    })
    .catch((error) => {
        //console.error('Error:', error);
        console.log('No Data as : its not connected'); // طباعة قائمة أسماء المنتجات
        res.status(200).json({
            status: false,
            message: 'Error fetching data',
            error: error.message
        });
    });


    };

    function generateQr(client_id){
        
        let myid = client_id.substring(1);
        let numId = Number(myid);
        console.log(client_id);
        console.log(myid);
        console.log(numId);
        return new Promise((resolve, reject) => {
            //let sessionData = loadSession(client_id); // تحميل الجلسة من الملف
            //let client_id = "client_"+id;
            let this_client  ;
            //if(sessionData){
           //     console.log('session existed in qr');
           //     this_client = new Client({
          //          session: sessionData  // تمرير بيانات الجلسة إذا كانت موجودة
          //      });  
           // }
            //else{
                console.log('No session in qr');
                //// this_client = myList[numId - 1];
                this_client = myList[myindixes.indexOf(numId)];
            //}
            // // // this_client.on('ready', async() => {
            // // //     console.log('Client is ready!: ',id);
            // // // });
            
            // // // this_client.on('authenticated', async(session) => {
            // // //     //sessions = session;
            // // //     console.log(session);
            // // //     saveSession(session,id);
            // // //     console.log("session Saved sucessfully: ",id);
            
            // // // });
            
            // // // // التعامل مع فقدان الجلسة
            // // // this_client.on('auth_failure', async(msg) => {
            // // //     console.error('فشل المصادقة:', msg);
            // // //     removeSession(id);
            // // //     //fs.unlinkSync(SESSION_FILE_PATH); // حذف ملف الجلسة إذا فشلت المصادقة
            // // // });
            
            // // // this_client.on('disconnected', async(error) => {
            // // //     console.error('An error occurred:', error);
            // // //     await this_client.destroy();  // تأكد من تدمير العميل وإغلاق المتصفح
            // // //     removeSession(id);
            // // //     process.exit(1);
            // // // });
            
            // // // this_client.on('error', async(error) => {
            // // //     console.error('An error occurred:', error);
            // // //     await this_client.destroy();  // تأكد من تدمير العميل وإغلاق المتصفح
            // // //     //removeSession(id);
            // // //     process.exit(1);
            // // // });

            this_client.once('qr', async(qr) => {
            // Generate and scan this code with your phone
            //qrcode.generate(qr,{small : true})
            try {
    
            // return res.status(200).json({
            //         status: true,
            //         response: {qr : qr  },
            //     });
            resolve(qr); 

    
            } catch (error) {
                console.log(error);
                reject(error); 
                //res.status(500).json({status:"false",error:"Error Server from Generate QrCode New: "+error.message});
                //return;
            }
              //var infClient = client.info;
            //console.log('QR RECEIVED', qr);
       });
    });
    };

    const generateQrCodeNew2 = async(req,res,next) =>{
        //console.log(client.info);
        const id = req.params.id || req.body.id;

        res.setTimeout(40000); // 40000 مللي ثانية (40 ثانية)

        generateQr(id)
        .then((result)=>{
            res.status(200).json({
                status: true,
                message: 'Data fetched successfully',
                response: {qr : result }
        });
        })
        .catch((error) => {
            //console.error('Error:', error);
            console.log('No Qr as : its connected before'); // طباعة قائمة أسماء المنتجات
            res.status(200).json({
                status: false,
                message: 'No Qr as : its connected before',
                error: error.message
            });
        });      
    }

    const addNew_Device = async(req,res) =>{
        //console.log(client.info);
        const id = req.params.id || req.query.id || req.body.id;
        const company_name = req.params.name ||req.query.name || req.body.name;

        res.setTimeout(40000); // 40000 مللي ثانية (40 ثانية)

        setAllsessions_Initializing(id)
        //await wait(7000)
        //insert_source(id);
        .then((result)=>{
            insert_setup_installation(id,company_name).then((result1)=>{
                insert_source_New(id ,'N').then(result2=>{

                res.status(200).json({
                    status: true,
                    response: 'Device succesfully added',
            });
            }).catch((err1)=>{
                res.status(200).json({
                    status: false,
                    response: 'Error : ocured not adedd Device',
                    error: err1.message
                });
            })
          }).catch((err2)=>{
            res.status(200).json({
                status: false,
                response: 'Error : ocured not adedd Device',
                error: err2.message
            });
          })
        })
        .catch((error) => {
            //console.error('Error:', error);
            console.log('Error : ocured not adedd Device'); // طباعة قائمة أسماء المنتجات
            res.status(200).json({
                status: false,
                response: 'Error : ocured not adedd Device',
                error: error.message
            });
        });      
    };
    
// //     try {
// //         let client_id = "client_"+id;
// //         let this_client = new Client({
// //             authStrategy : new LocalAuth({
// //                 dataPath: authDir,
// //                 clientId: client_id,
// //             }),
// //             puppeteer: {
// //                 executablePath: chromepath,  // أو مسار Chrome المثبت محليًا
// //                 headless: true, // تشغيل المتصفح في وضع headless
// //                 args: ['--no-sandbox', '--disable-setuid-sandbox',
// //                     '--disable-dev-shm-usage',  // تقليل استخدام الذاكرة المشتركة
// //                     '--disable-extensions',
// //                     '--disable-gpu'  // إذا كان GPU غير مطلوب
// //                 ],
// //                 timeout: 29000, // زيادة وقت الانتظار إلى 29 ثانية
// //                 ignoreHTTPSErrors: true, // تجاهل أخطاء SSL
// //                 userDataDir : auth_userDataDir
// //                 }
// //         });       

// //         this_client.initialize();

// //         this_client.destroy().then(() => {
// //             console.log('Client has been destroyed and the session is closed.');
// //             this_client.initialize();
// //         }).catch((error) => {
// //             console.error('Error while destroying the client:', error);
// //             this_client.initialize();
// //         });

// //         this_client.on('ready', () => {
// //             let infClient = this_client.info;
// //             console.log('Client is ready!');
// //             res.status(200).json({status:"true",response:{name : infClient.pushname , sourcePhone : infClient.wid.user}});
// //             return;
// //         });
// //         this_client.once('auth_failure', () => {
// //             console.log('Client not ready');
// //             res.status(200).json({status:"false" , response:"not connected with whatsapp"});
// //             return;
// //         });

        
// //         this_client.once('disconnected', () => {
// //             console.log('Client not connected');
// //             res.status(200).json({status:"false" , response:"not connected with whatsapp"});
// //             return;
// //         });
// //         console.log(client_id);
// //          await wait(35000);
// //          if(!res.headersSent){
// //             if(this_client.info === undefined){
// //                 res.status(200).json({status:"false" , response:"not connected with whatsapp"});
// //                 return;
// //             }
// //             else{
// //                 let infClient2 = this_client.info;
// //                 console.log('Client is read2222y!');
// //                 res.status(200).json({status:"infClient2",response:{name : infClient2.pushname , sourcePhone : infClient2.wid.user}});
// //                 return;
// //             }
// //          }


// //     } catch (error) {
// //         console.log(error);
// //         res.status(500).json({status:"false",error:"Error Server from isClientReady_data: "+error.message});
// //         return;
// //     }
// // }

    
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



module.exports = {sendMedia,sendMessage_text, generateQrCode,test,addNewClient,generateQrCodeNew,isClientReady_data,generateQrCodeNew2,addNew_Device};


