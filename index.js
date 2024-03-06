const express = require('express');
var path = require('path')
const multer = require('multer');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

//file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploaded file/')
    },
    filename: function (req, file, cb) {
      const name = Date.now() +"-" + file.originalname;
      cb(null, name)
    }
  })
  
  const upload = multer({ storage: storage });

app.get('/',(req,res)=>{
    res.status(200).sendFile(__dirname+'/index.html');
    console.log(req.url);
});

app.post('/', upload.single('image'),(req,res)=>{
    res.status(200).sendFile(__dirname+'/index.html');
});

app.get('/test',(req,res)=>{
    res.status(200).send('testing api');
});

app.listen(PORT,()=>{
});