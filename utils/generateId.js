const uuidv4 = require('uuid').v4;


function createID(idprefix, namespace) {
    if(idprefix)
        return idprefix + '-' + uuidv4();
    return uuidv4();
}

function IDGeneratorFactory(_prefix) {
    return function (parentns) {
        return createID(_prefix, parentns);
    };
}

function initIDGenerators(_idmap, _idgen) {
    Object.keys(_idmap).forEach(function (type) {
        exports[type] = _idgen(_idmap[type]);
    });
}


var idmap = {
    User: 'u',
    UserHistory: 'uh',
    Url: '',
    Id: 'url'
};

initIDGenerators(idmap, IDGeneratorFactory);