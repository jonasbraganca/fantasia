(() => {
  const pages = [
    "O QUE",
    "VOCÊ NÃO SABE:",
    "QUE EU",
    "REALIZARIA",
    "SEU DESEJO",
  ];

  let index = 0;

  const phraseEl = document.getElementById("phrase");
  const nextBtn = document.getElementById("nextBtn");

  function render() {
    phraseEl.textContent = pages[index]; // CSS já transforma em maiúsculo
  }

  function nextPage() {
    index = (index + 1) % pages.length;
    render();
  }

  nextBtn.addEventListener("click", nextPage);

  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      nextPage();
    }
  });

  render();
})();
