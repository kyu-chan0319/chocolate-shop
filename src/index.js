function openModal(imageSrc, title, description) {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  modal.innerHTML = /*html*/ `
    <div class="modal-content">
      <span class="close" id="pickup-close">&times;</span>
      <div class="modal-detail">
        <div class="modal-img">
          <img src="${imageSrc}" alt="Modal Image">
        </div>
        <div class="modal-text">
        <h3 class="modal-h3">${title}</h3>
        <p class="modal-description">${description}</p>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  document
    .getElementById("pickup-close")
    ?.addEventListener("click", closeModal);
}

function closeModal() {
  document.querySelector(".modal")?.remove();
}

document.getElementById("pickup-1")?.addEventListener("click", () => {
  openModal(
    "images/pickup-1.jpeg",
    "ローズデコレーションケーキ",
    "愛と情熱を象徴するバラをふんだんに使用した「バレンタイン・ローズデコレーションケーキ」は、" +
      "バレンタインコレクションの中でも特に目を引く逸品です。深い赤と優しいピンクのバラが織りなすロマンティックなデザインは、" +
      "愛する人への深い感謝と愛情を表現します。このケーキは、バレンタインデーの甘いサプライズや、" +
      "大切な記念日に最適です。愛のメッセージを込めたこのケーキで、特別な一日をさらに思い出深いものにしましょう。"
  );
});

document.getElementById("pickup-2")?.addEventListener("click", () => {
  openModal(
    "images/pickup-2.jpeg",
    "チョコレートボックス",
    "バレンタインコレクションの星、「愛のシンフォニー チョコレートボックス」は、心を込めて選ばれた様々な形と味のチョコレートで満たされています。" +
      "この豪華なアソートメントには、クラシックなミルクチョコレート、濃厚なダークチョコレート、そして愛らしいピンクのホワイトチョコレートが含まれており、" +
      "それぞれが独特の味わいを持っています。ロマンチックな赤いバラと柔らかなキャンドルライトに囲まれたこのボックスは、愛のメッセージを伝える最も甘美な方法です。"
  );
});

document.getElementById("pickup-3")?.addEventListener("click", () => {
  openModal(
    "images/pickup-3.jpeg",
    "ハートフェルト・ディライトケーキ",
    "愛の日に相応しい、ハートフェルト・ディライト ケーキは、情熱と純粋な愛情を象徴するスイーツです。" +
      "この魅力的なケーキは、リッチなチョコレートムースとバニラビーンズのクリームが層になっており、" +
      "その間にはサクサクのビスケットが隠れています。トップには愛らしいハート型のチョコレートとジューシーなラズベリーで飾り付けられ、バレンタインデーのロマンチックな雰囲気を盛り上げます。"
  );
});

document.getElementById("pickup-4")?.addEventListener("click", () => {
  openModal(
    "images/pickup-4.jpeg",
    "ベルベット・アフェクション ケーキ",
    "バレンタインコレクションの中でも際立つ「ベルベット・アフェクション ケーキ」は、愛の深さを象徴するスイーツです。" +
      "滑らかなチョコレートのベルベットのような質感と、心を込めたリボンのデコレーションが特徴です。" +
      "このケーキは、甘美なミルクチョコレートの層と、愛らしいハート形のアクセントで構成されており、大切な人への献身と情熱を表現するのにふさわしい逸品です。"
  );
});

document.getElementById("pickup-5")?.addEventListener("click", () => {
  openModal(
    "images/pickup-5.jpeg",
    "スウィートハーモニー アソートメント",
    "愛と甘さを詰め込んだ「スウィートハーモニー アソートメント」は、バレンタインデーの喜びを分かち合うための完璧なコレクションです。" +
      "ピンクと赤の色合いが目を引くこのアソートメントには、手作りのマカロン、チョコレートカバーのクッキー、そして愛情を込めてデコレートされたフォンダンのスイーツが含まれています。" +
      "それぞれの一口サイズのデザートは、特別な日のために丁寧に選ばれ、愛する人との甘い時間を演出します。"
  );
});

document.getElementById("pickup-6")?.addEventListener("click", () => {
  openModal(
    "images/pickup-6.jpeg",
    "カプリシャス・ハート クッキーセット",
    "愛の多様性を祝う「カプリシャス・ハート クッキーセット」は、バレンタインデーに甘いサプライズを提供します。" +
      "このセットには、チョコレートでデコレーションされたハート型のクッキーや、クリームで飾られた愛らしいスイーツが豊富に詰められています。" +
      "各々のクッキーは、独自のデザインと風味を持ち、愛を表現するための完璧な手段です。" +
      "このセットは、大切な人への思いやりと愛情を伝えるための理想的なギフトです。"
  );
});
