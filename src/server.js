import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';

// initializing packges
const app=express();
app.set('port', process.env.PORT || 3000);//le asgina un puerto por defecto PORT
//middelwares
app.use(webpackDevMiddleware(webpack(webpackConfig)));

//routes
app.get('/',(req,res)=>{
    res.send("hello");
});


app.listen(app.get('port'),()=>{
     console.log('server on port', app.get('port'));
});