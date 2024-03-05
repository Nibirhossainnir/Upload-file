const express = require('express');
const multer = require('multer');
const app = express();
const PORT = process.env.PORT;

app.use(express.static('public'));

//file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const name = Date.now() +"-" + file.originalname;
      cb(null, name)
    }
  })
  
  const upload = multer({ storage: storage });

app.get('/',(req,res)=>{
    res.status(200).sendFile(__dirname+'/index.html');
});

app.post('/', upload.single('image'),(req,res)=>{
    res.status(200).sendFile(__dirname+'/index.html');
});

app.get('/test',(req,res)=>{
    res.status(200).send('testing api');
});

app.listen(PORT,()=>{
});