/*
'mouse', 0
'cow', 1
'tiger', 2
'rabbit', 3
'dragon', 4
'snake', 5
'horse', 6
'sheep', 7
'monkey', 8
'chick', 9
'dog', 10
'pig', 11
*/

const qnaList = [
  {
    q: '1. 나는 공주대학교 신입생!! 드디어 내일이면 새 학기가 시작된다. 내일 뭐 입고 가지?',
    a: [
      { answer: '이미 생각해놨지~ 이거랑 저거랑~', type: ['4','7','10'] },
      { answer: '아 몰라~ 내일 입고 싶은대로 입지 뭐~', type: ['0','1','2','6','9','11'] },
      { answer: '아 지각했다 잡히는대로!!', type: ['5', '8' ] },
    ]
  },
  {
    q: '2. 드디어 개강 날이다! 첫 대학교 등굣길. 지금 내 생각은?',
    a: [
      { answer: '벌써 집에 가고 싶다,,', type: ['0','1','2','6','9'] },
      { answer: '신나는 노래, 예쁜 하늘, 최고의 컨디션. 너무 설렌다!', type: ['4', '7', '10', '11'] },
      { answer: '아 지각했다 지름길이 어디지??', type: ['5','8'] },
    ]
  },
  {
    q: '3. 여기가 이제 내가 다닐 공주대구나! 학교에 도착하고, 이제 강의실로 가려는데,,,어떻게 가지?',
    a: [
      { answer: '이미 다 에타로 알아놨지~', type: ['1', '4'] },
      { answer: '여기가 어디지,,,? 이곳저곳 다 헤매본다,,,', type: ['5','6','7','9','11'] },
      { answer: '길을 모르겠으니 앞사람 따라가야겠다!', type: ['0','2','8','10'] }
    ]
  },
  {
    q: '4. 열심히 길을 찾아 강의실에 도착하고 빈자리에 앉았다. 강의실에서 처음으로 만난 옆자리 사람에게 나는?',
    a: [
      { answer: '마이쮸를 건네며, "안녕하세요!" 반갑게 인사한다 ', type: ['4','5','7','8','11' ] },
      { answer: '말 걸 때까지 가만히 있는다 ', type: ['0','1','2','6','9' ] },
      { answer: '제발 나한테 말 안 걸어줬으면,,,(바쁜 척을 한다)', type: ['10'] },
    ]
  },
  {
    q: '5. 교수님이 강의실로 들어오시고 OT가 시작했다. 그런데!! 첫날부터 교수님이 풀강을 하시려는 낌새가 보인다,,,',
    a: [
      { answer: '의지와 관계없이 졸기 시작한다', type: ['1','4','7','8','9','11' ] },
      { answer: '설마 첫날인데 출첵하겠어? 몰래 나갈까?', type: ['2','5','10']},
      { answer: 'OT여도 수업은 수업. 빡공 시작한다', type: ['0','6'] },
    ]
  },

  {
    q: '6. 이어지는 수업 도중 교수님이 간단한 질문을 하신다. 그러나 아무도 대답하지 않는데,,,',
    a: [
      { answer: '눈치를 보다가 "저요!" 손을 든다', type: ['10'] },
      { answer: '누군가는 하겠지...(나는 아님)', type: ['0','1','2','4','5','6','8','9','11' ] },
      { answer: '...(조느라 못 들음)', type: ['7'] },
    ]
  },
  {
    q: '7. 마침내 길고 긴 수업이 끝났다!! 그럼 이제 뭐하지?',
    a: [
      { answer: '학교 구경이나 해볼까?', type: ['4','7','8' ] },
      { answer: '수강신청 실패로 첫 날부터 연강이다!!! 바로 다음 수업으로 뛰어간다', type: ['10'] },
      { answer: '집(또는 기숙사)으로 간다', type: ['0','1','2','5','6','9','11' ] },
    ]
  },
  {
    q: '8. 꼬르륵~ 점심시간이다. 밥을 먹어야 하는데 아직 친구를 사귀지 못해 같이 먹을 사람이 없다. 이때 나는?',
    a: [
      { answer: '...(조용히 혼자 눈치 안 보고 밥 먹기 시작)', type: ['0','1','2','4','5','6','11' ] },
      { answer: '고향 친구에게 전화하며 애써 외로움을 달래본다', type: ['7','8','9' ] },
      { answer: '(밥보다는 잠을 택한다)', type: ['10'] },
    ]
  },
  {
    q: '9. 오늘의 모든 수업이 모두 끝났다. 이제 입학 전부터 눈여겨본 PRIMITIVE 동아리에 입부 신청하러 가볼까?',
    a: [
      { answer: '(첫인상이 중요하지) 당차게 인사하며 동아리방에 들어간다', type: ['4','7','8','9'] },
      { answer: '너무 떨린다. 심호흡을 하며 조심히 동아리방 문을 두드린다', type: ['9','10'] },
      { answer: '(이미 온라인 신청 완료)', type: ['0','1','2','5','6' ] },
    ]
  },
  {
    q: '10. PRIMITIVE 동아리방에 들어가자 선배들이 반갑게 맞아주신다! 그때 나는? ',
    a: [
      { answer: '안녕하세요! 24학번 ㅇㅇ학과 ㅇㅇㅇ입니다!(금세 말을 튼다)', type: ['1','4','8'] },
      { answer: '안녕하세요.(신청서만 조용히 내고 나온다) 감사합니다.', type: ['2','6','9','10','11' ] },
      { answer: '분위기에 이끌려 동아리 연혁까지 듣고 나온다,,,', type: ['0','5','7'] },
    ]
  },
  {
    q: '11. 알고 보니 동아리 신청은 온라인으로만 이루어진다고 한다!! 그렇게 PRIMITIVE 동아리방에서 나오는 길, 사실 동아리방에서 첫눈에 반한 선배가 있었다,,, ',
    a: [
      { answer: '아무리 생각해도 너무 내 스타일이다! (다시 들어가서 인스타 맞팔한다)', type: ['10'] },
      { answer: '아 정말 내 스타일이었지...(생각만 하고 집에 간다)', type: ['0','1','2','5','6','9','11'] },
      { answer: '동아리에 합격하면 꼭 친해지고,,,그러다 연애도 하고,,,,(망상을 하며 집에 간다)', type: ['4','7','8'] },
    ]
  },
  {
    q: '12. 그렇게 개강 첫날 모든 일정이 끝나고 집으로 돌아가는 길,,,',
    a: [
      { answer: '오늘 너무 좋았다. 대학은 재밌는 곳이구나. 내일이 기대된다!', type: ['7','10' ] },
      { answer: '피곤했다.,, 얼른 집에 가서 자야지,,,', type: ['0','1','2','5','6','9','11'] },
      { answer: '집이 뭐야~ 마셔 마셔~', type: ['4','8'] },
    ]
  }
]

