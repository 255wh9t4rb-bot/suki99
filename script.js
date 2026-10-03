// ========================================
// 好きな顔9選
// ========================================


// ========================================
// HTML
// ========================================

const startButton = document.getElementById("start-button");

const startScreen = document.getElementById("start-screen");
const selectionScreen = document.getElementById("selection-screen");
const finalistsScreen = document.getElementById("finalists-screen");
const rankingScreen = document.getElementById("ranking-screen");
const resultScreen = document.getElementById("result-screen");

const backButton = document.getElementById("back-button");
const nextButton = document.getElementById("next-button");
const rankingStartButton = document.getElementById("ranking-start-button");
const resultButton = document.getElementById("result-button");
const againButton = document.getElementById("again-button");

const personContainer = document.getElementById("person-container");
const finalistsContainer = document.getElementById("finalists-container");
const rankingContainer = document.getElementById("ranking-container");
const resultContainer = document.getElementById("result-container");

const progress = document.getElementById("progress");

const firstSelectedName =
  document.getElementById("first-selected-name");

const secondSelectedName =
  document.getElementById("second-selected-name");


// ========================================
// 人物
// ========================================

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


// ========================================
// ゲーム変数
// ========================================

let candidates = [];

let currentGroup = [];

let selectedPeople = [];

let selectedFinalists = [];

let eliminatedPeople = [];

let questionNumber = 0;


// 頂上決戦用
let battleQueue = [];

let battleWinner = null;

let battleLoser = null;


// 順位決定用
let rankingPeople = [];

let rankingScores = {};


// ========================================
// 画面切り替え
// ========================================

function showScreen(screen) {

  document.querySelectorAll(".screen").forEach(function(item) {
    item.classList.remove("active");
  });

  screen.classList.add("active");
}


// ========================================
// シャッフル
// ========================================

function shuffle(array) {

  const copied = [...array];

  for (let i = copied.length - 1; i > 0; i--) {

    const j =
      Math.floor(Math.random() * (i + 1));

    const temp = copied[i];

    copied[i] = copied[j];

    copied[j] = temp;
  }

  return copied;
}


// ========================================
// スタート
// ========================================

startButton.addEventListener("click", function() {

  candidates = shuffle(people);

  currentGroup = [];

  selectedPeople = [];

  selectedFinalists = [];

  eliminatedPeople = [];

  questionNumber = 0;

  battleQueue = [];

  battleWinner = null;

  battleLoser = null;

  rankingPeople = [];

  rankingScores = {};

  showScreen(selectionScreen);

  showNextGroup();

});


// ========================================
// 4人ずつ表示
// ========================================

function showNextGroup() {

  // 全員見終わった
  if (candidates.length === 0) {

    finishPreliminary();

    return;
  }


  currentGroup =
    candidates.splice(0, 4);

  selectedPeople = [];

  questionNumber++;

  renderGroup();
}


// ========================================
// 4人を表示
// ========================================

function renderGroup() {

  personContainer.innerHTML = "";

  firstSelectedName.textContent =
    "まだ選択されていません";

  secondSelectedName.textContent =
    "まだ選択されていません";

  progress.textContent =
    "予選 " + questionNumber + "回目";


  currentGroup.forEach(function(person) {

    const card =
      document.createElement("button");

    card.type = "button";

    card.className =
      "person-card";


    const image =
      document.createElement("img");

    image.src = person.image;

    image.alt = person.name;


    const name =
      document.createElement("div");

    name.className =
      "person-name";

    name.textContent =
      person.name;


    card.appendChild(image);

    card.appendChild(name);


    card.addEventListener("click", function() {

      toggleSelection(person, card);

    });


    personContainer.appendChild(card);

  });

}


// ========================================
// 選択
// ========================================

function toggleSelection(person, card) {

  const index =
    selectedPeople.findIndex(function(item) {

      return item.name === person.name;

    });


  // すでに選択している
  if (index !== -1) {

    selectedPeople.splice(index, 1);

    card.classList.remove("selected");

  }

  // 新しく選択
  else {

    if (selectedPeople.length >= 2) {
      return;
    }

    selectedPeople.push(person);

    card.classList.add("selected");
  }


  updateSelectedNames();
}


