// for showing post

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => showPost(data))
}

function showPost(data) {
    const allPosts = document.getElementById("posts")
    data.filter((user) => {
        if (user.id % 2 == 1) {
            const div = document.createElement("div")
            div.className = 'posts'
            div.innerHTML = `
            <h2>${user.id}</h2>
            <h3>${user.title}</h3>
            <h4>${user.body}</h4>
        `
            allPosts.appendChild(div)
            console.log(div);
        }
    })
}

// for showing comments

function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(json => showComments(json))
}

function showComments(json) {
    const allPosts = document.getElementById("posts")
    for (data of json) {
        const div = document.createElement('div')
        div.className = 'comments'
        div.innerHTML = `
            <h2>${data.name}</h2>
            <h4>${data.email}</h4>
            <h5>${data.body}</h5>
        `
        allPosts.appendChild(div)
    }
}

// for showing todos

function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(json => showTodos(json))
}

function showTodos(json) {
    const allPosts = document.getElementById("posts")
    console.log(json);
    for (todo of json) {
        const div = document.createElement('div')
        div.className = 'todo'
        div.innerHTML = `
        <h2>${todo.id}</h2>
        <h4>${todo.title}</h4>
        <h5>${todo.completed}</h5>
        `
        allPosts.appendChild(div)
    }
}