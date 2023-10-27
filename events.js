window.addEventListener("DOMContentLoaded", event => {
    alert("DOM has been loaded");

    const elem1 = document.getElementById("red-input");
    elem1.addEventListener("input", red)
    function red()  {
        if (elem1.value === "red") {
            elem1.style.backgroundColor = "red";
        }
    };

    const elem2 = document.getElementById("list-add");
    const ul = document.getElementsByTagName("ul")[0];
    document.getElementById("add-item")
    .addEventListener("click", addToList)
    function addToList() {
        const newElem = document.createElement("li");
        newElem.textContent = elem2.value;
        ul.appendChild(newElem);
    };


    const elem3 = document.getElementById("section-3")
    document.getElementById("color-select")
    .addEventListener("input", selectColor)
    function selectColor()  {
        elem3.style.backgroundColor = document.getElementById("color-select").value;
    };


    document.getElementById("remove-listeners")
    .addEventListener("click", e => {
        elem1.removeEventListener("input", red);

        document.getElementById("add-item")
        .removeEventListener("click", addToList);

        document.getElementById("color-select")
        .removeEventListener("input", selectColor)
    })

    const elem4 = document.createElement("button");
    elem4.classList.add("btn");
    elem4.textContent = "Add Listeners"
    document.getElementById("section-4").appendChild(elem4)
    document.getElementsByClassName("btn")[0]
    .addEventListener("click", e => {
        elem1.addEventListener("input", red);

        document.getElementById("add-item")
        .addEventListener("click", addToList);

        document.getElementById("color-select")
        .addEventListener("input", selectColor)
    })

    const elem5 = document.createElement("section");
    elem5.setAttribute("id", "section-5")
    document.body.appendChild(elem5);

    const getElem = document.getElementById("section-5");
    const elem6 = document.createElement("div");
    getElem.appendChild(elem6);
    getElem.addEventListener("mouseover", e => {
        elem6.textContent = "Hovered!";
    })
    getElem.addEventListener("mouseout", e => {
        elem6.textContent = "Hover over me";
    })

    document.addEventListener('keyup', e => {
        if (e.code === 'Space') {
            alert('Space pressed')
        }
    })

    // function addGlobalEventListener(type, selector, callback) {
    //     document.addEventListener(type, e => {
    //         if (e.target.matches(selector)) callback(e)
    //     })
    // }

})
