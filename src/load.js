console.log("I use Arch btw 😅");

const { ipcRenderer } = require("electron");

window.addEventListener("DOMContentLoaded", () => {
  const waitForTopbar = () => {
    const topbar = document.querySelector(".notion-topbar");
    if (topbar) {
      const targetDiv = topbar.querySelector("div > div > div");
      if (targetDiv) {
        const windowControls = document.createElement("div");
        windowControls.classList.add("window-controls");
        windowControls.innerHTML = `
        <button role=button id="minimize">
          <svg
          width="12"
          height="12"
          viewBox="0 0 448 512"
          xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"
            />
          </svg>
        </button>
        <button role=button id="maximize">
          <svg
            width="12"
            height="12"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M128 32H32C14.31 32 0 46.31 0 64v96c0 17.69 14.31 32 32 32s32-14.31 32-32V96h64c17.69 0 32-14.31 32-32S145.7 32 128 32zM416 32h-96c-17.69 0-32 14.31-32 32s14.31 32 32 32h64v64c0 17.69 14.31 32 32 32s32-14.31 32-32V64C448 46.31 433.7 32 416 32zM128 416H64v-64c0-17.69-14.31-32-32-32s-32 14.31-32 32v96c0 17.69 14.31 32 32 32h96c17.69 0 32-14.31 32-32S145.7 416 128 416zM416 320c-17.69 0-32 14.31-32 32v64h-64c-17.69 0-32 14.31-32 32s14.31 32 32 32h96c17.69 0 32-14.31 32-32v-96C448 334.3 433.7 320 416 320z"
            />
          </svg>
        </button>
        <button role=button id="close"><svg
          width="12"
          height="12"
          viewBox="0 0 320 512"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path
            d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
          />
          </svg>
        </button>
          `;
        targetDiv.appendChild(windowControls);
        document.getElementById("minimize").addEventListener("click", () => {
          ipcRenderer.send("window-minimize");
        });
        document.getElementById("maximize").addEventListener("click", () => {
          ipcRenderer.send("window-maximize");
        });
        document.getElementById("close").addEventListener("click", () => {
          ipcRenderer.send("window-close");
        });
      } else {
        setTimeout(waitForTopbar, 100);
      }
    } else {
      setTimeout(waitForTopbar, 100);
    }
  };
  waitForTopbar();
});
