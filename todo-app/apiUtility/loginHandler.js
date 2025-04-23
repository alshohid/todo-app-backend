    const User = require("../Schemas/userSchema");
    const loginHandler = async (req, res) => {
    try {
        const userdata = req.body;
        const { email, password } = userdata;
        const user = await User.find({ email: email, password: password });
        if (user.length === 0) {
        res.status(404).json({ msg: "User Not Found" });
        } else {
        res.status(200).json({
            msg: "user found",
            data: user,
        });
        }
    } catch (error) {
        res.status(500).json({
        error: `error occure ${error}`,
        });
    }
    };
    module.exports = loginHandler;
