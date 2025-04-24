const  Bus = require("../Schemas/busSchema")
const bustGetHandler= async(req,res)=>{
    try {
    const result= await Bus.find({})
        res.status(200).json({
                msg:"all bus data ", data:result
        })
    } catch (error) {
    res.status(500).json({
        error:`error occure ${error}`
    })
    }

}
module.exports = bustGetHandler;