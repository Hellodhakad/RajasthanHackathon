var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'facultylogin@nituk.ac.in',
        pass: 'nituk1111'
    }
});

module.exports = {
    registermail: function(recemail) {
        var mailOptions = {
            from: '"NITUK Support ✔" <facultylogin@nituk.ac.in>', // sender address
            to: recemail, // list of receivers
            bcc: 'dkdhakad97@gmail.com',
            subject: 'Welcome to NITUK', // Subject line
            text: 'use HTML version to view this mail', // plaintext body
            html: '<p>Hello ' + recemail + ',<br/>Thank you for your registartion on NITUK.</p><p><br/>Regards,<br/>NITUK Support</p>' // html body
        };
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
        });
    },
    forgetmail: function(recemail) {
        var mailOptions = {
            from: '"NITUK Support ✔" <facultylogin@nituk.ac.in>', // sender address
            to: 'dkdhakad97@gmail.com',
            subject: ' NITUK', // Subject line
            text: 'use HTML version to view this mail', // plaintext body
            html: '<p>Hey Dhakad, <br/><br/>I am your khabri & here to let you know that, emailid: ' + recemail + ' is a NITUK faculty.use this link to reset password <a href="{{url}}">link</a> <br/><br/>Thank me later :D Byee<br/><br/>Regards,<br/> Admin@NITUK' // html body
        };
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
        });
    }
}