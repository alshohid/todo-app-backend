const User= require('../Schemas/userSchema')
const registrationHandler =async (req, res) => {
        const newUser = new User(req.body)
    try {
        await newUser.save();
        res.status(200).json({
            message:"user Registration successfully"
        })

    } catch (error) {
        res.status(500).json({
            error:`error occure ${error}`
        })
    }
    }
module.exports = registrationHandler