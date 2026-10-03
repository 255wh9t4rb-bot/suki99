/* ==================================================
   写真・名前の登録場所
================================================== */
const people = [
{ name: "n.top kanghyon",image: "n.top kanghyun.jpg" },
 { name: "n.top minseo", image: "n.top minseo.jpg" },
 { name: "n.top takuto", image: "n.top takuto.jpg" },
　{ name: "n.top heewoo", image: "n.top heewoo.jpg" },
 { name: "n.top hyunwoong", image: "n.top hyunwoong-.jpg" },
 { name: "n.top chaemin", image: "n.top chaemin.jpg" },
 { name: "n.top changlin", image: "n.top changlin.jpg" }, 
 { name: "dxmon TK", image: "dxmon TK.avif" }, 
 { name: "dxmon hee", image: "dxmon hee.webp" },
 { name: "dxmon rex", image: "dxmon rex.avif" },
 { name: "dxmon セイタ", image: "dxmon セイタ.avif" },
 { name: "dxmon minjae", image: "dxmon ミンジェ.avif" },
 { name: "WAKER イジュン", image: "weaker イジュン.jpeg" },
 { name: "WAKER クォンヒョプ", image: "weaker クォンヒョプ.jpeg" },
 { name: "WAKER コヒョン", image: "weaker コヒョン.jpeg" },
 { name: "WAKER セビョル", image: "weaker セビョル.jpeg" },
 { name: "WAKER セボム", image: "weaker セボム.jpeg" },
 { name: "WAKER リオ", image: "weaker リオ.jpeg" },
 { name: "D-ONE イファ", image: "d-one イファ.jpg" },
 { name: "D-ONE ジェフン", image: "d-one ジェフン.png" },
 { name: "D-ONE ジュヨン", image: "d-one ジュヨン.jpeg" },
 { name: "D-ONE セジン", image: "d-one セジン.jpeg" },
 { name: "D-ONE ハン", image: "d-one ハン.jpeg" },
 { name: "D-ONE ヒョヌン", image: "d-one ヒョヌン.jpeg" },
 { name: "ANOHRTS ウヒョン", image: "anohrts ウヒョン.png" },
 { name: "ANOHRTS スンチャン", image: "anohrts スンチャン.jpg" },
 { name: "ANOHRTS ダフン", image: "anohrts ダフン.jpg" },
 { name: "ANOHRTS ヒュンジェ", image: "anohrts ヒュンジェ.jpg" },
 { name: "ANOHRTS ギヒョン", image: "anohtys ギヒョン.jpg" },
 { name: "NXON KDAY", image: "nxon k day.jpg" },
 { name: "NXON K", image: "nxon k.jpg" },
 { name: "NXON GYEOM", image: "nxon ギョム.jpg" },
{ name: "NXON DAM", image: "nxon ジム.jpg" },
{ name: "NXON JOHA", image: "nxon ジョハ.jpg" },
{ name: "NXON MINJAE", image: "nxon ミンジェ.jpg" },
{ name: "NXON MINGYU", image: "nxon ミンギュ.jpg" },
{ name: "NXON ZIKI", image: "nxon ジム.jpg" },
 { name: "W3WAY　へチョン", image: "w3way へチョン.webp" },
    { name: "W3WAY アオイ", image: "w3way アオイ.webp" },
    { name: "W3WAY　ウソク", image: "w3way ウソク.webp" },
    { name: "W3WAY　シホ", image: "w3way シホ.webp" },
    { name: "W3WAY　ドンヒョン", image: "w3way ドンヒョン.webp" },
    { name: "W3WAY　リョウ", image: "w3way リョウ.webp" },
    { name: "W3WAY　リンタロウ", image: "w3way リンタロウ.webp" },
     { name: "CHASER　カンビン", image: "chaser カンビン.jpg" },
     { name: "CHASER　ケイスケ", image: "chaser ケイスケ.jpg" },
     { name: "CHASER　シフン", image: "chaser シフン.jpg" },
     { name: "CHASER　ユンビン", image: "chaser ユンビン.jpg" },
     { name: "CHASER　レン", image: "chaser レン.jpg" },
   { name: "NBIG RYUMIN", image: "N.BIG RYUMIN.jpeg" },
   { name: "NBIG SEONGJUN", image: "N.BIG SEONGJUN.jpeg" },
    { name: "NBIG SIAN", image: "N.BIg SIAN.jpeg" },
    { name: "NBIG KWON DOEUN", image: "NBIG KWON-DOEUN.jpeg" },
    { name: "NBIG SEUNGYEON", image: "NBIG SEUNGYEON.jpeg" },
    { name: "DIAZ HARUKI", image: "DIAZ HARUKI.webp" },
    { name: "DIAZ K.O", image: " DIAZ K.O.webp" },
    { name: "DIAZ MINGUN", image: "DIAZ MINGUN.webp" },
    { name: "DIAZ SINWOO", image: "DIAZ SINWOO.webp" },
    { name: "DIAZ SOTA", image: "DIAZ SOTA.webp" },
       { name: "LEVERGENT HABIN", image: "HABIN.avif" },
    { name: "LEVERGENT KHAIN", image: "KHAIN.avif" }, 
    { name: "LEVERGENT JIO", image: "JIO.avif" }, 
    { name: "LEVERGENT R", image: "R.avif" }, 
    { name: "LEVERGENT RIHYEON", image: "RIHYEON.avif" },
   { name: "CMDM BYUNGHOON", image: "Byunghoon.jpg" },
   { name: "CMDM HEEJU", image: "Heeju.jpg" },
   { name: "CMDM HYUNHAH", image: "Hyunhah.jpg" },
   { name: "CMDM JUNHYOUNG", image: "Junhyoung.jpg" },
   { name: "CMDM NOHYUL", image: "Nohyul.jpg" },
   { name: "DAYCHILD EDEN", image: "DAYCHILD-EDEN1.jpg" },
   { name: "DAYCHILD INTAE", image: "DAYCHILD-INTAE1.jpg" },
   { name: "DAYCHILD K", image: "DAYCHILD-K1.jpg" },
   { name: "DAYCHILD SIWOO", image: "DAYCHILD-SIWOO1.jpg" },
   { name: "DAYCHILD YEJONG", image: "DAYCHILD-YEJONG1.jpg" },
   { name: "ASC2NT KARAM", image: "ASC2NT KARAM-3-.jpeg" },
   { name: "ASC2NT HYOWON", image: "HYOWON-3-900x600.jpeg" },
   { name: "ASC2NT JAY", image: "JAY-3-900x600.jpeg" },
   { name: "ASC2NT KYLE", image: "KYLE-3-900x600.jpeg" },
   { name: "ASC2NT REON", image: "REON-3-900x600.jpeg" },
   { name: "MYONE DOJUN", image: "MYONE DOJUN.jpg" },
   { name: "MYONE SHIRO", image: "MYONE SHIRO.jpg" },
   { name: "MYONE R", image: "MYONE R.jpg" },
   { name: "MYONE ZENON", image: "MYONE ZENON.jpg" },
   { name: "EASTSHINE DONGJAE", image: "ES DONGJAE-5-.jpg" },
    { name: "EASTSHINE HYUN", image: "ES HYUN-3-.jpg" },
    { name: "EASTSHINE IEL", image: "ES IEL-4.jpg" },
    { name: "EASTSHINE LUMIN", image: "ES LUMIN-3-.jpg" },
    { name: "EASTSHINE PHOENIX", image: "ES PHOENIX-1-.webp" },
   { name: "DROP Cheol Kyu", image: "dp Cheol Kyu.webp" },
   { name: "DROP Gyu Eon", image: "dp Gyu Eon.webp" },
   { name: "DROP Jae Wo", image: "dp Jae Won.webp" },
   { name: "DROP Ju Sung", image: "dp Ju Sung.webp" },
   { name: "DROP Seung Woo", image: "dp Seung Woo.webp" },
   { name: "WHYNOT JUNHYEONG", image: "wn JUNHYEONG.jpg" },
   { name: "WHYNOT TOSEI", image: "wn TOSEI.jpg" },
   { name: "WHYNOT DOA", image: "wn doa.jpg" },
   { name: "WHYNOT JEONG", image: "wn jeong-scaled.jpg" },
   { name: "WHYNOT ROHOON", image: "wn rohoon.jpg" },
   { name: "WHYNOT DONGYEON", image: "wn rohoon.jpg" },
   { name: "WHYNOT SIHON", image: "wn sihoon.jpg" },
   { name: "MUL KANGSAN", image: "MUL-KANGSAN4.jpg" },
   { name: "MUL LUHA", image: "MUL-LUHA4.jpg" },
   { name: "MUL SEONGHUN", image: "MUL-SEONGHUN4.jpg" },
   { name: "MUL SHINWOO", image: "MUL-SHINWOO4.jpg" },
   { name: "MUL WONCHUL", image: "MUL-WONCHUL.jpg" },
   { name: "MUL YUNSOL", image: "MUL-YUNSOL4.jpg" },
   { name: "ANTARES HARU", image: "AT HARU.jpeg" },
   { name: "ANTARES INO", image: "AT INO.jpeg" },
   { name: "ANTARES JAEHO", image: "AT JAEHO.jpeg" },
   { name: "ANTARES WOORI", image: "AT WOORI.jpeg" },
   { name: "ANTARES SEUNGHEE", image: "AT SEUNGHEE.jpeg" },
   { name: "ANTARES ZINO", image: "AT ZINO.jpeg" },
    { name: "DREAMCODE SEONGWAN", image: "dc Seongwan.webp" },
   { name: "DREAMCODE HYUNWOO", image: "dc hyunwoo.webp" },
   { name: "DREAMCODE JAEHUN", image: "dc jaehun.webp" },
   { name: "DREAMCODE JIMIN", image: "dc jimin.webp" },
   { name: "DREAMCODE JONGHOON", image: "dc jonghoon.webp" },
   { name: "DREAMOFONE JIHAN", image: "Screenshot 2026-10-03 19.02.45.png" },
   { name: "DREAMOFONE JIWON", image: "Screenshot 2026-10-03 19.04.12.png" },
   { name: "DREAMOFONE MINCHAN", image: "Screenshot 2026-10-03 19.03.35.png" },
   { name: "DREAMOFONE SARANG", image: "Screenshot 2026-10-03 19.05.01.png" },
   { name: "DREAMOFONE HWANHUI", image: "Screenshot 2026-10-03 19.05.54.png" },
   { name: "VOLTEQ JUNE", image: "VQ JUNE-1.jpg" },
    { name: "VOLTEQ KASUGA", image: "VQ KASUGA.jpg" },
    { name: "VOLTEQ LEO", image: " VQ LEO.jpg" },
   { name: "VOLTEQ TERUTO", image: "VQ TERUTO-1.jpg" },
   { name: "STC KANGMIN", image: "stc KANGMIN.jpg" },
   { name: "STC MINSUNG", image: "stc Minsung.jpg" },
   { name: "STC SIHYEON", image: "stc sihyeon.jpg" },
   { name: "STC DONGHYEON", image: "STC Donghyeon.jpg" },
   { name: "STC HYOYA", image: "STC HYOYA.jpg" },
{ name: "STC HYOYA", image: "STC HYOYA.jpg" },
   { name: "RE:GUYS D.I", image: "RG D.I.webp" },
   { name: "RE:GUYS DAEYOUNG", image: "RG Daeyoung.webp" },
   { name: "RE:GUYS DONGHYUN", image: "RG Donghyun.webp" },
   { name: "RE:GUYS JINHYEON", image: "RG Jinhyeon.webp" },
   { name: "RE:GUYS MINKI", image: "RG Minki.webp" },
   { name: "RE:GUYS SEMIN", image: "RG Semin.jpg" },
   { name: "RE:GUYS YEONGKI", image: "RG Yeongki.webp" },
   { name: "ADAP DOWON", image: "AP Dowon3.jpg" },
   { name: "ADAP HYUNSUNG", image: "AP Hyunsung3.jpg" },
   { name: "ADAP JAEYOUNG", image: "AP Jaeyoung3.jpg" },
   { name: "ADAP JONGHO", image: "AP Jongho3.jpg" },
   { name: "ADAP HYOTAE", image: "AP hyotae3.jpg" },
   { name: "ADAP JUNSEOK", image: "AP junseok3.jpg" },
    { name: "TRY THAT A.TOM", image: "A.TOM-TRY-THAT.jpg" },
   { name: "TRY THAT HYUKJIN", image: "TT HYUKJIN.png" },
   { name: "TRY THAT HANSEO", image: "HANSEO-TRY-THAT.jpg" },
   { name: "TRY THAT KION", image: "KION-TRY-THAT-scaled.jpg" },
   { name: "TRY THAT MINHA", image: "MINHA-TRY-THAT.jpg" },
   { name: "TRY THAT PIL", image: "PIL-TRY-THAT.jpg" },
   { name: "SWEET:CH HWI", image: "sc hwi-2.jpg" },
   { name: "SWEET:CH JIN", image: "sc jin.jpg" },
   { name: "SWEET:CH RIKUTO", image: "sc rikuto.jpg" },
   { name: "SWEET:CH SATOSHI", image: "sc satoshi.jpg" },
   { name: "SWEET:CH TAIKI", image: "sc taiki.jpg" },
   { name: "SWEET:CH WANGSEOK", image: "sc wangseok-1.jpg" },
   { name: "DIGNITY LUKE", image: "DG LUKE.jpeg" },
   { name: "DIGNITY LUO", image: "DG LUO.jpeg" },
   { name: "DIGNITY MINSEOK", image: "DG MINSEOK.jpeg" },
   { name: "DIGNITY ON", image: "DG ON.jpeg" },
   { name: "HIGHWAY YUNHYEONG", image: "HG YUNHYEONG.jpg" },
   { name: "HIGHWAY DAEHYUN", image: "HG DAEHYUN.jpg" },
   { name: "HIGHWAY HUA", image: "HG HUA.jpg" },
   { name: "HIGHWAY JUN", image: "HG JUN.jpg" },
   { name: "HIGHWAY MINHYUK", image: "HG Minhyuk.jpg" },
   { name: "HIGHWAY ROOKIE", image: "HG ROOKIE.jpg" },
   { name: "HIGHWAY SSEN", image: "HG SSEN.jpg" },
   { name: "GENUS　CHAEHOON", image: "GS CHAEHOON-1.jpg" },
   { name: "GENUS　CHANYONG", image: "GS CHANYONG-1.jpg" },
   { name: "GENUS　SEOHA", image: "GS SEOHA-1.jpg" },
   { name: "GENUS　JAEYOUNG", image: "GS jaeyoung-1.jpg" },
   { name: "GENUS　YUAN", image: "GS yuan-1.jpg" },
   { name: "TRY1 MIN", image: "T! min-1.jpg" },
    { name: "TRY1 HARAM", image: "T1 chaharam.jpg" },
    { name: "TRY1 JAMES", image: "T1 james.jpg" },
    { name: "TRY1 JIHWAN", image: "T1 jihwan-1.jpg" },
    { name: "TRY1 NEO", image: "T1 neo.jpg" },
    { name: "TRY1 R1KE", image: "T1 r1ke-1.jpg" },
    { name: "TRY1 TSUKITO", image: "T1 tsukito-1.jpg" },
   { name: "MY:ST JUNTAE", image: "myst 2-Juntae-.avif" },
   { name: "MY:ST WONCHEOL", image: "myst 3-Woncheol-.avif" },
   { name: "MY:ST WOOJIN", image: "myst 4-Woojin-.avif" },
   { name: "MY:ST KEONWOO", image: "myst 5-Keonwoo-.avif" },
    { name: "LUMIERE G_ME", image: "LR G_ME.jpg" },
    { name: "LUMIERE DAON", image: "LR daon-1.jpg" },
    { name: "LUMIERE SION", image: "LR sion.jpg" },
    { name: "LUMIERE TEO", image: "LR teo.jpg" },
   { name: "LUMIERE RUI", image: "LR rui.jpg" },
   { name: "SAEINT BEOMSOO", image: "ST Beomsoo.jpg" },
    { name: "SAEINT SEOGYUM", image: "ST Seogyum.jpg" },
    { name: "SAEINT YOONSANG", image: "ST Yoonsang.jpg" },
    { name: "SAEINT DONGGYU", image: "ST Donggyu.jpg" },
   

];


