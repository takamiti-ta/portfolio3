// // ドロワーメニュー
var drawer = document.getElementById('drawer');
var drawerNav = document.getElementById('drawer-nav');
var drawerNavList = document.getElementById('drawer-nav-list');

drawer.addEventListener('click', function () {
  drawerNav.classList.toggle('active');
});

drawerNavList.addEventListener('click', function () {
  drawerNav.classList.toggle('active');
});


// スムーズスクロール
// aタグ要素の参照を取得
const links = document.querySelectorAll('a[href^="#"]');

// 各aタグにクリックイベントを設定
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', (e) => {
    // デフォルトのイベントをキャンセル
    e.preventDefault();

    // 対象（aタグ）のY軸の絶対座標を取得
    const elemY = links[i].getBoundingClientRect().top;
    // 現在のスクロール量を取得
    const scrollY = window.pageYOffset;
    // 対象までのスクロール量を算出
    const top = elemY - scrollY;

    window.scroll({
      top: top, // スクロール量の設定
      behavior: 'smooth' // スクロール動作の設定
    });
  });
}


//スピードなどの設定
var options = {
  pageTopBtn: 'pagetop', // トップへ戻るボタンのID名（”名”のみで＃はつけない）
  showScroll: 200, // ボタンの出現するスクロール位置 PX単位
  scrollSpeed: 10, //早い→5　普通→10 ゆっくり→20
  fadeSpeed: 10 // 早い 5 〜 30 ゆっくり
};

window.onload = function () {

  var btn = document.getElementById(options.pageTopBtn);

  // ページトップへ戻るアニメーション
  var scroll_timer;
  function pageTop(x, y) {
    if (y >= 1) {
      var scTop = Math.floor(y - (y / (options.scrollSpeed * 2)));
      window.scrollTo(x, scTop);
      scroll_timer = setTimeout(function () { pageTop(x, scTop) }, options.scrollSpeed);
      // ↑ y の値が1以下になるまで 少しの数値分だけスクロールアップするのを 
      // scrollSpeed の設定時間ごとに繰り返す
    } else {
      clearTimeout(scroll_timer);
      // ↑ y の値が1以下になったらタイマーを止めて数値を引くのをやめる
      window.scrollTo(x, 0);
    }
  }

  // フェイドインアニメーション設定
  var fadeIn_timer;
  function fadeInTimer(opaValue) {
    if (opaValue < 1) {
      opaValue = opaValue + 0.05;
      btn.style.filter = "alpha(opacity:" + (opaValue * 100) + ")";
      btn.style.opacity = opaValue;
      fadeIn_timer = setTimeout(function () { fadeInTimer(opaValue); }, options.fadeSpeed);
      // ↑opaValue が1になるまで透明度を 0.05 ずつ足して行くのを
      //  fadeSpeed に設定された時間毎に繰り返す
    } else {
      clearTimeout(fadeIn_timer);
      // ↑opaValue が1になったら繰り返し処理を止める
      btn.style.filter = "alpha(opacity:100)";
      btn.style.opacity = 1;
    }
  }

  // フェイドアウトアニメーション設定
  var fadeOut_timer;
  function fadeOutTimer(opaValue) {
    if (opaValue >= 0.05) {
      opaValue = opaValue - 0.05;
      btn.style.filter = "alpha(opacity:" + (opaValue * 100) + ")";
      btn.style.opacity = opaValue;
      fadeOut_timer = setTimeout(function () { fadeOutTimer(opaValue); }, options.fadeSpeed);
      // opaValue が1になるまで透明度を 0.05 ずつ引いて行くのを
      //  fadeSpeed に設定された時間毎に繰り返す
    } else {
      clearTimeout(fadeIn_timer);
      // ↑ opaValue が0.05以下になったら繰り返し処理を止めて
      // 完全な0にしておく（↓）
      btn.style.filter = "alpha(opacity:0)";
      btn.style.opacity = 0;
    }
  }

  // スクロールイベント
  btn.style.opacity = 0;
  btn.style.filter = "alpha(opacity:0)";
  window.onscroll = function () {
    var winSc = document.body.scrollTop || document.documentElement.scrollTop;
    if (winSc >= options.showScroll) {
      clearTimeout(fadeOut_timer);
      var opaValue = parseFloat(btn.style.opacity);
      fadeInTimer(opaValue);
    } else {
      clearTimeout(fadeIn_timer);
      var opaValue = parseFloat(btn.style.opacity);
      fadeOutTimer(opaValue);
    }
  }

  // クリックイベント
  btn.onclick = function () {
    // 現在のスクロール位置を取得する
    var x = document.body.scrollLeft || document.documentElement.scrollLeft;
    var y = document.body.scrollTop || document.documentElement.scrollTop;
    // スクロール位置を pageTop() 関数へ渡して呼び出す
    pageTop(x, y);
    return false;
  }
}



