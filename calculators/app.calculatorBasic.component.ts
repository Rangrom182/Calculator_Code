/***
 * 
 * AR:  Make a outline on how to create a manual component
 */

//** LIBRIARIES */
import { Component } from "@angular/core";

//** COMPONENT DEFINITIONS */
@Component({
	selector: 'app-calculator-basic',
	templateUrl: './app.calculatorBasic.component.html',
	styleUrls: ['./app.calculatorBasic.component.scss']

})
export class CalculatorBasicComponent {
    //** PROPERTIES */
    public title = 'Basic Calculator';

    //** CONSTRUCTOR */
    constructor() {}

    //** METHODS */
    public execute(): void {
        alert("TO all humans.  I'm calculating");
    }

}