import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TenantAccountsComponent } from './pages/tenant-accounts/tenant-accounts.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'tenant-accounts',
        component: TenantAccountsComponent
    },
];
