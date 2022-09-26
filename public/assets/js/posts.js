const userPostHandler = async (event) => {
    event.preventDefault();
    alert("buttonworks")
    const userPost = document.querySelector('#userPost').value.trim();

    if (userPost) {
        const response = await fetch('/api/users/posts', {
            method: 'POST',
            body: JSON.stringify({ userPost }),
            headers: { 'Content-Type': 'application/json' },
        });
    } if (response.ok) {
        document.location.replace('/login');
    } else {
        alert(response.statusText);
    }
}


document
    .getElementById('userPost')
    .addEventListener('submit', userPostHandler);