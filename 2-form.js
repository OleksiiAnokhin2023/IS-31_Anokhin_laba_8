const formData = JSON.parse(localStorage.getItem('feedback-form-state'))||{
email:"",
message: "" 
}
const form = document.querySelector('.feedback-form');
if(formData.email){
    form.elements.email.value = formData.email;
}
if(formData.message){
    form.elements.message.value = formData.message;
}

form.addEventListener('input',(event)=>{
const {name,value} = event.target;
if(name){
    formData[name]=value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

});

form.addEventListener('submit',(event)=>{
    form.preventDefault();
    if(!form.elements.email.value || !form.elements.message.value){
        alert('fulfill all fields'); return;
    }
    localStorage.removeItem('feedback-form-state');
    formData.email ='';
    formData.message ='';
    form.reset();
    });