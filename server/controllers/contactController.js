import { sendEmail } from "../email/sendEmail.js";

export const contactController = async (req, res, next) => {
    const { name, email, message } = req.body;

    try {
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        await sendEmail(name, email, message);

        return res.status(200).json({
            success: true,
            message: "Your enquiry has been sent successfully."
        });

    } catch (error) {
        next(error);
    }
};