// localStorage.setItem('ad', 'Nura')
// localStorage.setItem('soyad', 'Isazade')

// let ad=localStorage.getItem('ad')
// let soyad=localStorage.getItem('soyad')

// console.log(ad + " " + soyad);


// sessionStorage.setItem('userneme','Nuraisd')
// sessionStorage.setItem('email','Nuraisd@gmail.com')

// document.cookie="ad=hesen; expire=mon 30 oct 8:35:00 GNT"
// document.cookie="ad=; expire=mon 29 oct 8:29:00 GNT"

// let dosya=document.getElementById('file')

// dosya.addEventListener('change',e=>{
//     let file=e.target.files[0]
//     console.log(file.name);
// })





// localStorage.setItem('name', 'Nura')
// localStorage.setItem('surname', 'Isazade')
// localStorage.setItem('username', 'iszdn')
// localStorage.setItem('password', '12345')

// const p = document.createElement('p')
// const body = document.querySelector('body')

// p.innerHTML = localStorage.getItem('name') + " " + localStorage.getItem('surname') + " " + localStorage.getItem('username') + " " + localStorage.getItem('password')

// body.append(p)
// console.log(p);



// const myObject = {
//     name : "Nura",
//     surname : "Isazade",
//     username : "iszdn",
//     password : "12345" 
//   }

//   localStorage.setItem("myOb", JSON.stringify(myObject));
//   let myOb=JSON.parse(localStorage.getItem("myObject"))

// p.innerHTML = `${myOb.name} ${myOb.surname} ${myOb.username} ${myOb.password} `
// console.log(myOb);





// birinci task
const input = document.querySelector('input')
const container = document.querySelector('.container')
const add = document.getElementById('add')
const formUs = document.getElementById('formUs')
const list = document.getElementById('list')
const deleteAll=document.getElementById('deleteAll')
let arr = [];
let element=JSON.parse(localStorage.getItem("arr"))

if (element) {
    arr = element
}

add.addEventListener('click', (e) => {
    e.preventDefault();
    if (input.value === "") {
        return;
    }

    const li = document.createElement('li')
    const inp = document.createElement('input')
    inp.setAttribute("type", "checkbox")

    li.textContent = input.value
    inp.onclick = () =>
        inp.checked ? li.classList.add("xett") : li.classList.remove("xett");

    list.appendChild(li)
    li.appendChild(inp)

    arr.push(input.value)

    localStorage.setItem("arr", JSON.stringify(arr))

    formUs.reset()





    deleteAll.addEventListener('click',(e)=>{
        e.preventDefault()
        
    })



})








// ikinci task
// const username = document.getElementById('username');
// const password = document.getElementById('password');
// const save = document.getElementById('save');
// const form=document.querySelector('form');

// const perem=JSON.parse(localStorage.getItem("obyekt"))
// console.log(perem);

// if (perem) {
//     username.value=perem.ad
//     password.value=perem.parol
// }
// save.addEventListener('click', (e) => {

//     e.preventDefault()
// obj={
//         ad:username.value,
//         parol:password.value
//     }

// localStorage.setItem("obyekt",JSON.stringify(obj))
// form.reset()

// })




// 3cu task
