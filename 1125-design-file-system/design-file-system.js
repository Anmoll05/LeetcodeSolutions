
var FileSystem = function() {
    this.directory = {};
};

/** 
 * @param {string} path 
 * @param {number} value
 * @return {boolean}
 */
FileSystem.prototype.createPath = function(path, value) {
    const pathArr = path.split("/");
    const validLength = pathArr.length - 1;
    let obj = this.directory;
    for (let i = 1; i < pathArr.length; i++) {
        if(!(obj[pathArr[i]])) {
            if (i < (validLength)) {
                return false;
            }
            obj[pathArr[i]] = {}
        }
        obj = obj[pathArr[i]];
    }
    if(obj['value']) return false;
    obj['value'] = value;
    //console.log(this.directory)
    return true;
};

/** 
 * @param {string} path
 * @return {number}
 */
FileSystem.prototype.get = function(path) {
    const pathArr = path.split("/");
    let obj = this.directory;
    for ( let i = 1; i < pathArr.length; i++) {
        if(!(obj[pathArr[i]])) {
            return -1;
        } else {
            obj = obj[pathArr[i]]
        }
    }
    return obj.value;
};

/** 
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.createPath(path,value)
 * var param_2 = obj.get(path)
 */