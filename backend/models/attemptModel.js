import db from '../database.js';


const AttemptModel = {
    QUERY_TEXT_GET_ATTEMPT_ID_BY_USER_ID:{
        text: "SELECT attemptId FROM attempt_data WHERE userId = $1"
    },
    QUERY_TEXT_CREATE_ATTEMPT: {
        text: "INSERT INTO attempt_data(startDate, timeTaken, maxTime, columns, rows, score, difficulty, userid)" +
            " VALUES($1, $2, $3, $4, $5, $6, $7, $8)"
    },
    QUERY_TEXT_GET_BY_USER_ID: {
        text: "SELECT startDate, timeTaken, maxTime, columns, rows, score FROM attempt_data" +
            " WHERE userid = $1 AND difficulty = $2"
    },
    QUERY_TEXT_GET_AVERAGE: {
        text: "SELECT averagetime, averageboardsize, gamesplayed, averagescore FROM attempt_statistics WHERE userid" +
            " = $1 AND difficulty = $2"
    },
    QUERY_TEXT_GET_MAX_BY_DIFFICULTY: {
      text: "SELECT userid, MAX(score) FROM attempt_data WHERE difficulty=$1 GROUP BY userid;"
    },


    getAttemptIdByUserId: async (userId) => {
        const values = [userId];

        return db.query(AttemptModel.QUERY_TEXT_GET_ATTEMPT_ID_BY_USER_ID, values).then(queryResult => queryResult.rows);
    },
    createNewAttempt(startDate, timeTaken, maxTime, columns, rows, score, difficulty, userId){
        const values = [startDate, timeTaken, maxTime, columns, rows, score, difficulty, userId];

        return db.query(AttemptModel.QUERY_TEXT_CREATE_ATTEMPT, values).then(queryResult => queryResult.rows);
    },
    getAttemptByUserid(userid, difficulty) {
        const values = [userid, difficulty];

        return db.query(AttemptModel.QUERY_TEXT_GET_BY_USER_ID, values).then(queryResult => queryResult.rows);
    },
    getAverageByUserid(userid, difficulty) {
        const values = [userid, difficulty];

        return db.query(AttemptModel.QUERY_TEXT_GET_AVERAGE, values).then(queryResult => queryResult.rows[0]);
    },
    getMaxByDifficulty(difficulty) {
        const values = [difficulty];

        return db.query(AttemptModel.QUERY_TEXT_GET_MAX_BY_DIFFICULTY, values).then(queryResult => queryResult.rows);
    }
}

export default AttemptModel;