/* ==================================================
   画面
================================================== */

const startScreen =
  document.getElementById("start-screen");

const selectionScreen =
  document.getElementById("selection-screen");

const finalistsScreen =
  document.getElementById("finalists-screen");

const rankingScreen =
  document.getElementById("ranking-screen");

const resultScreen =
  document.getElementById("result-screen");


/* ==================================================
   ボタン
================================================== */

const startButton =
  document.getElementById("start-button");

const backButton =
  document.getElementById("back-button");

const nextButton =
  document.getElementById("next-button");

const rankingStartButton =
  document.getElementById("ranking-start-button");

const resultButton =
  document.getElementById("result-button");

const againButton =
  document.getElementById("again-button");


/* ==================================================
   表示場所
================================================== */

const personContainer =
  document.getElementById("person-container");

const finalistsContainer =
  document.getElementById("finalists-container");

const rankingContainer =
  document.getElementById("ranking-container");

const resultContainer =
  document.getElementById("result-container");

const progress =
  document.getElementById("progress");

const firstSelectedName =
  document.getElementById("first-selected-name");

const secondSelectedName =
  document.getElementById("second-selected-name");


/* ==================================================
   ゲームのデータ
================================================== */


/*
  現在の候補者
*/

let currentCandidates = [];


/*
  今表示している4人
*/

