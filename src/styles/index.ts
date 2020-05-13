import { createGlobalStyle } from "styled-components";
import { FuhthestBackground, TextColor } from "./components";

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${FuhthestBackground};
    color:${TextColor};

    .box{
      width: 400px;
      margin: 5px auto;
      padding: 8px 20px;
      background: transparent;
      background-color: #007bff;
      .container{
        .rowFirst{
          display: flex;
          align-items: center;
          justify-content: space-between;
          button{
            background-color: #d13140;
            border: none;
            width: 50px;
            height: 30px;
            border-radius: 4px;
            color: white;
            font-weight: bold;
            cursor: pointer;
          }
        }
        .gridBotoes{
          display: grid;
          grid-template-columns: repeat(4,1fr);
          grid-gap: 0px 67px;
          .column{
            display: flex;
            flex-direction: column;
            &:nth-child(2){
            margin-left: 2px;
            margin-right: -2px;
          }
          }
        }
      }
    }
  }
`;
export default GlobalStyle;
