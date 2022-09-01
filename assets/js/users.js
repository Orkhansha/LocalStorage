let datas = JSON.parse(localStorage.getItem("Users"))

let table = document.querySelector(".table");


console.log(datas);

for (const item of datas) {
    table.lastElementChild.innerHTML += `<tr>
    <td>${item.name}</td>
    <td>${item.surname}</td>
    <td>${item.age}</td>
    <td>${item.address}</td>
    </tr>`
}
