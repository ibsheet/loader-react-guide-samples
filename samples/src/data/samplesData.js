const typeData = [
	{
		'TextData': '장순연',
		'ComboData': '01',
		'ISO': 'AUD',
		'IntData': 0,
		'FloatData': 15.25,
		'DateData': '',
		'PassData': '123456',
		'RadioData': 'H:1',
		'CheckData': '1'
	},
	{
		'TextData': '김정호',
		'ComboData': '02',
		'ISO': 'ALL',
		'IntData': 0,
		'FloatData': 234,
		'DateData': '2010/01/20',
		'PassData': '75646',
		'RadioData': 'M:1',
		'CheckData': '0'
	},
	{
		'TextData': '정상호',
		'ComboData': '01',
		'ISO': 'DZD',
		'IntData': 65,
		'FloatData': 123,
		'DateData': '2002/08/15',
		'PassData': '4564',
		'RadioData': 'L:1',
		'CheckData': '1'
	},
	{
		'TextData': '안수현',
		'ComboData': '02',
		'ISO': 'ARS',
		'IntData': 190,
		'FloatData': 0,
		'DateData': '2011/05/26',
		'PassData': '123456',
		'RadioData': 'L:1',
		'CheckData': '1'
	},
	{
		'TextData': '박만우',
		'ComboData': '02',
		'ISO': 'AWG',
		'IntData': 1120,
		'FloatData': 115.25,
		'DateData': '2010/09/22',
		'PassData': '75646',
		'RadioData': 'M:1',
		'CheckData': '0'
	},
	{
		'TextData': '최호건',
		'ComboData': '01',
		'ISO': 'GBP',
		'IntData': 65,
		'FloatData': 154.36,
		'DateData': '',
		'PassData': '4564',
		'RadioData': 'H:1',
		'CheckData': '0'
	},
	{
		'TextData': '이민후',
		'ComboData': '01',
		'ISO': 'BSD',
		'IntData': 0,
		'FloatData': 0,
		'DateData': '',
		'PassData': '',
		'RadioData': 'H:1',
		'CheckData': '1'
	},
	{
		'TextData': '김호정',
		'ComboData': '02',
		'ISO': 'BHD',
		'IntData': 1120,
		'FloatData': 0,
		'DateData': '2010/09/22',
		'PassData': '75646',
		'RadioData': 'M:1',
		'CheckData': '0'
	},
	{
		'TextData': '김호수',
		'ComboData': '01',
		'ISO': 'BDT',
		'IntData': 65,
		'FloatData': 154.36,
		'DateData': '',
		'PassData': '4564',
		'RadioData': 'L:1',
		'CheckData': '1'
	},
	{
		'TextData': '오미려',
		'ComboData': '01',
		'ISO': 'BBD',
		'IntData': 190,
		'FloatData': 15.25,
		'DateData': '2011/05/26',
		'PassData': '123456',
		'RadioData': 'H:1',
		'CheckData': '1'
	},
	{
		'TextData': '차수식',
		'ComboData': '02',
		'ISO': 'BYR',
		'IntData': 1120,
		'FloatData': 115.25,
		'DateData': '2010/09/22',
		'PassData': '75646',
		'RadioData': 'L:1',
		'CheckData': '0'
	},
	{
		'TextData': '김호수',
		'ComboData': '01',
		'ISO': 'BDT',
		'IntData': 65,
		'FloatData': 154.36,
		'DateData': '',
		'PassData': '4564',
		'RadioData': 'L:1',
		'CheckData': '1'
	},
	{
		'TextData': '오미려',
		'ComboData': '01',
		'ISO': 'BBD',
		'IntData': 190,
		'FloatData': 15.25,
		'DateData': '2011/05/26',
		'PassData': '123456',
		'RadioData': 'H:1',
		'CheckData': '1'
	},
	{
		'TextData': '차수식',
		'ComboData': '02',
		'ISO': 'BYR',
		'IntData': 1120,
		'FloatData': 115.25,
		'DateData': '2010/09/22',
		'PassData': '75646',
		'RadioData': 'L:1',
		'CheckData': '0'
	},
	{
		'TextData': '김호수',
		'ComboData': '01',
		'ISO': 'BDT',
		'IntData': 65,
		'FloatData': 154.36,
		'DateData': '',
		'PassData': '4564',
		'RadioData': 'L:1',
		'CheckData': '1'
	},
	{
		'TextData': '오미려',
		'ComboData': '01',
		'ISO': 'BBD',
		'IntData': 190,
		'FloatData': 15.25,
		'DateData': '2011/05/26',
		'PassData': '123456',
		'RadioData': 'H:1',
		'CheckData': '1'
	},
	{
		'TextData': '차수식',
		'ComboData': '02',
		'ISO': 'BYR',
		'IntData': 1120,
		'FloatData': 115.25,
		'DateData': '2010/09/22',
		'PassData': '75646',
		'RadioData': 'L:1',
		'CheckData': '0'
	},
	{
		'TextData': '김호정',
		'ComboData': '02',
		'ISO': 'BHD',
		'IntData': 1120,
		'FloatData': 0,
		'DateData': '2010/09/22',
		'PassData': '75646',
		'RadioData': 'M:1',
		'CheckData': '0'
	},
	{
		'TextData': '김호수',
		'ComboData': '01',
		'ISO': 'BDT',
		'IntData': 65,
		'FloatData': 154.36,
		'DateData': '',
		'PassData': '4564',
		'RadioData': 'L:1',
		'CheckData': '1'
	},
	{
		'TextData': '맹인주',
		'ComboData': '01',
		'ISO': 'BZD',
		'IntData': 65,
		'FloatData': 154.36,
		'DateData': '',
		'PassData': '4564',
		'RadioData': 'H:1',
		'CheckData': '0'
	},
	{
		'TextData': '전명준',
		'ComboData': '01',
		'ISO': 'BMD',
		'IntData': 190,
		'FloatData': 15.25,
		'DateData': '2011/05/26',
		'PassData': '123456',
		'RadioData': 'M:1',
		'CheckData': '1'
	}
];

