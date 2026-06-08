let editIndex = -1;

// Save Post
function savePost() {
    let title = document.getElementById("title").value.trim();
    let content = document.getElementById("content").value.trim();

    if (title === "" || content === "") {
        alert("Please enter title and content!");
        return;
    }

    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    if (editIndex === -1) {
        posts.push({
            title: title,
            content: content
        });
    } else {
        posts[editIndex] = {
            title: title,
            content: content
        };
        editIndex = -1;
    }

    localStorage.setItem("posts", JSON.stringify(posts));

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

    alert("Post Published Successfully!");
}

// Show/Hide Posts
function togglePosts() {
    let postSection = document.getElementById("postsSection");

    if (postSection.style.display === "none" || postSection.style.display === "") {
        displayPosts();
        postSection.style.display = "block";
    } else {
        postSection.style.display = "none";
    }
}

// Display Posts
function displayPosts() {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    let output = "";

    if (posts.length === 0) {
        output = "<h3>No Data Found</h3>";
    } else {
        posts.forEach((post, index) => {
            output += `
                <div class="post">
                    <h3>${post.title}</h3>
                    <p>${post.content}</p>

                    <button onclick="editPost(${index})">
                        Edit
                    </button>

                    <button onclick="deletePost(${index})">
                        Delete
                    </button>
                </div>
            `;
        });
    }

    document.getElementById("posts").innerHTML = output;
}

// Edit Post
function editPost(index) {
    let posts = JSON.parse(localStorage.getItem("posts"));

    document.getElementById("title").value = posts[index].title;
    document.getElementById("content").value = posts[index].content;

    editIndex = index;

    window.scrollTo(0, 0);
}

// Delete Post
function deletePost(index) {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    posts.splice(index, 1);

    localStorage.setItem("posts", JSON.stringify(posts));

    displayPosts();
}