import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-reative-form',
  templateUrl: './basic-reative-form.component.html',
  styleUrls: ['./basic-reative-form.component.scss']
})
export class BasicReativeFormComponent implements OnInit {
  name = new FormControl('', [
    Validators.required,
    Validators.minLength(4)
  ]);

  personForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    dayOfBirth: new FormControl(null, [Validators.required]),
    gender: new FormControl('H')
  })

  get friends(){
    return this.personFormWithBuilder.get('friends') as FormArray;
  }

  personFormWithBuilder!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.personFormWithBuilder = this.formBuilder.group({
      name: ['', Validators.required],
      dayOfBirth: [null, Validators.required],
      gender: ['H'],
      friends: this.formBuilder.array([
        this.formBuilder.control('')
      ])
    })
    this.name.valueChanges.subscribe(console.log);
    this.personForm.get('gender')?.disable();
  }

  validate() {
    this.name.markAsDirty();
  }

  addFriend(){
    this.friends.push(this.formBuilder.control('New Amigo'));
  }

}
