import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly url: string = '/assets/courses.json';

  constructor(private httpClient: HttpClient) { }

  //get<Course[]>- O operador diamante <> é utilizado pra colocar o tipo de de retorno da chamada. No caso o retorno é um Observable de Array de cursos
  //O pipe siginifica cano e serve para manipular a informação antes de retorna-lá de maneira reativa. Os dados passam pelo cano e você pode manipular o resultado final.
  //take(1) é utilizado para fechar a inscrição depois de pegar a responsta
  //tap nós consguimos utilizar os dados para verificar o que está vindo... Ex: utilizamos o console.log para visualizar os dados no inspecionar
  //first serve pra pegar a primeira responsa do servidor e finaliza a inscrição no servidor
  public list() {
    return this.httpClient.get<Course[]>(this.url)
    .pipe(
      first(),
      //delay(5000),
      tap(courses => console.log(courses))
    )
  }
}
