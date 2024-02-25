let saved;
let choice1;
let choice2;
let choice3;
function hideButton(clickedButton) {
const original = document.getElementById("original").value;
const option1 = document.getElementById("option1").value;
const option2 = document.getElementById("option2").value;
    const buttons = document.querySelectorAll('.option');
    buttons.forEach((button) => {
        if(clickedButton.value == original) {
            saved = original;
            choice1="LIttle Red Riding Hood talks with the wolf without any sense of danger. She told the wolf where she’s headed. The wolf gets to her grandmother’s house faster than her, eats her grandma, and tricks Little Red Riding Hood into the house when she gets there. She was devoured. Little Red Riding Hood died for being too naive.";
            document.getElementById("choice1").innerHTML = choice1;
        }
        else if (clickedButton.value == option1) {
            saved= option1;
            choice2="She ran as fast as she could right when she saw the wolf. She threw everything in her hands. Screaming and crying scared for her life. Nearby wanderers in the forest hear her scream and rush to her area. They saw the wolf and all picked up rocks to defeat him. The wolf was killed and Little Red Riding Hood was unable to treat her grandmother’s illness. Her grandmother passed away. She went home very sad.";
            document.getElementById("choice2").innerHTML = choice2;
        }
        else {
            saved = option2;
            choice3 = "A bloody battle with the evil wolf begins. Little Red Riding Hood is very weak against the wolf. The wolf easily overpowers her and bites her head. She starts bleeding and screaming! Nearby wanderers hear her scream and rushed over. By the time they got there, only bones and a trail of blood was left. Little Red Riding Hood died and her grandmother did not recover from her illness.";
            document.getElementById("choice3").innerHTML = choice3;
        }
        button.style.display = 'none'; 
    });
    document.getElementById("savedValue").innerHTML = saved;
    document.getElementById("ending").innerHTML = "The End";
}
