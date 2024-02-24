const orginal = document.getElementById('original');
original.addEventListener('click', () => {
    alert('Button clicked!')});
const option1 = document.getElementById('option1');
option1.addEventListener('click', () => {
    alert('Button clicked!')
});
const option2 = document.getElementById('option2');
let hide=false;
option2.addEventListener('click', () => {
    hide=true});
if(hide==true){
    option2.style.visibilty='hidden';
}
