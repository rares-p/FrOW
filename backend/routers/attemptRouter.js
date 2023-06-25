import AttemptController from "../controllers/attemptController.js";
import httpStatus from "http-status";
import {verifyToken} from "../middlewares/jwtAuth.js";
import url from "url";
import {getQueryParamAsNumber} from "../validators/querry.js";


const attemptRouter = async (req, res) => {
    if (res.writableEnded)
        return;
    const body = req.body ?? {};

    if (req.method === "GET"){
        if (req.url.startsWith("/attempt")) {
            const username = await verifyToken(req, res);
            if (username === false){
                console.log("TOKEN VALIDATION FAILED");
                return;
            }
            body.username = username;

            const difficulty = getQueryParamAsNumber(req.url, "difficulty");
            if (![1,2,3,4].includes(difficulty)) {
                res.writeHead(httpStatus.BAD_REQUEST, {"Content-Type": "application/json"});
                res.end(JSON.stringify({message: "Wrong request query"}));
                return;
            }
            body.difficulty = difficulty;

            await AttemptController.getAttemptsByUserid(body, res);
        } else if (req.url.startsWith("/average")){
            const username = await verifyToken(req, res);
            if (username === false){
                console.log("TOKEN VALIDATION FAILED");
                return;
            }
            body.username = username;

            const difficulty = getQueryParamAsNumber(req.url, "difficulty");
            if (![1,2,3,4].includes(difficulty)) {
                res.writeHead(httpStatus.BAD_REQUEST, {"Content-Type": "application/json"});
                res.end(JSON.stringify({message: "Wrong request query"}));
                return;
            }
            body.difficulty = difficulty;

            await AttemptController.getAverageByUserid(body, res);
        } else if (req.url.startsWith("/highscores")){
            const page = getQueryParamAsNumber(req.url, "page");
            if(page === undefined || page < 1){
                res.writeHead(httpStatus.BAD_REQUEST, {"Content-Type": "application/json"});
                res.end(JSON.stringify({message: "Wrong request query"}));
                return;
            }
            body.page = page;

            await AttemptController.getMaxByDifficulty(body, res);
        }
    }
    else if (req.method === "POST") {
        if (req.url === "/attempt") {
            const username = await verifyToken(req, res);
            if (username === false){
                console.log("TOKEN VALIDATION FAILED");
                return;
            }
            body.username = username;

            if (body.startDate === undefined || body.timeTaken === undefined || body.maxTime === undefined ||
                body.columns === undefined || body.rows === undefined || body.score === undefined ||
                body.difficulty === undefined) {
                res.writeHead(httpStatus.BAD_REQUEST, {"Content-Type": "application/json"});
                res.end(JSON.stringify({message: "Wrong request body"}));

                return;
            }

            await AttemptController.createNewAttempt(body, res);
        }
    }
}

export default attemptRouter;