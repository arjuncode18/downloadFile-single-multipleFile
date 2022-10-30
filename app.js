const express=require("express")
const app=express();

const zip=require("express-zip");

const folderPath=__dirname+'/File';

app.get("/single",function(req,res){
    console.log("single file");

res.download(folderPath+'/doubt.txt',function(err){
    if(err){
        console.log(err);
    }
})
})

app.get('/multiple',function(req,res){
    console.log("multiplle file download")

    res.zip([
        {path:folderPath+'/list.txt',name:'oneFile.txt' },
        {path:folderPath+'/reactlist.txt',name:'twoFile.txt' }
    ])
})


app.get("/",function(req,res){
    res.sendFile(__dirname+'/index.html');
})

app.listen(3000,function(req,res){
    console.log('Server started to listen at 3000');
})
