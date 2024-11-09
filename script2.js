// let lusername = localStorage.getItem('uname');
// let lpassword = localStorage.getItem('pwd');
// let accsta = localStorage.getItem('accsta');
// lusername ? lusername = lusername.split(",") : lusername = []
// lpassword ? lpassword = lpassword.split(",") : lpassword = []
// accsta ? accsta = accsta = accsta.split(",") : accsta = []


// function login() {
//     let counter = 0;
//     let username = document.querySelector('#username').value;
//     let password = document.querySelector('#password').value;
//     if (!username || !password) {
//         alert("Please Enter username/password");
//     }
//     for (let i = 0; i < lusername.length; i++) {
//         if (username == lusername[i] && password == lpassword[i] && accsta[i] == 1) {
//             counter++;
//         }
//         if (username == lusername[i] && password == lpassword[i] && accsta[i] == 0) {
//             alert("user banned!");
//         }
//         if (counter == 1) { alert("Login Granted!!") } else {
//             alert("Bhag Sale!!!")

//         }
//     }

// }

// function register() {
//     let username = document.querySelector('#username').value;
//     let password = document.querySelector('#password').value;
//     let cpassword = document.querySelector('#confirm-password').value;
//     if (!username || !password || !cpassword) { alert("Please Fill all the feilds!") }
//     if (password === cpassword) {
//         lusername.push(username);
//         lpassword.push(password);
//         accsta.push(1);
//         saveDatatoLocal();
//         alert("User Saved!!!!");
//     } else {
//         alert("Try again!!!!!")
//         document.querySelector('#username').value = "";
//         document.querySelector('#password').value = "";
//         document.querySelector('#confirm-password').value = "";
//     }
// }

// function getUsers() {
//     document.querySelector('#table-body').innerHTML = '';
//     for (let i = 0; i < lusername.length; i++) {
//         let table_row = document.createElement('tr');
//         let table_data = document.createElement('td');
//         let table_data1 = document.createElement('td');
//         let table_data2 = document.createElement('td');
//         table_data.innerHTML = i;
//         table_data1.innerHTML = lusername[i];
//         if (accsta[i] == 1) {
//             table_data2.innerHTML = ` <div class="action-btns">
//         <button class="btn btn-edit" onclick="editUser(${i})">Edit</button>
//         <button class="btn btn-delete" onclick="deleteUser(${i})">Delete</button>
//         <button class="btn btn-ban" onclick="banUser(${i})">Ban</button>
//         </div>`
//         } else {
//             table_data2.innerHTML = ` <div class="action-btns">
//             <button class="btn btn-edit" onclick="editUser(${i})">Edit</button>
//             <button class="btn btn-delete" onclick="deleteUser(${i})">Delete</button>
//             <button class="btn btn-ban" onclick="banUser(${i})">Un-Ban</button>
//             </div>`
//         }

//         table_row.appendChild(table_data);
//         table_row.appendChild(table_data1);
//         table_row.appendChild(table_data2);
//         document.querySelector('#table-body').appendChild(table_row)
//     }
// }


// function saveDatatoLocal() {
//     localStorage.setItem('uname', lusername);
//     localStorage.setItem('pwd', lpassword);
//     localStorage.setItem('accsta', accsta);
//     getUsers();
// }

// function editUser(id) {
//     let value = prompt("Enter the value to be changed:");
//     lusername[id] = value;
//     saveDatatoLocal();
// }

// function deleteUser(id) {
//     lusername.splice(id, 1);
//     lpassword.splice(id, 1);
//     saveDatatoLocal();
// }


// function banUser(id) {
//     let tempvar = accsta[id];

//     if (tempvar == 1) {
//         accsta[id] = 0
//     } else if (tempvar == 0) {
//         accsta[id] = 1;
//     } else {
//         alert("Internal error")
//     }
//     saveDatatoLocal();
//     getUsers();
// }



// Renamed variables to follow camelCase convention
let usernames = localStorage.getItem('usernames');
let passwords = localStorage.getItem('passwords');
let accountStatus = localStorage.getItem('accountStatus');
let isAdmin = localStorage.getItem('isAdmin');

usernames ? usernames = usernames.split(",") : usernames = [];
passwords ? passwords = passwords.split(",") : passwords = [];
accountStatus ? accountStatus = accountStatus.split(",") : accountStatus = [];
isAdmin ? isAdmin = isAdmin.split(",") : isAdmin = [];

