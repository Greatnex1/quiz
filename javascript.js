function Quiz(questions){
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
}
Quiz.prototype.guess = function(answer){
    if(this.getCurrentQuestion().isCorrectAnswer(answer)){
        this.score++;
    }
    this.currentQuestionIndex++;
}
Quiz.prototype.getCurrentQuestion =  function(){
return this.questions[this.currentQuestionIndex];
};
Quiz.prototype.hasEnded = function(){
    return this.currentQuestionIndex  >= this.questions.length;
};

function Question(text,choices,answer){
    this.text = text;
    this.choices =  choices;
    this.answer = answer;
}
Question.prototype.isCorrectAnswer = function(choice){
  return  this.answer === choice;
};

var QuizUI = {
    
}