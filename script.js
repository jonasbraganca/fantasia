(() => {
  const pages = [
    "o que",
    "você não sabe:",
    "que eu",
    "realizaria",
    "seu desejo",
  ];

  let index = 0;

  const phraseEl = document.getElementById("phrase");
  const nextBtn = document.getElementById("nextBtn");

  function render() {
    phraseEl.textContent = pages[index].toUpperCase();
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
