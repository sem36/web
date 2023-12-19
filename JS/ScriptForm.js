// Переключатель темы
const body = document.body;
        const themeToggle = document.getElementById('themeToggle');

        // Загрузка сохраненной темы при загрузке страницы
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            body.classList.add(savedTheme);

            // Установка состояния чекбокса в зависимости от сохраненной темы
            themeToggle.checked = savedTheme === 'dark-theme';
        }

        themeToggle.addEventListener('change', function() {
            body.classList.toggle('dark-theme');
            body.classList.toggle('light-theme')
        
            // Сохранение текущей темы в локальное хранилище
            const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
            localStorage.setItem('theme', currentTheme);
        });
//Контакты
const Submit = document.getElementById("submit");
const Reset = document.getElementById("reset");
const emailField=document.getElementById("emailFld")
emailField.classList.add('hidden');
const phoneField=document.getElementById("phoneFld")
phoneField.classList.add('hidden');
const dateField=document.getElementById("dateFld")
dateField.classList.add('hidden');
const urlField=document.getElementById("urlFld")
urlField.classList.add('hidden');
const Radiobtn=document.getElementsByName("answer");
for(let i=0;i<Radiobtn.length;i++){
    Radiobtn[i].addEventListener('change',function(){
        switch(this.value){
            case "meet":
                emailField.classList.add('hidden');
                phoneField.classList.add('hidden');
                dateField.classList.remove('hidden');
                urlField.classList.add('hidden');
                break;
            case "tel":
                emailField.classList.add('hidden');
                phoneField.classList.remove('hidden');
                dateField.classList.add('hidden');
                urlField.classList.add('hidden');
                break;
            case "other":
                emailField.classList.add('hidden');
                phoneField.classList.add('hidden');
                dateField.classList.add('hidden');
                urlField.classList.remove('hidden');
                break;
            case "noansware":
                emailField.classList.remove('hidden');
                phoneField.classList.add('hidden');
                dateField.classList.add('hidden');
                urlField.classList.add('hidden');
                break;
        }
    });
}
Reset.addEventListener('click',function(event){
    location.reload();
});
Submit.addEventListener('click',function(event){
function Validemail(){
	if(!Radiobtn[3].checked){return false;}

	const email=document.getElementById("mail").value.trim();
	const emailRegex=/^[^\S@]+@[^\S@]+\.[^\S@]+$/;

	if(email===''){alert('Пожалуйста, введите адрес email'); return false;}

	else if(!emailRegex.test(email)){alert('Пожалуйста, введите корректный адрес email'); return false;}

    return true;
}
function Validname(){
    const name=document.getElementById("name").value.trim();
    if(name===''){
        alert('Пожалуйста, введите имя'); 
        return false
    }
    return true;
}
function Validtext(){
    const text=document.getElementById("text").value.trim();
    if(text===''){
        alert('Пожалуйста, введите текст'); 
        return false}
    return true;
}
function Validphone(){
    if(!Radiobtn[1].checked){return false}
    const phone=document.getElementById("phone").value.trim();
    const phoneRegex=/^\d{10}$/;
    if(phone===''){alert('Пожалуйста, введите номер телефона'); return false}
    else if(!phoneRegex.test(phone)){
        alert('Пожалуйста, введите корректный номер телефона'); 
        return false}
    return true;
}
function Validdate(){
        if(!Radiobtn[0].checked){return false}
        const date=document.getElementById("dat").value;
        const dateRegex= /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/;
        if(date===''){alert('Пожалуйста, введите дату'); return false}
        else if(!dateRegex.test(date)){
            alert('Пожалуйста, введите корректную дату'); 
            return false}
        return true;
    }
if(Validname() && Validtext() && (Validemail() || Validphone()|| Validdate())){location.reload();}
});
