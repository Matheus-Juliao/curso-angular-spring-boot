import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  //Tudo que vai entrar e ser passado para esse componente
  @Input() public courses: Course[] = [];
  public readonly displayedColumns = ['name', 'category', 'actions'];

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //ngOnInit
  }

  public onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }

}
