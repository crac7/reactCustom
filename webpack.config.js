import wepack from 'webpack';
import htmlWepackPlugin from 'html-webpack-plugin';
import LiveReloadPulgin from 'webpack-livereload-plugin';

export default{
    entry:'./src/client/index.js',
    output:{
        path:'/',
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                use:'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                use:['style-loader','css-loader'],
                test: /\.css$/,
            },
            {
                test: /\.scss$/,
                use:[
                   { 
                       loader:'style-loader'
                   },
                   {
                       loader:'css-loader', options:{
                           sourceMap:true
                       }
                   },
                   {
                       loader:'sass-loader',options:{
                           sourceMap:true
                       }
                   }
                ]
            }

        ]
    },
    plugins:[
        new htmlWepackPlugin({
            template: './src/client/index.html'
        }),
        new LiveReloadPulgin()
    ]
   
}