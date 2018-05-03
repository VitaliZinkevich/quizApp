import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

questions: any

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


  constructor(private quiz:QuizService ) {


  }

  ngOnInit() {

    this.quiz.getQuestions ().subscribe ((data)=>{

    //  console.log (data)
      this.questions = data
      this.setQuestion(this.questions)
    })



  //this.setQuestion(this.questions)


  }

setQuestion (question){
this.currentQuestion  = this.questions.shift()

this.question = this.currentQuestion.question;

function randomsort(a, b) {
  return Math.random()>.5 ? -1 : 1;
}

this.rigthAnswer=this.currentQuestion.answer.split ('').join('')
this.answer = this.currentQuestion.answer.split("").sort(randomsort);
}



addLetterToAnswerBoard(i){

let tmp = this.answer.splice (i,1);
this.answerBoard.push  (tmp)

if (this.answer.length == 0 ) {
this.checkAnswer ()
}

}

checkAnswer(){

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

  this.score -= 33
  this.skipped.push (this.currentQuestion)
  this.answerBoard = []
  this.setQuestion(this.questions)

}


}
