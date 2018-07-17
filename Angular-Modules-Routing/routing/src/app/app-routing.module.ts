import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './main/submodules/home/home.component';
import { RedComponent } from './main/submodules/red/red.component';
import { BlueComponent } from './main/submodules/blue/blue.component';
import { GreenComponent } from './main/submodules/green/green.component';
import { OrangeComponent } from './main/submodules/orange/orange.component';
import { AttackComponent } from './main/submodules/attack/attack.component';
import { ErrorComponent } from './main/submodules/error/error.component';
import { TabsetConfigComponent } from './main/submodules/tabset-config/tabset-config.component';

import { AuthGuard } from './services/auth.guard';
import { TargetGuard } from './services/target.guard';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], pathMatch: 'full', component: HomeComponent },
  { path: 'attack', pathMatch: 'full', component: AttackComponent },
  { path: 'red', canActivate: [TargetGuard], component: RedComponent },
  { path: 'blue', canActivate: [TargetGuard], component: BlueComponent },
  { path: 'green', canActivate: [TargetGuard], component: GreenComponent },
  { path: 'orange', canActivate: [TargetGuard], component: OrangeComponent },
  { path: 'error', canActivate: [TargetGuard], component: ErrorComponent },
  { path: 'tabset-config', canActivate: [TargetGuard], component: TabsetConfigComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
