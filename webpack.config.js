const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // Usa 'production' per la build finale ottimizzata
    entry: './assets/js/main.js', // Il tuo punto di ingresso principale
    output: {
        filename: 'bundle.js', // Nome del file JavaScript compilato
        path: path.resolve(__dirname, 'dist'), // Directory di output per i file compilati
        clean: true, // Pulisce la directory 'dist' prima di ogni nuova build
        publicPath: '/', // Assicura che i percorsi degli asset siano corretti
    },
    module: {
        rules: [
            {
                test: /\.less$/, // Regola per i file .less
                use: [
                    'style-loader',   // 3. Inietta il CSS nel DOM
                    'css-loader',     // 2. Interpreta @import e url()
                    'less-loader'     // 1. Compila LESS in CSS
                ],
            },
            {
                test: /\.css$/, // Regola per i file .css (se hai ancora CSS puro o esterni)
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/i, // Regola per immagini e favicon
                type: 'asset/resource', // Utilizza i moduli asset di Webpack 5+
                generator: {
                    filename: 'assets/img/[name][ext]' // Mantieni la struttura delle directory
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i, // Regola per i font
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]'
                }
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // Il tuo file HTML di partenza
            filename: 'index.html',   // Nome del file HTML di output nella 'dist'
            inject: 'body',           // Inietta lo script bundle nel body
            favicon: './assets/img/favicon.ico' // Specifica il percorso del favicon
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Serve i file dalla directory 'dist'
        },
        compress: true,
        port: 8080,
        open: true, // Apre automaticamente il browser all'avvio
        historyApiFallback: true, // Importante per SPA, gestisce il routing client-side
    },
};