const orginal = document.getElementById('original');
original.addEventListener('click', () => {
    alert('Button clicked!')});
const option1 = document.getElementById('option1');
option1.addEventListener('click', () => {
    alert('Button clicked!')
});
const option2 = document.getElementById('option2');
if (option2.addEventListener('click')==true){
    option2.style.visibility = 'hidden';
}
option2.addEventListener('click', () => {
    alert('Button clicked!')});
