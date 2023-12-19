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
            body.classList.toggle('light-theme');         
            // Сохранение текущей темы в локальное хранилище
            const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
            localStorage.setItem('theme', currentTheme);
        });
//Слайдер
let offset = 0;
        const sliderline = document.querySelector('.sliderline');

        document.querySelector('.slidernext').addEventListener('click', function () {
            offset = offset + 300;
            if (offset > 600) { offset = 0; }
            sliderline.style.transform = `translateX(-${offset}px)`;
        });

        document.querySelector('.sliderprev').addEventListener('click', function () {
            offset = offset - 300;
            if (offset < 0) { offset = 600; }
            sliderline.style.transform = `translateX(-${offset}px)`;
        });
//Задачки
        const form = document.getElementById('kform');
        const ul = document.getElementById('ul');
        const clearButton = document.getElementById('clearButton');

        let itemArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

        const liMaker = (text) => {
            const li = document.createElement('li');
            li.textContent = text;
            ul.appendChild(li);
            const buttonDelete = document.createElement('button');
            buttonDelete.textContent = "Delete";
            buttonDelete.addEventListener('click', function () {
                ul.removeChild(li);
                itemArray = itemArray.filter(item => item !== text);
                localStorage.setItem('items', JSON.stringify(itemArray));
            });
            li.appendChild(buttonDelete);
        };

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const input = document.getElementById('Item');
            itemArray.push(input.value);
            localStorage.setItem('items', JSON.stringify(itemArray));
            liMaker(input.value);
            input.value = ''
        });

        clearButton.addEventListener('click', function () {
            ul.innerHTML = '';
            itemArray = []; 
            localStorage.setItem('items', JSON.stringify(itemArray));
        });

        itemArray.forEach(item => {
            liMaker(item);
        });
//Таймер
const btnFocus = document.getElementById("focus");
const btnShortBreak = document.getElementById("shortbreak");
const btnLongBreak = document.getElementById("longbreak");
const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");
const btnReset = document.getElementById("btn-reset");
const time = document.getElementById("time");
const buttons = document.querySelectorAll(".btn");
let pause = true;
let set;
let active;
let minCount = 24;
let count = 59;
time.textContent = `${minCount + 1}:00`;
const appendZero = (value) => {
    value = value < 10? `0${value}`:value;
    return value;
};

btnStart.addEventListener('click', function(){
    btnReset.classList.add('show');
    btnPause.classList.add('show');
    btnStart.classList.add('hidden');
    btnStart.classList.remove('show');
    if (pause) {
        pause = false;
        time.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
        set = setInterval(() => {
            count--;
            time.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
            if (count == 0){
                if (minCount != 0){
                    minCount--;
                    conut = 60;
                }
                else{clearInterval(set)};
            };
        }, 1000);
    };
});

btnPause.addEventListener('click', (pauseTimer=()=>{
    pause = true;
    clearInterval(set);
    btnStart.classList.remove('hidden');
    btnStart.classList.add('show');
    btnPause.classList.remove('show');
    btnPause.classList.add('hidden');
    btnReset.classList.add('show');
    btnReset.classList.remove('hidden');
    })
);

const resetTime = ()=>{
    pauseTimer();
    switch(active){
        case "long":
            minCount = 14;
            break;
        case "short":
            minCount = 4;
            break;
        default: minCount = 24;
        break;
    }
    count = 59;
    time.textContent = `${minCount+1}:00`;
};

btnReset.addEventListener('click', resetTime);

const removeFocus = () => {
    buttons.forEach((btn) => {
        btn.classList.remove('btnFocus');
        localStorage.setItem('case', active);
    });
};

btnShortBreak.addEventListener('click',()=>{
    active = 'short';
    removeFocus();
    btnShortBreak.classList.add('btnFocus');
    pauseTimer();
    minCount = 3;
    count = 59;
    time.textContent = `${minCount+1}:00`;
});

document.addEventListener('DOMContentLoaded', () => {
    const SavedCase = localStorage.getItem('case');
    active = SavedCase;
    resetTime();
});

btnLongBreak.addEventListener('click', () => {
    active = 'long';
    removeFocus();
    btnLongBreak.classList.add('btnFocus');
    pauseTimer();
    minCount = 5;
    count = 59;
    time.textContent = `${minCount+1}:00`;
});

btnFocus.addEventListener('click', () => {
    active = 'focus';
    removeFocus();
    btnFocus.classList.add('btnFocus');
    pauseTimer();
    minCount = 179;
    count = 59;
    time.textContent = `${minCount+1}:00`;
});