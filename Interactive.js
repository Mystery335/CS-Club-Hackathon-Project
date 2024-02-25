//Some fomats of code found from W3school.com
let saved;
function hideButton(clickedButton) {
const original = document.getElementById("original").value;
const option1 = document.getElementById("option1").value;
const option2 = document.getElementById("option2").value;
    const buttons = document.querySelectorAll('.option');
    buttons.forEach((button) => {
        if(clickedButton.value == original) {
            saved = original;
        }
        else if (clickedButton.value == option1) {
            saved= option1;
        }
        else {
            saved = option2;
        }
        button.style.display = 'none'; 
    });
    document.getElementById("savedValue").innerHTML = saved;
}

    

