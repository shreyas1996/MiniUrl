var BaseModel = require('./BaseModel');
const Promise = require("bluebird")

const path = require('path');
const filename = path.basename(__filename);
// console.log("filename", filename);
const modelName = filename.split(".")[0];
console.log("modelName", modelName);
class UrlsModel extends BaseModel {

    constructor(dbMgr, options) {
        super(modelName, dbMgr, options);
    }

    create(msgObj) {
        msgObj._id = this.utils.Id();
        msgObj.urlId = this.utils.Url();
        return this.model.create(msgObj)
    }
}

module.exports = UrlsModel;