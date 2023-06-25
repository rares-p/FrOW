import http from "http";
import userRouter from "./routers/userRouter.js";
import db from "./database.js";
import bodyParser from "./utils/bodyParser.js";
import httpStatus from "http-status";
import attemptRouter from "./routers/attemptRouter.js";

const PORT = process.env.PORT || 0;

const server = http.createServer(async (req, res) => {

    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Authorization, Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS, HEAD, POST, GET, DELETE, PUT",
        "Access-Control-Max-Age": 2592000,
    };

    if (req.method === "OPTIONS") {
        res.writeHead(httpStatus.NO_CONTENT, headers);
        res.end();
        return;
    }
    if (req.headers["content-type"] !== "application/json"){
        console.log("Didnt receive json!");
        res.end("Only accepts json");
        return;
    }
    try{
        if (req.method !== "GET" && req.method !== "DELETE")
            req.body = await bodyParser(req);
    }catch (e) {
        res.writeHead(httpStatus.BAD_REQUEST, { "Content-Type": "application/json" });
        console.log(e);
        res.end();
        return;
    }
    await userRouter(req, res);
    await attemptRouter(req, res);

    if (!res.writableEnded) {
        res.writeHead(httpStatus.NOT_FOUND, {"Content-Type": "application/json"});
        res.end(JSON.stringify("The route you are trying to access does not exist!"));
    }
});


server.listen(PORT, () => {
    console.log(`Started server on port ${PORT}`);
});

process.on("SIGTERM", () => {
    console.log(`Received SIGTERM`);
    if (server) {
        server.close();
        db.end();
    }
    process.exit(2);
});
process.on("SIGINT", () => {
    console.log(` Received SIGINT`);
    if (server) {
        server.close();
        db.end();
    }
    process.exit(2);
});
