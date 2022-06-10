module.exports = {
	info: {
		data: [],
		selectData: count => {
			const loaddata = [];
			const company = [
				'Google',
				'Apple',
				'삼성전자',
				'LG전자',
				'한화',
				'Microsoft',
				'현대',
				'현기차',
				'SK',
				'롯데'
			];
			const country = [
				'미국',
				'일본',
				'한국',
				'영국',
				'캐나다',
				'중국',
				'프랑스',
				'브라질',
				'인도',
				'이탈리아'
			];
			for (let i = 0; i < count; i++) {
				loaddata.push({
					sCompany: company[Math.floor(Math.random() * 10)],
					sCountry: country[Math.floor(Math.random() * 10)],
					sSaleQuantity: Math.floor(Math.random() * 100000),
					sSaleIncrease: Math.floor(Math.random() * 10000),
					sPrice: Math.floor(Math.random() * 10000000),
					sSatisfaction: Math.floor(Math.random() * (100 - 50 + 1) + 50),
				});
			}

			return loaddata;
		}
	}
}