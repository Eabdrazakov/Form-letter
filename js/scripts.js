
window.onload = function () {
    let form = document.querySelector("form");
    form.onsubmit = function (letter) {
        const person1 = document.getElementById("person1Input").value;


        document.querySelector("span#person1").innerText = person1;

        document.querySelector("div#story").removeAttribute("class");
        event.preventDefault();
    }

    let click = document.querySelector("form>button");

    function alertHeadings() {
        document.body.style.backgroundColor = "azure";
        document.body.style.color = "black";
    }

    click.addEventListener("click", alertHeadings);


}
