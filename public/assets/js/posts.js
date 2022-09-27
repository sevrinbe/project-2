
//const postsData = require('./seeds/postDataSeed.json');

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
    } if (response.ok) {
        document.location.replace('/profile');
    } else {
        alert(response.statusText);
    }
}


document
    .getElementById('userPost')
    .addEventListener('click', userPostHandler);


