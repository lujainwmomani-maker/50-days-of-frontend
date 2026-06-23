const textarea = document.querySelector("textarea");
const addBtn = document.querySelector(".input-area button");
const notesContainer = document.querySelector(".notes");

addBtn.addEventListener("click", () => {
  const noteText = textarea.value.trim();

  if (noteText === "") return;

  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
    <p>${noteText}</p>
    <button>Delete</button>
  `;

  notesContainer.appendChild(note);

  const deleteBtn = note.querySelector("button");

  deleteBtn.addEventListener("click", () => {
    note.remove();
  });

  textarea.value = "";
});
