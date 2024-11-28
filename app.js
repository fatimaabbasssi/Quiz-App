var questions = [
    {
      question: "Q.1 What is the capital of Pakistan?",
      options: ["Karachi", "Lahore", "Islamabad", "Quetta"],
      correct: 2
    }, {
      question: "Q.2 What is 2 + 2?",
      options: ["4", "3", "5", "6"],
      correct: 0
    },
    {
      question: "Q.3 Which language is used for web development?",
      options: ["Python", "JavaScript", "C++", "Java"],
      correct: 1
    },
    {
      question: "Q.4 What is 2 + 4?",
      options: ["3", "4", "5", "6"],
      correct: 3
    }
   
  ];



var currentQ = 0
var score = 0
var isselected = false
  
var ques = document.getElementById("ques")
var ul = document.getElementById("ul")
var startt = document.getElementById("srt")
var next = document.getElementById("net")
var optionbtn = document.querySelectorAll(".options")




function  start(){

    startt.style.display = "none"

    var  headques = document.getElementById("headques");
    headques.innerHTML = questions[currentQ].question;

    for(var i = 0 ; i < optionbtn.length ; i++ ){
        
        ul.style.display = "block"
        optionbtn[i].innerHTML = questions[currentQ].options[i];
        optionbtn[i].style.backgroundColor = "#ffe4c4";  
    }

    isselected = false
    next.style.display = "none"
}
 
function selecte(selecteindex){

    if(isselected)

   return

    var correctAns = questions[currentQ].correct;
   
    for(var i = 0 ; i < optionbtn.length ; i++ ){
        
        if(i === correctAns ){
           optionbtn[i].style.backgroundColor = "green"; 
       
        }

        else if(i === selecteindex){
            optionbtn[i].style.backgroundColor = "red"; 
        }

       } 
       if(selecteindex === correctAns){
        score++
       }
     
      isselected = true
     next.style.display = "block"
        
    }

 
function nextfun(){
    currentQ++
    if(currentQ < questions.length){
     start() 
    }else{
        showresult()
    }
}

var scoree = document.getElementById("score")

function showresult(){

    ques.style.display = "none"
    next.style.display = "none"
    scoree.innerHTML = "your score : " + score  + " out of  " + questions.length

}
