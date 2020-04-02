// Array of Books Objects
let myLibrary = [];

// Book Class
function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    // Format new book as a line in a table
    this.displayTable = function() {
        readStatus = ""
        if (this.read == true){
            readStatus = "X"
        }
        else{
            readStatus = ""
        }
        return `<tr>
        <td>${this.title}</td>
        <td>${this.author}</td>
        <td>${this.pages}</td>
        <td>${readStatus}</td>
        <td><button id="item">Remove</button></td>
        </tr>`
    }
}

// Add Books to Array on "Submit Book" button click
document.getElementById("addBook").addEventListener("click", addBook);
function addBook() {
  console.log(document.getElementById("title").value)
  console.log(document.getElementById("author").value)
  console.log(document.getElementById("pages").value)
  console.log(document.getElementById("read").checked)
  // Get values from form and create newBook Object
  let newBook = new Book(document.getElementById("title").value, 
  document.getElementById("author").value, 
  document.getElementById("pages").value, 
  document.getElementById("read").checked)
  // console.log(newBook.displayTable())    *DEBUG
  // Add Book to Array and update the page
  myLibrary.push(newBook)
  updateTable()
  // Restore the input form to initial state
  document.getElementById("title").value = ""
  document.getElementById("author").value = ""
  document.getElementById("pages").value = ""
  document.getElementById("read").checked = false
}

// Update Table function
function updateTable(){
    let library = ""
    for(item in myLibrary){
        library += myLibrary[item].displayTable().replace("item", item);
    }
    document.getElementById('BookTable').innerHTML = "<thead><tr><td>Title</td><td>Author</td><td>Pages</td><td>Read</td></tr></thead>" + library;

    // create nodelist of buttons
    const buttons = document.querySelectorAll('button');
    // for each button, add the removeBook with parameter id
    buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        removeBook(button.id);
    });
    });
    
}

// Remove Books on "Remove last Book" button click


function removeBook(id){
    if(Number.isInteger(parseInt(id))){
    myLibrary.splice(id, 1)
    updateTable()
    }
}



