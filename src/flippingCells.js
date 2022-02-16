export class FlippingCells {
  constructor(el) {
    this.cells = el.querySelectorAll(".cells__item");
    this.button = el.querySelector(".button");
    this.informerList = el.querySelector(".informer");
    this.status = false;
    this.installListeners();
  }

  initInterval() {
    let iterator = 0;
    const interval = setInterval(() => {
      if (iterator === this.cells.length) {
        clearInterval(interval);
      } else {
        this.cells[iterator].style.transform = "scale(1,-1)";
        iterator += 1;
      }
    }, 500);
  }

  startTransform() {
    this.status = true;
    this.informerList.innerHTML += `
    <li class="informe__item">START OF PROGRESS</li>
    `;
    this.button.innerText = "in progress";
    this.initInterval();
  }

  endTransform() {
    this.informerList.innerHTML += `
    <li class="informe__item">END OF PROGRESS</li>
    `;
    this.button.innerText = "Start";
    this.status = false;
    this.cells.forEach((cell) => {
      cell.style.transform = "scale(1,1)";
    });
  }

  installListeners() {
    this.button.addEventListener("click", () => {
      if (this.status === false) this.startTransform();
    });
    this.cells.forEach((cell, index) => {
      cell.addEventListener("transitionend", () => {
        if (this.status === false) return;
        this.informerList.innerHTML += `
        <li class="informe__item">Cell-${index + 1} animation end</li>`;
        if (index + 1 === this.cells.length) this.endTransform();
        this.informerList.scrollTop = 9999;
      });
      cell.addEventListener("transitionstart", () => {
        if (this.status === false) return;
        this.informerList.innerHTML += `
      <li class="informe__item">Cell-${index + 1} animation start</li>`;
        this.informerList.scrollTop = 9999;
      });
    });
  }
}
