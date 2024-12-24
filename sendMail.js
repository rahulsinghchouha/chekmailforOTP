const nodemailer = require('nodemailer');

exports.sendMail = async (req, res) => {

    try {
        console.log("new features added");
        const transporter = nodemailer.createTransport({
            host: "smtp.office365.com",
            port: 587,
            secure: false,
            auth: {
                user: 
                pass:
            }

        })
        const mailOptions = {
            from: "noreply@newdaydiagnostics.com", // sender address
            to: "dmylove359@gmail.com", // list of receivers
            subject: "Test Email", // Subject line
            text: "Hello, this is a test email from Office 365!", // plain text body
            html: "<p>Hello, this is a test email from Office 365!</p>", // html body
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log("Error: ", error);
            }
            console.log("Email sent: ", info.response);
        })

    }



    catch (error) {
        return console.log("Catch Error: ", error);
    }

}
