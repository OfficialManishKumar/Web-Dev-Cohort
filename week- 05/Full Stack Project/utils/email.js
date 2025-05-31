import nodemailer from "nodemailer"

const sendEmail = async (user,url)=>{
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
        subject: "From Manish Saw",
        html: `<p>Please Click on this Link: <a href=${url}>Click Me</a></p>`,
    });

    return info;
}

export default sendEmail;