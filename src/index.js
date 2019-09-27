const express = require('express');
const multer = require('multer')

require('./db/mongoose');

const userRouter = require('./routers/user');
const tasksRouter = require('./routers/tasks');

const app = express();
const port = process.env.PORT;

/******************** upload an image  
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000,
    },
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(doc|docx)$/)){
            return cb(new Error('Please upload a word document'))
        }
        cb(null, true)
        // cb(new Error('File must be a PDF'))
        // cb(undefined, true)
        // cb(undefined, false)
    }
});

app.post('/upload', upload.single('upload'), (req, res) => {
    console.log(req.file)
    res.send();
     
}, (error, req, res, next) => {
    res.status(400).send({
        error: error.message
    })
});

   **********************/

app.use(express.json());
 
app.use(userRouter)
app.use(tasksRouter)

app.listen(port,() => {
     console.log('Server is running on port ' + port);
 });

