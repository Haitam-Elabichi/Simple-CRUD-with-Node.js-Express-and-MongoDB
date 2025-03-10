const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            
        },
        password: {
            type: String,
           
        }
    },
    // ✅ يحتفظ بالتوقيتات عند إنشاء أو تحديث الوثيقة
);

// استخدام اسم الموديل بصيغة المفرد مع حرف كبير
const collectionUsers = mongoose.model("users", LoginSchema);
console.log('login add succes')

module.exports = {collectionUsers};
