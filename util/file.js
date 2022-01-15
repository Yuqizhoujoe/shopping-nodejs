const fs = require('fs');

exports.deleteFile = (filePath) => {
    // delete the file at this path
    fs.unlink(filePath, (err) => {
        if (err) {
            throw (err);
        }
    });
}
