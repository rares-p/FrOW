import url from "url";

function getQueryParamAsNumber(receivedUrl, param) {
    return  parseInt(url.parse(receivedUrl, true).query[param]);
}
function getQueryParamAsString(receivedUrl, param) {
    return url.parse(receivedUrl, true).query[param];
}

export {
    getQueryParamAsNumber, getQueryParamAsString
}
