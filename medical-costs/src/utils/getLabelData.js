const data = require('../data/labels.json')

function getProcedureInfo(procedureCode) {
    const matchingData = data.find(item => item.id === procedureCode);
    return matchingData;
}

module.exports = getProcedureInfo;
