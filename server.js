require('dotenv').config();
const app = require('./server-config.js');

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
    console.log('listening on port', app.get('port'));
  });