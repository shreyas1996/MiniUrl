'use strict';
const BaseService = require('./BaseService.js');
const Promise = require('bluebird')
const Model = appGlobals.dbModels;
const _ = require("lodash")
const rp = require('request-promise')
const cipherService = require("../../services/aesCypher.js")
function UrlService() {
    BaseService.call(this);
}

UrlService.prototype.getUrl = async function(user, urlId) {
    let urlModel = Model.getModel("urls");
    return urlModel.findOne({urlId: urlId}).then(data => {
        if(!data)
            return Promise.reject({
                message: "Url not found",
                customCode: 404
            })
        return {
            originalUrl: data.originalUrl,
            redirect: true
        }
    })
    
}

UrlService.prototype.setUrl = async function (user, body) {
    let urlModel = Model.getModel("urls");
    let originalUrl = body.url;
    return urlModel.create({
        originalUrl: originalUrl
    }).then(data => {
        return {
            originalUrl: originalUrl,
            miniUrl: '/' + data.urlId
        }
    })

}

module.exports = {
    getInst: function () {
        return new UrlService();
    }
};