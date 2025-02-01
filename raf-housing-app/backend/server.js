const express = require('express');
const cors = require('cors');
const { default: RafRamenMenu } = require('../frontend/src/components/RafRamenMenu.vue');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/ping', (req, res) => {
    res.json({ message: 'OK' })
});

app.get('/api/leaderboard-summary',(req, res) => {
    const summaryData= [
        {player: 'Reid',score: 120},
        {player: 'Simone',score:200},
        {player: 'Spencer', score: -2}
    ]
    res.json(summaryData)
});

app.get('/api/rammen-menu',(req,res)=>{
    const RafRamenMenu = [
        {name: 'Miso', price: 5.99},
        {name: 'Shio', price: 6.99},
        {name: 'Tonkatsu', price: 7.99},
    ]
    res.json(RafRamenMenu)
});

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
});

app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});