let count = 0;

function render() {
  const root = document.querySelector(".root");
  root.innerHTML = `
    <p>This is our counter application</p>
    <h2>counter value is : ${count}</h2>
    <button onclick="increasecount()">increase</button>
    <button onclick="decreasecount()">decrease</button>
    `;
}

function increasecount() {
  count++;
  render();
}

function decreasecount() {
  count--;
  render();
}

render();