const infoList = [
  {
    name: 'PRIMITIVE 동아리 회장 [민정]',
    desc: '"올해 PRIMITIVE 동아리의 리더, 멋진 리더십 소유자이다!"\n-차분하고 조용한 편이에요\n-어떤 분야든 한번 좋아하면 깊게 좋아해요\n-동물과 귀여운 것을 무지 좋아해요\n-순발력이 좋고, 남을 평등하게 대하고자 해요\n-내가 도와줄 수 있는 선에서 남을 최대한 돕고자 해요'
  },
  {
    name: 'PRIMITIVE 동아리 부회장 찬규',
    desc: '"올해 PRIMITIVE 동아리의 부회장, 꼼꼼함의 끝판왕"\n-계획이 틀어지는 게 싫어요. 계획은 미리미리 자세하게 세워놔야해요\n-본인 얘기를 잘 안하고 조용한 편이에요\n-의젓한 성격으로 장남, 장녀같다는 말을 많이 들어요\n-안정적인 방향을 선호하고, 갑작스러운 변화를 안 좋아해요\n-인내심이 강해요\n-주로 집에서 시간을 보내요'
  },
  {
    name: 'PRIMITIVE 기획부 부장 새론',
    desc: '"PRIMITIVE 활동 실질적 추진자, 여기로 가볼까요?"\n-세심하고 주의력을 필요로 하는 일을 하는 것을 좋아해요\n-친한 사람일수록 의외로 냉정하고 비판적인 모습을 보여줘요\n-첫인상을 차가워보인다는 말을 많이 듣지만 알고 보면 순둥이라는 말을 많이 들어요\n-남을 배려하다보니 자신의 것을 놓치는 경우가 많아요\n-그러려니/그렇구나/그럴수 있지/그런가보다 를 자주 말해요'
  },
  {
    name: 'PRIMITIVE 미디어부 부장 수정',
    desc: '"PRIMITIVE의 공식 사진작가, 여기보세요 여러분~ 찰칵~"\n-내가 피곤하더라도 남을 배려하는게 마음이 편해요\n-계획 세우는걸 좋아하지만 잘 지키지 않을 때도 있어요\n-친하고 마음 맞는 친구랑 단둘이 노는게 더 좋아요\n-상대방에 따라 개별적으로 성격을 맞춰가며 대하는 편이에요\n-생각이 너무 많다는 말을 자주 듣곤 해요'
  },
  {
    name: 'PRIMITIVE PC관리부 부장 석현',
    desc: '"PRIMITIVE 동아리방 컴퓨터 의사, 네? 또 인터넷이 안된다구요?"\n-빠르게 생각과 행동을 하고 현실적이에요\n-내기와 스릴를 좋아하는 편이에요\n-무언가를 관찰할 때는 선입견없이 있는 그대로 바라보며 분석하여 관찰력이 뛰어나요\n-자유를 추구하며 억압되는 것을 싫어하는 편이에요\n-다른 사람의 생각과 감정을 빠르게 파악할 수 있는 편이에요'
  },
  {
    name: 'PRIMITIVE 물품관리부 부장 서아',
    desc: '"PRIMITIVE에 필요한 물품은 모두 나를 통해요!"\n-완벽주의적인 성향이 강해요\n-이상한 유머코드를 갖고 있다는 말을 듣고는 해요\n-남에게 민폐끼치는 것을 강박적으로 피해요\n-상상력을 자극하는 창작물을 좋아해요\n-말수가 적고 생각이 많은 편이에요'
  },
  {
    name: '동아리방 지박령 현지',
    desc: '"PRIMITIVE 동아리방에 놀러오면 높은 확률로 만날 수 있어요!"\n- 자기가 느끼기에 편안한 곳에 오래 머물러 있는 것을 좋아해요\n- 논리와 분석으로 문제를 해결하는 것을 좋아해요\n- 먼저 대화를 시작하지는 않은 편이나 관심있는 분야에서는 수다쟁이가 돼요\n- 주어진 계획보다는 즉흥적인 행동이 많은 편이에요\n- 항상 궁금증이 많아요'
  },
  {
    name: '모든 것이 항상 설레이는 유진',
    desc: '"PRIMITIVE 대표 극F, 너 혹시 울어?,,,,"\n- 기본적으로 인류애가 많아요\n- 타인의 관심사에 귀 기울이며 배려심이 많아요\n- 너무 감정에 휩싸여 스스로 스트레스를 받는 경우도 있어요\n- 호감있는 사람에게는 간이고 쓸개고 빼주는 편이에요\n- 사랑이란 뭘까? 삶의 의미란 무엇일까? 끊임없이 탐구하고 생각해요'
  },
  {
    name: '만능 엔터테이너 시현',
    desc: '"PRIMITIVE 분위기 메이커 다재다능 재롱둥이"\n- 이것저것 할 줄 아는 것이 많아 다재다능이라는 소리를 자주 듣는편이에요\n- 즉흥적이고 유연하며 순발력이 뛰어나요\n- 공부는 벼락치기가 최고라고 생각해요\n- 관심 분야와 취미가 매우 넓어요\n- 노는 것도 좋지만 나 혼자만의 시간도 중요해요'
  },
  {
    name: '도전정신 충만한 나경',
    desc: '"느슨해진 PRIMITIVE에 긴장감을 주는 돌연변이"\n- 본인이 하고자 하는 일에 집중력이 높고 열정적으로 몰두해요\n- 자유로움을 중요시하고 물 흐르듯이 사는 편이에요\n- 남에게 싫은 소리를 잘 못하고 다른 사람의 부탁을 거절하기 어려워해요\n- 대체로 남을 잘 믿는 편이다. 음모론과 각종 거짓 찌라시를 믿지않게 주의하도록\!\n- "나는 다 좋아요~"하며 중립성향이 강해요'
  },
  {
    name: 'PRIMITIVE 미스테리 동식',
    desc: '"PRIMITIVIE로 나를 보러 와~"\n- 당신은 매우 미스테리한 사람이군요,,,동식선배처럼 말이죠,,,분석이 어렵네요,,,\n동식선배가 궁금하다구요? PRIMTIVIE 동아리방으로 놀러오세요 운이 좋다면 만날 수 있을겁니다!\n대신 마음의 준비를 단단히 하고 오시길 바라요!'
  },
  {
    name: '오지라퍼 재완',
    desc: '"PRIMITIVE의 잔소리꾼, 아 알겠다구요~~~"\n- 흥미로운 일화, 이야기 등을 좋아하며 자신의 의견을 표현하는 대화, 토론을 즐겨요\n- 좋아하는 사람과 싫어하는 사람이 분명해요\n- 지는 건 두고볼 수 없어요! 승부욕이 강해요\n- 열정적이고 쾌활하여 모든 일에 열심히 참여해요\n- 남에게 감동 또는 놀람을 주는 서프라이즈 이벤트 준비하는 것을 즐거워해요'
  },
]
