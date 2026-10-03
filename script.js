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


/* ==================================================
   ゲームデータ
================================================== */

/*
  現在の候補者
*/
let candidates = [];


/*
  今表示している4人
*/
let currentGroup = [];


/*
  今回選んだ人
*/
let currentSelected = [];


/*
  今回のラウンドで使う4人組
*/
let groups = [];


/*
  今何問目か
*/
let questionIndex = 0;


/*
  選択回数
*/
let selectionCounts = new Map();


/*
  最終9人
*/
let finalNine = [];


/*
  最終順位
*/
let finalRanking = [];


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
    ] = [
      result[j],
      result[i]
    ];

  }

  return result;
}


/* ==================================================
   画面切り替え
================================================== */

function showScreen(screen) {

  document
    .querySelectorAll(".screen")
    .forEach(screenElement => {

      screenElement.classList.remove("active");

    });

  screen.classList.add("active");

  window.scrollTo(0, 0);
}


/* ==================================================
   選択回数をリセット
================================================== */

function resetCounts() {

  selectionCounts = new Map();

  people.forEach(person => {

    selectionCounts.set(person, 0);

  });

}


/* ==================================================
   4人ずつにする
================================================== */

function makeGroups(list) {

  const shuffled =
    shuffle(list);

  const result = [];


  for (
    let i = 0;
    i < shuffled.length;
    i += 4
  ) {

    const group =
      shuffled.slice(i, i + 4);


    /*
      4人そろっているグループだけ使用
    */

    if (group.length === 4) {

      result.push(group);

    }

  }


  return result;

}


/* ==================================================
   質問を表示
================================================== */

function renderQuestion() {

  currentSelected = [];


  currentGroup =
    groups[questionIndex];


  progress.textContent =
    `${questionIndex + 1} / ${groups.length}`;


  personContainer.innerHTML = "";


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

        toggleSelection(
          person,
          card
        );

      }
    );


    personContainer.appendChild(card);

  });


  /*
    0人でも次へ進める
  */

  nextButton.disabled = false;

}


/* ==================================================
   人を選択・解除
================================================== */

function toggleSelection(
  person,
  card
) {

  const index =
    currentSelected.indexOf(person);


  /*
    すでに選択している
    ↓
    選択解除
  */

  if (index !== -1) {

    currentSelected.splice(
      index,
      1
    );

    card.classList.remove(
      "first-selected"
    );

    card.classList.remove(
      "second-selected"
    );

    updateSelectionBadges();

    return;

  }


  /*
    2人選択済みなら
    これ以上選べない
  */

  if (
    currentSelected.length >= 2
  ) {

    return;

  }


  /*
    選択する
  */

  currentSelected.push(person);


  updateSelectionBadges();

}


/* ==================================================
   1位・2位の表示
================================================== */

function updateSelectionBadges() {

  const cards =
    document.querySelectorAll(
      ".person-card"
    );


  cards.forEach(card => {

    card.classList.remove(
      "first-selected"
    );

    card.classList.remove(
      "second-selected"
    );


    const name =
      card.querySelector(
        ".person-name"
      ).textContent;


    if (
      currentSelected[0] &&
      currentSelected[0].name === name
    ) {

      card.classList.add(
        "first-selected"
      );

    }


    if (
      currentSelected[1] &&
      currentSelected[1].name === name
    ) {

      card.classList.add(
        "second-selected"
      );

    }

  });

}


/* ==================================================
   今回の選択を記録
================================================== */

function recordSelections() {

  currentSelected.forEach(person => {

    const oldCount =
      selectionCounts.get(person) || 0;


    selectionCounts.set(
      person,
      oldCount + 1
    );

  });

}


/* ==================================================
   現在の順位を取得
================================================== */

function getSortedPeople(list) {

  return [...list].sort(
    (a, b) => {

      const aCount =
        selectionCounts.get(a) || 0;

      const bCount =
        selectionCounts.get(b) || 0;


      /*
        選ばれた回数が多い順
      */

      return bCount - aCount;

    }
  );

}


/* ==================================================
   次のラウンドを開始
================================================== */

