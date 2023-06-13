let bikes = ["Hero","Honda","Bajaj","Suzuki","Yamaha"];

let person = {
    name : "Mani",
    age : 27,
    gender : "Male"
};

let todos = [
    {
        todo : "Attending CCBP sessions",
        todoStatus : "completed"
    },
    {
        todo : "Completing Practice Sets",
        todoStatus : "Not Completed",
    },
    {
        todo : "Asking doubts",
        todoStatus : "Completed"
    },
];

let valuesToStringify = [bikes,person,todos];

let jsonontainerEl = document.getElementById("jsonContainer");

function createAndAppendValue(stringifiedValue) {

    let valueContainerEl = document.createElement("div");
    valueContainerEl.classList.add("value-container");
    jsonontainerEl.appendChild(valueContainerEl);

    let valueEl = document.createElement("span");
    valueEl.textContent = stringifiedValue;
    valueEl.classList.add= ("value");
    valueContainerEl.appendChild(valueEl);
}

function convertToJsonString(value) {
    let stringifiedValue = JSON.stringify(value);
    createAndAppendValue(stringifiedValue);
}

for(let value of valuesToStringify) {
    convertToJsonString(value);
}