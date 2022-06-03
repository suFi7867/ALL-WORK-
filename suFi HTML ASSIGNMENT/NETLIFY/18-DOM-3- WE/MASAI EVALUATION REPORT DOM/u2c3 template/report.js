// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit", func)

function func(event){
    event.preventDefault();

    let avatar = document.querySelector("#image").value
    let name = document.querySelector("#name").value
    let batch = document.querySelector("#batch").value
    let dsa = document.querySelector("#dsa").value
    let skillathon = document.querySelector("#dcs").value
    let coding = document.querySelector("#coding").value



    
 console.log(avatar,name,batch,dsa,skillathon,coding)


   
}






    // var tr = document.createElement("tr");

    // var tr1 = document.createElement("tr");

    // var tr2 = document.createElement("tr");
    // tr2.innerText = name

    // var tr3 = document.createElement("tr");
    // tr3.innerText = batch

    // var tr4 = document.createElement("tr");
    // tr4.innerText = dsa

    // var tr5 = document.createElement("tr");
    // tr5.innerText = skillathon

    // var tr6 = document.createElement("tr");
    // tr5.innerText = coding
    
    // let obtainedMarks = Number(dsa) + Number(skillathon) + Number(coding)
    
    // let percentage = (obtainedMarks)

    // var tr7 = document.createElement("tr");

    

    // var tr8 = document.createElement("tr");
    // var tr9 = document.createElement("tr");

    // tr.append(tr,tr1,tr2,tr3,tr4,tr5,tr6,tr7,tr8,tr9)
    // document.querySelector("tbody").append(tr)