function checkQuiz(){
    let score =0;
    let results ="";

    //Question 1
    // if statments if correct portray correct message, otherwise then show red and portray correct answer.
    const q1 = document.querySelector('input[name="q1"]:checked');

    if(q1 && q1.value === "correct"){
        score++;
        results += "<p style ='color: green' >Question 1: Correct!</p>";
    }
    else{
        results +="<p style= 'color:red'>Question 1: Incorrect <br> Correct Answer: Tim Berners-Lee</p> ";
    }

    // Question 2 

    const q2 = document.querySelector('input[name="q2"]:checked');

    if(q2 && q2.value === "correct"){
        score++;
        results += "<p style='color:green'> Question 2:Correct!</p>";
    }
    else{
        results += "<p style'color:red'>Question 2: Incorrect<br> Correct Answer: 1989</p>";
    }

    // Question 3
    const q3 = document.getElementById("q3").value.trim().toLowerCase();

    if(
        q3 === "hypertext transfer protocol"
    ){
        score ++;
        results += "<p style ='color:green'>Question 3: Correct!</p>";
    }else{
        results +="<p style='color:red'>Question3: Incorrect<br> Correct Answer: Hypertext Transfer Protocol </p>";
    }

    //Question 4 
    const q4 = document.querySelector('input[name="q4"]:checked');

    if(q4 && q4.value === "correct"){
        score++;
        results += "<p style='color:green' >Question 4: Correct</p>";
    }
    else{
        results += "<p style= 'color:red'> Question 4: Incorrect <br> Correct Answer: HTTPS</p>";
    }

    // Question 5
    // correctAns variable allows for values to be selected, if they are selected Correct! appears at the bottom of the quiz, otherwise, incorrect and correct annswer pop up
    const checkedBoxes = document.querySelectorAll('input[name="q5"]:checked');

    const selected = [];

    checkedBoxes.forEach(box => {
        selected.push(box.value);
    });

    const correctAns = ["GET","POST","PUT","DELETE"];

    const correct =
    selected.length === correctAns.length &&
    correctAns.every(answer => selected.includes(answer));

    if(correct){
        score++;
        results += "<p style ='color: green'> Question 5: Correct! </p>";
    }
    else{
        results += "<p style ='color:red'>Question 5: Incorrect <br> Correct Answers: GET, POST,PUT, DELETE</p>";
    }
    const percent =(score / 5) * 100;

    if(percent >= 60){
        results =
        `<h2 style= "color:green">PASS </h2>
        <h3> Total Score: ${score}/5 (${percent}%)</h3>`
        + results;
    }
    else{
        results =
        `<h2 style="color:red">FAIL </h2>
        <h3>Total Score: ${score}/5 (${percent}%)</h3>`
        +results
    }

    document.getElementById("results").innerHTML = results;    


}

// reset quiz 

function resetQuiz(){
    document.getElementById("quizForm").reset();
    document.getElementById("results").innerHTML ="";
}

    // toggle hamburger menu 

    function toggleMenu(){
        document.getElementById("navbar").classList.toggle("active");
    }



