import jwt from "jsonwebtoken";

// This fucntion retrieves the 'token' from 'cookie'
// then retrieves the 'id' from the 'token'
// then sets the 'userId' in the 'req.body'  
const userAuth = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.json({ success: false, message: "Not Authorized, LogIn Again" });
    }

    try {

        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)

        if (tokenDecode.id) {
            req.user = { userId: tokenDecode.id };
        } else {
            return res.json({ success: false, message: "Not Authorized, LogIn Again" });
        }

        next();

    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}

export default userAuth;