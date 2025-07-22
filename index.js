import express from 'express';

//INITIALIZE EXPRESS
const app = express();

//SPECIFY THE PORT
const port = 3000;

//
app.get('/', (req, res) => {
    res.json({ 'message': "this is the body" })
});

app.listen(port, () => {
    console.log('server running at http//localhost:3000')
})