let currentGroup = [];


/*
  今選んでいる人
  0〜2人
*/

let selectedThisQuestion = [];


/*
  次の候補者
*/

let nextCandidates = [];


/*
  現在何問目か
*/

let currentQuestion = 0;


/*
  そのラウンドで何問あるか
*/

let totalQuestions = 0;


/*
  最終9人
*/

let selectedPeople = [];


/*
  最終順位
*/

let finalRanking = [];


/* ==================================================
   画面切り替え
================================================== */

function showScreen(screen) {

  document
    .querySelectorAll(".screen")
    .forEach(element => {

      element.classList.remove("active");

    });

  screen.classList.add("active");

  window.scrollTo(0, 0);
}


/* ==================================================
   シャッフル
================================================== */

function shuffle(array) {

  const result = [...array];

  for (
    let i = result.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(Math.random() * (i + 1));

    [
      result[i],
      result[j]
    ] =
    [
      result[j],
      result[i]
    ];

  }

  return result;
}


/* ==================================================
   4人ずつに分ける
================================================== */

function makeGroups(candidates) {

  const shuffled =
    shuffle(candidates);

  const groups = [];


  for (
    let i = 0;
    i < shuffled.length;
    i += 4
  ) {

    groups.push(
      shuffled.slice(i, i + 4)
    );

  }


  return groups;
}


