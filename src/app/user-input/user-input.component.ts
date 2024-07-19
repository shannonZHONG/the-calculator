import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  entertedInitialInvestment= "0";
  entertedAnnualInvestment ="0";
  entertedExpectedRetrun = '5';
  entertedDuration = '10';
  
   onSubmit(){
    console.log("SUBMITTED!");
    console.log(this.entertedInitialInvestment);
    console.log(this.entertedAnnualInvestment);
    console.log(this.entertedExpectedRetrun);
    console.log(this.entertedDuration);
   }
}
