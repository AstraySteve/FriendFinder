var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

var port = 3000; //could use 8080, 5000, these are open ports
var connection;

//middleware use
app.use(cors()); //saves us from having to do access-control-allow-origin
app.use(bodyParser.json());