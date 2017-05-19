const express = require('express');
const debug = require('debug')('app:server');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../config/webpack.config');
const project = require('../config/project.config');
const compress = require('compression');
const fs = require('fs');

const app = express();

import React from 'react';
import { Provider } from 'react-redux'
import {renderToString} from 'react-dom/server';
import Home from '../src/pages/Home/components/HomeView'
import configureStore from '../src/store/createStore'

// Apply gzip compression
app.use(compress());

if (project.env === 'development') {
	const compiler = webpack(webpackConfig);

	debug('Enabling webpack dev and HMR middleware');
	app.use(require('webpack-dev-middleware')(compiler, {
		publicPath  : webpackConfig.output.publicPath,
		contentBase : project.paths.client(),
		hot         : true,
		quiet       : project.compiler_quiet,
		noInfo      : project.compiler_quiet,
		lazy        : false,
		stats       : project.compiler_stats
	}));
	app.use(require('webpack-hot-middleware')(compiler, {
		path: '/__webpack_hmr'
	}));

	app.use(express.static(project.paths.public()));
	app.get('/get-data', function(req, res){
		fetchData('./server/items.json',function(err){
			throw err;
		}, function(response){
			res.write(response);
			res.end();
		})
	});
	app.use(handleRender)

	function fetchData(path,error, response){
		fs.readFile(path,'utf-8', function(err, data){
			if(err) error(err);
			response(data);
		});
	}

	function handleRender(req, res){
		fetchData('./server/items.json',(err) => console.log(err), function (response){
			const iniObj = {
				productData:{
					"fetchInit":false,
					"fetchSuccess":true,
					"fetchFailed":false,
					"data":JSON.parse(response)
				}
			}
			const store = configureStore(iniObj);
			const html = renderToString(
			<Provider store={store}>
				<Home />
			</Provider>
			)
			const finalState = store.getState();
			renderPage(html,finalState,res);
		})
	}

	function renderPage(html, state, res){
		fetchData('./webpack-assets.json',function(err){
			throw err;
		}, function(response){
				res.send(`
		<!doctype html>
			<html lang="en">
			<head>
			<title>My Retail</title>
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<link href="https://fonts.googleapis.com/css?family=Roboto:300,400" rel="stylesheet">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<link rel="stylesheet" type="text/css" href="slick.min.css" />
			<link rel="stylesheet" type="text/css" href="slick-theme.min.css" />
			<link rel="stylesheet" type="text/css" href="style.css">
			</head>
			<body>
			<div id="root" style="height: 100%">${html}</div>
			 <script>
          		window.__PRELOADED_STATE__ = ${JSON.stringify(state).replace(/</g, '\\x3c')}
        	</script>
			<script src="${JSON.parse(response).app.js}"></script>
			<script src="${JSON.parse(response).app.js}"></script>
			</body>
		</html>
		`)
		})
	}
} else {
	debug(
   'Production mode'
  );
	//app.use(express.static(project.paths.dist()));
}

app.listen(project.server_port)
debug(`Server is now running at http://localhost:${project.server_port}.`)

module.exports = app;
