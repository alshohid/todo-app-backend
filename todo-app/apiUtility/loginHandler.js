    const User = require("../Schemas/userSchema");
    const generateToken = require("../Utility/generateToken");

    const loginHandler = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
        return res.status(400).json({ msg: "Email is required" });
        }

        const user = await User.findOne({ email });

        if (!user) {
        return res.status(404).json({ msg: "User Not Found" });
        }

        const token = generateToken(user._id, user.email);

        res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
        });


        res.status(200).json({
        msg: "User logged in successfully",
        token,
        });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ error: `Server error: ${error.message}` });
    }
    };

    module.exports = loginHandler;
