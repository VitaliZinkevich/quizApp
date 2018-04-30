import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

questions: any= [{
    "id": 1,
    "answer": "E Day",
    "question": "1st Tuesday after the 1st Monday in November",
    "value": 100,
    "airdate": "1985-02-08T12:00:00.000Z",
    "created_at": "2014-02-11T22:47:18.786Z",
    "updated_at": "2014-02-11T22:47:18.786Z",
    "category_id": 1,
    "game_id": null,
    "invalid_count": null,
    "category": {
      "id": 1,
      "title": "politics",
      "created_at": "2014-02-11T22:47:18.687Z",
      "updated_at": "2014-02-11T22:47:18.687Z",
      "clues_count": 30
    }
  },
  {
    "id": 2,
    "answer": "the",
    "question": "The Atlanta Braves are in this division of the National League",
    "value": 100,
    "airdate": "1985-02-08T12:00:00.000Z",
    "created_at": "2014-02-11T22:47:18.829Z",
    "updated_at": "2014-02-11T22:47:18.829Z",
    "category_id": 2,
    "game_id": null,
    "invalid_count": null,
    "category": {
      "id": 2,
      "title": "baseball",
      "created_at": "2014-02-11T22:47:18.706Z",
      "updated_at": "2014-02-11T22:47:18.706Z",
      "clues_count": 45
    }
  },
  {
    "id": 3,
    "answer": "sold",
    "question": "Eliza Doolittle did it for a living",
    "value": 100,
    "airdate": "1985-02-08T12:00:00.000Z",
    "created_at": "2014-02-11T22:47:18.841Z",
    "updated_at": "2014-02-11T22:47:18.841Z",
    "category_id": 3,
    "game_id": null,
    "invalid_count": null,
    "category": {
      "id": 3,
      "title": "odd jobs",
      "created_at": "2014-02-11T22:47:18.718Z",
      "updated_at": "2014-02-11T22:47:18.718Z",
      "clues_count": 35
    }
  }];

currentQuestion: any = {};

question: string = ''
answer = [];
rigthAnswer = ''
answerBoard: any = [];

right: number = 0
wrong: number = 0
score: number = 0

skipped:any = []
done:any = []


  constructor(private quiz:QuizService ) { }

  ngOnInit() {
/*
    this.quiz.getQuestions ().subscribe ((data)=>{

    //  console.log (data)
      this.questions = data
      this.setQuestion(this.questions)
    })

*/

  this.setQuestion(this.questions)


  }

setQuestion (question){
this.currentQuestion  = this.questions.shift()

this.question = this.currentQuestion.question;



this.rigthAnswer=this.currentQuestion.answer.split ('').map (x=>{
if (x === ' ') {
  return '___'} else {
    return x
  }
}).join('')

String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}
this.answer = this.currentQuestion.answer

this.answer = this.currentQuestion.answer.shuffle().split("");
this.answer = this.answer.map (x=>{
if (x === ' ') {
  return '___'} else {
    return x
  }
})



}



addLetterToAnswerBoard(i){

let tmp = this.answer.splice (i,1);
this.answerBoard.push  (tmp)

if (this.answer.length == 0 ) {
this.checkAnswer ()
}

}

checkAnswer(){

console.log (this.rigthAnswer )
console.log (this.answerBoard.join(''))
console.log ((this.rigthAnswer == this.answerBoard.join('')));

if (this.rigthAnswer == this.answerBoard.join('')) {

      this.score += this.currentQuestion.value
      this.right ++
      this.done.push (this.currentQuestion)
      this.setQuestion(this.questions)
      this.answerBoard = []

  } else {

    this.score -= this.currentQuestion.value
    this.wrong ++
    this.skipped.push (this.currentQuestion)
    this.setQuestion(this.questions)
    this.answerBoard = []
  }


}



removeLetterFromAnswerBoard(i){
  console.log (i)
  let tmp = this.answerBoard.splice (i,1)

  this.answer.push  (tmp)

}



skip(){
  console.log ('skip')
  this.score -= 33
  this.skipped.push (this.currentQuestion)
  this.answerBoard = []
  this.setQuestion(this.questions)

}


}
