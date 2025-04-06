function startGame(difficulty)
{
    let max;

    let attempts = 0;
    let won = false;
    let guess;
    let playAgain;
    
    if (difficulty === "Easy") 
        {
            max = 10;
            
        } 
    else if (difficulty === "Medium") 
        {
            max = 50;
        }
    else if (difficulty === "Hard") 
        {
            max = 100;
        }
    else if (difficulty == "Impossible")
        {
            max = 1000;
        }
    else 
        {
        window.alert("Unknown difficulty. Defaulting to Easy.");
        max = 10;
        }
    document.getElementById("buttonSection").style.display = "none";
    document.getElementById("inputSection").style.display = "block";
    document.getElementById("reminder").textContent = ("Please enter a Number  between 1 and " + max);
    let randomNum = Math.floor(Math.random()*max)+1;    
    console.log(randomNum);
    
    document.getElementById("submitter").onclick = function()
    {
        if (won) return;
        const guess = Number(document.getElementById("guess").value);
        if (isNaN(guess))
                    {
                        document.getElementById("response").textContent = ("Please enter a Number.");
                    }
        else if (guess < 1 || guess > max)
                    {
                        document.getElementById("response").textContent = ("Please enter a Number within the bounds.");
                    }
        else
            {
                attempts += 1;
                if (guess < randomNum)
                        {
                            document.getElementById("response").textContent =("Too low! Try again!");
                        }
                else if (guess > randomNum)
                        {
                        document.getElementById("response").textContent = ("Too high! Try again!");
                        }
                else
                    {
                        document.getElementById("response").textContent = (`Correct! It was ${guess} and it took only ${attempts} attempts!`);
                        win = true;
                        document,getElementById("playAgain").style.display = "block";
                    }
                            
            }
        }
        document.getElementById("guess").value = ""; // Clear the input field after each guess
        document.getElementById("guess").addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                document.getElementById("submitter").click();
            }
        });
        document.getElementById("playAgain").onclick = function() {
            document.getElementById("buttonSection").style.display = "block";
            document.getElementById("inputSection").style.display = "none";
            document.getElementById("reminder").textContent = "";
            document,getElementById("playAgain").style.display = "none";
            document.getElementById("response").textContent = "";
            document.getElementById("guess").value = "";

            document.getElementById("buttonSection").style.display = "block";
        }
}   
  

        
     