// ========================================
// 選択中の名前
// ========================================

function updateSelectedNames() {

  if (selectedPeople[0]) {

    firstSelectedName.textContent =
      selectedPeople[0].name;

  } else {

    firstSelectedName.textContent =
      "まだ選択されていません";
  }


  if (selectedPeople[1]) {

    secondSelectedName.textContent =
      selectedPeople[1].name;

  } else {

    secondSelectedName.textContent =
      "まだ選択されていません";
  }
}


// ========================================
// 次へ
// ========================================

nextButton.addEventListener("click", function() {

  // 選ばれた人を勝ち上がり
  selectedFinalists.push(
    ...selectedPeople
  );


  // 次の4人
  showNextGroup();

});


// ========================================
// 予選終了
// ========================================

function finishPreliminary() {

  // 重複を削除

  const unique = [];

  selectedFinalists.forEach(function(person) {

    const exists =
      unique.some(function(item) {

        return item.name === person.name;

      });


    if (!exists) {

      unique.push(person);

    }

  });


  selectedFinalists = unique;


  // 9人ちょうどなら終了

  if (selectedFinalists.length === 9) {

    showFinalists();

    return;
  }


  // 9人より多い
  if (selectedFinalists.length > 9) {

    startFinalistBattle();

    return;
  }


  // 9人未満の場合
  // 選ばれなかった人から復活候補を出す

  const remaining =
    people.filter(function(person) {

      return !selectedFinalists.some(function(selected) {

        return selected.name === person.name;

      });

    });


  while (
    selectedFinalists.length < 9 &&
    remaining.length > 0
  ) {

    selectedFinalists.push(
      remaining.shift()
    );

  }


  showFinalists();
}


// ========================================
// 頂上決戦開始
// ========================================

function startFinalistBattle() {

  battleQueue =
    [...selectedFinalists];

  runNextBattle();
}


// ========================================
// 次の頂上決戦
// ========================================

function runNextBattle() {

  // 9人になった
  if (battleQueue.length <= 9) {

    selectedFinalists =
      [...battleQueue];

    showFinalists();

    return;
  }


  // 2人取り出す

  battleWinner = battleQueue.shift();

  battleLoser = battleQueue.shift();


  renderBattle();
}


// ========================================
// 頂上決戦画面
// ========================================

function renderBattle() {

  personContainer.innerHTML = "";


  progress.textContent =
    "頂上決戦";


  firstSelectedName.textContent =
    battleWinner.name;


  secondSelectedName.textContent =
    battleLoser.name;


  const winnerCard =
    createBattleCard(battleWinner);


  const loserCard =
    createBattleCard(battleLoser);


  personContainer.appendChild(winnerCard);

  personContainer.appendChild(loserCard);


  nextButton.style.display =
    "none";
}


// ========================================
// 対戦カード
// ========================================

function createBattleCard(person) {

  const card =
    document.createElement("button");

  card.type = "button";

  card.className =
    "person-card";


  const image =
    document.createElement("img");

  image.src = person.image;

  image.alt = person.name;


  const name =
    document.createElement("div");

  name.className =
    "person-name";

  name.textContent =
    person.name;


  card.appendChild(image);

  card.appendChild(name);


  card.addEventListener("click", function() {

    chooseBattleWinner(person);

  });


  return card;
}


// ========================================
// 頂上決戦で勝者を選ぶ
// ========================================

function chooseBattleWinner(person) {

  let winner;

  let loser;


  if (person.name === battleWinner.name) {

    winner = battleWinner;

    loser = battleLoser;

  } else {

    winner = battleLoser;

    loser = battleWinner;

  }


  // 勝者は残す

  battleQueue.push(winner);


  // 敗者は脱落

  eliminatedPeople.push(loser);


  // 次の対戦

  runNextBattle();
}


// ========================================
// 9人決定
// ========================================