/* ==================================================
   現在の質問を表示
================================================== */

function renderQuestion() {

  personContainer.innerHTML = "";


  selectedThisQuestion = [];


  /*
    現在の進み具合
  */

  progress.textContent =
    `${currentQuestion} / ${totalQuestions}`;


  updateSelectedNames();

  updateNextButton();


  currentGroup.forEach(person => {

    const card =
      document.createElement("div");


    card.className =
      "person-card";


    card.innerHTML = `

      <img
        src="${person.image}"
        alt="${person.name}"
      >

      <div class="person-name">
        ${person.name}
      </div>

    `;


    card.addEventListener(
      "click",
      () => {

        togglePerson(person);

      }
    );


    personContainer.appendChild(card);

  });

}


/* ==================================================
   人を選択・解除
================================================== */

function togglePerson(person) {

  const index =
    selectedThisQuestion.indexOf(person);


  /*
    すでに選んでいたら解除
  */

  if (index !== -1) {

    selectedThisQuestion.splice(
      index,
      1
    );

  }


  /*
    選んでいなかったら追加

    最大2人
  */

  else {

    if (
      selectedThisQuestion.length >= 2
    ) {

      return;

    }


    selectedThisQuestion.push(person);

  }


  updateCards();

  updateSelectedNames();

  updateNextButton();

}


