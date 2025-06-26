const teamImages = {
  plants: "830dd136-b11a-4380-99d3-52413a52bc48.png",
  whales: "e8046d44-3919-4ace-99ec-ebd0b1877ca1.png",
  krakens: "PPAP.png",
  lax: "8ca935bb-4a43-466f-b570-a723795d0c8f.png",
  monkeys: "3db7bfd4-13b9-478f-99bf-7d0acb63f258.png",
  marines: "8f918a43-3dad-46c8-82c6-cd35269bfc59.png",
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
