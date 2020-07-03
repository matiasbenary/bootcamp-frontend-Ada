function clickCaja(e) {
  const el = document.querySelector(".box");
  el.textContent = "clikeando!";

  setTimeout(() => {
    el.classList.add("circle");
    setTimeout(() => {
      el.classList.add("orange");
      setTimeout(() => {
        el.classList.remove("circle");
        setTimeout(() => {
          el.classList.replace("orange", "purple");
          setTimeout(() => {
            el.classList.add("fadeOut");
          }, 500);
        }, 333);
      }, 250);
    }, 500);
  }, 2000);
}

const box = document.querySelector(".box");
box.addEventListener("click", clickCaja);
