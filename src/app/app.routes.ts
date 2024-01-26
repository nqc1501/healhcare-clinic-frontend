import { Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { HealhServiceComponent } from './user/healh-service/healh-service.component';
import { UserComponent } from './user/user/user.component';
import { AdminComponent } from './admin/admin/admin.component';
import { CreateDoctorComponent } from './admin/doctor/create-doctor/create-doctor.component';
import { DoctorListComponent } from './admin/doctor/doctor-list/doctor-list.component';
import { LoginComponent } from './admin/login/login.component';
import { AdminGuard } from './auth/guards/admin-guard/admin-guard.guard';
import { NoGuard } from './auth/guards/no-guard/no-guard.guard';

export const routes: Routes = [
    { 
        path: 'admin', component: AdminComponent,
        children: [
            { path: 'login', component: LoginComponent, canActivate: [NoGuard] },
            { path: 'dashboard', component: DashboardComponent, canActivate: [AdminGuard] },
            { path: 'create-doctor', component: CreateDoctorComponent, canActivate: [AdminGuard] }, 
            { path: 'list-doctor', component: DoctorListComponent, canActivate: [AdminGuard] }
        ]
    },
    {
        path: '', component: UserComponent,
        children: [
            { path: 'dashboard', component: UserDashboardComponent },
            { path: 'health-service', component: HealhServiceComponent },
        ]
    }
];
