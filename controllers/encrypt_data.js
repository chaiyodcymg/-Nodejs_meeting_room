const CryptoJS = require("crypto-js");
const encrypt_key = "813c33ee-d292-4060-884e-ec2897401990asd99sd"    //key ในการถอดรหัส 

const encrypt_data =(value)=> {                                                                        
 const encrypted =  CryptoJS.AES.encrypt(value.toString(), encrypt_key).toString()
 const encoded = CryptoJS.enc.Base64.parse(encrypted).toString(CryptoJS.enc.Hex);
 return encoded
}
const decrypt_data =(value)=> {
    const decoded = CryptoJS.enc.Hex.parse(value.toString()).toString(CryptoJS.enc.Base64);
    const decrypted = CryptoJS.AES.decrypt(decoded, encrypt_key).toString(CryptoJS.enc.Utf8); 
    return decrypted
}

module.exports = {
    encrypt_data,
    decrypt_data
}