const mergeData = [
	{
		'id': 'AR1',
		'SEQ': 1,
		'cls1': '텐트',
		'cls2': '돔형',
		'cls3': '그늘막형',
		'goods': '아이두젠 패스트캠프 원터치 텐트 오토 6 착탈식 와이드 익스텐션',
		'price': 75910,
		'etc': '그늘막형 / 1룸형 / 5인용 / 방수 / 원터치/팝업 ',
	},
	{
		'id': 'AR2',
		'SEQ': 2,
		'cls1': '텐트',
		'cls2': '돔형',
		'cls3': '그늘막형',
		'goods': '아이두젠 패스트캠프 원터치 텐트 오토 6',
		'price': 47920,
		'etc': '그늘막형 / 1룸형 / 4인용~5인용 / 방수 / 원터치/팝업 ',
	},
	{
		'id': 'AR3',
		'SEQ': 3,
		'cls1': '텐트',
		'cls2': '터널형',
		'cls3': '2룸형',
		'goods': '비젼코베아 코베아 네스트',
		'price': 366440,
		'etc': '2룸형 / 4인용 / 방수 / 발수 / 방충망 ',
	},
	{
		'id': 'AR4',
		'SEQ': 4,
		'cls1': '텐트',
		'cls2': '돔형',
		'cls3': '2룸형',
		'goods': '비젼코베아 코베아 오토 하우스 M',
		'price': 273210,
		'etc': '2룸형 / 4인용 / 방수 / 발수 / 방충망 ',
	},
	{
		'id': 'AR5',
		'SEQ': 5,
		'cls1': '텐트',
		'cls2': '터널형',
		'cls3': '1룸형',
		'goods': '비에프엘 버팔로 프리미엄 뉴 프리마 팝업텐트 세트',
		'price': 91240,
		'etc': '1룸형 / 5인용~6인용 / 방수 / 원터치/팝업 / 방충망 ',
	},
	{
		'id': 'AR6',
		'SEQ': 6,
		'cls1': '텐트',
		'cls2': '돔형',
		'cls3': '1룸형',
		'goods': '네이처하이크 클라우드 피크 2',
		'price': 98690,
		'etc': '1룸형 / 2인용 / 방수 ',
	},
	{
		'id': 'AR7',
		'SEQ': 7,
		'cls1': '텐트',
		'cls2': '2룸형',
		'cls3': '4인용',
		'goods': '카즈미 X1 텐트',
		'price': 152190,
		'etc': '4인용~5인용 / 발수 / 방충망 ',
	},
	{
		'id': 'AR8',
		'SEQ': 8,
		'cls1': '텐트',
		'cls2': '돔형',
		'cls3': '2룸형',
		'goods': '비에프엘 버팔로 리빙쉘 와이드 돔',
		'price': 207600,
		'etc': '2룸형 / 6인용~7인용 / 발수 / 방충망 ',
	},
	{
		'id': 'AR9',
		'SEQ': 9,
		'cls1': '텐트',
		'cls2': '4인용',
		'cls3': '차량루프',
		'goods': '캠핑나루 메세타 루프탑텐트 퍼스트 1900',
		'price': 654000,
		'etc': '차량루프 ',
	},
	{
		'id': 'AR10',
		'SEQ': 10,
		'cls1': '텐트',
		'cls2': '돔형',
		'cls3': '그늘막형',
		'goods': '로티캠프 원터치 컴포트 플러스 프리미엄 텐트',
		'price': 156330,
		'etc': '그늘막형 / 1룸형 / 4인용 / 원터치/팝업 / 방충망 ',
	},
	{
		'id': 'AR11',
		'SEQ': 11,
		'cls1': '텐트',
		'cls2': '돔형',
		'cls3': '2룸형',
		'goods': '콜맨 터프 스크린 2룸 하우스 플러스',
		'price': 181940,
		'etc': '2룸형 / 4인용~5인용 ',
	},
	{
		'id': 'AR12',
		'SEQ': 12,
		'cls1': '텐트',
		'cls2': '돔형',
		'cls3': '2룸형',
		'goods': '스노우라인 프라임 디럭스 텐트',
		'price': 50030,
		'etc': '2룸형 / 3인용~4인용 / 발수 / 방충망 ',
	},
	{
		'id': 'AR13',
		'SEQ': 13,
		'cls1': '텐트',
		'cls2': '터널형',
		'cls3': '2룸형',
		'goods': '비젼코베아 코베아 아웃백 4',
		'price': 61200,
		'etc': '2룸형 / 4인용 / 방수 / 발수 ',
	},
	{
		'id': 'AR14',
		'SEQ': 14,
		'cls1': '텐트',
		'cls2': '돔형',
		'cls3': '비박용',
		'goods': 'NEMO Equipment, Inc. 니모 다이거 3P',
		'price': 560610,
		'etc': '비박용 / 1룸형 / 2인용~3인용 ',
	},
	{
		'id': 'AR15',
		'SEQ': 15,
		'cls1': '텐트',
		'cls2': '돔형',
		'cls3': '4인용',
		'goods': '비젼코베아 코베아 이지 돔',
		'price': 549054,
		'etc': '4인용 / 방수 / 발수 / 방충망 ',
	},
	{
		'id': 'AR16',
		'SEQ': 16,
		'cls1': '텐트',
		'cls2': '돔형',
		'cls3': '1룸형',
		'goods': '아이두젠 패스트캠프 오토 4 클래식',
		'price': 558500,
		'etc': '1룸형 / 4인용~5인용 / 원터치/팝업 / 방충망 ',
	},
	{
		'id': 'AR17',
		'SEQ': 17,
		'cls1': '텐트',
		'cls2': '터널형',
		'cls3': '그늘막형',
		'goods': '아이두젠 패스트캠프 원터치 텐트 오페라 베이직 3',
		'price': 506000,
		'etc': '그늘막형 / 1룸형 / 3인용~4인용 / 원터치/팝업 / 방충망 ',
	},
	{
		'id': 'AR18',
		'SEQ': 18,
		'cls1': '텐트',
		'cls2': '돔형',
		'cls3': '그늘막형',
		'goods': '로맨틱아프리카 이지 돔타프 피크닉 구성',
		'price': 206330,
		'etc': '그늘막형 / 1룸형 / 7인용~8인용 / 발수 / 방충망 ',
	},
	{
		'id': 'AR19',
		'SEQ': 19,
		'cls1': '텐트',
		'cls2': '돔형',
		'cls3': '그늘막형',
		'goods': '로티캠프 빅스퀘어 텐트',
		'price': 84550,
		'etc': '그늘막형 / 1룸형 / 6인용 / 방수 / 원터치/팝업 ',
	},
	{
		'id': 'AR20',
		'SEQ': 20,
		'cls1': '텐트',
		'cls2': '돔형',
		'cls3': '1룸형',
		'goods': '비젼코베아 코베아 리버사이드 4',
		'price': 39890,
		'etc': '1룸형 / 4인용~5인용 ',
	},
	{
		'id': 'AR21',
		'SEQ': 21,
		'cls1': '텐트',
		'cls2': '티피형',
		'cls3': '그늘막형',
		'goods': '아이두젠 패스트캠프 티피 텐트',
		'price': 93670,
		'etc': '그늘막형 / 1룸형 / 9인용~10인용 / 원터치/팝업 / 방충망 ',
	},
	{
		'id': 'AR22',
		'SEQ': 22,
		'cls1': '텐트',
		'cls2': '터널형',
		'cls3': '그늘막형',
		'goods': '아이두젠 패스트캠프 원터치 텐트 마운트프로',
		'price': 107920,
		'etc': '그늘막형 / 1룸형 / 7인용~8인용 / 방수 / 원터치/팝업 / 방충망 ',
	},
	{
		'id': 'AR23',
		'SEQ': 23,
		'cls1': '텐트',
		'cls2': '터널형',
		'cls3': '1룸형',
		'goods': '비젼코베아 코베아 투어링 카 쉘터 2',
		'price': 113050,
		'etc': '1룸형 / 4인용 / 방수 / 발수 / 차량연결 ',
	},
	{
		'id': 'AR24',
		'SEQ': 24,
		'cls1': '텐트',
		'cls2': '돔형',
		'cls3': '2룸형',
		'goods': '비젼코베아 코베아 스페이스 돔 3',
		'price': 132050,
		'etc': '2룸형 / 4인용 / 방수 / 발수 ',
	},
	{
		'id': 'AR25',
		'SEQ': 25,
		'cls1': '텐트',
		'cls2': '돔형',
		'cls3': '2룸형',
		'goods': '스노우라인 미라클 패밀리 텐트',
		'price': 195800,
		'etc': '2룸형 / 방수 / 발수 ',
	},
	{
		'id': 'AR26',
		'SEQ': 26,
		'cls1': '텐트',
		'cls2': '터널형',
		'cls3': '1룸형',
		'goods': '비에프엘 버팔로 프리미엄 뉴 프리마 팝업텐트',
		'price': 212600,
		'etc': '1룸형 / 5인용~6인용 / 방수 / 원터치/팝업 / 방충망 ',
	},
	{
		'id': 'AR27',
		'SEQ': 27,
		'cls1': '텐트',
		'cls2': '터널형',
		'cls3': '그늘막형',
		'goods': '아이두젠 패스트캠프 원터치 텐트 오페라 스위트 와이드 착탈익스텐션 플라이프로',
		'price': 411110,
		'etc': '그늘막형 / 1룸형 / 4인용~5인용 / 방수 / 원터치/팝업 / 방충망 ',
	},
	{
		'id': 'AR28',
		'SEQ': 28,
		'cls1': '텐트',
		'cls2': '터널형',
		'cls3': '4인용',
		'goods': '아웃팅 조이마스터 팝업 텐트',
		'price': 479400,
		'etc': '4인용~5인용 / 방수 / 원터치/팝업 / 방충망 ',
	},
	{
		'id': 'AR29',
		'SEQ': 29,
		'cls1': '텐트',
		'cls2': '돔형',
		'cls3': '그늘막형',
		'goods': '캠프라우드 캐노피 텐트',
		'price': 66900,
		'etc': '그늘막형 / 1룸형 / 8인용~10인용 / 방수 / 방충망 / 옥스포드 / 300D ',
	},
	{
		'id': 'AR30',
		'SEQ': 30,
		'cls1': '텐트',
		'cls2': '돔형',
		'cls3': '4인용',
		'goods': '스위스알파인클럽 필라투스 원터치 텐트 블랙에디션NEW',
		'price': 70740,
		'etc': '4인용 / 발수 / 원터치/팝업 / 방충망 ',
	},
	{
		'id': 'AR31',
		'SEQ': 31,
		'cls1': '매트',
		'cls2': '텐트내부+아웃도어용',
		'cls3': '돗자리',
		'goods': '2m 방수돗자리 오렌지',
		'price': 112360,
		'etc': '말이식(롤형) / 사용인원: 7인용 / 방수 / 재질: 옥스포드원단 / 무게: 320g / 구성품: 전용가방 / 크기(가로x세로): 200x200cm',
	},
	{
		'id': 'AR32',
		'SEQ': 32,
		'cls1': '매트',
		'cls2': '에어매트',
		'cls3': '방수',
		'goods': '인텍스 에어매트 듀라빔 베이직 퀸 (152x203)',
		'price': 132700,
		'etc': '전용가방 / 크기(가로x세로x두께): 152x203x25cm',
	},
	{
		'id': 'AR33',
		'SEQ': 33,
		'cls1': '매트',
		'cls2': '텐트내부용',
		'cls3': '에어매트',
		'goods': '에어박스 에어매트리스S 20cm (200x260, 특포맨)',
		'price': 34320,
		'etc': '말이식(롤형) / 사용인원: 4인용 / 구성품: 전용가방, 에어펌프 / 크기(가로x세로x두께): 200x260x20cm / 무게: 15.6kg',
	},
	{
		'id': 'AR34',
		'SEQ': 34,
		'cls1': '매트',
		'cls2': '텐트내부용',
		'cls3': '자충식매트',
		'goods': 'YIERSHENG 황동마개 감성 자충매트 (66x186)',
		'price': 44900,
		'etc': '말이식(롤형) / 사용인원: 2인용 / 재질: 폴리에스테르 / 구성품: 전용가방 / 크기(가로x세로x두께): 66x186x5cm',
	},
	{
		'id': 'AR35',
		'SEQ': 35,
		'cls1': '매트',
		'cls2': '텐트내부+아웃도어용',
		'cls3': '에어매트',
		'goods': '비젼코베아 코베아 에어 밸런스 매트 240 (187x238)',
		'price': 73710,
		'etc': '말이식(롤형) / 사용인원: 3인용 / 크기(가로x세로x두께): 187x238x18cm / 무게: 6.8kg',
	},
	{
		'id': 'AR36',
		'SEQ': 36,
		'cls1': '매트',
		'cls2': '텐트내부+아웃도어용',
		'cls3': '엠보싱매트',
		'goods': '씨엔디상사 벨라홈 캠핑매트 특대형 (200x240)',
		'price': 77600,
		'etc': '접이식(폴딩형) / 사용인원: 8인용 / 방수 / 재질: 폴리에틸렌 / 구성품: 전용가방 / 색상: 블루, 그린, 퍼플 / 크기(가로x세로): 200x240cm',
	},
	{
		'id': 'AR37',
		'SEQ': 37,
		'cls1': '침낭',
		'cls2': '사각',
		'cls3': '사용계절',
		'goods': '비젼코베아 코베아 에이드 하계용 침낭',
		'price': 168780,
		'etc': '충전재: 폴리에스테르 / 재질: 폴리에스테르 / 무게: 600g / 크기(가로x세로): 72x190cm',
	},
	{
		'id': 'AR38',
		'SEQ': 38,
		'cls1': '침낭',
		'cls2': '사각',
		'cls3': '사용계절',
		'goods': '비젼코베아 코베아 트래블 라이트',
		'price': 20410,
		'etc': '여름용 / 충전재: 오리털 / 무게: 800g / 크기(가로x세로): 75x195cm, 수납크기-16x28cm',
	},
	{
		'id': 'AR39',
		'SEQ': 39,
		'cls1': '매트',
		'cls2': '텐트내부+아웃도어용',
		'cls3': '자충식매트',
		'goods': '나린 케븐 황동 2구 자충매트 5cm (70x190)',
		'price': 379980,
		'etc': '말이식(롤형) / 사용인원: 1인용 / 방수 / 재질: 폴리에스테르 / 무게: 1600g / 구성품: 전용가방, 스트랩 / 크기(가로x세로x두께): 70x190x5cm',
	},
	{
		'id': 'AR40',
		'SEQ': 40,
		'cls1': '매트',
		'cls2': '텐트내부+아웃도어용',
		'cls3': '자충식매트',
		'goods': '나리안 케븐 황동 2구 자충매트 2인용 (135x190)',
		'price': 19800,
		'etc': '말이식(롤형) / 사용인원: 2인용 / 재질: 폴리에스테르 / 구성품: 전용가방, 스트랩 / 크기(가로x세로x두께): 135x190x5cm',
	},
	{
		'id': 'AR41',
		'SEQ': 41,
		'cls1': '침낭',
		'cls2': '머미',
		'cls3': '사용계절',
		'goods': '카즈미 익스트림 침낭 1',
		'price': 72170,
		'etc': '사계절용 / 충전재: 홀로파이버 / 크기(가로x세로): 70x180cm / 무게: 1kg / 색상: 오렌지, 블루',
	},
	{
		'id': 'AR42',
		'SEQ': 42,
		'cls1': '침낭',
		'cls2': '사각',
		'cls3': '사용계절',
		'goods': '빈슨메시프 레아 기본형 침낭',
		'price': 16200,
		'etc': '충전재: 폴리에스테르 / 재질: 폴리에스테르 / 무게: 850g / 색상: 네이비, 그린, 레드, 브라운 / 크기(가로x세로): 75x180cm, 수납크기-21x37cm / 구성품: 침낭, 전용가방',
	},
	{
		'id': 'AR43',
		'SEQ': 43,
		'cls1': '매트',
		'cls2': '텐트내부+아웃도어용',
		'cls3': '자충식매트',
		'goods': '조아캠프 인디 프리미엄 2구 자충매트 8T (67x180)',
		'price': 68020,
		'etc': '말이식(롤형) / 사용인원: 1인용 / 재질: 폴리에스테르 / 무게: 2.4kg / 구성품: 전용가방, 스트랩 / 크기(가로x세로x두께): 본체-67x180x8cm, 수납크기-18x70cm / 색상: 블랙, 블루 / 구성품: 에어매트, 수납밴드, 수리패치, 수납가방',
	},
	{
		'id': 'AR44',
		'SEQ': 44,
		'cls1': '매트',
		'cls2': '에어매트',
		'cls3': '방수',
		'goods': '인텍스 에어매트 듀라빔 베이직 광폭싱글 (99x191)',
		'price': 27610,
		'etc': '전용가방 / 크기(가로x세로x두께): 99x191x25cm',
	},
	{
		'id': 'AR45',
		'SEQ': 45,
		'cls1': '매트',
		'cls2': '에어매트',
		'cls3': '방수',
		'goods': '인텍스 에어매트 듀라빔 플러스 퀸 (152x203)',
		'price': 54940,
		'etc': '전용가방 / 크기(가로x세로x두께): 152x203x25cm',
	},
	{
		'id': 'AR46',
		'SEQ': 46,
		'cls1': '매트',
		'cls2': '텐트내부+아웃도어용',
		'cls3': '피크닉매트',
		'goods': '서흥인터내셔날 엠플러스캠프 룸앤홈 피크닉매트 S (100x150)',
		'price': 12730,
		'etc': '말이식(롤형) / 사용인원: 2인용 / 방수 / 재질: 폴리에스테르 / 무게: 580g / 크기(가로x세로): 100x150cm',
	},
	{
		'id': 'AR47',
		'SEQ': 47,
		'cls1': '매트',
		'cls2': '텐트내부+아웃도어용',
		'cls3': '엠보싱매트',
		'goods': '파크론 고밀도 25배율 프리미엄 캠핑매트 (140x200)',
		'price': 30310,
		'etc': '접이식(폴딩형) / 사용인원: 5인용 / 재질: 폴리에틸렌 / 무게: 1000g / 구성품: 전용가방 / 크기(가로x세로): 140x200cm',
	},
	{
		'id': 'AR48',
		'SEQ': 48,
		'cls1': '매트',
		'cls2': '텐트내부+아웃도어용',
		'cls3': '자충식매트',
		'goods': '홀러인터내셔널 일반 황동 자충매트 (60x188)',
		'price': 11480,
		'etc': '말이식(롤형) / 사용인원: 1인용 / 무게: 1600g / 구성품: 전용가방, 스트랩 / 색상: 레드, 블루, 옐로우 / 크기(가로x세로x두께): 60x188x5cm',
	},
	{
		'id': 'AR49',
		'SEQ': 49,
		'cls1': '매트',
		'cls2': '에어매트',
		'cls3': '접이식',
		'goods': '인텍스 듀라빔 스탠다드 에어매트 퀸 (152x203)',
		'price': 75360,
		'etc': '방수 / 구성품: 전용가방, 에어펌프 / 크기(가로x세로x두께): 152x203x30cm / 내장형 전동펌프 220V',
	},
	{
		'id': 'AR50',
		'SEQ': 50,
		'cls1': '매트',
		'cls2': '에어매트',
		'cls3': '접이식',
		'goods': '인텍스 듀라빔 스탠다드 에어매트 광폭 싱글 (99x191)',
		'price': 55190,
		'etc': '방수 / 구성품: 전용가방, 에어펌프 / 크기(가로x세로x두께): 99x191x30cm / 내장형 전동펌프 220V',
	},
	{
		'id': 'AR51',
		'SEQ': 51,
		'cls1': '매트',
		'cls2': '텐트내부+아웃도어용',
		'cls3': '엠보싱매트',
		'goods': '파크론 고밀도 25배율 자이언트 캠핑매트 (180x240)',
		'price': 27300,
		'etc': '접이식(폴딩형) / 사용인원: 8인용 / 재질: 폴리에스테르 / 무게: 1800g / 구성품: 전용가방 / 크기(가로x세로x두께): 240x180x2cm',
	},
	{
		'id': 'AR52',
		'SEQ': 52,
		'cls1': '매트',
		'cls2': '텐트내부+아웃도어용',
		'cls3': '자충식매트',
		'goods': '비제이글로벌 스위스클럽 자동충전 에어 쿨매트 (65x200)',
		'price': 53590,
		'etc': '말이식(롤형) / 사용인원: 1인용 / 방수 / 무게: 2000g / 구성품: 전용가방, 스트랩 / 크기(가로x세로x두께): 65x200x5cm',
	},
	{
		'id': 'AR53',
		'SEQ': 53,
		'cls1': '매트',
		'cls2': '텐트내부+아웃도어용',
		'cls3': '에어매트',
		'goods': '인텍스 블루 퀸 에어매트 (152x203)',
		'price': 17900,
		'etc': '말이식(롤형) / 사용인원: 5인용 / 무게: 4600g / 크기(가로x세로x두께): 152x203x22cm / 내하중: 273kg',
	},
	{
		'id': 'AR54',
		'SEQ': 54,
		'cls1': '매트',
		'cls2': '텐트내부+아웃도어용',
		'cls3': '자충식매트',
		'goods': '파크론 클라우드 캠핑매트 트윈 (136x196, 에스닉)',
		'price': 59760,
		'etc': '말이식(롤형) / 사용인원: 1인용 / 방수 / 재질: 폴리에스테르 / 무게: 4.5kg / 구성품: 스트랩 / 크기(가로x세로x두께): 136x196x5cm',
	},
	{
		'id': 'AR55',
		'SEQ': 55,
		'cls1': '매트',
		'cls2': '텐트내부+아웃도어용',
		'cls3': '자충식매트',
		'goods': '나린 케븐 황동 2구 자충매트 8cm (70x190)',
		'price': 31120,
		'etc': '말이식(롤형) / 사용인원: 1인용 / 방수 / 재질: 폴리에스테르 / 무게: 2750g / 구성품: 전용가방, 스트랩 / 크기(가로x세로x두께): 70x190x8cm',
	},
	{
		'id': 'AR56',
		'SEQ': 56,
		'cls1': '침낭',
		'cls2': '사각',
		'cls3': '사용계절',
		'goods': '비젼코베아 코베아 트로피칼 800',
		'price': 27480,
		'etc': '충전재: 폴리에스테르 / 내한온도: 5℃ / 무게: 1.4kg / 크기(가로x세로): 85x190cm',
	},
	{
		'id': 'AR57',
		'SEQ': 57,
		'cls1': '매트',
		'cls2': '텐트내부+아웃도어용',
		'cls3': '자충식매트',
		'goods': '노마드 뉴 인디언 황동 2구 자충매트 싱글 (65x190)',
		'price': 32460,
		'etc': '말이식(롤형) / 사용인원: 1인용 / 방수 / 재질: 폴리에스테르 / 무게: 1730g / 구성품: 전용가방, 스트랩 / 크기(가로x세로x두께): 65x190x5cm',
	},
	{
		'id': 'AR58',
		'SEQ': 58,
		'cls1': '매트',
		'cls2': '텐트내부+아웃도어용',
		'cls3': '에어매트',
		'goods': '네이처하이크 NH 더블 에어매트 6.5 (120x200)',
		'price': 86460,
		'etc': '말이식(롤형) / 사용인원: 2인용 / 무게: 1000g / 크기(가로x세로x두께): 본체-120x200x6.5cm, 수납크기-12x30cm / 색상: 블루, 오렌지 / 구성품: 에어매트, 펌프백, 전용가방',
	},
	{
		'id': 'AR59',
		'SEQ': 59,
		'cls1': '매트',
		'cls2': '텐트내부+아웃도어용',
		'cls3': '피크닉매트',
		'goods': '파크론 에스닉 콤비 다용도 돗자리 대 (180x240)',
		'price': 27590,
		'etc': '말이식(롤형) / 사용인원: 8인용 / 방수 / 재질: 폴리에틸렌 / 무게: 800g / 구성품: 전용가방 / 크기(가로x세로): 180x240cm',
	},
	{
		'id': 'AR60',
		'SEQ': 60,
		'cls1': '매트',
		'cls2': '텐트내부+아웃도어용',
		'cls3': '에어매트',
		'goods': '스패로우 더블 자충매트 (120x193)',
		'price': 84250,
		'etc': '말이식(롤형) / 사용인원: 1인용 / 구성품: 전용가방, 스트랩 / 크기(가로x세로x두께): 120x193x5cm / 무게: 4kg',
	}
];

