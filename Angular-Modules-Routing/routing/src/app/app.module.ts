import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlueComponent } from './main/submodules/blue/blue.component';
import { GreenComponent } from './main/submodules/green/green.component';
import { OrangeComponent } from './main/submodules/orange/orange.component';
import { RedComponent } from './main/submodules/red/red.component';
import { HomeComponent } from './main/submodules/home/home.component';
import { AttackComponent } from './main/submodules/attack/attack.component';
import { ErrorComponent } from './main/submodules/error/error.component';

import { AuthGuard } from './services/auth.guard';
import { TargetGuard } from './services/target.guard';
import { TabsetConfigComponent } from './main/submodules/tabset-config/tabset-config.component';

@NgModule({
  declarations: [
    AppComponent,
    BlueComponent,
    GreenComponent,
    OrangeComponent,
    RedComponent,
    HomeComponent,
    AttackComponent,
    ErrorComponent,
    TabsetConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    AuthGuard,
    TargetGuard,
    NgbAccordionConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
