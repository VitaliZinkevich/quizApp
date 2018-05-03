import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuizService {

  constructor( private http: HttpClient) { }

getQuestions (){
  return this.http.get ('http://jservice.io/api/clues');
}



}
