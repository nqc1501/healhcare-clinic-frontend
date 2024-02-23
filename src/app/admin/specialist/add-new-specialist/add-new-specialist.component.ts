import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-add-new-specialist',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule
  ],
  templateUrl: './add-new-specialist.component.html',
  styleUrl: './add-new-specialist.component.css'
})
export class AddNewSpecialistComponent {

  specForm: FormGroup;

  displayedColumns: string[] = [
    'position', 'name', 'edit', 'delete'
  ];
  dataSource: MatTableDataSource<any>;

  constructor(
    private fb: FormBuilder
  ) {
    this.specForm = this.fb.group({
      name: ['', Validators.required],
      listServices: this.fb.array([])
    });
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource([]);
  }

  addNewService() {
    const servForm = this.fb.group({
      name: ['', Validators.required]
    });
    servForm.patchValue({ name: 'hello' });
    const listItems = this.specForm.get('listServices') as FormArray;
    listItems.push(servForm);
    this.dataSource.data.push(servForm.value);
    this.dataSource._updateChangeSubscription();
  }

  removeService(index: number) {
    // const index = this.dataSource.data.findIndex(item => item.name === name);
    const listItems = this.specForm.get('listServices') as FormArray;
    listItems.removeAt(index);
    this.dataSource.data.splice(index, 1);
    this.dataSource._updateChangeSubscription();
  }

  onFormSubmit() {
    if (this.specForm.valid) {
      console.log(this.specForm.value);
    }
  }

}
