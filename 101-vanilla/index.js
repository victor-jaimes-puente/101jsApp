const express = require('express')
const reload = require('reload')
const app = new express();

//serving static files
app.use(express.static('public'));

app.listen(4000,()=>{
    console.log('App listening on port 4000');
    reload(app);
})

