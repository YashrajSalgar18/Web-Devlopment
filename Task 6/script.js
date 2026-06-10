function submitFeedback() {

    let name = document.getElementById("name").value.trim();
    let feedback = document.getElementById("feedback").value.trim();

    let understanding = document.querySelector('input[name="understanding"]:checked');
    let helpful = document.querySelector('input[name="helpful"]:checked');
    let teaching = document.querySelector('input[name="teaching"]:checked');
    let material = document.querySelector('input[name="material"]:checked');
    let groupActivity = document.querySelector('input[name="groupActivity"]:checked');

    if (
        !name ||
        !feedback ||
        !understanding ||
        !helpful ||
        !teaching ||
        !material ||
        !groupActivity
    ) {
        alert("Please fill all fields");
        return;
    }

    let feedbackList = document.getElementById("feedbackList");

    let card = document.createElement("div");
    card.className = "feedback-card";

    card.innerHTML = `
        <h3>${name}</h3>
        <p><b>Course Understanding:</b> ${understanding.value}</p>
        <p><b>Course Helpful:</b> ${helpful.value}</p>
        <p><b>Teaching Performance:</b> ${teaching.value}</p>
        <p><b>Course Material:</b> ${material.value}</p>
        <p><b>Group Activities:</b> ${groupActivity.value}</p>
        <p><b>Additional Feedback:</b> ${feedback}</p>
    `;

    feedbackList.appendChild(card);

    document.getElementById("noFeedback").style.display = "none";

    alert("Feedback Submitted Successfully!");

    document.getElementById("name").value = "";
    document.getElementById("feedback").value = "";

    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.checked = false;
    });
}

function viewFeedback() {

    let feedbackList = document.getElementById("feedbackList");
    let noFeedback = document.getElementById("noFeedback");

    if (feedbackList.children.length === 0) {
        noFeedback.style.display = "block";
        feedbackList.style.display = "none";
        return;
    }

    noFeedback.style.display = "none";

    if (
        feedbackList.style.display === "none" ||
        feedbackList.style.display === ""
    ) {
        feedbackList.style.display = "block";
    } else {
        feedbackList.style.display = "none";
    }
}