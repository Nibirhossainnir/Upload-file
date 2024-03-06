const mainload = document.getElementById('mainload');
const btn = document.getElementById('btn');

function loader(){
    mainload.classList.remove('loadd');
};

btn.addEventListener('click',()=>{
    mainload.classList.add('loadd');
});