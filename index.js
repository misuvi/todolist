const myDiv = document.getElementById('main');

const button = document.getElementById('myButton');

const ipField = document.createElement('input')
ipField.setAttribute('type','text');
ipField.setAttribute('class','basicInput')
ipField.setAttribute('required','');
ipField.setAttribute('pattern','^(?!\s*$).+');

const newTask = document.getElementById('newTask');

newTask.focus();

let i=0;
let task=[];

function doneFunction(){
    // console.log(this.id);
    task.splice(this.id,1);
    display(task);
    newTask.focus();
}

function editFunction(){
    display(task,this.id);
}

function saveFunction(){
    var isValid = ipField.checkValidity();
    console.log(isValid)
    if(isValid)
    {
        task[this.id][0]=ipField.value;
        display(task);
        newTask.focus();
    }
    else{
        ipField.reportValidity();
    }
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
        liTag.setAttribute('style','list-style-type:decimal');
        element[1]=i;
        if(element[1]!=eId)
        {
            liTag.innerText=element[0];
            (function () {
                const tDone = document.createElement('button')
                tDone.innerText='Done'
                tDone.setAttribute('class','tbutton')
                const tEdit = document.createElement('button')
                tEdit.innerText='Edit'
                tEdit.setAttribute('class','tbutton');
                tDone.setAttribute('id',`${i}`);
                tEdit.setAttribute('id',`${i}`);
                liTag.appendChild(tEdit)
                liTag.appendChild(tDone)
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
                ipField.value=element[0];
                ipField.setAttribute('id',`${i}`);
                const eSave = document.createElement('button');
                eSave.innerText='Save';
                eSave.setAttribute('class','tbutton')
                const eCancel = document.createElement('button');
                eCancel.innerText='Cancel';
                eCancel.setAttribute('class','tbutton');
                eSave.setAttribute('id',`${i}`);
                eCancel.setAttribute('id',`${i}`);
                liTag.appendChild(ipField);
                liTag.appendChild(eCancel);
                liTag.appendChild(eSave);
                myDiv.appendChild(liTag);
                myDiv.appendChild(ulTag);
                ipField.addEventListener('keydown',(event)=>{if(event.keyCode==13){event.preventDefault();saveFunction.apply(ipField)}})
                eSave.addEventListener('click',saveFunction);
                eCancel.addEventListener('click',cancelFunction);
                ipField.focus();
                ipField.select();
                i++;
            } ()) ;
        }
    });

}
function addElement(){
    var isValid = newTask.checkValidity();
    console.log(isValid)
    if(isValid)
    {
        let individualTask=[];
        individualTask[individualTask.length]=document.getElementById('newTask').value;
        // individualTask.push(i);
        console.log(JSON.stringify(individualTask))
        task[task.length]=individualTask;
        console.log(JSON.stringify(task));
        display(task)
    }
    else{
        newTask.reportValidity();
    }
    newTask.focus();
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
