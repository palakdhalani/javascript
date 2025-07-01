function nav(){
    let nav
    nav = document.getElementById("cho")
    nav.innerHTML = `<div class="nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">More</a>
    </div>`
    return nav
}
export default nav