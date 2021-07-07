let button = document.querySelector("button");
let heading = document.querySelector("h1");

// button.addEventListener("click", (event) => {
//   button.innerHTML = `클릭 수: ${event.detail}`;
// });

function setUserName() {
  let myName = prompt("Please enter your name.");

  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    heading.innerHTML = "Mozilla is cool, " + myName;
  }
}

button.onclick = () => setUserName();
