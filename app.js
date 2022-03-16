const express = require('express');
const app = express();

app.listen(process.env.PORT || 3033, ()=>{
    console.log('Server running!');
})