console.log(window.location.search)
let data = window.location.search
if(data.startsWith("?name")) {
    alert("There are viruses in this computer.")
} else {
    console.log("Hello")
}