/* ==================================================
   写真の選択表示
================================================== */

function updateCards() {

  const cards =
    document.querySelectorAll(
      ".person-card"
    );


  cards.forEach(card => {

    const name =
      card.querySelector(
        ".person-name"
      ).textContent;


    card.classList.remove(
      "first-selected"
    );

    card.classList.remove(
      "second-selected"
    );


    if (
      selectedThisQuestion[0] &&
      selectedThisQuestion[0].name === name
    ) {

      card.classList.add(
        "first-selected"
      );

    }


    if (
      selectedThisQuestion[1] &&
      selectedThisQuestion[1].name === name
    ) {

      card.classList.add(
        "second-selected"
      );

    }

  });

}


/* ==================================================
   1位・2位表示
================================================== */

function updateSelectedNames() {


  if (selectedThisQuestion[0]) {

    firstSelectedName.textContent =
      selectedThisQuestion[0].name;

  }

  else {

    firstSelectedName.textContent =
      "まだ選択されていません";

  }


  if (selectedThisQuestion[1]) {

    secondSelectedName.textContent =
      selectedThisQuestion[1].name;

  }

  else {

    secondSelectedName.textContent =
      "まだ選択されていません";

  }

}


/* ==================================================
   次へボタン
================================================== */


/*
  今回は0人でも1人でも2人でも
  次へ進める
*/