function showFinalists() {

  // 9人にする

  selectedFinalists =
    selectedFinalists.slice(0, 9);


  finalistsContainer.innerHTML = "";


  selectedFinalists.forEach(function(person) {

    const card =
      document.createElement("div");

    card.className =
      "finalist-card";


    const image =
      document.createElement("img");

    image.src = person.image;

    image.alt = person.name;


    const name =
      document.createElement("div");

    name.textContent =
      person.name;


    card.appendChild(image);

    card.appendChild(name);


    finalistsContainer.appendChild(card);

  });


  nextButton.style.display =
    "";


  showScreen(finalistsScreen);
}


// ========================================
// 順位決定スタート
// ========================================

rankingStartButton.addEventListener(
  "click",
  function() {

    rankingPeople =
      [...selectedFinalists];


    rankingScores = {};


    rankingPeople.forEach(function(person) {

      rankingScores[person.name] = 0;

    });


    startRankingBattle();

  }
);


// ========================================
// 9人の順位決定
// ========================================

function startRankingBattle() {

  if (rankingPeople.length <= 1) {

    showRankingResult();

    return;
  }


  battleWinner =
    rankingPeople[0];

  battleLoser =
    rankingPeople[1];


  renderRankingBattle();
}


// ========================================
// 順位決定の対戦画面
// ========================================

function renderRankingBattle() {

  personContainer.innerHTML = "";


  progress.textContent =
    "順位決定戦";


  firstSelectedName.textContent =
    battleWinner.name;


  secondSelectedName.textContent =
    battleLoser.name;


  const first =
    createRankingCard(battleWinner);


  const second =
    createRankingCard(battleLoser);


  personContainer.appendChild(first);

  personContainer.appendChild(second);


  nextButton.style.display =
    "none";


  showScreen(selectionScreen);
}


// ========================================
// 順位決定カード
// ========================================

function createRankingCard(person) {

  const card =
    document.createElement("button");

  card.type = "button";

  card.className =
    "person-card";


  const image =
    document.createElement("img");

  image.src = person.image;

  image.alt = person.name;


  const name =
    document.createElement("div");

  name.className =
    "person-name";

  name.textContent =
    person.name;


  card.appendChild(image);

  card.appendChild(name);


  card.addEventListener("click", function() {

    chooseRankingWinner(person);

  });


  return card;
}


// ========================================
// 順位決定で勝者
// ========================================

function chooseRankingWinner(person) {

  let winner;

  let loser;


  if (person.name === battleWinner.name) {

    winner = battleWinner;

    loser = battleLoser;

  } else {

    winner = battleLoser;

    loser = battleWinner;

  }


  // 勝った人に1ポイント

  rankingScores[winner.name] += 1;


  // この2人の比較が終わったら
  // 次の組み合わせへ

  moveToNextRankingBattle(
    winner,
    loser
  );
}


// ========================================
// 次の順位決定戦
// ========================================

function moveToNextRankingBattle(
  winner,
  loser
) {

  const remaining =
    rankingPeople.filter(function(person) {

      return (
        person.name !== winner.name &&
        person.name !== loser.name
      );

    });


  if (remaining.length === 0) {

    rankingPeople =
      [...rankingPeople];

    showRankingBattleNext();

    return;
  }


  // 勝者を次の相手へ

  battleWinner =
    winner;

  battleLoser =
    remaining[0];


  renderRankingBattle();
}


// ========================================
// 順位決定戦を続ける
// ========================================

function showRankingBattleNext() {

  // まだ比較していない組み合わせを探す

  let found = false;


  for (let i = 0; i < rankingPeople.length; i++) {

    for (
      let j = i + 1;
      j < rankingPeople.length;
      j++
    ) {

      const a =
        rankingPeople[i];

      const b =
        rankingPeople[j];


      if (
        !hasCompared(a, b)
      ) {

        battleWinner = a;

        battleLoser = b;

        found = true;

        break;
      }
    }


    if (found) {
      break;
    }
  }


  if (found) {

    saveCurrentComparison();

    renderRankingBattle();

    return;
  }


  showRankingResult();
}


// ========================================
// 比較記録
// ========================================

const comparisonHistory = [];


