"use strict";
const list = document.querySelector("#list");
const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-title");
if (list && form && input) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (input.value === "" || input.value === null)
            return;
        const newTask = document.createElement("li");
        newTask.textContent = input.value;
        list.appendChild(newTask);
        input.value = "";
    });
}
