import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer, RouterStateSerializer } from '@ngrx/router-store';
import { CustomSerializer } from './shared/utils';
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot({
            router: routerReducer
        }),
        StoreRouterConnectingModule.forRoot({ stateKey: "router" }),
        StoreDevtoolsModule.instrument(),
        AppRoutingModule,
        HttpClientModule,
        EffectsModule.forRoot([])
    ],
    providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
    bootstrap: [AppComponent]
})
export class AppModule { }
