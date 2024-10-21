const fs = require('fs');

const path2 = require('path');

//const sessionFile = '../sessions_saved/session.json'; // مكان تخزين الجلسة

// وظيفة لحفظ الجلسة إلى ملف
function saveSession(session,id) {
    let sessionFile = '../sessions_saved/session_'+id+'.json'; // مكان تخزين الجلسة
    fs.writeFileSync(sessionFile, JSON.stringify(session));
    //fs.writeFileSync(sessionFile, session);
}

// وظيفة لتحميل الجلسة من ملف
function loadSession(id) {
    let sessionFile = '../sessions_saved/session_'+id+'.json'; // مكان تخزين الجلسة
    if (fs.existsSync(sessionFile)) {
        const sessionData = fs.readFileSync(sessionFile);
        return JSON.parse(sessionData);
        //return sessionData;
    }
    return null;
}

function wait2(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function removeSession(id) {
    console.log("wait 13 seconds");
    await wait2(13000);
    console.log("finished waited 13 seconds");
    //let sessionFile = '../sessions_saved/session_'+id+'.json'; // مكان تخزين الجلسة
    //let sessionFile = '../.wwebjs_auth/session-client_'+id; // مكان تخزين الجلسة
    let sessionFile = path2.join(__dirname, '../.wwebjs_auth/session-client_'+id);
        //if (sessionFile) {
        console.log(sessionFile);
        await fs.promises.rm(sessionFile, { recursive: true, force: true })
            .catch((e) => {
                throw new Error(e);
            });
        console.log("I Deleted Folder session succesfully");
    //}
    //fs.unlinkSync(sessionFile); // حذف ملف الجلسة إذا فشلت المصادقة
}

module.exports = { saveSession, loadSession,removeSession };


