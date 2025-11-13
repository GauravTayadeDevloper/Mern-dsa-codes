// Quick Notes Board — DOM-focused Starter
// No solutions provided. Complete ONLY the TODOs.

// ------------------------
// State
// ------------------------
var notes = []; // Each note: { id: string, title: string, text: string }
var filterText = "";

// ------------------------
// DOM References
// ------------------------
var notesEl = document.getElementById("notes");
var formEl = document.getElementById("note-form");
var titleInput = document.getElementById("title");
var textInput = document.getElementById("text");
var submitBtn = document.getElementById("submit-btn");
var cancelEditBtn = document.getElementById("cancel-edit");
var editingIdInput = document.getElementById("editing-id");
var titleErrorEl = document.getElementById("title-error");
var filterInput = document.getElementById("filter");

// ------------------------
// Init
// ------------------------
function init() {
  // TODO(1): Render notes from the current state (notes array).
  renderNotes();

  // Events
  formEl.addEventListener("submit", onSubmit);
  cancelEditBtn.addEventListener("click", onCancelEdit);
  filterInput.addEventListener("input", onFilterChange);

  // TODO(2): Add event delegation on the notes container for Edit/Delete buttons.
  // Example: notesEl.addEventListener("click", onNotesClick);
}
init();

// ------------------------
// Rendering
// ------------------------
function renderNotes() {
  // TODO(3): Clear notesEl content before re-rendering.
  notesEl.innerHTML="";


  // TODO(4): Compute filtered list from notes array using filterText.
  var q = (filterText || "").toLowerCase();
  var visible =notes.filter

  // TODO(5): If no visible notes, show a <p class="muted"> message and return.

  // TODO(6): For each visible note, build the DOM structure using createElement:
  // - <article class="note" data-id="...">
  //   - <h3>Title here</h3>
  //   - <p>Text here</p>
  //   - <div class="note-actions">
  //       <button class="edit-btn">Edit</button>
  //       <button class="delete-btn">Delete</button>
  //     </div>
  // Append each built card to notesEl.
}

// ------------------------
// Events
// ------------------------
function onSubmit(e) {
  e.preventDefault();
  clearError();

  var title = titleInput.value.trim();
  var text = textInput.value.trim();
  var editingId = editingIdInput.value;

  // TODO(7): Validate that title is not empty.
  // - If empty, set titleErrorEl.textContent with a message and return.

  if (editingId) {
    // EDIT MODE
    // TODO(8): Find the note by id and update its title and text.
    // TODO(9): Reset the form back to "Add Note" mode (editingIdInput, buttons, labels).
  } else {
    // ADD MODE
    // TODO(10): Create a new note object with a unique id (e.g., Date.now().toString()).
    // TODO(11): Push the new note into the notes array.
  }

  // TODO(12): Re-render notes and reset the form fields.
}

function onCancelEdit() {
  // TODO(13): Clear edit state and reset form to "Add Note" mode.
  // - editingIdInput.value = ""
  // - submitBtn text back to "Add Note"
  // - hide cancelEditBtn
  // - clear any error
}

function onFilterChange(e) {
  // TODO(14): Update filterText from the input value and re-render notes.
}

// TODO(15): Implement delegated click handling for Edit/Delete actions on the notes board.
function onNotesClick(e) {
  // - Determine if the click was on .edit-btn or .delete-btn
  // - Find the closest .note element and read its data-id
  // - For Edit:
  //   - Find the note by id
  //   - Fill form inputs with the note values
  //   - Set editingIdInput.value = id
  //   - Change submit button text to "Save Changes"
  //   - Show cancelEditBtn
  // - For Delete:
  //   - Remove the note from the array by id
  //   - Re-render notes
}

// ------------------------
// Helpers
// ------------------------
function clearError() {
  // TODO(16): Clear any validation messages (e.g., titleErrorEl.textContent = "")
}

// ------------------------
// Student Checklist
// ------------------------
// [ ] (1) Initial render from state
// [ ] (2) Event delegation for Edit/Delete on #notes
// [ ] (3) Clear container before rendering
// [ ] (4) Filter notes by text (title or body)
// [ ] (5) Empty-state message when no notes
// [ ] (6) Build cards using createElement/appendChild
// [ ] (7) Validate title (required)
// [ ] (8) Edit existing note (update by id)
// [ ] (9) Reset form from edit → add mode
// [ ] (10) Create new note object with unique id
// [ ] (11) Add new note to array
// [ ] (12) Re-render + reset form after submit
// [ ] (13) Cancel edit (restore form)
// [ ] (14) Re-render on filter input
// [ ] (15) Implement onNotesClick for edit/delete
// [ ] (16) Clear validation messages properly
