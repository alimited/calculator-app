import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  title = 'calculator';

  calValue: number = 0;
  funcT: any = '';

  calNumber: string ='noValue';

  firstNumber: number = 0;
  secondNumber: number = 0;

  onClickValue(val: string, type: any) {
    if(type == 'number') {
      this.onNumberClick(val);
    }
    else if (type == 'function') {
      this.onFunctionClick(val);
    }
  }

  onNumberClick(val: string) {
    if(this.calNumber != 'noValue') {
      this.calNumber = this.calNumber + val;
    }
    else {
      this.calNumber = val;
    }
    this.calValue = parseFloat(this.calNumber);
  }

  onFunctionClick(val: string) {

    // call claer all method on C keypress
    if (val == 'c') {
      this.clearAll();
    }
    else if (this.funcT == '') {
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = 'noValue';
      this.funcT = val;
    }
    else if (this.funcT != '') {
      this.secondNumber = this.calValue;
      // calculate the numbers
      this.calculateNumbers(val);
    }
  }

  calculateNumbers(val: string) {
    if (this.funcT == '+') {
      const Total = this.firstNumber + this.secondNumber
      this.totalAssignValues(Total, val)
      if (val == '=') {
        this.onEqualPress()
      }
    }
    if (this.funcT == '-') {
      const Total = this.firstNumber - this.secondNumber
      this.totalAssignValues(Total, val)
      if (val == '=') {
        this.onEqualPress()
      }
    }
    if (this.funcT == '*') {
      const Total = this.firstNumber * this.secondNumber
      this.totalAssignValues(Total, val)
      if (val == '=') {
        this.onEqualPress()
      }
    }
    if (this.funcT == '/') {
      const Total = this.firstNumber / this.secondNumber
      this.totalAssignValues(Total, val)
      if (val == '=') {
        this.onEqualPress()
      }
    }
    if (this.funcT == '%') {
      const Total = this.firstNumber % this.secondNumber
      this.totalAssignValues(Total, val)
      if (val == '=') {
        this.onEqualPress()
      }
    }
  }

  totalAssignValues(Total: number, val: string) {
    this.calValue = Total;
    this.firstNumber = Total;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.funcT = val;
  }

  onEqualPress() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT = '';
    this.calNumber = 'noValue';
  }

  clearAll() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calValue = 0;
    this.funcT = '';
    this.calNumber = 'noValue';
  }

}
