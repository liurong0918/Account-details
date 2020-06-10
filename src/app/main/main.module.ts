import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MainComponent } from './main.component';


@NgModule({
    declarations: [
        MainComponent,
    ],
    imports: [
        CommonModule,
        CurrencyPipe
    ],
    providers: [],

})
export class AppModule { }
