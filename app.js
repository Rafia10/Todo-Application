var list = document.getElementById("List");
function add() {
    var todo = document.getElementById("todo-item");
    var li = document.createElement("li");
    var litext = document.createTextNode(todo.value)
    li.appendChild(litext)
    // litext.setAttribute("class","bg-light")
    list.appendChild(li)
    li.setAttribute("class", "bg-light")
    //delete button
    var delbtn = document.createElement("button")
    var delTxt = document.createTextNode("Delete")
    delbtn.setAttribute("class", "btn-warning")
    delbtn.setAttribute("onclick", "deleteItem(this)")
    delbtn.appendChild(delTxt)
    li.appendChild(delbtn)

    //edit button
    var editbtn = document.createElement("button")
    var editTxt = document.createTextNode("Edit")
    editbtn.setAttribute("class", "btn-warning")
    editbtn.setAttribute("onclick", "Edit(this)")
    editbtn.appendChild(editTxt)
    li.appendChild(editbtn)


    todo.value = ""

}
function deleteItem(e) {
    e.parentNode.remove();

}
function deleteAll() {
    List.innerHTML = "";
}
function Edit(e) {
    var item = prompt("Enter new value", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = item;
}