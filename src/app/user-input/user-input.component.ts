import { Component, EventEmitter, Output  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type  { InvestmentInput } from '../../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  
  @Output() calculate =new EventEmitter<InvestmentInput>();
  entertedInitialInvestment= "0";
  entertedAnnualInvestment ="0";
  entertedExpectedRetrun = '5';
  entertedDuration = '10';
  
   onSubmit(){
       this.calculate.emit({
          initialInvestment: +this.entertedAnnualInvestment,
          duration:+this.entertedDuration,
          expectedReturn:+this.entertedExpectedRetrun,
          annualInvestment:+this.entertedAnnualInvestment

       });

   }
}