const treeData = [
	{
		Sol: '솔루션팀',
		Y202101: '',
		Y202102: '',
		Y202103: '',
		Y202104: '',
		Y202105: '',
		Items: [
			{
				Sol: '개발팀',
				Y202101: 100,
				Y202102: 95,
				Y202103: 78,
				Y202104: 80,
				Y202105: 89,
				Items: [
					{
						Sol: '제품개발팀',
						Y202101: 75,
						Y202102: 92,
						Y202103: 88,
						Y202104: 94,
						Y202105: 98,
						Items: [
							{
								Sol: '화면개발팀',
								Y202101: 80,
								Y202102: 81,
								Y202103: 72,
								Y202104: 67,
								Y202105: 55,
							},
							{
								Sol: '디비개발팀',
								Y202101: 67,
								Y202102: 77,
								Y202103: 55,
								Y202104: 99,
								Y202105: 100,
							},
							{
								Sol: '디자인팀',
								Y202101: 85,
								Y202102: 99,
								Y202103: 94,
								Y202104: 92,
								Y202105: 75,
							},
						]
					},
					{
						Sol: '신제품개발팀',
						Y202101: 80,
						Y202102: 91,
						Y202103: 84,
						Y202104: 92,
						Y202105: 91,
						Items: [
							{
								Sol: '화면개발팀',
								Y202101: 80,
								Y202102: 77,
								Y202103: 11,
								Y202104: 67,
								Y202105: 70,
							},
							{
								Sol: '디비개발팀',
								Y202101: 67,
								Y202102: 75,
								Y202103: 55,
								Y202104: 70,
								Y202105: 80,
							},
							{
								Sol: '디자인팀',
								Y202101: 85,
								Y202102: 99,
								Y202103: 94,
								Y202104: 92,
								Y202105: 74,
							}
						]
					},
				]
			},
			{
				Sol: '지원팀',
				Y202101: 94,
				Y202102: 91,
				Y202103: 89,
				Y202104: 75,
				Y202105: 86,
				Items: [
					{
						Sol: '기술지원팀',
							Y202101: 88,
							Y202102: 87,
							Y202103: 82,
							Y202104: 81,
							Y202105: 80,
					},
					{
						Sol: '개발지원팀',
							Y202101: 48,
							Y202102: 77,
							Y202103: 93,
							Y202104: 64,
							Y202105: 72,
					},
				]
			},
			{
				Sol: '영업팀',
				Y202101: 50,
				Y202102: 91,
				Y202103: 78,
				Y202104: 68,
				Y202105: 99,
			},
			{
				Sol: '테스트팀1',
				Y202101: 70,
				Y202102: 70,
				Y202103: 71,
				Y202104: 73,
				Y202105: 67,
			},
			{
				Sol: '테스트팀2',
				Y202101: 68,
				Y202102: 61,
				Y202103: 72,
				Y202104: 80,
				Y202105: 99,
			},
			{
				Sol: '테스트팀3',
				Y202101: 49,
				Y202102: 89,
				Y202103: 74,
				Y202104: 66,
				Y202105: 99,
			},
			{
				Sol: '기획팀',
				Y202101: 88,
				Y202102: 87,
				Y202103: 75,
				Y202104: 45,
				Y202105: 98,
				Items: [
					{
						Sol: '개발기획팀',
						Y202101: 75,
						Y202102: 52,
						Y202103: 35,
						Y202104: 45,
						Y202105: 15,
					}
				]
			}
		]
	}
];