// top-view背景画像切り替え
myImage = new Array(
  "../dist/images/top-view1.jpg",
  "../dist/images/top-view2.jpg",
  "../dist/images/top-view3.jpg"
);
myNowCnt = -1;
// 現在表示している配列番号
myflg = 0;
// どっちを表示して、どっちを消すかのフラグ
function myChange() {
  // スライドショーメイン関数
  myNowCnt = (myNowCnt < myImage.length - 1) ? myNowCnt + 1 : 0;
  // 次の配列番号
  myflg = (myflg == 0) ? 1 : 0;
  // 表示・非表示フラグ反転
  if (myflg == 0) {
    document.getElementById("idshow1").src = myImage[myNowCnt];
    // 次の画像をセットする
    document.getElementById("idshow1").className = "fadein";
    // フェードイン
    document.getElementById("idshow2").className = "fadeout";
    // フェードアウト
  } else {
    document.getElementById("idshow2").src = myImage[myNowCnt];
    // 次の画像をセットする
    document.getElementById("idshow1").className = "fadeout";
    // フェードアウト
    document.getElementById("idshow2").className = "fadein";
    // フェードイン
  }
  setTimeout(myChange, 2500); // 4秒周期に画像を更新する
}
myChange();

document.addEventListener("click", e => {
  const target = e.target;
  // clickした要素がclass属性、js-smooth-scrollを含まない場合は処理を中断
  if (!target.classList.contains("js-smooth-scroll")) return;
  e.preventDefault();
  const targetId = target.hash;
  document.querySelector(targetId).scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});



// モーダルウィンドウ
const modalOpen = document.querySelectorAll('.modal-open');
const modal = document.querySelectorAll('.modal');
const modalCover = document.querySelectorAll('.modal-cover');

let modalCloseAction;
let dataModalOpen;
let targetModal;

const TIMEOUT_SPEED = 500;

for (let i = 0; i < modalOpen.length; i++) {
  modalCloseAction = function (e) {
    targetModal = e.currentTarget.closest('.modal');
    targetModal.classList.add('is-close');

    setTimeout(function (e) {
      targetModal.classList.remove('is-open');
      targetModal.classList.remove('is-close');
    }, TIMEOUT_SPEED);
  };

  const modalWrapClose = function () {
    modalCover[i].addEventListener('click', function (e) {
      modalCloseAction(e);
    }, false);
  };

  const modalWrapOpen = function (e) {
    dataModalOpen = e.currentTarget.getAttribute('data-modal-open');
    for (var b = 0; b < modal.length; b++) {
      if (modal[b].getAttribute('data-modal') === dataModalOpen) {
        modal[b].classList.add('is-open');
        modalWrapClose();
        return false;
      }
    }
  };

  modalOpen[i].addEventListener('click', function (e) {
    modalWrapOpen(e);
  }, false);
}

const modalBtnClose = document.querySelectorAll('.btn-close');
for (let n = 0; n < modalBtnClose.length; n++) {
  modalBtnClose[n].addEventListener('click', function (e) {
    modalCloseAction(e);
    return false;
  }, false);
}






// ヘッダースクロール表示
function setCloneNav() {
  var body = document.body;
  var globalNav = document.getElementById('js-global-nav');

  if (!globalNav) return;

  var cloneNav = globalNav.cloneNode(true);
  cloneNav.id = 'js-clone-nav';
  cloneNav.classList.add('clone-nav');

  body.insertBefore(cloneNav, body.firstChild);
}
setCloneNav();

/**
 * グローバルナビのクローンをページ上部に移動・固定
 */
function fixedGlobalNav() {
  var scrollY = window.pageYOffset;
  var trigger = document.getElementById('js-trigger');
  var cloneNav = document.getElementById('js-clone-nav');

  if (!cloneNav || !trigger) return;

  var triggerClientRect = trigger.getBoundingClientRect();
  var triggerY = scrollY + triggerClientRect.top;
  if (scrollY > triggerY) {
    cloneNav.classList.add('is-fixed-nav');
  } else {
    cloneNav.classList.remove('is-fixed-nav');
  }
}
window.addEventListener('scroll', fixedGlobalNav);


// googleフォーム送信完了画面移動防止
function sendGform() {
  document.myForm.submit();
  document.getElementById('formWrapper').style.display = 'none';
  document.getElementById('thxMessage').style.display = 'block';
}