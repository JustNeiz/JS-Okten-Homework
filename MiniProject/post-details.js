let display = document.getElementsByClassName('display')[0];
let UserId = sessionStorage.getItem('id');
postId = sessionStorage.getItem('postId');
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(posts => {
    console.log(posts);
    for (const post of posts) {
        if(post.id == postId){
            let box = document.createElement('div');
            box.classList.add('contentCommentCard');
            box.innerText = isObjInside(post, '');
            display.appendChild(box);
        }
    }
});
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        for (const comment of comments) {
            if(comment.postId == sessionStorage.getItem('postId')){
                let box = document.createElement('div');
                box.classList.add('contentPosterCard');
                box.innerText = isObjInside(comment, '');
                flex.appendChild(box);
            }
        }
    })

function isObjInside(user, str = '') {
    for (const userKey in user) {
        if (typeof user[userKey] !== 'object') {
            str = str + `${userKey} : ${user[userKey]}\n`;
        } else {
            // str = str + userKey + ': ' + isObjInside(user[userKey], str);
            str = str + `${userKey} : \n${isObjInside(user[userKey], '')}`;

        }
    }
    return str;
}
let flex = document.createElement('div');
flex.classList.add('flex');
document.body.appendChild(flex);