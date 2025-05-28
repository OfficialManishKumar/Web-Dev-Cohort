import nodemailer from "nodemailer"

const sendEmail = async (user,token)=>{
    const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: process.env.MAILTRAP_PORT,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.MAILTRAP_USER,
            pass: process.env.MAILTRAP_PASSWORD,
        },
    });

    const info = await transporter.sendMail({
        from: process.env.MAILTRAP_SENDERMAIL,
        to: user.email,
        subject: "Verify Your Email",
        text: `Please Click on this Link to Verify: ${process.env.BASE_URL}/user/register/verify/${token}`,
        html: `<p>Please Click on this Link to Verify: <a href="${process.env.BASE_URL}/user/verify/${token}">Verify Email</a></p>`,
    });

    return info;
}

export default sendEmail;