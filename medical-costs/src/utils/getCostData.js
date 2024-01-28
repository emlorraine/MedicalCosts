const data = require('../data/costs.json')

function getCostData(stateCode, procedureCode) {
    const matchingData = data.find(item => item.geo_level === stateCode && item.id === procedureCode);
    return matchingData;
}

module.exports = getCostData;
