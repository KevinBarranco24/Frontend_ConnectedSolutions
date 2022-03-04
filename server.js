const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/Frontend_ConnectedSolutions'));
app.get('/*', function(req,res) 
{
    res.sendFile(path.join(__dirname+'/dist/Frontend_ConnectedSolutions/index.html'));
});
app.listen(process.env.PORT || 8080);