function saveCurrentComparison() {

  const exists =
    comparisonHistory.some(function(pair) {

      return (
        (
          pair[0] === battleWinner.name &&
          pair[1] === battleLoser.name
        )
        ||
        (
          pair[0] === battleLoser.name &&
          pair[1] === battleWinner.name
        )
      );

    });


  if (!exists) {

    comparisonHistory.push([
      battleWinner.name,
      battleLoser.name
    ]);

  }
}


// ========================================
// 比較済みか
// ========================================

function hasCompared(a, b) {

  return comparisonHistory.some(function(pair) {

    return (
      (
        pair[0] === a.name &&
        pair[1] === b.name
      )
      ||
      (
        pair[0] === b.name &&
        pair[1] === a.name
      )
    );

  });
}


// ========================================
// 順位を決定
// ========================================

function showRankingResult() {

  const ranking =
    [...rankingPeople];


  ranking.sort(function(a, b) {

    return (
      rankingScores[b.name] -
      rankingScores[a.name]
    );

  });


  rankingContainer.innerHTML = "";


  ranking.forEach(function(person, index) {

    const item =
      document.createElement("div");

    item.className =
      "ranking-item";


    const number =
      document.createElement("div");

    number.className =
      "ranking-number";

    number.textContent =
      (index + 1) + "位";


    const image =
      document.createElement("img");

    image.src =
      person.image;

    image.alt =
      person.name;


    const name =
      document.createElement("div");

    name.className =
      "ranking-name";

    name.textContent =
      person.name;


    item.appendChild(number);

    item.appendChild(image);

    item.appendChild(name);


    rankingContainer.appendChild(item);

  });


  showScreen(rankingScreen);
}


// ========================================
// 結果を見る
// ========================================

resultButton.addEventListener(
  "click",
  function() {

    const items =
      rankingContainer.querySelectorAll(
        ".ranking-item"
      );


    const ranking = [];


    items.forEach(function(item) {

      const image =
        item.querySelector("img");

      const name =
        item.querySelector(".ranking-name");


      ranking.push({

        name:
          name.textContent.trim(),

        image:
          image.src

      });

    });


    renderResult(ranking);

    showScreen(resultScreen);

  }
);


// ========================================
// 最終結果
// ========================================

function renderResult(ranking) {

  resultContainer.innerHTML = "";


  const order = [

    ranking[3],
    ranking[4],
    ranking[5],

    ranking[1],
    ranking[0],
    ranking[2],

    ranking[6],
    ranking[7],
    ranking[8]

  ];


  const grid =
    document.createElement("div");

  grid.className =
    "final-3x3-grid";


  order.forEach(function(person, index) {

    if (!person) {
      return;
    }


    let rank = 0;


    if (index === 0) {
      rank = 4;
    }

    if (index === 1) {
      rank = 5;
    }

    if (index === 2) {
      rank = 6;
    }

    if (index === 3) {
      rank = 2;
    }

    if (index === 4) {
      rank = 1;
    }

    if (index === 5) {
      rank = 3;
    }

    if (index === 6) {
      rank = 7;
    }

    if (index === 7) {
      rank = 8;
    }

    if (index === 8) {
      rank = 9;
    }


    const item =
      document.createElement("div");

    item.className =
      "final-3x3-item";


    const rankText =
      document.createElement("div");

    rankText.className =
      "final-rank";

    rankText.textContent =
      rank + "位";


    const image =
      document.createElement("img");

    image.src =
      person.image;

    image.alt =
      person.name;


    const name =
      document.createElement("div");

    name.className =
      "final-name";

    name.textContent =
      person.name;


    item.appendChild(rankText);

    item.appendChild(image);

    item.appendChild(name);


    grid.appendChild(item);

  });


  resultContainer.appendChild(grid);
}


// ========================================
// もう一度
// ========================================

againButton.addEventListener(
  "click",
  function() {

    comparisonHistory.length = 0;

    showScreen(startScreen);

  }
);


// ========================================
// 戻る
// ========================================

backButton.addEventListener(
  "click",
  function() {

    showScreen(startScreen);

  }
);
