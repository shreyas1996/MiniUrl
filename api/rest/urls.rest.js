var serviceHandler = require('../serviceHandler.js').serviceHandler;
var urlService = require('../services/UrlService.js').getInst();
var logger = require('../../loggers/index.js').accessLogger;

module.exports.init = function(app) {
    app.get('/:id', function (req, res) {
        let p = urlService.getUrl(req.user, req.params.id)
        return serviceHandler(req, res, p)
    })
    app.post('/url', function(req, res) {
        logger.info(req.user+',SEARCH,'+req.body);
        let p = urlService.setUrl(req.user, req.body)
        return serviceHandler(req, res, p)
    });

};