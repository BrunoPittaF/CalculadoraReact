import React, {useState} from "react";
import { Input, ButtonCalc, ButtonEven, ButtonOperator } from "src/styles/components";
/*import { useTheme } from "src/ThemeContext";*/

export default function Home() {
  /* const themeToggle = useTheme();*/
  const [numbers, setNumbers] = useState<string>('0');
  const [number1, setNumber1] = useState<string>('0');
  const [number2, setNumber2] = useState<string>('');
  const [op, setOp] = useState<string>('');

  function addNumber(number:any) {
    let result:any;
    if (op == null){
      result = Concatenar(number1, number);
      setNumber1(result);
    }else{
      result = Concatenar(number2, number);
      setNumber2(result);
    }
    setNumbers(result);
  }

  function Operation(op:any){
    setNumbers(op);
  }

  function Concatenar(numAtual:any, numProx:any){
    //0 ou null, reinicia o valor
    if (numAtual == '0' || numAtual == null) {
      numAtual = '';
    }
    //primeiro digito for ".", bota um 0 a esquerda
    if (numProx == '.' && numAtual == ''){
    return '0.';
  }
    //caso '.' digitado e e ja tenha um, apenas retorna
    if (numProx == '.' && numAtual.indexOf('.') > -1){
      return numAtual;
    }
    return numAtual + numProx;
  }

  function Calcular(number1:any, number2:any, operacao:any) {
    let result;

    switch(operacao) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      case '/':
        result = number1 / number2;
        break;
      default:
        console.log('você fracassou miseravelmente');
        result= 0;
        break;
    }
    return result ;
  }

  return (
    <div className="box">
    { /*<Button onClick={() => themeToggle.toggle()}>Toggle Theme</Button> */}  
    <div className="container">
      <div className="rowFirst">
      <button>C</button>
      <Input 
      type="text" 
      name="numbers"
      value={numbers} 
      readOnly></Input>
      </div>
      <div className="gridBotoes">
        <div className="column">
          <ButtonCalc onClick={() => addNumber(7)}>7</ButtonCalc>
          <ButtonCalc onClick={() => addNumber(4)}>4</ButtonCalc>
          <ButtonCalc onClick={() => addNumber(1)}>1</ButtonCalc>
          <ButtonCalc onClick={() => addNumber(0)}>0</ButtonCalc>
        </div>
        <div className="column">
          <ButtonCalc onClick={() => addNumber(8)}>8</ButtonCalc>
          <ButtonCalc onClick={() => addNumber(5)}>5</ButtonCalc>
          <ButtonCalc onClick={() => addNumber(2)}>2</ButtonCalc>
          <ButtonCalc>.</ButtonCalc>
        </div>
        <div className="column">
          <ButtonCalc onClick={() => addNumber(9)}>9</ButtonCalc>
          <ButtonCalc onClick={() => addNumber(6)}>6</ButtonCalc>
          <ButtonCalc onClick={() => addNumber(3)}>3</ButtonCalc>
          <ButtonEven>=</ButtonEven>
        </div>
        <div className="column">
          <ButtonOperator onClick={() => Operation('/')}>/</ButtonOperator>
          <ButtonOperator onClick={() => Operation('*')}>*</ButtonOperator>
          <ButtonOperator onClick={() => Operation('-')}>-</ButtonOperator>
          <ButtonOperator onClick={() => Operation('+')}>+</ButtonOperator>
        </div>

      </div>
      
    </div>
    </div>
  );
}
