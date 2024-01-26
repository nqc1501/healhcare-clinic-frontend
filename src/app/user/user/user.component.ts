import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  dataSource: MatTableDataSource<any>;

  buttonMenus = [
    { label: 'Trang chủ', link: '/user/dashboard' },
    { label: 'Giới thiệu', link: '/user/dashboard' },
    { label: 'Dịch vụ y tế', link: '/user/dashboard' },
    { label: 'Đội ngũ chuyên gia', link: '/user/dashboard' },
    { label: 'Hướng dẫn khách hàng', link: '/user/dashboard' },
    { label: 'Nghiên cứu khoa học', link: '/user/dashboard' },
    { label: 'Tin tức', link: '/user/login', 
      options: [
        { label: 'Tin tức tổng hợp', link: '/dashboard' },
        { label: 'Tin tức y khoa', link: '/dashboard' },
        { label: 'Thông báo dịch vụ', link: '/dashboard' },
      ] 
    },
    { label: 'Tuyển dụng', link: '/user/dashboard' }
  ];

  constructor(
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {

  }

  toDashboard() {
    
  }

  openRegisterForm() {
    const dialogRef = this.dialog.open(RegisterComponent);
  }

  openLoginForm() {
    const dialogRef = this.dialog.open(LoginComponent)
  }

  navigateToLink(url: string) {
    this.router.navigateByUrl(url);
  }

}