const subData = [
	{
		sPolicy: '정적자원운용',
		sUnit: '정규직인건비',
		sDetail: '교원인건비',
		A: '3530855848000',
		B: '1904204573440',
		C: '19847770130',
		D: '1924052343569.9998',
		E: '54.49252'
	},
	{
		sPolicy: '인적자원운용',
		sUnit: '정규직인건비',
		sDetail: '지방공무원인건비',
		A: '461430193000',
		B: '247492523010',
		C: '2628843840',
		D: '250121366850',
		E: '54.205678'
	},
	{
		sPolicy: '인적자원운용',
		sUnit: '비정규직인건비',
		sDetail: '계약제교원인건비',
		A: '194234361000',
		B: '110681334570',
		C: '1160516120',
		D: '111841850690',
		E: '57.580878'
	},
	{
		sPolicy: '인적자원운용',
		sUnit: '비정규직인건비',
		sDetail: '계약제직원인건비',
		A: '7018400000',
		B: '3443668820',
		C: '2340000',
		D: '3446008820',
		E: '49.099636'
	},
	{
		sPolicy: '인적자원운용',
		sUnit: '교원역량강화',
		sDetail: '교원연수지원',
		A: '2971246000',
		B: '2346726550',
		C: '0',
		D: '2346726550',
		E: '78.981227'
	},
	{
		sPolicy: '인적자원운용',
		sUnit: '교원역량강화',
		sDetail: '교원연수운영',
		A: '2739113250',
		B: '1502240580',
		C: '0',
		D: '1502240580',
		E: '54.844048'
	},
	{
		sPolicy: '인적자원운용',
		sUnit: '지방공무원역량강화',
		sDetail: '지방공무원연수지원',
		A: '442570000',
		B: '283276930',
		C: '0',
		D: '283276930',
		E: '64.00726'
	},
	{
		sPolicy: '인적자원운용',
		sUnit: '지방공무원역량강화',
		sDetail: '지방공무원연수운영',
		A: '1169109000',
		B: '485450400',
		C: '0',
		D: '485450400',
		E: '41.523109'
	},
	{
		sPolicy: '인적자원운용',
		sUnit: '교원인사관리',
		sDetail: '교원임용관리',
		A: '3215238000',
		B: '1153427870',
		C: '0',
		D: '1153427870',
		E: '35.873794'
	},
	{
		sPolicy: '교수-학습활동지원',
		sUnit: '교육과정개발운영',
		sDetail: '교육과정운영',
		A: '11281630000',
		B: '10060625060',
		C: '6620000',
		D: '10067245060',
		E: '89.235732'
	},
	{
		sPolicy: '교수-학습활동지원',
		sUnit: '교육과정개발운영',
		sDetail: '교과자료개발보급',
		A: '144355000',
		B: '30621200',
		C: '0',
		D: '30621200',
		E: '21.212428'
	},
	{
		sPolicy: '교수-학습활동지원',
		sUnit: '교육과정개발운영',
		sDetail: '창의인성교육운영',
		A: '280820000',
		B: '159620000',
		C: '0',
		D: '159620000',
		E: '56.840681'
	},
	{
		sPolicy: '교수-학습활동지원',
		sUnit: '교육과정개발운영',
		sDetail: '특색교육과정운영',
		A: '61843186000',
		B: '47466168040',
		C: '0',
		D: '47466168040',
		E: '76.752462'
	},
	{
		sPolicy: '교수-학습활동지원',
		sUnit: '학력신장',
		sDetail: '학력향상지원',
		A: '2151934790',
		B: '1974256790',
		C: '0',
		D: '1974256790',
		E: '91.743337'
	},
	{
		sPolicy: '교수-학습활동지원',
		sUnit: '수업지원장학활동',
		sDetail: '현장중심장학활동지원',
		A: '12478023000',
		B: '9582538400',
		C: '0',
		D: '9582538400',
		E: '76.795326'
	},
	{
		sPolicy: '교수-학습활동지원',
		sUnit: '수업지원장학활동',
		sDetail: '수석교사제운영',
		A: '1454771000',
		B: '1201380000',
		C: '0',
		D: '1201380000',
		E: '82.58207'
	},
	{
		sPolicy: '교수-학습활동지원',
		sUnit: '연구시범학교운영',
		sDetail: '연구시범학교운영',
		A: '1669450000',
		B: '1668610000',
		C: '0',
		D: '1668610000',
		E: '99.949684'
	},
	{
		sPolicy: '교수-학습활동지원',
		sUnit: '교과교육연구회운영활성화',
		sDetail: '교과교육연구회지원',
		A: '256589000',
		B: '157835280',
		C: '880000',
		D: '158715280',
		E: '61.855839'
	},
	{
		sPolicy: '교수-학습활동지원',
		sUnit: '유아교육진흥',
		sDetail: '유아교육지원',
		A: '2193337700',
		B: '1094969250',
		C: '0',
		D: '1094969250',
		E: '49.922511'
	},
	{
		sPolicy: '교수-학습활동지원',
		sUnit: '유아교육진흥',
		sDetail: '유치원방과후과정운영',
		A: '3635250000',
		B: '3041490000',
		C: '30000000',
		D: '3071490000',
		E: '84.491851'
	},
	{
		sPolicy: '교수-학습활동지원',
		sUnit: '진로진학교육',
		sDetail: '진로진학교육',
		A: '4256580000',
		B: '2655569820',
		C: '150000000',
		D: '2805569820',
		E: '65.911361'
	},
	{
		sPolicy: '교수-학습활동지원',
		sUnit: '학력평가',
		sDetail: '학력평가관리',
		A: '10215307000',
		B: '6955042810',
		C: '0',
		D: '6955042810',
		E: '68.084521'
	},
	{
		sPolicy: '교육복지지원',
		sUnit: '학비지원',
		sDetail: '저소득층자녀학비지원',
		A: '36624646500',
		B: '24655662500',
		C: '0',
		D: '24655662500',
		E: '67.319865'
	},
	{
		sPolicy: '교육복지지원',
		sUnit: '학비지원',
		sDetail: '특성화고장학금지원',
		A: '48897776000',
		B: '25290259340',
		C: '0',
		D: '25290259340',
		E: '51.720674'
	},
	{
		sPolicy: '교육복지지원',
		sUnit: '학비지원',
		sDetail: '기타교육비지원',
		A: '1285680000',
		B: '375361880',
		C: '0',
		D: '375361880',
		E: '29.195591'
	},
	{
		sPolicy: '교육복지지원',
		sUnit: '학비지원',
		sDetail: '교육급여지원',
		A: '62723206000',
		B: '23145348100',
		C: '0',
		D: '23145348100',
		E: '36.900773'
	},
	{
		sPolicy: '교육복지지원',
		sUnit: '방과후등교육지원',
		sDetail: '방과후학교운영',
		A: '51017336000',
		B: '37993758710',
		C: '0',
		D: '37993758710',
		E: '74.472251'
	},
	{
		sPolicy: '교육복지지원',
		sUnit: '방과후등교육지원',
		sDetail: '저소득층자녀방과후자유수강권지원',
		A: '25984800000',
		B: '15993135800',
		C: '0',
		D: '15993135800',
		E: '61.548043'
	},
	{
		sPolicy: '교육복지지원',
		sUnit: '급식지원',
		sDetail: '학기중급식비지원',
		A: '35611522000',
		B: '20722200000',
		C: '0',
		D: '20722200000',
		E: '58.189594'
	},
	{
		sPolicy: '교육복지지원',
		sUnit: '급식지원',
		sDetail: '토·공휴일중식지원',
		A: '5651532000',
		B: '3689453000',
		C: '0',
		D: '3689453000',
		E: '65.282352'
	},
	{
		sPolicy: '교육복지지원',
		sUnit: '정보화지원',
		sDetail: '정보화지원',
		A: '5646158000',
		B: '2089439330',
		C: '0',
		D: '2089439330',
		E: '37.006391'
	},
	{
		sPolicy: '교육복지지원',
		sUnit: '교육복지우선지원',
		sDetail: '교육복지우선지원',
		A: '43951618000',
		B: '32766707740',
		C: '2889480',
		D: '32769597220',
		E: '74.558341'
	},
	{
		sPolicy: '교육복지지원',
		sUnit: '누리과정지원',
		sDetail: '누리과정지원',
		A: '384128770000',
		B: '305151702500',
		C: '0',
		D: '305151702500',
		E: '79.43995'
	}
];

