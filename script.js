document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.getElementById("inputs");
  for (let i = 1; i <= 9; i++) {
    inputs.innerHTML += `
      <div class="player-input">
        <label>${i}번 포지션: <input type="text" id="pos${i}" required></label>
        <label>이름: <input type="text" id="name${i}" required></label>
      </div>
    `;
  }

  document.getElementById("confirmBtn").addEventListener("click", () => {
    const resultBox = document.getElementById("lineupResult");
    resultBox.innerHTML = "";

    // ✅ 이미지 추가 (크기 조절 포함)
    resultBox.innerHTML += `<img src="PPAP.png" class="bg-img" alt="배경 이미지">`;

    // ✅ 타이틀
    resultBox.innerHTML += `<h2 style="text-align:center; margin-bottom: 15px;">⚾ 크라켄즈 라인업 ⚾</h2>`;

    for (let i = 1; i <= 9; i++) {
      const pos = document.getElementById(`pos${i}`).value.trim();
      const name = document.getElementById(`name${i}`).value.trim();
      resultBox.innerHTML += `<p>${i}번 - ${pos} / ${name}</p>`;
    }

    document.getElementById("lineupResultWrapper").style.display = "block";

    html2canvas(resultBox).then(canvas => {
      const imgURL = canvas.toDataURL();
      const downloadLink = document.getElementById("downloadBtn");
      downloadLink.href = imgURL;
    });
  });
});
