const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'dist','frontend-connected-solutions'));
res.sendFile(path.join(__dirname,'dist','frontend-connected-solutions','index.html'));
app.listen(process.env.PORT || 8080);