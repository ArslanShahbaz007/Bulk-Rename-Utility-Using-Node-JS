const fs = require("fs");
replaceThis = "b"
replacewith = "a"
try{

    fs.readdir("data",(err,data)=>{
        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            let newFile="data/"+item.replaceAll(replaceThis,replacewith);
            fs.rename("data/" + item, newFile, ()=>{
                console.log("Rename Success");
            })   
            
        }
    })
}
catch(err)
{
console.log(err);
}

