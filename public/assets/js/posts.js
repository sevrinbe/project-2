
//const postsData = require('./seeds/postDataSeed.json');

//const { json } = require("sequelize");

const userPostHandler = async (event) => {
    event.preventDefault();
    alert("buttonworks")
    const post_content = document.querySelector('#userText').value.trim();

    if (post_content) {
        const response = await fetch('/api/users/posts', {
            method: 'POST',
            body: JSON.stringify({ post_content }),
            headers: { 'Content-Type': 'application/json' },
        });
    } getPosts()
};


document
    .getElementById('userPost')
    .addEventListener('click', userPostHandler);


const getPosts = async (data) => {
    var postText
    var obj = await fetch('/api/users/posts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json())
        .then((data) => { postText = data[0].post_content }).then(function render() {
            let str = '';
            str += postText
            document.getElementById('postMade').innerHTML += str;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

