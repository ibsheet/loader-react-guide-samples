import express from 'express';
import cors from 'cors';
const app = express();

// CORS 허용 (개발 중 Angular에서 접근 가능하게 하기 위함)
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 8000;

app.get('/api/data', async (req, res) => {
  const getCount = parseInt(req.query.data || '1000');
  const totalCount = parseInt(req.query.total || '1000');
  const searchMode = req.query.searchMode;

  if (searchMode === '3') {
    // sleep 700ms
    await new Promise(resolve => setTimeout(resolve, 700));
  }

  const company = [ "구글","애플","삼성전자","엘지전자","한화","마이크로소프트","현대","현기차","SK", "롯데" ];
  const country = [ "미국","일본","한국","영국","캐나다","중국","프랑스","브라질","인도","이탈리아" ];

  try {
    const data = [];

    for (let i = 0; i < getCount; i++) {
      const item = {
        sCompany: company[Math.floor(Math.random() * company.length)],
        sCountry: country[Math.floor(Math.random() * country.length)],
        sSaleQuantity: Math.floor(Math.random() * 100000),
        sSaleIncrease: Math.floor(Math.random() * 10000),
        sPrice: Math.floor(Math.random() * 10000000),
        sSatisfaction: Math.floor(Math.random() * (100 - 50 + 1)) + 50
      };
      data.push(item);
    }

    res.status(200).json({
      data,
      Total: totalCount
    });

  } catch (err) {
    res.status(500).json({ Exception: err.toString() });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});