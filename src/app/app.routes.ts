import { Routes } from '@angular/router';
import { HomeComponent } from '../modules/routes/home/home.component';
import { StorageComponent } from '../modules/routes/storage/storage/storage.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home | SYS',
    component: HomeComponent,
  },
  {
    path: 'storage',
    component: StorageComponent,
    title: 'Storage | SYS',
  },
];
