import { newEnquiry } from "./template.js";

export const sendEmail = async(name, email, message)=>{
    try {
        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: "meshackmakumbane@gmail.com",
            replyTo: email,
            subject: `New Website Enquiry from ${name}`,
            html: newEnquiry(name, email, message),
        });

        console.log("Message sent: %s", info.messageId);
    } catch (err) {
        console.error("Error while sending mail:", err);
    }
}