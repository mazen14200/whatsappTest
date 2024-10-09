const fs = require('fs');
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

function removeSession(id) {
    let sessionFile = '../sessions_saved/session_'+id+'.json'; // مكان تخزين الجلسة
    fs.unlinkSync(sessionFile); // حذف ملف الجلسة إذا فشلت المصادقة
}

module.exports = { saveSession, loadSession,removeSession };