//** LIBRARIES */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

//** COMPONENTS */
import { AppComponent } from './app.component';
import { CalculatorBasicComponent } from './calculators/app.calculatorBasic.component';
import { AppCalculator2Component } from './cal2/app.cal2.component';
import { AppCalculator3Component } from './cal2/app.cal3.component';

//** MODELS */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorBasicComponent,
    AppCalculator2Component,
    AppCalculator3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
