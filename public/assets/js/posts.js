
//right now using postArray to test needs to be replaced with event target listener of some kind
var card = 0
var postArray = 0;
const userPostHandler = async (event) => {
    event.preventDefault();
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






//gets the posts to display on the page
const getPosts = async () => {
    const now = new Date(); //added data

    now;
    var postText;
    var obj = await fetch('/api/users/posts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json())
        .then((data) => { postText = data[postArray].post_content }).then(function render() { //template for what will be displayed on the page

            let str = '';
            str += `<ol><div class="card d-flex align-items-center" style="width: 28rem;" id="card${card}">
            
            <div class="card-body">
              <h5 class="card-title">${postText}</h5>
              <p class="card-text">${now}</p>
            </div>
            <div class ="d-flex align-items-right">
            <button class="edit-post" id="edit${card}">Edit</button>
            <button class="delete-post" id="delete${card}">Delete</button>
            </div>
          </div></ol>`
            document.getElementById('postMade').innerHTML += str;
            const postDeleteListener = document.querySelectorAll(".delete-post");
            postArray += 1; //again this needs to be replaced
            for (let i = 0; i < postDeleteListener.length; i++) { //adds event listeners to the created buttons
                postDeleteListener[i].addEventListener("click", postDelete)
            };

        })
        .catch((error) => {
            console.error('Error:', error);
        });

    card += 1 //another that will need to be replaced
}

getPosts()



//deletes the post from database. will need to be specified using id or specific event in the future
const postDelete = async (e) => {
    card -= 1
    e.preventDefault();
    fetch(`/api/users/posts`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    document.getElementById(`card${card}`).style.visibility = "hidden";
    postArray -= 1;
}




const postDeleteListener = document.querySelectorAll(".delete-post");

