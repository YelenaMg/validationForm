const form = document.forms['form'];
const button = document.querySelector('.btn');
const inputArr = Array.from(form);
const validInputArr = [];


inputArr.forEach((element) =>{
   if(element.hasAttribute('data-reg')){
      element.setAttribute('is-valid','0')
      validInputArr.push(element);
   }
})


form.addEventListener('input', inputHandler);
button.addEventListener('click', buttonHandler);

function inputHandler({ target }) {
  if (target.hasAttribute('data-reg')) {
    inputCheck(target);
  }
}

function inputCheck(element) {
  const inputValue = element.value.trim();
  const inputReg = element.getAttribute('data-reg');
  const reg = new RegExp(inputReg);
  
  if (reg.test(inputValue)) {
    element.setAttribute('class','true')
    element.setAttribute('is-valid','1')
  } else {
   element.setAttribute('class', 'error')
   element.setAttribute('is-valid','0')
  }
 
}

function buttonHandler(e){
   const isAllValid = [];
   validInputArr.forEach((el) =>{
      isAllValid.push(el.getAttribute('is-valid'));
   });
   
   const isValid = isAllValid.reduce((acc, current) =>{
      return acc && current;   
   })
   if(!Boolean(Number(isValid))){
      e.preventDefault();
   }
   
}