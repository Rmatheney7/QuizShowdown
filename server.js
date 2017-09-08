require('dotenv').config();
const app = require('./server-config.js');




port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log('listening on port ' + port);
})