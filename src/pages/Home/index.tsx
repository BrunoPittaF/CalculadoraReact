import React, {useState} from "react";
import { Input, ButtonCalc, ButtonEven, ButtonOperator } from "src/styles/components";
/*import { useTheme } from "src/ThemeContext";*/

export default function Home() {
  /* const themeToggle = useTheme();*/
  const [numbers, setNumbers] = useState<string>('0');
  const [number1, setNumber1] = useState<string>('0');
  const [number2, setNumber2] = useState<any>(null);
  const [operacao, setOperacao] = useState<any>(null);

  function addNumber(number:any) {
    let result:any;
    if (operacao == null){
      result = Concatenar(number1, number);
      setNumber1(result);
    }else{
      result = Concatenar(number2, number);
      setNumber2(result);
    }
    setNumbers(result);
  }

  function Operation(op:any){
    //caso não exista
    if (operacao === null) {
      setOperacao(op);
      return;
    }
    //realiza o calculo caso operaçao exista e o numero 2 esteja selecionado
    //parseFloat pra converter em numero enquanto nao mudo o tipo
    if(number2 !== null) {
      const result = Calcular(parseFloat(number1), parseFloat(number2), operacao);
      setOperacao(op);
      setNumber1(result.toString());
      setNumber2('');
      setNumbers(result.toString());
    }
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

    function AcaoCalcular() {
      if (number2 == null) {
        return;
      }
      const result = Calcular(parseFloat(number1), parseFloat(number2), operacao);
      setNumbers(result);
    }

    function Limpar() {
      setNumbers('0');
      setNumber1('0');
      setNumber2(null);
      setOperacao(null);
    }

  return (
    <div className="box">
    { /*<Button onClick={() => themeToggle.toggle()}>Toggle Theme</Button> */}  
    <div className="container">
      <div className="rowFirst">
      <button onClick={Limpar}>C</button>
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
          <ButtonCalc onClick={() => addNumber('.')}>.</ButtonCalc>
        </div>
        <div className="column">
          <ButtonCalc onClick={() => addNumber(9)}>9</ButtonCalc>
          <ButtonCalc onClick={() => addNumber(6)}>6</ButtonCalc>
          <ButtonCalc onClick={() => addNumber(3)}>3</ButtonCalc>
          <ButtonEven onClick={AcaoCalcular}>=</ButtonEven>
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
