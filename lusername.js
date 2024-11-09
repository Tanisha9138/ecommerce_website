let lusername = localStorage.getItem('uname');
let lpassword = localStorage.getItem('pwd');
let accsta = localStorage.getItem('accsta');
lusername ? lusername = lusername.split(",") : lusername = [];
lpassword ? lpassword = lpassword.split(",") : lpassword = [];
accsta ? accsta = accsta = accsta.split(",") : accsta = [];
getUsers();

function login() {
    let counter = 0;
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    if (!username || !password) {
        alert("Please Enter username/password");
    }
    for (let i = 0; i < lusername.length; i++) {
        if (username == lusername[i] && password == lpassword[i] && accsta[i] == 1) {
            counter++;
        }
        if (username == lusername[i] && password == lpassword[i] && accsta[i] == 0) {
            alert("user banned!");
        }
    }
    if (counter == 1) { alert("Login Granted!!"); } else {
        alert("Bhag Sale!!!");

    }
}

function register() {
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    let cpassword = document.querySelector('#confirm-password').value;
    if (!username || !password || !cpassword) { alert("Please Fill all the feilds!"); }
    if (password === cpassword) {
        lusername.push(username);
        lpassword.push(password);
        accsta.push(1);
        localStorage.setItem('uname', lusername);
        localStorage.setItem('pwd', lpassword);
        alert("User Saved!!!!");
    } else {
        alert("Try again!!!!!");
        document.querySelector('#username').value = "";
        document.querySelector('#password').value = "";
        document.querySelector('#confirm-password').value = "";
    }
}

function getUsers() {
    document.querySelector('#table-body').innerHTML = '';
    for (let i = 0; i < lusername.length; i++) {
        let table_row = document.createElement('tr');
        let table_data = document.createElement('td');
        let table_data1 = document.createElement('td');
        let table_data2 = document.createElement('td');
        table_data.innerHTML = i;
        table_data1.innerHTML = lusername[i];
        table_data2.innerHTML = ` <div class="action-btns">
        <button class="btn btn-edit" onclick="editUser(${i})">Edit</button>
        <button class="btn btn-delete" onclick="deleteUser(${i})">Delete</button>
        <button class="btn btn-ban" onclick="banUser(${i})">Ban</button>
        </div>`;
        table_row.appendChild(table_data);
        table_row.appendChild(table_data1);
        table_row.appendChild(table_data2);
        document.querySelector('#table-body').appendChild(table_row);
    }
}

function saveDatatoLocal() {
    localStorage.setItem('uname', lusername);
    localStorage.setItem('pwd', lpassword);
    getUsers();
}

function editUser(id) {
    let value = prompt("Enter the value to be changed:");
    lusername[id] = value;
    saveDatatoLocal();
}

function deleteUser(id) {
    lusername.splice(id, 1);
    lpassword.splice(id, 1);
    saveDatatoLocal();
}