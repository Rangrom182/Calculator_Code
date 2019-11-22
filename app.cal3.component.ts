//** LIBRARIES */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

/** COMPONENT */
@Component({
    selector: 'app-calc3',
    templateUrl: './app.cal3.component.html',
    styleUrls: ['./app.cal3.component.scss']
})
export class AppCalculator3Component implements OnInit {
    //** PROPERTIES */
    public calculatorMainTitle = 'CALCULATOR 3';
    public resultValue = 0;
    public frmMain: FormGroup;

    //** CONSTRUCTOR */
    constructor() {
        console.info("||** I'm in the constructor...");
    }

    //** BASE METHODS */
    ngOnInit(): void {
        console.info("||** I'm in the ngOnInit Method...");

        this.frmMain = new FormGroup({
            var1: new FormControl(100),
            var2: new FormControl(200)
        });
    }

    //** Class Methods */
    public add(): void {
        //** Init */
        var variableA = this.frmMain.controls["var1"].value;
        var variableB = this.frmMain.controls["var2"].value;
        var result = variableA + variableB;

        this.resultValue = result;
    }
}