function updateNextButton() {

  nextButton.disabled = false;

}


/* ==================================================
   現在の選択を次へ送る
================================================== */

function saveCurrentAnswer() {

  selectedThisQuestion.forEach(
    person => {

      if (
        !nextCandidates.includes(person)
      ) {

        nextCandidates.push(person);

      }

    }
  );

}


/* ==================================================
   次のラウンドを作る
================================================== */

function startNextRound() {


  /*
    現在の候補者が9人以下になったら
    9人を確定
  */

  if (
    nextCandidates.length <= 9
  ) {

    /*
      9人未満になってしまった場合は、
      それまでの候補から補充する。

      これによって必ず9人にする。
    */

    let finalPool =
      [...nextCandidates];


    /*
      まだ9人に足りない場合、
      前ラウンドで落ちた人から
      ランダムではなく順番に補充
    */

    if (
      finalPool.length < 9
    ) {

      const remaining =
        people.filter(
          person =>
            !finalPool.includes(person)
        );


      while (
        finalPool.length < 9 &&
        remaining.length > 0
      ) {

        finalPool.push(
          remaining.shift()
        );

      }

    }


    selectedPeople =
      finalPool.slice(0, 9);


    renderFinalists();

    showScreen(
      finalistsScreen
    );

    return;

  }


  /*
    9人より多い場合は、
    選ばれた人だけで次のラウンド
  */

  currentCandidates =
    [...nextCandidates];


  nextCandidates = [];


  currentQuestion = 0;


  const groups =
    makeGroups(currentCandidates);


  /*
    4人未満の最後のグループができたら
    その人たちを次のラウンドに残す
  */

  const validGroups = [];


  groups.forEach(group => {

    if (
      group.length === 4
    ) {

      validGroups.push(group);

    }

    else {

      group.forEach(person => {

        nextCandidates.push(person);

      });

    }

  });


  /*
    残った人を最初のグループに加える
  */

  if (
    nextCandidates.length > 0
  ) {

    if (
      validGroups.length > 0
    ) {

      validGroups[
        validGroups.length - 1
      ] =
      [
        ...validGroups[
          validGroups.length - 1
        ],
        ...nextCandidates
      ].slice(0, 4);

    }

  }


  questionGroupsForCurrentRound =
    validGroups;


  totalQuestions =
    questionGroupsForCurrentRound.length;


  if (
    totalQuestions === 0
  ) {

    selectedPeople =
      currentCandidates.slice(0, 9);


    renderFinalists();

    showScreen(
      finalistsScreen
    );

    return;

  }


  currentGroup =
    questionGroupsForCurrentRound[0];


  currentQuestion = 1;


  showScreen(
    selectionScreen
  );


  renderQuestion();

}


/* ==================================================
   現在のラウンドの質問
================================================== */

let questionGroupsForCurrentRound = [];


/* ==================================================
   スタート
================================================== */

startButton.addEventListener(
  "click",
  () => {


    if (
      people.length < 4
    ) {

      alert(
        "写真を4人以上登録してください。"
      );

      return;

    }


    /*
      最初は全員が候補
    */

    currentCandidates =
      [...people];


    nextCandidates = [];


    currentQuestion = 0;


    /*
      最初のラウンド
    */

    const groups =
      makeGroups(
        currentCandidates
      );


    questionGroupsForCurrentRound =
      [];


    /*
      4人組だけ質問にする
    */

    groups.forEach(group => {

      if (
        group.length === 4
      ) {

        questionGroupsForCurrentRound.push(
          group
        );

      }

      else {

        /*
          4人に満たない人は
          次のラウンドへ残す
        */

        group.forEach(person => {

          nextCandidates.push(
            person
          );

        });

      }

    });


    totalQuestions =
      questionGroupsForCurrentRound.length;


    currentGroup =
      questionGroupsForCurrentRound[0];


    currentQuestion = 1;


    showScreen(
      selectionScreen
    );


    renderQuestion();

  }
);


