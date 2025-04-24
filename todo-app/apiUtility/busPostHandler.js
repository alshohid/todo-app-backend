const  Bus = require("../Schemas/busSchema")
const busPostHandler= async(req,res)=>{
    try {
    const result= await Bus.insertMany(req.body)
        res.status(200).json({
                msg:"all data inserted", data:result
        })
    } catch (error) {
    res.status(500).json({
        error:`error occure ${error}`
    })
    }

}
module.exports = busPostHandler;