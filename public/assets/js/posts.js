
//const postsData = require('./seeds/postDataSeed.json');

//const { json } = require("sequelize");
var postArray = -1;
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
    } getPosts();

};


document
    .getElementById('userPost')
    .addEventListener('click', userPostHandler);


const getPosts = async () => {
    const now = new Date();

    // View the output
    now;
    var postText;
    var obj = await fetch('/api/users/posts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json())
        .then((data) => { postText = data[postArray].post_content }).then(function render() {

            let str = '';
            str += `<ol><div class="card" style="width: 18rem;">
            
            <div class="card-body">
              <h5 class="card-title">${postText}</h5>
              <p class="card-text">${now}</p>
            </div>
          </div></ol>`
            document.getElementById('postMade').innerHTML += str;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    postArray += 1;
}

getPosts()

