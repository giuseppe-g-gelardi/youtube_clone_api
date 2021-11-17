const mongoose = require('mongoose');


mongoose
.connect(`{.env db_connect_string}`,
{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB...'))
.catch((err) => console.log(`Could not connect to MongoDB. ERROR: ${err}`));