const formulaData = [
	{
		sArea: '서울시 강서구',
		sTheater: 20,
		sScreen: 100,
		sSeat: 20000,
		sNormal: 21,
		sDigital2: 103,
		sDigital3: 50,
		sDigital4: 3,
		sDigitalImax: 3
	},
	{
		sArea: '서울시 양천구',
		sTheater: 10,
		sScreen: 50,
		sSeat: 10000,
		sNormal: 10,
		sDigital2: 51,
		sDigital3: 24,
		sDigital4: 2,
		sDigitalImax: 2
	},
	{
		sArea: '서울시 구로구',
		sTheater: 4,
		sScreen: 25,
		sSeat: 5000,
		sNormal: 5,
		sDigital2: 27,
		sDigital3: 22,
		sDigital4: 2,
		sDigitalImax: 2
	},
	{
		sArea: '서울시 은평구',
		sTheater: 5,
		sScreen: 25,
		sSeat: 5010,
		sNormal: 82,
		sDigital2: 28,
		sDigital3: 23,
		sDigital4: 2,
		sDigitalImax: 2
	},
	{
		sArea: '서울시 서대문구',
		sTheater: 10,
		sScreen: 50,
		sSeat: 10040,
		sNormal: 160,
		sDigital2: 56,
		sDigital3: 46,
		sDigital4: 4,
		sDigitalImax: 4
	},
	{
		sArea: '서울시 마포구',
		sTheater: 10,
		sScreen: 50,
		sSeat: 10340,
		sNormal: 170,
		sDigital2: 60,
		sDigital3: 30,
		sDigital4: 5,
		sDigitalImax: 4
	},
	{
		sArea: '서울시 영등포구',
		sTheater: 3,
		sScreen: 20,
		sSeat: 4000,
		sNormal: 40,
		sDigital2: 50,
		sDigital3: 10,
		sDigital4: 15,
		sDigitalImax: 4
	},
	{
		sArea: '서울시 금천구',
		sTheater: 3,
		sScreen: 52,
		sSeat: 3500,
		sNormal: 35,
		sDigital2: 40,
		sDigital3: 10,
		sDigital4: 5,
		sDigitalImax: 4
	},
	{
		sArea: '서울시 용산구',
		sTheater: 3,
		sScreen: 51,
		sSeat: 4000,
		sNormal: 25,
		sDigital2: 30,
		sDigital3: 10,
		sDigital4: 3,
		sDigitalImax: 1
	},
	{
		sArea: '서울시 동작구',
		sTheater: 5,
		sScreen: 45,
		sSeat: 3000,
		sNormal: 25,
		sDigital2: 15,
		sDigital3: 10,
		sDigital4: 1,
		sDigitalImax: 1
	},
	{
		sArea: '서울시 관악구',
		sTheater: 7,
		sScreen: 60,
		sSeat: 5000,
		sNormal: 20,
		sDigital2: 11,
		sDigital3: 11,
		sDigital4: 1,
		sDigitalImax: 1
	},
	{
		sArea: '서울시 종로구',
		sTheater: 4,
		sScreen: 60,
		sSeat: 5000,
		sNormal: 20,
		sDigital2: 11,
		sDigital3: 1,
		sDigital4: 1,
		sDigitalImax: 1
	},
	{
		sArea: '서울시 중구',
		sTheater: 4,
		sScreen: 30,
		sSeat: 4555,
		sNormal: 35,
		sDigital2: 25,
		sDigital3: 7,
		sDigital4: 7,
		sDigitalImax: 1
	},
	{
		sArea: '서울시 서초구',
		sTheater: 6,
		sScreen: 45,
		sSeat: 5000,
		sNormal: 50,
		sDigital2: 30,
		sDigital3: 20,
		sDigital4: 4,
		sDigitalImax: 4
	},
	{
		sArea: '서울시 강남구',
		sTheater: 6,
		sScreen: 45,
		sSeat: 5554,
		sNormal: 50,
		sDigital2: 30,
		sDigital3: 20,
		sDigital4: 4,
		sDigitalImax: 4
	},
	{
		sArea: '서울시 송파구',
		sTheater: 6,
		sScreen: 42,
		sSeat: 4441,
		sNormal: 55,
		sDigital2: 14,
		sDigital3: 11,
		sDigital4: 3,
		sDigitalImax: 4
	},
	{
		sArea: '서울시 노원구',
		sTheater: 6,
		sScreen: 51,
		sSeat: 6570,
		sNormal: 50,
		sDigital2: 16,
		sDigital3: 14,
		sDigital4: 3,
		sDigitalImax: 4
	},
	{
		sArea: '서울시 동대문구',
		sTheater: 2,
		sScreen: 30,
		sSeat: 2850,
		sNormal: 25,
		sDigital2: 10,
		sDigital3: 5,
		sDigital4: 1,
		sDigitalImax: 1
	},
	{
		sArea: '서울시 성북구',
		sTheater: 3,
		sScreen: 40,
		sSeat: 3500,
		sNormal: 24,
		sDigital2: 10,
		sDigital3: 4,
		sDigital4: 2,
		sDigitalImax: 1
	},
	{
		sArea: '경기도',
		sTheater: 96,
		sScreen: 570,
		sSeat: 89065,
		sNormal: 26,
		sDigital2: 545,
		sDigital3: 191,
		sDigital4: 8,
		sDigitalImax: 4
	},
	{
		sArea: '강원도',
		sTheater: 15,
		sScreen: 76,
		sSeat: 12103,
		sNormal: 6,
		sDigital2: 71,
		sDigital3: 26,
		sDigital4: 0,
		sDigitalImax: 1
	},
	{
		sArea: '충청북도',
		sTheater: 11,
		sScreen: 84,
		sSeat: 14641,
		sNormal: 13,
		sDigital2: 80,
		sDigital3: 23,
		sDigital4: 1,
		sDigitalImax: 0
	},
	{
		sArea: '충청남도',
		sTheater: 19,
		sScreen: 102,
		sSeat: 13798,
		sNormal: 4,
		sDigital2: 92,
		sDigital3: 42,
		sDigital4: 1,
		sDigitalImax: 0
	},
	{
		sArea: '경상북도',
		sTheater: 19,
		sScreen: 100,
		sSeat: 16053,
		sNormal: 7,
		sDigital2: 85,
		sDigital3: 20,
		sDigital4: 0,
		sDigitalImax: 0
	},
	{
		sArea: '경상남도',
		sTheater: 25,
		sScreen: 141,
		sSeat: 23387,
		sNormal: 2,
		sDigital2: 129,
		sDigital3: 49,
		sDigital4: 2,
		sDigitalImax: 1
	},
	{
		sArea: '전라북도',
		sTheater: 23,
		sScreen: 107,
		sSeat: 15746,
		sNormal: 7,
		sDigital2: 104,
		sDigital3: 41,
		sDigital4: 1,
		sDigitalImax: 1
	},
	{
		sArea: '전라남도',
		sTheater: 13,
		sScreen: 74,
		sSeat: 10365,
		sNormal: 2,
		sDigital2: 73,
		sDigital3: 26,
		sDigital4: 0,
		sDigitalImax: 0
	},
	{
		sArea: '제주도',
		sTheater: 6,
		sScreen: 33,
		sSeat: 4468,
		sNormal: 1,
		sDigital2: 33,
		sDigital3: 9,
		sDigital4: 0,
		sDigitalImax: 0
	},
	{
		sArea: '부산시',
		sTheater: 31,
		sScreen: 197,
		sSeat: 37883,
		sNormal: 35,
		sDigital2: 189,
		sDigital3: 76,
		sDigital4: 3,
		sDigitalImax: 1
	},
	{
		sArea: '대구시',
		sTheater: 24,
		sScreen: 133,
		sSeat: 21465,
		sNormal: 7,
		sDigital2: 132,
		sDigital3: 55,
		sDigital4: 1,
		sDigitalImax: 1
	},
	{
		sArea: '대전시',
		sTheater: 12,
		sScreen: 73,
		sSeat: 13257,
		sNormal: 4,
		sDigital2: 73,
		sDigital3: 26,
		sDigital4: 2,
		sDigitalImax: 1
	},
	{
		sArea: '울산시',
		sTheater: 7,
		sScreen: 42,
		sSeat: 7727,
		sNormal: 8,
		sDigital2: 40,
		sDigital3: 17,
		sDigital4: 2,
		sDigitalImax: 1
	},
	{
		sArea: '인천시',
		sTheater: 22,
		sScreen: 133,
		sSeat: 21673,
		sNormal: 10,
		sDigital2: 119,
		sDigital3: 43,
		sDigital4: 1,
		sDigitalImax: 1
	},
	{
		sArea: '광주시',
		sTheater: 16,
		sScreen: 111,
		sSeat: 18893,
		sNormal: 9,
		sDigital2: 110,
		sDigital3: 34,
		sDigital4: 2,
		sDigitalImax: 1
	},
	{
		sArea: '세종시',
		sTheater: 3,
		sScreen: 14,
		sSeat: 1963,
		sNormal: 0,
		sDigital2: 14,
		sDigital3: 4,
		sDigital4: 0,
		sDigitalImax: 0
	}
];

