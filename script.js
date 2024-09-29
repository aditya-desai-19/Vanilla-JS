
const input = document.querySelector("input");
const suggestionDiv = document.getElementById("suggestions");
const selectedDiv = document.getElementById("selected");

let index = 0;
const onKeyUp = (e) => {
    const suggestions = ["towel", "laptop", "mobile", "bed", "water boiler"]
    if (e?.target?.value && e?.key) {
        const filteredSuggestions = suggestions.filter(suggestion => suggestion.includes(e.target.value.toLowerCase()));
        console.log({ filteredSuggestions })
        filteredSuggestions.map(item => {
            const newParagraph = document.createElement("p");
            newParagraph.innerHTML = item;
            suggestionDiv.appendChild(newParagraph);
        })

        const allSuggestions = suggestionDiv.children;
        if (e.key === "ArrowUp") {
            index != 0 && index--;
        }
        else if (e.key === "ArrowDown") {
            index < (allSuggestions.length - 1) && index++
        }

        allSuggestions[index].style.backgroundColor = "blue"

        if(e.key === "Enter") {
            const para = document.createElement("p");
            para.innerHTML = allSuggestions[index].innerHTML;
            selectedDiv.appendChild(para);
        }
    }
    else {
        suggestionDiv.innerHTML = "";
    }
}

const onKeyDown = (e) => {
    const allSuggestions = suggestionDiv.children;
    console.log({allSuggestions})
    let index = 0;
    if(e.key === "ArrowUp") {
        index != 0 && index--;
    }
    else if(e.key === "ArrowDown") {
        index < (allSuggestions.length - 1) && index++
    }

    console.log({ selected: allSuggestions[index].style})
    allSuggestions[index].style.backgroundColor = "blue"
};

console.log("Hello world!");
input.addEventListener("keyup", onKeyUp)
// input.addEventListener("keydown", onKeyDown);