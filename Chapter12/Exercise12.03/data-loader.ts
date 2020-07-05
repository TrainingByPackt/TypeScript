const updateUI = (message: any): void => {
  const item = document.getElementById('my-data');
  if (item) {
    item.innerText = message;
  }
};

const message = fetch('http://localhost:8080/data.json');
updateUI(message);
