import styled from "styled-components";
import theme from "styled-theming";

export const TextColor = theme("mode", {
  light: "#333",
  dark: "#DEE4E7"
});
export const FuhthestBackground = theme("mode", {
  light: "#DEE4E7",
  dark: "#111418"
});
export const MiddleBackground = theme("mode", {
  light: "#eff0f2",
  dark: "#191f24"
});
export const MiddleSecondBackground = theme("mode", {
  light: "#f9f9fa",
  dark: "#232a31"
});
export const ClosestBackground = theme("mode", {
  light: "#fff",
  dark: "#38434f"
});
export const Shadow = theme("mode", {
  light: "#0002",
  dark: "#fff2"
});

export const Button = styled.button`
  background-color: ${MiddleSecondBackground};
  color: ${TextColor};
  padding: 15px 30px;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.2s;
  border: none;
  &:hover,
  &:focus {
    transform: translateY(-2px);
    box-shadow: 0px 2px 30px ${Shadow};
    outline: none;
  }
`;


export const ButtonOutline = styled(Button)`
  background-color: transparent;
  border: 1px solid ${TextColor};
`;


export const ButtonCalc = styled.button`
  border: none;
  width: 50px;
  height: 30px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  background-color: white;
  cursor: pointer;
  margin: 5px 0px;
`;

export const ButtonEven = styled(ButtonCalc)`
  background-color: #279c3c;
`;

export const ButtonOperator = styled(ButtonCalc)`
  background-color: #feb80a;

`;

export const Input = styled.input`
  border: none;
  background-color: #e8e9ee;
  border-radius: 4px;
  height: 20px;
  width: 272px;
  padding: 5px;
  text-align: right;
`;
