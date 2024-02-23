import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-new-supply',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  templateUrl: './add-new-supply.component.html',
  styleUrl: './add-new-supply.component.css'
})
export class AddNewSupplyComponent {

  supplyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { 
    this.supplyForm = this.fb.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required],
      unit: ['', Validators.required],
      price: ['', Validators.required],
      expiryDate: ['', Validators.required],
      manufacturingDate: ['', Validators.required],
      usage: ['', Validators.required],
      description: ['', Validators.required],
      length: ['', Validators.required],
      width: ['', Validators.required]
    });
  }

  ngOnInit() {
    
  }

}
