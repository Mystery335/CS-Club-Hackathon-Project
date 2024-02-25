
function hideButton(clickedButton) {
    const buttons = document.querySelectorAll('.option');
    buttons.forEach((button) => {
            button.style.display = 'none'; 
    });
}

