
function hideButton(clickedButton) {
    const buttons = document.querySelectorAll('.option');
    buttons.forEach((button) => {
            button.style.display = 'none'; 
    });
    const original = document.getElementById("original").value;
    const option1 = document.getElementById("option1").value;
    const option2 = document.getElementById("option2").value;
    
}

