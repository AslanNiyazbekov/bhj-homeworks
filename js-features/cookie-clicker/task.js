const clicerCounter = document.getElementById('clicker__counter');
const img = document.getElementById('cookie');


cookie.addEventListener('click', function(){
clicerCounter.textContent ++;
if(clicerCounter.textContent % 2){
    img.width = '200'
} else {
    img.width = '100'
}
}
)