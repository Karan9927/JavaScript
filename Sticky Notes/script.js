let notes = [];

function readInput() {
  const textarea = document.getElementById("textarea");
  const colorPicker = document.getElementById("picker");
  const input = textarea.value.trim();
  if (input === "") {
    alert("Note can't be empty !");
  } else {
    const selectedColor = colorPicker.value;
    notes.push({ text: input, color: selectedColor });
    textarea.value = "";
    renderList();
  }
}

function removeNote(index) {
  notes.splice(index, 1);
  renderList();
}

function renderList() {
  let listElement = document.getElementById("noteslist");
  listElement.innerHTML = "";

  if (notes.length === 0) {
    document.getElementById("error-message").style.display = "block";
  } else {
    document.getElementById("error-message").style.display = "none";
  }

  notes.forEach(function (note, index) {
    let list = document.createElement("div");

    let container = document.createElement("div");
    container.classList.add("my-note-container");
    container.style.backgroundColor = note.color;

    if (note.color === "#ffffff") {
      container.style.color = "black";
    }

    let heading = document.createElement("div");
    heading.classList.add("my-note");
    heading.innerHTML = `<p>My Note</p>`;
    list.classList.add("note");
    list.textContent = note.text;

    let removebtn = document.createElement("button");
    removebtn.textContent = "Remove";
    removebtn.classList.add("removebtn");
    removebtn.addEventListener("click", function () {
      removeNote(index);
    });

    listElement.appendChild(container);
    container.appendChild(heading);
    heading.appendChild(removebtn);
    container.appendChild(list);
  });
}
