import userModel from "../models/userModel.js";

// fetch user details from the database using user's id
// user's id was been fetched from the token
export const getUserData = async (req, res) => {
    try {
        const { userId } = req.user;

        const user = await userModel.findById(userId);

        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        res.json({
            success: true,
            userData: {
                name: user.name,
                isAccountVerified: user.isAccountVerified
            }
        });

    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}