    const BusRoute = require("../Schemas/busRouteSchema");
    const Bus = require("../Schemas/busSchema");

    const busSearchHandler = async (req, res) => {
    try {
        const { from, to } = req.query;

        const fromRegex = new RegExp(from, "i");
        const toRegex = new RegExp(to, "i");

        const routes = await BusRoute.find({
        $or: [
            { source: fromRegex, destination: toRegex },
            { source: fromRegex, stops: toRegex },
            { stops: fromRegex, destination: toRegex },
            { stops: fromRegex, stops: toRegex },
        ],
        });

        const busQuery = routes.map((route) => ({
        source: route.source,
        destination: route.destination,
        }));

        const buses = await Bus.find({
        $or: busQuery,
        });

        res.status(200).json({ data: buses });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    };

    module.exports = busSearchHandler;