const bigData = (count) => {
	const data = [];
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
		data.push({
			sCompany: company[Math.floor(Math.random() * 10)],
			sCountry: country[Math.floor(Math.random() * 10)],
			sSaleQuantity: Math.floor(Math.random() * 100000),
			sSaleIncrease: Math.floor(Math.random() * 10000),
			sPrice: Math.floor(Math.random() * 10000000),
			sSatisfaction: Math.floor(Math.random() * (100 - 50 + 1) + 50),
		});
	}

	return data;
}

const formData = [
	{
		sName: '홍길동',
		sAge: 29,
		sPosi: '사원',
		sPrice: 3800000,
		sDepart: '개발팀'
	},
	{
		sName: '고길동',
		sAge: 32,
		sPosi: '주임',
		sPrice: 4200000,
		sDepart: '개발팀'
	},
	{
		sName: '김상아',
		sAge: 30,
		sPosi: '사원',
		sPrice: 3700000,
		sDepart: '개발팀'
	},
	{
		sName: '이상연',
		sAge: 27,
		sPosi: '사원',
		sPrice: 3000000,
		sDepart: '개발팀'
	},
	{
		sName: '임상영',
		sAge: 36,
		sPosi: '대리',
		sPrice: 5000000,
		sDepart: '개발팀'
	},
	{
		sName: '허성재',
		sAge: 38,
		sPosi: '과장',
		sPrice: 6200000,
		sDepart: '개발팀'
	},
	{
		sName: '이상현',
		sAge: 45,
		sPosi: '부장',
		sPrice: 7800000,
		sDepart: '개발팀'
	},
	{
		sName: '유승연',
		sAge: 29,
		sPosi: '사원',
		sPrice: 3300000,
		sDepart: '영업팀'
	},
	{
		sName: '임시환',
		sAge: 32,
		sPosi: '대리',
		sPrice: 3800000,
		sDepart: '영업팀'
	},
	{
		sName: '박재현',
		sAge: 39,
		sPosi: '과장',
		sPrice: 5100000,
		sDepart: '영업팀'
	},
	{
		sName: '임조영',
		sAge: 27,
		sPosi: '사원',
		sPrice: 3000000,
		sDepart: '지원팀'
	},
	{
		sName: '이재빈',
		sAge: 29,
		sPosi: '사원',
		sPrice: 3100000,
		sDepart: '지원팀'
	},
	{
		sName: '신재환',
		sAge: 33,
		sPosi: '대리',
		sPrice: 3800000,
		sDepart: '지원팀'
	},
	{
		sName: '박채민',
		sAge: 42,
		sPosi: '과장',
		sPrice: 5200000,
		sDepart: '지원팀'
	},
	{
		sName: '김청호',
		sAge: 28,
		sPosi: '사원',
		sPrice: 3300000,
		sDepart: '인사팀'
	},
	{
		sName: '민청하',
		sAge: 34,
		sPosi: '대리',
		sPrice: 3900000,
		sDepart: '인사팀'
	},
	{
		sName: '윤다헌',
		sAge: 39,
		sPosi: '과장',
		sPrice: 5200000,
		sDepart: '인사팀'
	},
	{
		sName: '김태연',
		sAge: 55,
		sPosi: '이사',
		sPrice: 7100000,
		sDepart: '인사팀'
	},
	{
		sName: '민대원',
		sAge: 33,
		sPosi: '대리',
		sPrice: 4000000,
		sDepart: '경영팀'
	},
	{
		sName: '류태율',
		sAge: 39,
		sPosi: '과장',
		sPrice: 5300000,
		sDepart: '경영팀'
	},
];

