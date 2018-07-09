const SendOtp = require('sendotp');
const sendOtp = new SendOtp('161409AHGt40y9y594ceb76');

// sendOtp.send(7877383873,"Signup", function(err,res){
//     if(err){
//         console.log("error while sending otp");
//     }
//     console.log(res);
// }); 
//sendOtp.retry(contactNumber, retryVoice, callback);
//sendOtp.verify(contactNumber, otpToVerify, callback);