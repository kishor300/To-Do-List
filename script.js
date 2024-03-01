const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {

    if (inputBox.value.trim() === "") {
        alert("You must write something !");
    }
    else {

        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// Mark Completed Task and Delete the Task

listContainer.addEventListener("click", function (event) {

    // console.log("Tag Name :", event.target.tagName); // LI, SPAN

    if (event.target.tagName === "LI") {

        event.target.classList.toggle("checked");
        saveData()
    }
    else if (event.target.tagName === "SPAN") {

        event.target.parentElement.remove();
        saveData()
    }

});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();