const multiData1 = [
	{
		goods: '가방',
		jan: 15000,
		feb: 20000,
		mar: 15200,
		apr: 13000
	},
	{
		goods: '신발',
		jan: 14000,
		feb: 17000,
		mar: 13200,
		apr: 12000
	},
	{
		goods: '장갑',
		jan: 11000,
		feb: 21000,
		mar: 14200,
		apr: 15000
	},
	{
		goods: '시계',
		jan: 38000,
		feb: 28000,
		mar: 19200,
		apr: 90000
	},
	{
		goods: '옷',
		jan: 88000,
		feb: 67000,
		mar: 22200,
		apr: 23000
	},
	{
		goods: '악세서리',
		jan: 33000,
		feb: 75000,
		mar: 22500,
		apr: 24000
	},
	{
		goods: '핸드폰',
		jan: 330000,
		feb: 290000,
		mar: 450000,
		apr: 280000
	},
	{
		goods: '화장품',
		jan: 33000,
		feb: 74000,
		mar: 35500,
		apr: 71500
	},
	{
		goods: '책',
		jan: 9500,
		feb: 15000,
		mar: 17500,
		apr: 8800
	},
	{
		goods: '약품',
		jan: 32000,
		feb: 71000,
		mar: 22000,
		apr: 11000
	},
	{
		goods: '키보드',
		jan: 34000,
		feb: 71000,
		mar: 65000,
		apr: 34000
	},
	{
		goods: '기타제품1',
		jan: 11000,
		feb: 13000,
		mar: 14000,
		apr: 12000
	},
	{
		goods: '기타제품2',
		jan: 12000,
		feb: 13500,
		mar: 14500,
		apr: 12000
	},
	{
		goods: '기타제품3',
		jan: 21000,
		feb: 23000,
		mar: 24000,
		apr: 22000
	},
	{
		goods: '기타제품4',
		jan: 18000,
		feb: 18000,
		mar: 14000,
		apr: 19000
	},
	{
		goods: '기타제품5',
		jan: 31000,
		feb: 13000,
		mar: 34000,
		apr: 32000
	},
	{
		goods: '기타제품6',
		jan: 14000,
		feb: 16000,
		mar: 14000,
		apr: 9000
	},
	{
		goods: '기타제품6',
		jan: 19000,
		feb: 19000,
		mar: 15500,
		apr: 12500
	},
	{
		goods: '기타제품7',
		jan: 8000,
		feb: 3000,
		mar: 7000,
		apr: 2000
	},
	{
		goods: '기타제품8',
		jan: 21000,
		feb: 23000,
		mar: 34000,
		apr: 32000
	},
	{
		goods: '기타제품9',
		jan: 10000,
		feb: 19000,
		mar: 12000,
		apr: 11000
	},
];
const multiData2 = [
	{
		goods: '가방',
		may: 15000,
		jun: 20000,
		jul: 15200,
		aug: 13000
	},
	{
		goods: '신발',
		may: 14000,
		jun: 17000,
		jul: 13200,
		aug: 12000
	},
	{
		goods: '장갑',
		may: 11000,
		jun: 21000,
		jul: 14200,
		aug: 15000
	},
	{
		goods: '시계',
		may: 38000,
		jun: 28000,
		jul: 19200,
		aug: 90000
	},
	{
		goods: '옷',
		may: 88000,
		jun: 67000,
		jul: 22200,
		aug: 23000
	},
	{
		goods: '악세서리',
		may: 33000,
		jun: 75000,
		jul: 22500,
		aug: 24000
	},
	{
		goods: '핸드폰',
		may: 330000,
		jun: 290000,
		jul: 450000,
		aug: 280000
	},
	{
		goods: '화장품',
		may: 33000,
		jun: 74000,
		jul: 35500,
		aug: 71500
	},
	{
		goods: '책',
		may: 9500,
		jun: 15000,
		jul: 17500,
		aug: 8800
	},
	{
		goods: '약품',
		may: 32000,
		jun: 71000,
		jul: 22000,
		aug: 11000
	},
	{
		goods: '키보드',
		may: 34000,
		jun: 71000,
		jul: 65000,
		aug: 34000
	},
	{
		goods: '기타제품1',
		may: 11000,
		jun: 13000,
		jul: 14000,
		aug: 12000
	},
	{
		goods: '기타제품2',
		may: 12000,
		jun: 13500,
		jul: 14500,
		aug: 12000
	},
	{
		goods: '기타제품3',
		may: 21000,
		jun: 23000,
		jul: 24000,
		aug: 22000
	},
	{
		goods: '기타제품4',
		may: 18000,
		jun: 18000,
		jul: 14000,
		aug: 19000
	},
	{
		goods: '기타제품5',
		may: 31000,
		jun: 13000,
		jul: 34000,
		aug: 32000
	},
	{
		goods: '기타제품6',
		may: 14000,
		jun: 16000,
		jul: 14000,
		aug: 9000
	},
	{
		goods: '기타제품6',
		may: 19000,
		jun: 19000,
		jul: 15500,
		aug: 12500
	},
	{
		goods: '기타제품7',
		may: 8000,
		jun: 3000,
		jul: 7000,
		aug: 2000
	},
	{
		goods: '기타제품8',
		may: 21000,
		jun: 23000,
		jul: 34000,
		aug: 32000
	},
	{
		goods: '기타제품9',
		may: 10000,
		jun: 19000,
		jul: 12000,
		aug: 11000
	},
];
const multiData3 = [
	{
		goods: '가방',
		sep: 15000,
		oct: 20000,
		nov: 15200,
		dec: 13000
	},
	{
		goods: '신발',
		sep: 14000,
		oct: 17000,
		nov: 13200,
		dec: 12000
	},
	{
		goods: '장갑',
		sep: 11000,
		oct: 21000,
		nov: 14200,
		dec: 15000
	},
	{
		goods: '시계',
		sep: 38000,
		oct: 28000,
		nov: 19200,
		dec: 90000
	},
	{
		goods: '옷',
		sep: 88000,
		oct: 67000,
		nov: 22200,
		dec: 23000
	},
	{
		goods: '악세서리',
		sep: 33000,
		oct: 75000,
		nov: 22500,
		dec: 24000
	},
	{
		goods: '핸드폰',
		sep: 330000,
		oct: 290000,
		nov: 450000,
		dec: 280000
	},
	{
		goods: '화장품',
		sep: 33000,
		oct: 74000,
		nov: 35500,
		dec: 71500
	},
	{
		goods: '책',
		sep: 9500,
		oct: 15000,
		nov: 17500,
		dec: 8800
	},
	{
		goods: '약품',
		sep: 32000,
		oct: 71000,
		nov: 22000,
		dec: 11000
	},
	{
		goods: '키보드',
		sep: 34000,
		oct: 71000,
		nov: 65000,
		dec: 34000
	},
	{
		goods: '기타제품1',
		sep: 11000,
		oct: 13000,
		nov: 14000,
		dec: 12000
	},
	{
		goods: '기타제품2',
		sep: 12000,
		oct: 13500,
		nov: 14500,
		dec: 12000
	},
	{
		goods: '기타제품3',
		sep: 21000,
		oct: 23000,
		nov: 24000,
		dec: 22000
	},
	{
		goods: '기타제품4',
		sep: 18000,
		oct: 18000,
		nov: 14000,
		dec: 19000
	},
	{
		goods: '기타제품5',
		sep: 31000,
		oct: 13000,
		nov: 34000,
		dec: 32000
	},
	{
		goods: '기타제품6',
		sep: 14000,
		oct: 16000,
		nov: 14000,
		dec: 9000
	},
	{
		goods: '기타제품6',
		sep: 19000,
		oct: 19000,
		nov: 15500,
		dec: 12500
	},
	{
		goods: '기타제품7',
		sep: 8000,
		oct: 3000,
		nov: 7000,
		dec: 2000
	},
	{
		goods: '기타제품8',
		sep: 21000,
		oct: 23000,
		nov: 34000,
		dec: 32000
	},
	{
		goods: '기타제품9',
		sep: 10000,
		oct: 19000,
		nov: 12000,
		dec: 11000
	},
];


export {typeData, mergeData, treeData, subData, formulaData, bigData, formData, multiData1, multiData2, multiData3};