import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../model/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  //@Input() Tudo que vai entrar e ser passado para esse componente
  @Input() public courses: Course[] = [];

  //Tudo que está saindo, ou seja, eventos que estão saindo
  @Output() add = new EventEmitter(false)

  @Output() edit = new EventEmitter(false)

  @Output() delete = new EventEmitter(false)

  public readonly displayedColumns = ['name', 'category', 'actions'];

  constructor() {
    //constructor
   }

  ngOnInit(): void {
    //ngOnInit
  }

  public onAdd() {
    this.add.emit(true)
  }

  public onEdit(course: Course) {
    this.edit.emit(course)
  }

  public onDelete(course: Course) {
    this.delete.emit(course)
  }

}
