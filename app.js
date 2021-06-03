
// console.log("page run");
showNotes();
let addbtn = document.getElementById('addButton');



//Add button clicked
addbtn.addEventListener("click", function () {

  console.log("Button clicked");

  let textArea = document.getElementById('addText');
  // textArea.innerText="mohit";

  let notes = localStorage.getItem('notes');

  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }

  if (textArea.value != "")
    notesObj.push(textArea.value);
  textArea.value = "";
  localStorage.setItem('notes', JSON.stringify(notesObj));
  console.log(notes);

  showNotes();


});

//show notes on screen 
function showNotes() {
  let notes = localStorage.getItem('notes');

  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }

  let notesList = "";

  notesObj.forEach(function (element, index) {
    notesList += `
    <div class=" card noteCard my-2 mx-2" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">Notes ${index + 1}</h5>
        <p class="card-text">${element}</p>
        <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
    </div>
</div>
         `

  });

  notesElement = document.getElementById('notes');

  if (notesObj.length != 0) {
    notesElement.innerHTML = notesList;
  }
  else {
    notesElement.innerHTML = `nothing to show you! "add notes"`;
  }
}

//Delete notes from screen
function deleteNote(index) {
  console.log("i am deleted ", index);
  //  notesObj.remove(index);

  let notes = localStorage.getItem('notes');

  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(notesObj));
  showNotes();
}


// search notes
let search = document.getElementById('searchText');
search.addEventListener("input", function () {
  let inputValue = search.value.toLowerCase();
  // console.log(inputValue);

  let noteCards = document.getElementsByClassName('noteCard');

  Array.from(noteCards).forEach(function (element) {

    let cardText = element.getElementsByTagName("p")[0].innerText;

    if (cardText.includes(inputValue)) {
      element.style.display = "block";
    }
    else {
      element.style.display = "none";
    }

  });

});


