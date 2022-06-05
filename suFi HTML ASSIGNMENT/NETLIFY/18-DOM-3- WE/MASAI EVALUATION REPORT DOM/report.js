// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit", func)


let formTag = document.querySelector("form") 
//formTag.tagId.Value

function func(event){

    event.preventDefault();
    //event.preventDefault(); used to remove refresh page

                 //formTag.tagId.Value
    let avatar = formTag.image.value
    let name = formTag.name.value
    let batch = formTag.batch.value
    let dsa = formTag.dsa.value
    let skill = formTag.cs.value
    let coding = formTag.coding.value
   
 
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
      let pic = document.createElement("img")
      pic.setAttribute("src",avatar)
      td1.append(pic)

    let td2 = document.createElement("td");
       td2.innerText= name;

    let td3 = document.createElement("td");
        td3.innerText= batch;

    let td4 = document.createElement("td");
        td4.innerText= dsa;

    let td5 = document.createElement("td");
         td5.innerText= skill;

    let td6 = document.createElement("td");
       td6.innerText= coding;


    let td7 = document.createElement("td");
        let obtainedMarks = Number(dsa) + Number(coding) + Number(skill)
        let percentage = (obtainedMarks /30) * 100
        td7.innerText= percentage.toFixed(1);


    let td8 = document.createElement("td");
        if(percentage < 50){
            td8.innerText= "Async"
            td8.style.backgroundColor = "red"
        }else{
            td8.innerText= "Regular"
            td8.style.backgroundColor = "green"
        }


    let td9 = document.createElement("td");
        td9.innerText = "DELET"
        td9.style.backgroundColor= "red"
        td9.style.cursor = "pointer"

        //created function to delet row
        td9.addEventListener("click", deleterow);

        tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9)
        document.querySelector("tbody").append(tr)
  
}

function deleterow(event){
    event.target.parentNode.remove();
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