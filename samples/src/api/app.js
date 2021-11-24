const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

// module.exports 를 리턴
const { datas } = require('./data.js');

app.use(cors());
app.get('/api/data', (req, res) => {
	res.json(datas);
});

app.listen(PORT, () => console.log(`express server ${ PORT }`));
