const masterData = [
	{
		sSido: '서울특별시',
		sSiGunGu: '관악구'
	},
	{
		sSido: '서울특별시',
		sSiGunGu: '광진구'
	},
	{
		sSido: '서울특별시',
		sSiGunGu: '금천구'
	},
	{
		sSido: '서울특별시',
		sSiGunGu: '동작구'
	},
	{
		sSido: '서울특별시',
		sSiGunGu: '서초구'
	},
	{
		sSido: '서울특별시',
		sSiGunGu: '송파구'
	}
];

const detailData = [
	{
		gwanak: [
			{
				sName: '책쉼터',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:56',
				sSaturdayEnd: '06:56',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매주 일요일/국가지정공휴일',
				sBook: 3870,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 4,
				sRentDay: 14,
				sSiGunGu: '관악구'
			},
			{
				sName: '숲속작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '06:59',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매주 화요일/국가지정공휴일',
				sBook: 3070,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 5,
				sRentDay: 14,
				sSiGunGu: '관악구'
			},
			{
				sName: '신림청소년독서실',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '07:00',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '07:00',
				sHolidayStart: '06:58',
				sHolidayEnd: '07:00',
				sClosed: '매주 일요일/국가지정공휴일',
				sBook: 8000,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 3,
				sRentDay: 7,
				sSiGunGu: '관악구'
			},
			{
				sName: '관악문화관도서관',
				sType: '1',
				sWeekdayStart: '06:57',
				sWeekdayEnd: '07:00',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '06:59',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매주 화요일/국가지정공휴일',
				sBook: 192848,
				sSeries: 108,
				sNonbook: 26180,
				sRentNum: 5,
				sRentDay: 14,
				sSiGunGu: '관악구'
			},
			{
				sName: '글빛정보도서관',
				sType: '1',
				sWeekdayStart: '06:57',
				sWeekdayEnd: '07:00',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '07:00',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매주 수요일/국가지정공휴일',
				sBook: 63357,
				sSeries: 56,
				sNonbook: 2372,
				sRentNum: 5,
				sRentDay: 14,
				sSiGunGu: '관악구'
			},
			{
				sName: '성현동작은도서관',
				sType: '1',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '06:59',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매주 화요일/국가지정공휴일',
				sBook: 50271,
				sSeries: 44,
				sNonbook: 2038,
				sRentNum: 5,
				sRentDay: 14,
				sSiGunGu: '관악구'
			},
			{
				sName: '은천동작은도서관',
				sType: '1',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '07:00',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '06:59',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매주 화요일/국가지정공휴일',
				sBook: 44032,
				sSeries: 60,
				sNonbook: 1495,
				sRentNum: 5,
				sRentDay: 14,
				sSiGunGu: '관악구'
			},
			{
				sName: '조원작은도서관',
				sType: '1',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '07:00',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '06:59',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매주 수요일/법정공휴일',
				sBook: 57893,
				sSeries: 62,
				sNonbook: 4748,
				sRentNum: 5,
				sRentDay: 14,
				sSiGunGu: '관악구'
			},
			{
				sName: '책이랑놀이랑',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '06:59',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매주 화요일/국가지정공휴일',
				sBook: 13106,
				sSeries: 15,
				sNonbook: 468,
				sRentNum: 5,
				sRentDay: 14,
				sSiGunGu: '관악구'
			},
			{
				sName: '관악산 詩도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '06:59',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매주 화요일/국가지정공휴일',
				sBook: 5901,
				sSeries: 0,
				sNonbook: 43,
				sRentNum: 5,
				sRentDay: 14,
				sSiGunGu: '관악구'
			},
			{
				sName: '낙성대공원도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '06:59',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매주 화요일/국가지정공휴일',
				sBook: 6725,
				sSeries: 14,
				sNonbook: 102,
				sRentNum: 5,
				sRentDay: 14,
				sSiGunGu: '관악구'
			},
			{
				sName: '청림동 푸른숲작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:56',
				sSaturdayEnd: '06:56',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매주 토/일요일/국가지정공휴일',
				sBook: 7388,
				sSeries: 0,
				sNonbook: 7390,
				sRentNum: 5,
				sRentDay: 14,
				sSiGunGu: '관악구'
			},
			{
				sName: '행운동 마루작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:56',
				sSaturdayEnd: '06:56',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매주 토/일요일/국가지정공휴일',
				sBook: 5738,
				sSeries: 0,
				sNonbook: 5749,
				sRentNum: 5,
				sRentDay: 14,
				sSiGunGu: '관악구'
			},
			{
				sName: '청룡동 숯고을작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:56',
				sSaturdayEnd: '06:56',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매주 토/일요일/국가지정공휴일',
				sBook: 9520,
				sSeries: 2,
				sNonbook: 9564,
				sRentNum: 5,
				sRentDay: 14,
				sSiGunGu: '관악구'
			},
			{
				sName: '낙성동 우듬지작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:56',
				sSaturdayEnd: '06:56',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매주 토/일요일/국가지정공휴일',
				sBook: 6555,
				sSeries: 0,
				sNonbook: 6569,
				sRentNum: 5,
				sRentDay: 14,
				sSiGunGu: '관악구'
			},
			{
				sName: '미성동 책의향기작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:56',
				sSaturdayEnd: '06:56',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매주 토/일요일/국가지정공휴일',
				sBook: 7480,
				sSeries: 8,
				sNonbook: 7480,
				sRentNum: 5,
				sRentDay: 14,
				sSiGunGu: '관악구'
			},
			{
				sName: '삼성동 샛별작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:56',
				sSaturdayEnd: '06:56',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매주 토/일요일/국가지정공휴일',
				sBook: 7106,
				sSeries: 0,
				sNonbook: 7114,
				sRentNum: 5,
				sRentDay: 14,
				sSiGunGu: '관악구'
			}
		],
		gwangjin: [
			{
				sName: '광진정보도서관',
				sType: '1',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '07:00',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '06:59',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매월 둘째, 넷째 화요일, 공휴일',
				sBook: 237257,
				sSeries: 380,
				sNonbook: 13965,
				sRentNum: 5,
				sRentDay: 21,
				sSiGunGu: '광진구'
			},
			{
				sName: '중곡문화체육센터도서관',
				sType: '1',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '07:00',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '06:59',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매월 첫째, 셋째 월요일, 공휴일',
				sBook: 73824,
				sSeries: 40,
				sNonbook: 0,
				sRentNum: 5,
				sRentDay: 21,
				sSiGunGu: '광진구'
			},
			{
				sName: '자양제4동도서관',
				sType: '1',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '06:59',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매월 첫째, 셋째 화요일, 공휴일',
				sBook: 26947,
				sSeries: 4,
				sNonbook: 0,
				sRentNum: 5,
				sRentDay: 21,
				sSiGunGu: '광진구'
			},
			{
				sName: '구의제3동도서관',
				sType: '1',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '06:59',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매월 둘째, 넷째 월요일, 공휴일',
				sBook: 25064,
				sSeries: 4,
				sNonbook: 0,
				sRentNum: 5,
				sRentDay: 21,
				sSiGunGu: '광진구'
			},
			{
				sName: '중곡1동새마을작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:56',
				sSaturdayEnd: '06:56',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매주 토요일, 일요일, 공휴일',
				sBook: 10619,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 5,
				sRentDay: 7,
				sSiGunGu: '광진구'
			},
			{
				sName: '중곡2동새마을작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:56',
				sSaturdayEnd: '06:56',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매주 토요일, 일요일, 공휴일',
				sBook: 5687,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 5,
				sRentDay: 7,
				sSiGunGu: '광진구'
			},
			{
				sName: '중곡3동새마을작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:56',
				sSaturdayEnd: '06:56',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매주 토요일, 일요일, 공휴일',
				sBook: 4335,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 3,
				sRentDay: 7,
				sSiGunGu: '광진구'
			},
			{
				sName: '중곡4동새마을작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:56',
				sSaturdayEnd: '06:56',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매주 토요일, 일요일, 공휴일',
				sBook: 5280,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 3,
				sRentDay: 7,
				sSiGunGu: '광진구'
			},
			{
				sName: '능동새마을작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:56',
				sSaturdayEnd: '06:56',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매주 토요일, 일요일, 공휴일',
				sBook: 7368,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 3,
				sRentDay: 7,
				sSiGunGu: '광진구'
			},
			{
				sName: '구의1동새마을작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:56',
				sSaturdayEnd: '06:56',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매주 토요일, 일요일, 공휴일',
				sBook: 5738,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 3,
				sRentDay: 7,
				sSiGunGu: '광진구'
			},
			{
				sName: '구의2동새마을작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:56',
				sSaturdayEnd: '06:56',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매주 토요일, 일요일, 공휴일',
				sBook: 5980,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 3,
				sRentDay: 7,
				sSiGunGu: '광진구'
			},
			{
				sName: '광장동새마을작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:56',
				sSaturdayEnd: '06:56',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매주 토요일, 일요일, 공휴일',
				sBook: 4641,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 3,
				sRentDay: 7,
				sSiGunGu: '광진구'
			},
			{
				sName: '자양1동새마을작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:56',
				sSaturdayEnd: '06:56',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매주 토요일, 일요일, 공휴일',
				sBook: 6413,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 5,
				sRentDay: 7,
				sSiGunGu: '광진구'
			},
			{
				sName: '자양2동새마을작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:56',
				sSaturdayEnd: '06:56',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매주 토요일, 일요일, 공휴일',
				sBook: 9626,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 5,
				sRentDay: 7,
				sSiGunGu: '광진구'
			},
			{
				sName: '자양3동새마을작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:56',
				sSaturdayEnd: '06:56',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매주 토요일, 일요일, 공휴일',
				sBook: 8405,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 4,
				sRentDay: 7,
				sSiGunGu: '광진구'
			},
			{
				sName: '자양4동새마을작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:56',
				sSaturdayEnd: '06:56',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매주 토요일, 일요일, 공휴일',
				sBook: 4345,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 3,
				sRentDay: 7,
				sSiGunGu: '광진구'
			},
			{
				sName: '화양동새마을작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:56',
				sSaturdayEnd: '06:56',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매주 토요일, 일요일, 공휴일',
				sBook: 9031,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 3,
				sRentDay: 7,
				sSiGunGu: '광진구'
			}
		],
		geumcheon: [
			{
				sName: '금천구립시흥도서관',
				sType: '1',
				sWeekdayStart: '06:57',
				sWeekdayEnd: '07:00',
				sSaturdayStart: '06:57',
				sSaturdayEnd: '07:00',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매월 첫째,셋째 금요일/법정 공휴일',
				sBook: 71317,
				sSeries: 64,
				sNonbook: 3881,
				sRentNum: 10,
				sRentDay: 14,
				sSiGunGu: '금천구'
			},
			{
				sName: '금천구립금나래도서관',
				sType: '1',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '07:00',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '07:00',
				sHolidayStart: '06:58',
				sHolidayEnd: '06:59',
				sClosed: '매월 마지막주 일요일/신정(1.1), 설연휴, 추석연휴, 석가탄신일, 성탄절, 선거일',
				sBook: 70141,
				sSeries: 80,
				sNonbook: 3881,
				sRentNum: 10,
				sRentDay: 14,
				sSiGunGu: '금천구'
			},
			{
				sName: '금천구립가산도서관',
				sType: '1',
				sWeekdayStart: '06:57',
				sWeekdayEnd: '07:00',
				sSaturdayStart: '06:57',
				sSaturdayEnd: '07:00',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매월 둘째,넷째 월요일/법정 공휴일',
				sBook: 74282,
				sSeries: 115,
				sNonbook: 8604,
				sRentNum: 10,
				sRentDay: 14,
				sSiGunGu: '금천구'
			},
			{
				sName: '금천구립독산도서관',
				sType: '1',
				sWeekdayStart: '06:57',
				sWeekdayEnd: '07:00',
				sSaturdayStart: '06:57',
				sSaturdayEnd: '07:00',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '매월 첫째,셋째 월요일/법정 공휴일',
				sBook: 112521,
				sSeries: 152,
				sNonbook: 10825,
				sRentNum: 10,
				sRentDay: 14,
				sSiGunGu: '금천구'
			},
			{
				sName: '해오름작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '07:00',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '06:59',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '일요일/법정공휴일',
				sBook: 8424,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 10,
				sRentDay: 14,
				sSiGunGu: '금천구'
			},
			{
				sName: '참새작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '07:00',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '06:59',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '일요일/법정공휴일',
				sBook: 5577,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 10,
				sRentDay: 14,
				sSiGunGu: '금천구'
			},
			{
				sName: '미래향기작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '07:00',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '06:59',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '일요일/법정공휴일',
				sBook: 2545,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 10,
				sRentDay: 14,
				sSiGunGu: '금천구'
			},
			{
				sName: '청개구리작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '07:00',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '06:59',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '월,일요일/법정공휴일',
				sBook: 10804,
				sSeries: 2,
				sNonbook: 0,
				sRentNum: 10,
				sRentDay: 14,
				sSiGunGu: '금천구'
			},
			{
				sName: '꿈씨어린이작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '07:00',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '06:59',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '일요일/법정공휴일',
				sBook: 16203,
				sSeries: 4,
				sNonbook: 0,
				sRentNum: 10,
				sRentDay: 14,
				sSiGunGu: '금천구'
			},
			{
				sName: '맑은누리작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:56',
				sSaturdayEnd: '06:56',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '토,일요일/법정공휴일',
				sBook: 9514,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 10,
				sRentDay: 14,
				sSiGunGu: '금천구'
			},
			{
				sName: '꿈꾸는작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:56',
				sSaturdayEnd: '06:56',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '토,일요일/법정공휴일',
				sBook: 6021,
				sSeries: 7,
				sNonbook: 0,
				sRentNum: 10,
				sRentDay: 14,
				sSiGunGu: '금천구'
			},
			{
				sName: '도란도란작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '07:00',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '06:59',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '토,일요일/법정공휴일',
				sBook: 9663,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 10,
				sRentDay: 14,
				sSiGunGu: '금천구'
			},
			{
				sName: '책읽는주민사랑방작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '06:59',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '일요일/법정공휴일',
				sBook: 3886,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 10,
				sRentDay: 14,
				sSiGunGu: '금천구'
			},
			{
				sName: '책이든거리작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '07:00',
				sSaturdayStart: '06:56',
				sSaturdayEnd: '06:56',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '토,일요일/법정공휴일',
				sBook: 5091,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 10,
				sRentDay: 14,
				sSiGunGu: '금천구'
			},
			{
				sName: '책달샘숲속작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '06:59',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '월,일요일/법정공휴일',
				sBook: 2160,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 10,
				sRentDay: 14,
				sSiGunGu: '금천구'
			},
			{
				sName: '우리울 작은도서관',
				sType: '2',
				sWeekdayStart: '06:59',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:59',
				sSaturdayEnd: '06:59',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '일요일/법정공휴일',
				sBook: 1300,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 10,
				sRentDay: 14,
				sSiGunGu: '금천구'
			},
			{
				sName: '롯데캐슬1차 작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '06:59',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '일요일/법정공휴일',
				sBook: 2500,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 10,
				sRentDay: 14,
				sSiGunGu: '금천구'
			},
			{
				sName: '지혜의숲 작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:56',
				sSaturdayEnd: '06:56',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '토요일/법정공휴일',
				sBook: 9071,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 10,
				sRentDay: 14,
				sSiGunGu: '금천구'
			},
			{
				sName: '책읽는마을 작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:56',
				sSaturdayEnd: '06:56',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '토,일요일/법정공휴일',
				sBook: 6573,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 10,
				sRentDay: 14,
				sSiGunGu: '금천구'
			},
			{
				sName: '트리니티 작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '07:00',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '07:00',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '법정공휴일',
				sBook: 1320,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 10,
				sRentDay: 14,
				sSiGunGu: '금천구'
			},
			{
				sName: '산돌어린이도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '06:59',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '월요일/법정공휴일',
				sBook: 1400,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 10,
				sRentDay: 14,
				sSiGunGu: '금천구'
			},
			{
				sName: '소망의나무어린이 작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '06:59',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '법정공휴일',
				sBook: 6579,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 10,
				sRentDay: 14,
				sSiGunGu: '금천구'
			},
			{
				sName: '은행나무어린이도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '06:59',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '월요일/법정공휴일',
				sBook: 11101,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 10,
				sRentDay: 14,
				sSiGunGu: '금천구'
			},
			{
				sName: '나누리 작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:56',
				sSaturdayEnd: '06:56',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '토,일요일/법정공휴일',
				sBook: 8232,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 10,
				sRentDay: 14,
				sSiGunGu: '금천구'
			},
			{
				sName: '길빛 작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '06:59',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '일요일/법정공휴일',
				sBook: 3000,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 10,
				sRentDay: 14,
				sSiGunGu: '금천구'
			},
			{
				sName: '샘솟는 작은도서관',
				sType: '2',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:56',
				sSaturdayEnd: '06:56',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '토,일요일/법정공휴일',
				sBook: 1700,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 10,
				sRentDay: 14,
				sSiGunGu: '금천구'
			},
			{
				sName: '와서 작은도서관',
				sType: '2',
				sWeekdayStart: '06:59',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:56',
				sSaturdayEnd: '06:56',
				sHolidayStart: '06:56',
				sHolidayEnd: '06:56',
				sClosed: '토,일요일/법정공휴일',
				sBook: 2039,
				sSeries: 0,
				sNonbook: 0,
				sRentNum: 10,
				sRentDay: 14,
				sSiGunGu: '금천구'
			}
		],
		dongjak: [
			{
				sName: '사당솔밭도서관',
				sType: '1',
				sWeekdayStart: '09:00',
				sWeekdayEnd: '22:00',
				sSaturdayStart: '09:00',
				sSaturdayEnd: '17:00',
				sHolidayStart: '00:00',
				sHolidayEnd: '00:00',
				sClosed: '매주 월요일, 법정공휴일',
				sBook: 60107,
				sSeries: 47,
				sNonbook: 353,
				sRentNum: 5,
				sRentDay: 14,
				sSiGunGu: '동작구'
			},
			{
				sName: '동작상도국주도서관',
				sType: '1',
				sWeekdayStart: '09:00',
				sWeekdayEnd: '22:00',
				sSaturdayStart: '09:00',
				sSaturdayEnd: '17:00',
				sHolidayStart: '00:00',
				sHolidayEnd: '00:00',
				sClosed: '매주 월요일, 법정공휴일',
				sBook: 45625,
				sSeries: 13,
				sNonbook: 1172,
				sRentNum: 5,
				sRentDay: 14,
				sSiGunGu: '동작구'
			}
		],
		seocho: [
			{
				sName: '서초구립반포도서관',
				sType: '1',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '07:00',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '06:59',
				sHolidayStart: '06:58',
				sHolidayEnd: '06:59',
				sClosed: '매주월요일, 법정공휴일',
				sBook: 159223,
				sSeries: 120,
				sNonbook: 29054,
				sRentNum: 159223,
				sRentDay: 14,
				sSiGunGu: '서초구'
			},
			{
				sName: '서초구립내곡도서관',
				sType: '1',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '07:00',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '06:59',
				sHolidayStart: '06:58',
				sHolidayEnd: '06:59',
				sClosed: '매주월요일, 법정공휴일',
				sBook: 37717,
				sSeries: 50,
				sNonbook: 926,
				sRentNum: 37717,
				sRentDay: 14,
				sSiGunGu: '서초구'
			},
			{
				sName: '서이도서관',
				sType: '1',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '07:00',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '06:59',
				sHolidayStart: '06:58',
				sHolidayEnd: '06:59',
				sClosed: '매주월요일, 법정공휴일',
				sBook: 24930,
				sSeries: 12,
				sNonbook: 0,
				sRentNum: 24930,
				sRentDay: 14,
				sSiGunGu: '서초구'
			},
			{
				sName: '잠원도서관',
				sType: '1',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '07:00',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '06:59',
				sHolidayStart: '06:58',
				sHolidayEnd: '06:59',
				sClosed: '매주월요일, 법정공휴일',
				sBook: 18657,
				sSeries: 12,
				sNonbook: 0,
				sRentNum: 18657,
				sRentDay: 14,
				sSiGunGu: '서초구'
			},
			{
				sName: '방배도서관',
				sType: '1',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '07:00',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '06:59',
				sHolidayStart: '06:58',
				sHolidayEnd: '06:59',
				sClosed: '매주월요일, 법정공휴일',
				sBook: 12365,
				sSeries: 12,
				sNonbook: 0,
				sRentNum: 12365,
				sRentDay: 14,
				sSiGunGu: '서초구'
			},
			{
				sName: '서초그림책도서관',
				sType: '1',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '07:00',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '06:59',
				sHolidayStart: '06:58',
				sHolidayEnd: '06:59',
				sClosed: '매주월요일, 법정공휴일',
				sBook: 10236,
				sSeries: 12,
				sNonbook: 216,
				sRentNum: 10236,
				sRentDay: 14,
				sSiGunGu: '서초구'
			}
		],
		songpa: [
			{
				sName: '송파글마루도서관',
				sType: '1',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '07:00',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '07:00',
				sHolidayStart: '06:58',
				sHolidayEnd: '07:00',
				sClosed: '매주월요일+국가지정공휴일',
				sBook: 66700,
				sSeries: 103,
				sNonbook: 2261,
				sRentNum: 5,
				sRentDay: 14,
				sSiGunGu: '송파구'
			},
			{
				sName: '송파어린이도서관',
				sType: '1',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '06:59',
				sHolidayStart: '06:58',
				sHolidayEnd: '06:59',
				sClosed: '매주월요일+국가지정공휴일',
				sBook: 84582,
				sSeries: 43,
				sNonbook: 671,
				sRentNum: 5,
				sRentDay: 14,
				sSiGunGu: '송파구'
			},
			{
				sName: '거마도서관',
				sType: '1',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '07:00',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '07:00',
				sHolidayStart: '06:58',
				sHolidayEnd: '07:00',
				sClosed: '국가지정공휴일+2째월요일+4째월요일',
				sBook: 43658,
				sSeries: 64,
				sNonbook: 425,
				sRentNum: 5,
				sRentDay: 14,
				sSiGunGu: '송파구'
			},
			{
				sName: '소나무언덕1호',
				sType: '1',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '07:00',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '07:00',
				sHolidayStart: '06:58',
				sHolidayEnd: '07:00',
				sClosed: '매주월요일+국가지정공휴일',
				sBook: 18317,
				sSeries: 7,
				sNonbook: 156,
				sRentNum: 5,
				sRentDay: 14,
				sSiGunGu: '송파구'
			},
			{
				sName: '소나무언덕2호',
				sType: '1',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '07:00',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '07:00',
				sHolidayStart: '06:58',
				sHolidayEnd: '07:00',
				sClosed: '매주월요일+국가지정공휴일',
				sBook: 22084,
				sSeries: 10,
				sNonbook: 192,
				sRentNum: 5,
				sRentDay: 14,
				sSiGunGu: '송파구'
			},
			{
				sName: '소나무언덕3호',
				sType: '1',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '07:00',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '07:00',
				sHolidayStart: '06:58',
				sHolidayEnd: '07:00',
				sClosed: '매주월요일+국가지정공휴일',
				sBook: 24512,
				sSeries: 17,
				sNonbook: 221,
				sRentNum: 5,
				sRentDay: 14,
				sSiGunGu: '송파구'
			},
			{
				sName: '소나무언덕4호',
				sType: '1',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '07:00',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '07:00',
				sHolidayStart: '06:58',
				sHolidayEnd: '07:00',
				sClosed: '매주월요일+국가지정공휴일',
				sBook: 16988,
				sSeries: 30,
				sNonbook: 312,
				sRentNum: 5,
				sRentDay: 14,
				sSiGunGu: '송파구'
			},
			{
				sName: '소나무언덕 잠실본동',
				sType: '1',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '06:59',
				sHolidayStart: '06:58',
				sHolidayEnd: '06:59',
				sClosed: '매주월요일+국가지정공휴일',
				sBook: 22534,
				sSeries: 29,
				sNonbook: 489,
				sRentNum: 5,
				sRentDay: 14,
				sSiGunGu: '송파구'
			},
			{
				sName: '송파어린이영어',
				sType: '1',
				sWeekdayStart: '06:58',
				sWeekdayEnd: '06:59',
				sSaturdayStart: '06:58',
				sSaturdayEnd: '06:59',
				sHolidayStart: '06:58',
				sHolidayEnd: '06:59',
				sClosed: '매주월요일+국가지정공휴일',
				sBook: 18508,
				sSeries: 11,
				sNonbook: 774,
				sRentNum: 5,
				sRentDay: 14,
				sSiGunGu: '송파구'
			}
		]
	}
];

export { masterData, detailData };