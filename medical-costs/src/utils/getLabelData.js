const data = require('../data/labels.json')

function getProcedureInfo(procedureCode) {
    console.log("procedureCode", procedureCode)
    const matchingData = data.find(item => item.id === procedureCode);
    if (matchingData) {
        console.log("matchingData", matchingData)
        return matchingData;
    }
}

module.exports = getProcedureInfo;
