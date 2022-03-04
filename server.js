const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'dist','Frontend_ConnectedSolutions'));
res.sendFile(path.join(__dirname,'dist','Frontend_ConnectedSolutions','index.html'));
app.listen(process.env.PORT || 8080);