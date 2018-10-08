const express = require('express');
var bodyParser = require('body-parser');
const server = express();

server.set('PORT', 4028);

var index=require('./routes/index1');

// Static pages which doesn't require Rest API calls. 
server.use(express.static('public'));
server.use(express.static('views'));

var index=require('./routes/index1');

server.listen(server.get('PORT'), () => {
    console.log(`Server is running at http://localhost:${server.get('PORT')} in ${server.get('env')} mode`);
});
server.get('/',(req,res,next) => {
    res.render('form');
res.sendFile('index.html',{root: './views'});
});


server.use('/',index);


/*server.listen(server.get('PORT'), () => {
    console.log(`Server is running at http://localhost:${server.get('PORT')} in ${server.get('env')} mode`);
});*/