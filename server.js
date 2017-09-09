require('dotenv').config();
const app = require('./server-config.js');




port = process.env.PORT;

app.listen(port, function(){
    console.log('listening on port ' + port);
})