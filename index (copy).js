const myDiv = document.getElementById('main');

const button = document.getElementById('myButton');

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

function display(task,eId=null){
    let i=0;;
    myDiv.innerHTML=null;
    newTask.value=null;
    task.forEach(element => {
        // console.log('ok');
        const ulTag=document.createElement('ul');
        const liTag=document.createElement('li');
        liTag.setAttribute('style','list-style:none');
        if(i!=eId)
        {
            liTag.innerText=element[0];
            (function () {
                const tDone = document.createElement('button')
                tDone.setAttribute('id',`${i}`)
                tDone.innerText='Done'
                const tEdit = document.createElement('button')
                tEdit.setAttribute('id',`${i}`)
                i++;
                tEdit.innerText='Edit'
                liTag.appendChild(tDone)
                liTag.appendChild(tEdit)
                myDiv.appendChild(liTag)
                myDiv.appendChild(ulTag)
                tDone.addEventListener('click',doneFunction,true);
                tEdit.addEventListener('click',editFunction,true);
            } ()) ;
        }
        else
        {
            (function () {
                const tDone = document.createElement('button')
                tDone.setAttribute('id',`${i}`)
                tDone.innerText='Done'
                const tEdit = document.createElement('button')
                tEdit.setAttribute('id',`${i}`)
                i++;
                tEdit.innerText='Edit'
                liTag.appendChild(tDone)
                liTag.appendChild(tEdit)
                myDiv.appendChild(liTag)
                myDiv.appendChild(ulTag)
                tDone.addEventListener('click',doneFunction,true);
                tEdit.addEventListener('click',editFunction,true);
            } ()) ;
        }
    });

}
function addElement(){
    let individualTask=[];
    individualTask[individualTask.length]=document.getElementById('newTask').value;
    individualTask.push(i);
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