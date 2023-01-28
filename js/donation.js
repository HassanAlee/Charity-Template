// donation form js
const durationElm = document.querySelectorAll(".duration");
durationElm.forEach((elm) => {
  elm.addEventListener("click", (e) => {
    durationElm.forEach((Elm) => {
      Elm.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});
// dollars active
const dollarsElms = document.querySelectorAll(".dollars");
dollarsElms.forEach((elm) => {
  elm.addEventListener("click", (e) => {
    dollarsElms.forEach((Elm) => {
      Elm.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});
// donation form js end
