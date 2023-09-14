const path = require( "path" );
const CopyPlugin = require( "copy-webpack-plugin" );

const scripts = {
    entry: "./src/javascript/scripts.js",
    target: "web",
    output: {
        path: path.resolve( path.join( __dirname, "public", "javascript" ) ),
        filename: "scripts.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [ "@babel/preset-env" ]
                    }
                }
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve( __dirname, "src", "index.html" ),
                    to: path.resolve( __dirname, "public", "index.html" )
                }
            ]
        }),
    ],
}

module.exports = scripts;