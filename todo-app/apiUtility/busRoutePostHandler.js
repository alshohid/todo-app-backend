
const BusRoute = require("../Schemas/busRouteSchema");
const busRoutePostHandler= async(req,res)=>{
    try {
    const result = await BusRoute.insertMany(req.body);
        res.status(200).json({
                msg:"all Routed data inserted", data:result
        })
    } catch (error) {
    res.status(500).json({
        error:`error occure ${error}`
    })
    }

}
module.exports = busRoutePostHandler;