import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ItemService } from '../../../../services/item/item.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-list-medication',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
  ],
  templateUrl: './list-medication.component.html',
  styleUrl: './list-medication.component.css'
})
export class ListMedicationComponent {

  displayedColumns: string[] = ['position', 'name', 'edit', 'delete'];
  dataSource: MatTableDataSource<any>;

  constructor(
    private sItem: ItemService
  ) { }

  ngOnInit() {

  }

  onFormSubmit() {

  }

  openEditForm(data: any) {

  }

  openDeleteForm() {
    
  }

}
