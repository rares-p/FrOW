
export default function bodyParser(req){
    return new Promise((resolve, reject) => {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {
            try {
                const returnBody = JSON.parse(body);
                resolve(returnBody);
            }catch (e){
                console.log(e);
                reject(e);
            }
        });
    });
}
