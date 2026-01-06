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
  const progressEl = document.getElementById("progress");
  const nextBtn = document.getElementById("nextBtn");

  function render() {
    phraseEl.textContent = pages[index];
    progressEl.textContent = `${index + 1} / ${pages.length}`;
  }

  function nextPage() {
    index = (index + 1) % pages.length; // volta ao início após a última
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
