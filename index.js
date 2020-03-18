const myDiv = document.getElementById('main');

const button = document.getElementById('myButton');

const ipField = document.createElement('input')
ipField.setAttribute('type','text');
// ipField.setAttribute('placeholder','Enter correction here')

// button.addEventListener('click',()=>console.log('enne cllickki'));
// button.addEventListener('click',()=>console.log('enne veednumm clicki'));
let i=0;
let task=[];

function doneFunction(){
    // console.log(this.id);
    task.splice(this.id,1);
    display(task);
}

function editFunction(){
    display(task,this.id);
}

function saveFunction(){
    const eId=this.id
    console.log(eId)
    task[eId][0]=ipField.value;
    display(task);
    ipField.value=null;
}

function cancelFunction(){
    display(task);
}

function display(task,eId=null){
    i=0;//id reset
    myDiv.innerHTML=null;
    newTask.value=null;
    task.forEach(element => {
        // console.log('ok');
        const ulTag=document.createElement('ul');
        const liTag=document.createElement('li');
        liTag.setAttribute('style','list-style:none');
        element[1]=i;
        if(element[1]!=eId)
        {
            liTag.innerText=element[0];
            (function () {
                const tDone = document.createElement('button')
                tDone.setAttribute('id',`${i}`)
                tDone.innerText='Done'
                const tEdit = document.createElement('button')
                tEdit.setAttribute('id',`${i}`);
                tEdit.innerText='Edit'
                liTag.appendChild(tDone)
                liTag.appendChild(tEdit)
                myDiv.appendChild(liTag)
                myDiv.appendChild(ulTag)
                tDone.addEventListener('click',doneFunction);
                tEdit.addEventListener('click',editFunction);
                i++;
            } ()) ;
        }
        else
        {
            (function () {
                console.log(element[0]);
                ipField.setAttribute('value',`${element[0]}`);
                // ipField.setAttribute('id',`${i}`);
                const eSave = document.createElement('button');
                eSave.setAttribute('id',`${i}`);
                eSave.innerText='Save';
                const eCancel = document.createElement('button');
                eCancel.setAttribute('id',`${i}`);
                eCancel.innerText='Cancel';
                liTag.appendChild(ipField);
                liTag.appendChild(eSave);
                liTag.appendChild(eCancel);
                myDiv.appendChild(liTag);
                myDiv.appendChild(ulTag);
                eSave.addEventListener('click',saveFunction);
                eCancel.addEventListener('click',cancelFunction);
                i++;
            } ()) ;
        }
    });

}
function addElement(){
    let individualTask=[];
    individualTask[individualTask.length]=document.getElementById('newTask').value;
    // individualTask.push(i);
    console.log(JSON.stringify(individualTask))
    task[task.length]=individualTask;
    console.log(JSON.stringify(task));
    display(task)
    // i++;
    // const m = document.createElement('ul');
    // const k = document.createElement('li')
    // k.setAttribute('style','list-style: none')
    // // k.style.color='blue';
    // k.innerText=document.getElementById('newTask').value
    // k.setAttribute('id',`${i}`) 
    


}

newTask.addEventListener('keydown',(event)=>{if(event.keyCode==13){event.preventDefault();addElement();}}) 
button.addEventListener('click',addElement)