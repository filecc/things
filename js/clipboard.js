import * as data from "./data.js";

(() => {
  /* IOS TOGGLE CLIPBOARD */
  document.querySelector(".iosCSS").addEventListener("click", () => {
    navigator.clipboard.writeText(data.iosToggleCSS);
  });
  document.querySelector(".iosHTML").addEventListener("click", () => {
    navigator.clipboard.writeText(data.iosToggleHTML);
  });
  document.querySelector(".iosJS").addEventListener("click", () => {
    navigator.clipboard.writeText(data.iosToggleJS);
  });

  /* Android TOGGLE CLIPBOARD */
  document.querySelector(".adCSS").addEventListener("click", () => {
    navigator.clipboard.writeText(data.adToggleCSS);
  });
  document.querySelector(".adHTML").addEventListener("click", () => {
    navigator.clipboard.writeText(data.adToggleHTML);
  });
  document.querySelector(".adJS").addEventListener("click", () => {
    navigator.clipboard.writeText(data.adToggleJS);
  });

  /* Day/Night TOGGLE CLIPBOARD */
  document.querySelector(".dnCSS").addEventListener("click", () => {
    navigator.clipboard.writeText(data.dnToggleCSS);
  });
  document.querySelector(".dnHTML").addEventListener("click", () => {
    navigator.clipboard.writeText(data.dnToggleHTML);
  });
  document.querySelector(".dnJS").addEventListener("click", () => {
    navigator.clipboard.writeText(data.dnToggleJS);
  });

  /* Day/Night w Stars TOGGLE CLIPBOARD */
  document.querySelector(".dnsCSS").addEventListener("click", () => {
    navigator.clipboard.writeText(data.dnsToggleCSS);
  });
  document.querySelector(".dnsHTML").addEventListener("click", () => {
    navigator.clipboard.writeText(data.dnsToggleHTML);
  });
  document.querySelector(".dnsJS").addEventListener("click", () => {
    navigator.clipboard.writeText(data.dnsToggleJS);
  });

   /* Hamburger MENU TOGGLE CLIPBOARD */
   document.querySelector(".hmCSS").addEventListener("click", () => {
    navigator.clipboard.writeText(data.hmToggleCSS);
  });
  document.querySelector(".hmHTML").addEventListener("click", () => {
    navigator.clipboard.writeText(data.hmToggleHTML);
  });
  document.querySelector(".hmJS").addEventListener("click", () => {
    navigator.clipboard.writeText(data.hmToggleJS);
  });
})();