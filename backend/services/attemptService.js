import AttemptModel from "../models/attemptModel.js";
import httpStatus from "http-status";
import UserModel from "../models/userModel.js";


const AttemptService = {
    highscores: null,
    isChanged: true,

    createNewAttempt: async function (startDate, timeTaken, maxTime, columns, rows, score, difficulty, username) {
        let isUsernameTaken;
        try {
            isUsernameTaken = await UserModel.checkIfUsernameExists(username)
        } catch (e) {
            console.log("Error when checking if username exists!");
            return httpStatus.INTERNAL_SERVER_ERROR;
        }
        if (!isUsernameTaken)
            return httpStatus.BAD_REQUEST;

        try {
            const userId = await UserModel.getUserIdByUsername(username);
            const result = await AttemptModel.createNewAttempt(startDate, timeTaken, maxTime, columns, rows, score, difficulty, userId);
            this.isChanged = true;
        } catch (e) {
            console.log(e);
            return httpStatus.INTERNAL_SERVER_ERROR;
        }

        return httpStatus.CREATED;
    },
    getAttemptByUserid: async function (username, difficulty) {
        try {
            const userId = await UserModel.getUserIdByUsername(username);
            const result = await AttemptModel.getAttemptByUserid(userId, difficulty);

            return result;
        } catch (e) {
            console.log(e);
            return httpStatus.INTERNAL_SERVER_ERROR;
        }
    },
    getAverageByUserid: async function (username, difficulty) {
        try {
            const userId = await UserModel.getUserIdByUsername(username);
            const result = await AttemptModel.getAverageByUserid(userId, difficulty);

            return result;
        } catch (e) {
            console.log(e);
            return httpStatus.INTERNAL_SERVER_ERROR;
        }
    },
    fillMaxScores: async function (values, scores, difficulty) {
        if (scores === undefined)
            return;
        for (const value of values) {
            const index = scores.findIndex(element => element.userid === value.userid);
            if (index === -1) {
                scores.push({
                    userid: value.userid,
                    max: value.max * difficulty
                })
            } else {
                scores[index].max += value.max * difficulty;
            }
        }
    },
    getHighscores: async function (page) {
        const pageStart = (page - 1) * 5;
        if (!this.isChanged)
            return (this.highscores.slice(pageStart, (pageStart + 5) < this.highscores.length ? pageStart + 5 : this.highscores.length));
        try {
            const difficultyOneScores = await AttemptModel.getMaxByDifficulty(1);
            const difficultyTwoScores = await AttemptModel.getMaxByDifficulty(2);
            const difficultyThreeScores = await AttemptModel.getMaxByDifficulty(3);
            const difficultyFourScores = await AttemptModel.getMaxByDifficulty(4);
            let tempScores = [];
            await this.fillMaxScores(difficultyOneScores, tempScores, 1);
            await this.fillMaxScores(difficultyTwoScores, tempScores, 2);
            await this.fillMaxScores(difficultyThreeScores, tempScores, 3);
            await this.fillMaxScores(difficultyFourScores, tempScores, 4);

            tempScores = await Promise.all(tempScores.map(async element => {
                const username = await UserModel.getUsernameByUserId(element.userid);

                return {
                    username: username,
                    highscore: element.max / 4
                }
            }));

            tempScores.sort((first, second) => second.highscore - first.highscore);
            this.highscores = tempScores;
            this.isChanged = false;

            return (tempScores.slice(pageStart, (pageStart + 5) < tempScores.length ? pageStart + 5 : tempScores.length));
        } catch (e) {
            console.log(e);
            return httpStatus.INTERNAL_SERVER_ERROR;
        }
    },


}

export default AttemptService;
