import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public courses$: Observable<Course[]>;

  constructor(
    private cursosServices: CoursesService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router
  ) {
    //*this.courses = [];
    this.courses$ = this.cursosServices.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos.')
        return of([])
      })
    );

  }

  ngOnInit(): void {
    //ngOnInit
  }

  public onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

}
