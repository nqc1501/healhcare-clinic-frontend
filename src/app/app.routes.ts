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
import { ListRoomComponent } from './admin/room/list-room/list-room.component';
import { AddNewSupplyComponent } from './admin/item/supply/add-new-supply/add-new-supply.component';
import { ListSuppliesComponent } from './admin/item/supply/list-supplies/list-supplies.component';
import { AddNewSpecialistComponent } from './admin/specialist/add-new-specialist/add-new-specialist.component';
import { DoctorComponent } from './doctor/doctor/doctor.component';
import { DoctorLoginComponent } from './doctor/doctor-login/doctor-login.component';
import { ListSpecialistsComponent } from './admin/specialist/list-specialists/list-specialists.component';

export const routes: Routes = [
    { 
        path: 'admin', component: AdminComponent,
        children: [
            { path: 'login', component: LoginComponent, canActivate: [NoGuard] },
            { path: 'dashboard', component: DashboardComponent, canActivate: [AdminGuard] },
            // xử lý về bác sỹ
            { path: 'create-doctor', component: CreateDoctorComponent, canActivate: [AdminGuard] }, 
            { path: 'list-doctors', component: DoctorListComponent, canActivate: [AdminGuard] },
            // xử lý về dịch vụ và chuyên ngành
            { path: 'add-new-specialist', component: AddNewSpecialistComponent, canActivate: [AdminGuard] },
            { path: 'list-specialists', component: ListSpecialistsComponent, canActivate: [AdminGuard] },
            // xử lý về phòng
            { path: 'list-rooms', component: ListRoomComponent, canActivate: [AdminGuard] },
            // xử lý về vật tư
            { path: 'add-new-supply', component: AddNewSupplyComponent, canActivate: [AdminGuard] },
            { path: 'list-supplies', component: ListSuppliesComponent, canActivate: [AdminGuard] }
        ]
    },

    {
        path: 'doctor', component: DoctorComponent,
        children: [
            { path: 'login', component: DoctorLoginComponent }
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
