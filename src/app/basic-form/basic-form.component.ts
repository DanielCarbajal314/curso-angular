import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {
  married = false;
  coupleName = '';
  childNames: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  newChild(){
    this.childNames.push('');
  }

}
