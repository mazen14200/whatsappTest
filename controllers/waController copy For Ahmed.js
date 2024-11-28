
const { Client,LocalAuth,MessageMedia } = require('whatsapp-web.js');

const List  = require('./List.js');


const jwt = require('jsonwebtoken');
const fs = require('fs');
const body = require('body-parser');
const querystring = require('querystring');

const path = require('path');
const { removeSession } = require('./session'); // استيراد وظائف الجلسة

  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



var myList = new Array();
var myindixes = new Array();

////------1-----/////
async function setAllsessions_Initializing(id,time){
    
    if(time==="2"){
        console.log("wait 20 seconds");
        await wait(20000);
        //let myid = id.substring(1);
        let myid = id;
        let numId = Number(myid);
        //to remove from List and indexies
        let index_to_remove= myindixes.indexOf(numId);
        myList.splice(index_to_remove, 1);
        myindixes.splice(index_to_remove, 1);
        console.log("i finished waited 20 seconds");
    }
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
        }
});       

this_client.on('ready', async() => {
    console.log('Client is ready!: ',id);
    let clientInfo = this_client.info;
    console.log(clientInfo);
    //let session_data1 = stringify(this_client, null, 2);
    //save_file_Session(session_data1,id);
    get_last_connect_serial(id).then(serial=>{
    insert_connect_New(id,'N',serial).then(result=>{
    update_connect_user_mob(id, clientInfo.pushname, clientInfo.wid.user, clientInfo.platform , clientInfo.isBusiness ,'A').then(result=>{
        console.log("Subscriped is saved in DB Successfully");       
    });
    });});
    });

this_client.on('authenticated', async(session) => {
    console.log("session Saved sucessfully: ",id);
});

// التعامل مع فقدان الجلسة
this_client.on('auth_failure', async(msg) => {
    console.log('فشل المصادقة:', msg);
    removeSession(id);
});

this_client.on('disconnected', (resson) => {
    process.on('uncaughtException', (err) => {
        console.error('An error occurred_1_disconnected:', err);
    });

    console.log('Client disconnected: ',id, resson);
    console.log('Client disconnected: ',id, resson);

    removeSession(id);

    console.log('Client disconnected: ',id, resson);
    

    update_setup_install_by_id_Disconnected(id).then(result=>{
        get_last_connect_serial(id).then(serial=>{
            insert_connect_New(id,'N',serial).then(res=>{
                setAllsessions_Initializing(id,"2");
                console.log("Un Subscriped (Disconnected) is saved in DB Successfully");
            });
        });

    });

});

this_client.on('error', async (error) => {
    console.error('An error occurred_2_error:', error);
});

this_client.initialize();

let myid = id
let numId = Number(myid);
myList.splice(numId, 0, this_client);
myindixes.splice(numId, 0, numId);

//console.log(myList);
console.log(myindixes);
await wait (3000);


}
    
////------2-----/////
getListOfStringsFrom_All_Setup_Ids_DB().then(result =>{
    result.forEach(element => {
        console.log("All Ids of ", element.company_id);

        setAllsessions_Initializing(element.company_id.toString(),"0");
    });
});


////------3-----/////
const addNew_Device = async(req,res) =>{
    const id = req.params.id || req.query.id || req.body.id;
    const company_name = req.params.name ||req.query.name || req.body.name;

    res.setTimeout(40000); // 40000 مللي ثانية (40 ثانية)

    setAllsessions_Initializing(id,"0")
    .then((result)=>{
        insert_company(id,company_name).then((result1)=>{
            get_last_connect_serial(id).then(serial=>{
            insert_connect_New(id ,'N',serial).then(result2=>{

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
        })});
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




function generateQr(client_id){
        
    //let myid = client_id.substring(1);
    let myid = client_id;
    let numId = Number(myid);
    console.log(client_id);
    console.log(myid);
    console.log(numId);
    return new Promise((resolve, reject) => {
        let this_client  ;
        console.log('No session in qr');
        //// this_client = myList[numId - 1];
        this_client = myList[myindixes.indexOf(numId)];
       
        this_client.once('qr', async(qr) => {
        // Generate and scan this code with your phone
        try {
        resolve(qr); 

        } catch (error) {
            console.log(error);
            reject(error); 
        }

   });
});
};

    ////------4-----/////
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
 

////------5-----/////
const isClientReady_data = async(req,res) =>{
    //console.log(client.info);

    const id = req.params.id || req.body.id;
    //client.removeAllListeners('qr'); // إزالة جميع المستمعين للحدث 'qr'

    //req.setTimeout(10000); // 10000 مللي ثانية (10 ثانية)
    res.setTimeout(45000); // 45000 مللي ثانية (45 ثانية)

    //get_connect_Data('4006')
    get_connect_Data(id)
    .then((nresult) => {
        console.log('Product names:', nresult); // طباعة قائمة أسماء المنتجات
        console.log(nresult[0].connect_name); // طباعة قائمة أسماء المنتجات
        console.log(nresult[0].connect_mobile); // طباعة قائمة أسماء المنتجات
        res.json({
            status: true,
            message: 'Data fetched successfully',
            data: {name:nresult[0].connect_name,mobile:nresult[0].connect_mobile,deviceType:nresult[0].connect_deviceType,isBussenis:nresult[0].connect_isBussenis}
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
    


module.exports = {isClientReady_data,generateQrCodeNew2,addNew_Device};


