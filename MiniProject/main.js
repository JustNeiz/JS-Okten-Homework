let display = document.getElementsByClassName('display');
let card, button, userDescr;
let url = new URL('https://jsonplaceholder.typicode.com/users');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let userID;
        let userName
        for (const user of users) {
            userID = user.id;
            userName = user.name;
            card = document.createElement('div');
            card.classList.add('contentCard');

            userDescr = document.createElement('h6');
            userDescr.innerText = `User's id is: ${userID}\n User's name is: ${userName}`;

            button = document.createElement('button');
            button.classList.add('detailsButton');
            button.innerText = 'View more info';
            button.onclick = () => {
                sessionStorage.setItem('id', user.id);
                window.location.href = 'user-details.html';
            }
            card.append(userDescr, button);

            display[0].append(card);
        }
    })