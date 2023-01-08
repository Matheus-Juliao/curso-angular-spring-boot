import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public courses$: Observable<Course[]>;
  public displayedColumns = ['name', 'category'];

  constructor(
    private cursosServices: CoursesService,
    public dialog: MatDialog
  ) {
    //*this.courses = [];
    this.courses$ = this.cursosServices.list()
    .pipe(
      catchError(error => {
        console.log(error);
        this.onError('Erro ao carregar cursos.')
        return of([])
      })
    );

  }

  ngOnInit(): void {
    //ngOnInit
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

}
