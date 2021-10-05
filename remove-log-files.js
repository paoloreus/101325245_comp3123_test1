var fs = require('fs');
var path = require('path');

if(fs.existsSync("Logs")){
    fs.readdir("Logs", (err, files) => {
        if(err){
            throw err;
        }

        for(const file of files){
            const filePath = path.join("Logs", file);
            fs.unlink(filePath, err => {
                if(err){
                    throw err;
                }
            });
            console.log(`deleted file ${file}`);
        }

        fs.rmdirSync("Logs");
    })
}

