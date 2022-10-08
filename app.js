// Import Express and set up the app
const express = require('express');
const app = express();

/*
* Route Handlers
*/

const routes = require('./routes');
const errorHandlers = require('./errorHandlers')

app.use(routes);
app.use(errorHandlers.error404);
app.use(errorHandlers.globalError);

// Turn on Express server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});