const nodemailer= require("nodemailer");
const transporter = nodemailer.createTransport({
    host: "",
    auth: {
    user: "",
    pass: "",
    },
    });
const sendOtpEmail=(email,otp)=>{

};
module.exports={
    sendOtpEmail,
}