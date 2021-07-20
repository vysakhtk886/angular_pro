import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  color="green"

  studentlist=['vysakh','shijin','fiyas','shyam']

  students=[
    {'name':'vysakh','age':'22','place':'calicut'},
    {'name':'shijin','age':'22','place':'calicut'},
    {'name':'fiyas','age':'23','place':'calicut'},
    {'name':'shyam','age':'24','place':'calicut'}
  ]

}
