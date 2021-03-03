// to fetch from databbase the to do's that have already been defined

// JSON: JavaScript Object Notation. 
// JSON is a syntax for storing and exchanging data.

// JSON is text, written with JavaScript object notation.

// When exchanging data between a browser and a server, the data can only be text.

// JSON is text, and we can convert any JavaScript object into JSON, and send JSON to the server.

// We can also convert any JSON received from the server into JavaScript objects.

// This way we can work with the data as JavaScript objects, with no complicated parsing and translations.

// ul- is unordered list

function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('rohan');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
 
    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('rohan', JSON.stringify(todos));
 
    show();
 
    return false; // avoids any further action even though user click , nothing will executed after line 36
}


// it will clear i.e. it will make sure that task is not hanging, clear any inputs that is hanging aroudn after u added a task
function clearDefault(a) {
    if (a.defaultValue==a.value) {a.value=""}
        
    };

// it is called remove the item 

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('rohan', JSON.stringify(todos));
 
    show();
 
    return false;
}

// show function displayed to do list stored in the database

function show() {
    var todos = get_todos();
 
    var html = '<ul>'; //snippet settings 
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">Delete</button> </li>';
    };
    html += '</ul>';
 
    document.getElementById('todos').innerHTML = html;
 
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}
 
document.getElementById('add').addEventListener('click', add);
show();

