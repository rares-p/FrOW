import AttemptService from "../services/attemptService.js";
import httpStatus from "http-status";
import AttemptModel from "../models/attemptModel.js";


const AttemptController = {

    createNewAttempt: async (attemptData,  res) => {
        let status;
        try {
            status = await AttemptService.createNewAttempt(attemptData.startDate, attemptData.timeTaken,
                attemptData.maxTime, attemptData.columns, attemptData.rows, attemptData.score, attemptData.difficulty,
                attemptData.username);
        } catch (e){
            res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, { "Content-Type": "application/json" });
            res.end(JSON.stringify({message: "Internal server error!"}));
            return;
        }
        res.writeHead(status, { "Content-Type": "application/json" });
        if (status === httpStatus.CREATED){
            res.end(JSON.stringify({message: "Attempt created!"}));
        }else if (status === httpStatus.BAD_REQUEST){
            res.end(JSON.stringify({message: "Username does not exist!"}));
        }else if (status === httpStatus.INTERNAL_SERVER_ERROR){
            res.end(JSON.stringify({message: "Internal server error!"}));
        }
    },

    getAttemptsByUserid: async (body, res) => {
        let status;
        try {
            status = await AttemptService.getAttemptByUserid(body.username, body.difficulty);
        } catch (e){
            res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, { "Content-Type": "application/json" });
            res.end(JSON.stringify({message: "Internal server error!"}));
            return;
        }

        if (typeof status != "number"){
            res.writeHead(httpStatus.OK, { "Content-Type": "application/json" });
            res.end(JSON.stringify(status));
            return;
        }
        res.writeHead(status, { "Content-Type": "application/json" });
        if (status === httpStatus.CREATED){
            res.end(JSON.stringify({message: "Attempt created!"}));
        }else if (status === httpStatus.INTERNAL_SERVER_ERROR){
            res.end(JSON.stringify({message: "Internal server error!"}));
        }
    },

    getAverageByUserid: async (body, res) => {
        let status;
        try {
            status = await AttemptService.getAverageByUserid(body.username, body.difficulty);
        } catch (e){
            res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, { "Content-Type": "application/json" });
            res.end(JSON.stringify({message: "Internal server error!"}));
            return;
        }
        if (typeof status !== "number"){
            res.writeHead(httpStatus.OK, { "Content-Type": "application/json" });
            res.end(JSON.stringify(status));
            return;
        }
        res.writeHead(status, { "Content-Type": "application/json" });
        if (status === httpStatus.CREATED){
            res.end(JSON.stringify({message: "Attempt created!"}));
        }else if (status === httpStatus.INTERNAL_SERVER_ERROR){
            res.end(JSON.stringify({message: "Internal server error!"}));
        }
    },

    getMaxByDifficulty: async (body, res) => {
        let status;
        try{
            status = await AttemptService.getHighscores(body.page)
        } catch (e) {
            res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, { "Content-Type": "application/json" });
            res.end(JSON.stringify({message: "Internal server error!"}));
            return;
        }

        if (typeof status != "number"){
            res.writeHead(httpStatus.OK, { "Content-Type": "application/json" });
            res.end(JSON.stringify(status));
            return;
        }
        res.writeHead(status, { "Content-Type": "application/json" });
        if (status === httpStatus.CREATED){
            res.end(JSON.stringify({message: "Attempt created!"}));
        }else if (status === httpStatus.INTERNAL_SERVER_ERROR){
            res.end(JSON.stringify({message: "Internal server error!"}));
        }
    }
}

export default AttemptController;
