
document.querySelector("form").addEventListener("submit",MyFunc)

let formTag = document.querySelector("form")


function MyFunc(event){
    event.preventDefault();
    
    let name = formTag.name.value
    let id = formTag.employeeID.value
    let dep = formTag.department.value
    let ex = formTag.exp.value
    let email = formTag.email.value
    let mobile = formTag.mbl.value
    

    // console.log(name,id,dep,ex,email,mobile)

    let tr = document.createElement("tr");
    
    let td1 = document.createElement("td");
    td1.innerText = name ;

    let td2 = document.createElement("td");
    td2.innerText = id;

    let td3 = document.createElement("td");
    td3.innerText = dep;

    let td4 = document.createElement("td");
    td4.innerText = ex;

    let td5 = document.createElement("td");
    td5.innerText = email;

    let td6 = document.createElement("td");
    td6.innerText = mobile; 

    let td7 = document.createElement("td");
    
     if(ex >= 5){
        td7.innerText = "Senior"; 
     }else if( ex >= 2 && ex < 5){
        td7.innerText = "Junior"; 
     }else {
        td7.innerText = "Fresher"; 
     }

     let td8 = document.createElement("td");
     td8.innerText = "DELET"
     td8.style.backgroundColor = "#132a13"
     td8.style.color = "yellow"
     td8.style.cursor = "pointer"
     td8.style.fontSize = "20px"


     td8.addEventListener("click",deleteROW)
     
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);

    document.querySelector("tbody").append(tr);


}

function deleteROW(event){
   event.target.parentNode.remove();
}