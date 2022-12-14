//const { Button } = require("bootstrap");


class Quiz {
    
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.currentQuestionIndex = 0;
    }
    guess(answer) {
        if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.currentQuestionIndex++;
    }
    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }
    hasEnded() {
        return this.currentQuestionIndex >= this.questions.length;
    }
}

var count = 60;
var timer = setInterval(function() {
    document.getElementById('count').innerHTML= count ;
    count--;
    if (count ==-1){
     clearInterval(timer);
       document.getElementById('count').innerHTML='TIME UP';
      // or...
      
     window.alert("You're out of time!");
       close()
    }
 
  }, 1000);


class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

var QuizUI = {
    displayNext:function(){
        if(quiz.hasEnded()){
            this.displayScore();
        }else{
            this.displayQuestion();
            this.displayChoices();
            this.displayProgress();
        }
    },
    displayQuestion: function(){
        this.populateIdWithHTML("question",quiz.getCurrentQuestion().text);
    },
    displayChoices:function(){
        var choices =  quiz.getCurrentQuestion().choices;
        for (var i = 0;i< choices.length; i ++){
            this.populateIdWithHTML("choice"+ i, choices[i]);
            this.guessHandler("guess"+ i,choices[i])
        }
    },
    displayScore: function(){
        var gameOverHTML = "<h1>Quiz Ended</h1>"
         if(quiz.score <= 3){
            gameOverHTML += "<h2>You got only  " + quiz.score +" question(s) correctly </h2>"
            gameOverHTML += "<h3>Try better next time </h3>";
        }
    
        else{
           // gameOverHTML += "<h2>You got only : " + quiz.score + " over " + quiz.questions.length +"</h2>"
            gameOverHTML += "<h2>  Excellent! </h2>";        }
        this.populateIdWithHTML("quiz",gameOverHTML);
    },
    populateIdWithHTML: function(id,text){
        var element = document.getElementById(id);
      element.innerHTML = text;
        },
        guessHandler:function(id,guess){
            var button = document.getElementById(id)
            button.onclick = function(){
                quiz.guess(guess);
                QuizUI.displayNext();
        }
    },
    
    displayProgress: function(){
        var currentQuestionNumber = quiz.currentQuestionIndex+1;
        this.populateIdWithHTML("progress", "Question " + currentQuestionNumber + " of " + quiz.questions.length)
    },
    

};


//Create Questions
var questions = [

    new Question ("Who was the first president of the United States ?",["George Washington","Thomas Jefferson", " Thomas Edison,","I don't know"], "George Washington"),

    new Question ("What year did Nigeria gain her independence ?",["1990","1950", " 1900","1960"], "1960"),

    new Question ("What year did Ghana gain her independence?",["1900","1935", " 1957","1963"], "1957"),

    new Question ("What is the best programming language?",["Javascript","C#", "Php","Java", "There is no best programming language"], "Javascript"),

    new Question ("Who is the father of computer?",["John Doe","Phillip Martinez", " Charles Barbage","I don't know"], "Charles Barbage"),
   
    new Question ("Is Technical writing the same as Content writting?",["No","Yes", " Hell Yeah","I don't know"], "NO"),

    new Question("Is Akoni Noah Awesome?", ["Yes", "No","Maybe", "He's Okay"], "Yes"),

];
var quiz = new Quiz(questions);

QuizUI.displayNext();