//0 -user 1-Admin
// Simplified login function
function login() {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    if (!username || !password) {
        alert("Please enter username and password");
        return;
    }
    for (let i = 0; i < usernames.length; i++) {
        if (username === usernames[i] && password === passwords[i] && accountStatus[i] === '1') {
            alert("Login Granted!!");
            return;
        } else if (username === usernames[i] && password === passwords[i] && accountStatus[i] === '0') {
            alert("User banned!");
            return;
        }
    }
    alert("Invalid username or password");
}

// Simplified register function
function register() {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirm-password').value;
    if (!username || !password || !confirmPassword) {
        alert("Please fill all fields!");
        return;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }
    usernames.push(username);
    passwords.push(password);
    accountStatus.push('1');
    isAdmin.push('0')
    saveDataToLocal();
    alert("User saved!");
}

// Extracted common logic into separate function
function saveDataToLocal() {
    localStorage.setItem('usernames', usernames);
    localStorage.setItem('passwords', passwords);
    localStorage.setItem('accountStatus', accountStatus);
    localStorage.setItem('isAdmin', isAdmin);
    getUsers();
}

// Simplified getUsers function
function getUsers() {
    document.querySelector('#table-body').innerHTML = '';
    for (let i = 0; i < usernames.length; i++) {
        const tableRow = document.createElement('tr');
        const tableData = document.createElement('td');
        const tableData1 = document.createElement('td');
        const tableData2 = document.createElement('td');
        tableData.innerHTML = i;
        tableData1.innerHTML = usernames[i];
        let actionButtons = '';
        if (isAdmin[i] === '1') {
            if (accountStatus[i] === '1') {
                actionButtons = `
        <button class="btn btn-edit" onclick="editUser(${i})">Edit</button>
        <button class="btn btn-delete" onclick="deleteUser(${i})">Delete</button>
        <button class="btn btn-ban" onclick="banUser(${i})">Ban</button>
        <button class="btn btn-edit" onclick="changeAdmin(${i})">Admin</button>
      `;
            } else {
                actionButtons = `
        <button class="btn btn-edit" onclick="editUser(${i})">Edit</button>
        <button class="btn btn-delete" onclick="deleteUser(${i})">Delete</button>
        <button class="btn btn-ban" onclick="banUser(${i})">Un-Ban</button>
        <button class="btn btn-edit" onclick="changeAdmin(${i})">Admin</button>
      `;
            }
        } else {
            if (accountStatus[i] === '1') {
                actionButtons = `
            <button class="btn btn-edit" onclick="editUser(${i})">Edit</button>
            <button class="btn btn-delete" onclick="deleteUser(${i})">Delete</button>
            <button class="btn btn-ban" onclick="banUser(${i})">Ban</button>
            <button class="btn btn-edit" onclick="changeAdmin(${i})">User</button>
          `;
            } else {
                actionButtons = `
            <button class="btn btn-edit" onclick="editUser(${i})">Edit</button>
            <button class="btn btn-delete" onclick="deleteUser(${i})">Delete</button>
            <button class="btn btn-ban" onclick="banUser(${i})">Un-Ban</button>
            <button class="btn btn-edit" onclick="changeAdmin(${i})">User</button>
          `;
            }

        }
        tableData2.innerHTML = actionButtons;
        tableRow.appendChild(tableData);
        tableRow.appendChild(tableData1);
        tableRow.appendChild(tableData2);
        document.querySelector('#table-body').appendChild(tableRow);
    }
}

// Simplified editUser function
function editUser(id) {
    const newValue = prompt("Enter the new value:");
    if (!newValue) {
        alert("Please enter a value");
        return;
    }
    usernames[id] = newValue;
    saveDataToLocal();
}

// Simplified deleteUser function
function deleteUser(id) {
    usernames.splice(id, 1);
    passwords.splice(id, 1);
    accountStatus.splice(id, 1);
    saveDataToLocal();
}

// Simplified banUser function
function banUser(id) {
    const currentStatus = accountStatus[id];
    if (currentStatus === '1') {
        accountStatus[id] = '0';
    } else if (currentStatus === '0') {
        accountStatus[id] = '1';
    } else {
        alert("Internal error");
        return;
    }
    saveDataToLocal();
    getUsers();
}

function changeAdmin(id) {
    const currentStatus = isAdmin[id];
    if (currentStatus === '1') {
        isAdmin[id] = '0';
    } else if (currentStatus === '0') {
        isAdmin[id] = '1';
    } else {
        alert("Internal error");
        return;
    }
    saveDataToLocal();
    getUsers();
}