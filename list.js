const box2 = document.getElementById('box2')
let input = document.getElementsByTagName('input')[0];
const btn = document.getElementsByTagName('button')[0];
let fullName = localStorage.getItem('name');
const heading = document.getElementById('heading');
const dates = new Date();
const formatter = new Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
});
const formattedTime = formatter.format(dates);

let head = document.createElement('div')
head.innerHTML = `${fullName}'s 2024 Tasks`
head.setAttribute('id','head')
heading.appendChild(head);

function getTask(){
    const inputValue = input.value
    const box2Container = document.createElement('div')
    const condate = document.createElement('div')
    box2Container.setAttribute('id','box2Con')
    box2.appendChild(box2Container);
    input.value = '';

    let content = document.createElement('div')
    content.setAttribute('id','content');
    content.innerHTML = inputValue;
    condate.appendChild(content)
    box2Container.appendChild(condate)

    let date = document.createElement('div')
    date.setAttribute('id','date');
    date.innerHTML = formattedTime;
    condate.appendChild(date)
    box2Container.append(condate)

    let doneBtn = document.createElement('button')
    let finished = document.getElementById('finished')
    doneBtn.setAttribute('id','done');
    doneBtn.innerHTML = 'Done';
    doneBtn.addEventListener('click',function() {
        let delBtn2 = document.createElement('button')
        delBtn2.setAttribute('id','delete')
        delBtn2.innerHTML='delete'
        action.appendChild(delBtn2)
        finished.appendChild(box2Container)
        action.removeChild(editBtn)
        action.removeChild(doneBtn)
        action.removeChild(delBtn)
        delBtn2.addEventListener('click',function(){
            finished.removeChild(box2Container);
        })
    })
    
    let action = document.createElement('div');
    action.setAttribute('id','action')
    let editBtn = document.createElement('button');
    editBtn.innerHTML = 'edit';
    editBtn.setAttribute('id','edit')
    editBtn.addEventListener('click',function(){
        let box2Container2 = document.createElement('div')
        let info = document.createElement('div')
        let btnContainer = document.createElement('button')
        box2Container2.setAttribute('id','container1')
        box2.appendChild(box2Container2)
        let input1 = document.createElement('input');
        input1.value = content.textContent
        input1.setAttribute('id','input1')
        input1.type = 'text'
        let ok = document.createElement('button');
        ok.innerHTML = 'ok'
        ok.setAttribute('id','edit2')
        info.appendChild(input1)
        box2Container2.appendChild(info)
        btnContainer.appendChild(ok);
        box2Container2.appendChild(btnContainer)
        box2.replaceChild(box2Container2, box2Container)
        ok.addEventListener('click', function(){
            box2Container.setAttribute("id","box2Con");
            content.innerHTML = input1.value;
            condate.appendChild(content)
            condate.appendChild(date)
            box2Container.appendChild(condate)
            box2Container.appendChild(action) 
            box2.replaceChild(box2Container,box2Container2) 
  
         })
    })

    let delBtn = document.createElement('button');
    delBtn.innerHTML = 'delete'
    delBtn.setAttribute('id','delete')
    delBtn.addEventListener('click', function(){
        box2.removeChild(box2Container);
    })

    action.appendChild(doneBtn)
    action.appendChild(editBtn)
    action.appendChild(delBtn)
    box2Container.appendChild(action)
}


btn.addEventListener('click',function(){
    getTask();
})