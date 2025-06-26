const teamImages = {
  plants: "PLA.png",
  whales: "WHA.png",
  krakens: "PPAP.png",
  Rox: "ROX.png",
  monkeys: "Monk.png",
  marines: "MAR.png",
};

let selectedTeam = "krakens";

function selectTeam(team) {
  selectedTeam = team;
}

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

    const time = document.getElementById("gameTime").value.trim();
    const stadium = document.getElementById("stadium").value.trim();
    const matchup = document.getElementById("matchup").value.trim();
    const title = teamTitle(selectedTeam);

    resultBox.innerHTML += `<img src="${teamImages[selectedTeam]}" class="bg-img" alt="팀 배경">`;

    resultBox.innerHTML += `
      <h2>${title}</h2>
      <p class="info">🕒 ${time} | 🏟 ${stadium} | ⚔ ${matchup}</p>
    `;

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

function teamTitle(team) {
  switch (team) {
    case "plants": return "🌿 플랜츠 라인업 🌿";
    case "whales": return "🐋 웨일즈 라인업 🐋";
    case "krakens": return "🦑 크라켄즈 라인업 🦑";
    case "lax": return "🦁 락스 라인업 🦁";
    case "monkeys": return "🐒 몽키즈 라인업 🐒";
    case "marines": return "⚓ 마린스 라인업 ⚓";
    default: return "라인업";
  }
}
