const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];



// Question 1:

const cat = {
    complain: function () {
        console.log("Meow!");
    }
}

cat.complain();

// Question 2:

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3:

heading.style.fontSize = "2em";

// Question 4:

heading.classList.add("subheading");

// Question 5:

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

// Question 6:

const resultsContainer = document.querySelector(".results");
resultsContainer.style.backgroundColor = "yellow";
resultsContainer.innerHTML = `<p>New paragraph</p>`;
// resultsContainer.innerHTML = `<p style="background-color: yellow">New paragraph</p>`;

// Question 7:

function catList(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(cats[i].name);
    }
}

catList(cats);

// Question 8:

function createCats(cats) {

    let html = "";

    for (let i = 0; i < cats.length; i++) {

        let ageValue = "Age unknown";
        if (cats[i].age) {
            ageValue = cats[i].age;
        }

        html += `<div>
                    <h5>Name: ${cats[i].name}</h5>
                    <p>Age: ${ageValue}</p>
                </div>`;
    }

    const catContainer = document.querySelector(".cat-container");
    const finalHtml = `<ul>${html}</ul>`;
    catContainer.innerHTML = finalHtml;

    return finalHtml;
}

createCats(cats);
