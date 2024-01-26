import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    MatIconModule,
    MatExpansionModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  // nav-list-item
  doctorMenuOpened = false;
  patientMenuOpened = false;

  constructor() { }

  ngOnInit() {

  }

  toggleDoctorMenu() {
    this.doctorMenuOpened = !this.doctorMenuOpened;
  }

  togglePatientMenu() {
    this.patientMenuOpened = !this.patientMenuOpened;
  }

}
