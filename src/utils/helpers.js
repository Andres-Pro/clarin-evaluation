

export function isIncognito(callback){
    var fs = window.RequestFileSystem || window.webkitRequestFileSystem;

    if (!fs) {
        callback(false);
    } else {
        fs(window.TEMPORARY,
            100,
            callback.bind(undefined, false),
            callback.bind(undefined, true)
        );
    }
}