function startNextRound() {

  /*
    現在の候補者を
    選択回数の多い順に並べる
  */

  const sorted =
    getSortedPeople(candidates);


  /*
    一度も選ばれていない人
  */

  const selectedPeople =
    sorted.filter(
      person =>
        (selectionCounts.get(person) || 0) > 0
    );


  /*
    9人以上選ばれているなら
    上位9人に絞れる
  */

  if (
    selectedPeople.length <= 9
  ) {

    /*
      まだ9人に達していない場合
      ↓
      選ばれている人だけを候補にして
      もう一度比較する
    */

    if (
      selectedPeople.length === 0
    ) {

      /*
        全員0回の場合は
        もう一度全員を比較
      */

      candidates =
        [...candidates];

    }

    else {

      candidates =
        [...selectedPeople];

    }

  }

  else {

    /*
      選択回数上位の人だけ残す

      9人より少し多めに残して
      もう一度比較する
    */

    candidates =
      selectedPeople.slice(
        0,
        Math.max(
          9,
          Math.ceil(
            selectedPeople.length * 0.6
          )
        )
      );

  }


  /*
    9人になったら終了
  */

  if (
    candidates.length <= 9 &&
    selectedPeople.length >= 9
  ) {

    finalNine =
      getSortedPeople(
        candidates
      ).slice(0, 9);


    showFinalNine();

    return;

  }


  /*
    もう一度4人ずつ比較
  */

  groups =
    makeGroups(candidates);


  /*
    4人未満で余った人がいた場合
    その人たちは次のラウンドにも残す
  */

  const used =
    groups.flat();


  const leftovers =
    candidates.filter(
      person =>
        !used.includes(person)
    );


  /*
    余った人は次のラウンドの
    候補として追加
  */

  leftovers.forEach(person => {

    if (!groups.length) {

      groups.push([]);

    }

  });


  /*
    もし4人組が作れなくなったら
  */

  if (
    groups.length === 0
  ) {

    finalNine =
      getSortedPeople(
        candidates
      ).slice(0, 9);


    showFinalNine();

    return;

  }


  questionIndex = 0;


  renderQuestion();

}


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
      全員を候補にする
    */

    candidates =
      [...people];


    /*
      選択回数を0にする
    */

    resetCounts();


    /*
      最初の4人組
    */

    groups =
      makeGroups(candidates);


    questionIndex = 0;


    renderQuestion();


    showScreen(
      selectionScreen
    );

  }
);


/* ==================================================
   次へ
================================================== */

nextButton.addEventListener(
  "click",
  () => {

    /*
      今回選んだ人の回数を+1
    */

    recordSelections();


    /*
      次の質問
    */

    questionIndex++;


    if (
      questionIndex <
      groups.length
    ) {

      renderQuestion();

      return;

    }


    /*
      1ラウンド終了

      選択回数を見て
      候補者を絞る
    */

    startNextRound();

  }
);


/* ==================================================
   最終9人表示
================================================== */

function showFinalNine() {

  finalistsContainer.innerHTML = "";


  finalNine.forEach(
    (person, index) => {

      const card =
        document.createElement("div");


      card.className =
        "finalist-card";


      const count =
        selectionCounts.get(person) || 0;


      card.innerHTML = `

        <img
          src="${person.image}"
          alt="${person.name}"
        >

        <p>
          ${person.name}
        </p>

        <small>
          選択 ${count}回
        </small>

      `;


      finalistsContainer.appendChild(
        card
      );

    }
  );


  showScreen(
    finalistsScreen
  );

}


/* ==================================================
   順位を決める
================================================== */

rankingStartButton.addEventListener(
  "click",
  () => {

    /*
      選択回数が多い順

      ランダムではない
    */

    finalRanking =
      getSortedPeople(
        finalNine
      );


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

          <br>

          <small>
            選択 ${selectionCounts.get(person) || 0}回
          </small>

        </div>

      `;


      rankingContainer.appendChild(
        item
      );

    }
  );

}


/* ==================================================
   結果を見る
================================================== */

resultButton.addEventListener(
  "click",
  () => {

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

          <br>

          <small>
            選択 ${selectionCounts.get(person) || 0}回
          </small>

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
