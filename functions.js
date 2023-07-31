const inputfield = document.getElementById("searchbar")
const firstcontent = document.getElementsByClassName("first-content")[0]

inputfield.addEventListener("focus", (event) => {
    firstcontent.style.cssText += "height:20vh;"
});
inputfield.addEventListener("focusout", (event) => {
    firstcontent.style.cssText += "height:70vh;"
});