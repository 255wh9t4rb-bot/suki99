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
 { name: "dxmon hee", image: "dxmon hee.wedp" },
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
 { name: "ANOHRTS ギヒョン", image: "anohrts ギヒョン.jpg" },
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
  document.getElementById(
    "finalists-container"
  );

const rankingContainer =
  document.getElementById(
    "ranking-container"
  );

const resultContainer =
  document.getElementById(
    "result-container"
  );

const progress =
  document.getElementById("progress");


/* ==================================================
   データ
================================================== */

let currentRound = 0;

let rounds = [];

let firstSelected = null;

let secondSelected = null;

let selectedPeople = [];

let finalRanking = [];


/* ==================================================
   画面切り替え
================================================== */

function showScreen(screen) {

  document
    .querySelectorAll(".screen")
    .forEach(element => {

      element.classList.remove(
        "active"
      );

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
      Math.floor(
        Math.random() * (i + 1)
      );

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
   4人ずつのグループを作る
================================================== */

function createRounds() {

  const shuffled =
    shuffle(people);

  rounds = [];

  /*
    4人ずつに分ける
  */

  for (
    let i = 0;
    i < shuffled.length;
    i += 4
  ) {

    const group =
      shuffled.slice(i, i + 4);

    /*
      4人未満のグループは
      作らない

      その場合は後ろから補充する
    */

    if (group.length < 4) {

      const alreadyUsed =
        new Set(group);

      const candidates =
        shuffled.filter(
          person =>
            !alreadyUsed.has(person)
        );

      while (
        group.length < 4 &&
        candidates.length > 0
      ) {

        group.push(
          candidates.shift()
        );

      }

    }

    rounds.push(group);
  }
}


/* ==================================================
   4人を表示
================================================== */

function renderRound() {

  const group =
    rounds[currentRound];

  progress.textContent =
    `${currentRound + 1} / ${rounds.length}`;


  personContainer.innerHTML = "";


  /*
    選択をリセット
  */

  firstSelected = null;

  secondSelected = null;


  /*
    次へを無効にする
  */

  updateNextButton();


  /*
    4人を表示
  */

  group.forEach(person => {

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


    /*
      画像を押したとき
    */

    card.addEventListener(
      "click",
      () => {

        selectPerson(person);

      }
    );


    personContainer.appendChild(card);

  });
}


/* ==================================================
   人を選択
================================================== */

function selectPerson(person) {

  /*
    すでに1位なら解除
  */

  if (firstSelected === person) {

    firstSelected = null;

  }


  /*
    すでに2位なら解除
  */

  else if (secondSelected === person) {

    secondSelected = null;

  }


  /*
    1位が空いている
  */

  else if (firstSelected === null) {

    firstSelected = person;

  }


  /*
    2位が空いている
  */

  else if (secondSelected === null) {

    secondSelected = person;

  }


  /*
    1位・2位が両方埋まっている
    → 新しく押した人を2位にする
  */

  else {

    secondSelected = person;

  }


  updateCards();

  updateNextButton();
}


/* ==================================================
   カードの表示更新
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


    /*
      一旦選択表示を消す
    */

    card.classList.remove(
      "first-selected"
    );

    card.classList.remove(
      "second-selected"
    );


    /*
      1位
    */

    if (
      firstSelected &&
      firstSelected.name === name
    ) {

      card.classList.add(
        "first-selected"
      );

    }


    /*
      2位
    */

    if (
      secondSelected &&
      secondSelected.name === name
    ) {

      card.classList.add(
        "second-selected"
      );

    }

  });
}


/* ==================================================
   次へボタン
================================================== */

function updateNextButton() {

  nextButton.disabled =
    !(
      firstSelected &&
      secondSelected
    );
}


/* ==================================================
   スタート
================================================== */

startButton.addEventListener(
  "click",
  () => {

    /*
      4人未満なら開始できない
    */

    if (people.length < 4) {

      alert(
        "写真を4人以上登録してください。"
      );

      return;
    }


    currentRound = 0;

    selectedPeople = [];


    /*
      4人ずつ作る
    */

    createRounds();


    showScreen(
      selectionScreen
    );


    renderRound();

  }
);


/* ==================================================
   次へ
================================================== */

nextButton.addEventListener(
  "click",
  () => {

    /*
      1位を追加
    */

    if (
      firstSelected &&
      !selectedPeople.includes(
        firstSelected
      )
    ) {

      selectedPeople.push(
        firstSelected
      );

    }


    /*
      2位を追加
    */

    if (
      secondSelected &&
      !selectedPeople.includes(
        secondSelected
      )
    ) {

      selectedPeople.push(
        secondSelected
      );

    }


    /*
      次のグループ
    */

    currentRound++;


    if (
      currentRound <
      rounds.length
    ) {

      renderRound();

    }


    else {

      /*
        ここまでで選ばれた人から
        最大9人を選ぶ
      */

      selectedPeople =
        shuffle(
          selectedPeople
        ).slice(0, 9);


      renderFinalists();

      showScreen(
        finalistsScreen
      );

    }

  }
);


/* ==================================================
   最終9人表示
================================================== */

function renderFinalists() {

  finalistsContainer.innerHTML = "";


  selectedPeople.forEach(person => {

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
        ${person.name}
      </p>

    `;


    finalistsContainer.appendChild(card);

  });
}


/* ==================================================
   順位決定開始
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
   順位を更新
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

      item
        .querySelector(
          ".ranking-number"
        )
        .textContent =
        index + 1;

    }
  );
}


/* ==================================================
   結果を見る
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
