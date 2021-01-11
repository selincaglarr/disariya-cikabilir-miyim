const express = require('express');
const path = require('path');
const { process } = require('process');
const bodyParser =require('body-parser')
// const cookieParser = require('cookie-parser');
// const lessMiddleware = require('less-middleware');
// const logger = require('morgan')

const indexRouter =require('./routes/index')

//init app
const app = express();

//Load View engine 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// //Home Route
// // app.get('/',function(req,res){
// //     res.render('index',{
// //         title:"Disariya Cikabilir miyimm?"
// //     });

// // });


// app.use(logger('dev'))
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended:false}));
// app.use(validator());
// app.use(cookieParser());
// app.use(lessMiddleware(path.join(__dirname,'public')));
// app.use(express.static(path.join(__dirname,'public')))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Route
app.use('/', indexRouter);
// app.use('/yes')
// app.use('/no')
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
     






//start server
const PORT = process.env.PORT || 5011;

app.listen(PORT , console.log(`Server starting on port ${PORT}`));

// module.exports =app;