/* ==================================================
   次へ
================================================== */

nextButton.addEventListener(
  "click",
  () => {


    /*
      今回選ばれた人を保存
    */

    saveCurrentAnswer();


    /*
      次の質問へ
    */

    if (
      currentQuestion <
      totalQuestions
    ) {

      currentGroup =
        questionGroupsForCurrentRound[
          currentQuestion
        ];


      currentQuestion++;


      renderQuestion();

      return;

    }


    /*
      このラウンド終了
    */

    startNextRound();

  }
);


/* ==================================================
   最終9人
================================================== */

function renderFinalists() {

  finalistsContainer.innerHTML = "";


  selectedPeople.forEach(
    (person, index) => {

      const card =
        document.createElement("div");


      card.className =
        "finalist-card";


      card.innerHTML = `

        <img
          src="${person.image}"
          alt="${person.name}"
        >

        <p>
          ${index + 1}. ${person.name}
        </p>

      `;


      finalistsContainer.appendChild(
        card
      );

    }
  );

}


/* ==================================================
   順位決め
================================================== */

rankingStartButton.addEventListener(
  "click",
  () => {

    finalRanking =
      [...selectedPeople];


    renderRanking();


    showScreen(
      rankingScreen
    );

  }
);


/* ==================================================
   順位表示
================================================== */

function renderRanking() {

  rankingContainer.innerHTML = "";


  finalRanking.forEach(
    (person, index) => {


      const item =
        document.createElement("div");


      item.className =
        "ranking-item";


      item.draggable = true;


      item.dataset.name =
        person.name;


      item.innerHTML = `

        <div class="ranking-number">
          ${index + 1}
        </div>

        <img
          src="${person.image}"
          alt="${person.name}"
        >

        <div class="ranking-name">
          ${person.name}
        </div>

      `;


      rankingContainer.appendChild(
        item
      );

    }
  );


  setupDragAndDrop();

}


/* ==================================================
   ドラッグ＆ドロップ
================================================== */

function setupDragAndDrop() {

  let dragged = null;


  const items =
    document.querySelectorAll(
      ".ranking-item"
    );


  items.forEach(item => {


    item.addEventListener(
      "dragstart",
      () => {

        dragged = item;

      }
    );


    item.addEventListener(
      "dragover",
      event => {

        event.preventDefault();

      }
    );


    item.addEventListener(
      "drop",
      event => {

        event.preventDefault();


        if (
          dragged === item
        ) {

          return;

        }


        const all =
          [...rankingContainer.children];


        const draggedIndex =
          all.indexOf(dragged);


        const targetIndex =
          all.indexOf(item);


        if (
          draggedIndex <
          targetIndex
        ) {

          item.after(dragged);

        }

        else {

          item.before(dragged);

        }


        updateRanking();

      }
    );

  });

}


/* ==================================================
   順位更新
================================================== */

function updateRanking() {

  const items =
    [...rankingContainer.children];


  finalRanking =
    items.map(item => {

      return people.find(
        person =>
          person.name ===
          item.dataset.name
      );

    });


  items.forEach(
    (item, index) => {

      item.querySelector(
        ".ranking-number"
      ).textContent =
        index + 1;

    }
  );

}


/* ==================================================
   結果
================================================== */

resultButton.addEventListener(
  "click",
  () => {

    updateRanking();

    renderResult();

    showScreen(
      resultScreen
    );

  }
);


/* ==================================================
   結果表示
================================================== */

function renderResult() {

  resultContainer.innerHTML = "";


  finalRanking.forEach(
    (person, index) => {


      const item =
        document.createElement("div");


      item.className =
        "result-item";


      item.innerHTML = `

        <div class="result-rank">
          ${index + 1}
        </div>

        <img
          src="${person.image}"
          alt="${person.name}"
        >

        <div class="result-name">
          ${person.name}
        </div>

      `;


      resultContainer.appendChild(
        item
      );

    }
  );

}


/* ==================================================
   戻る
================================================== */

backButton.addEventListener(
  "click",
  () => {

    const answer =
      confirm(
        "最初からやり直しますか？"
      );


    if (answer) {

      showScreen(
        startScreen
      );

    }

  }
);


/* ==================================================
   もう一度やる
================================================== */

againButton.addEventListener(
  "click",
  () => {

    showScreen(
      startScreen
    );

  }
);
