import "./style.css";
import { setupCounter } from "./counter";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div class="container">
<div id="display">0</div>
<btn id="btnC">Clear</btn>
<div class="buttons">
    <btn id="btn7">7</btn>
    <btn id="btn8">8</btn>
    <btn id="btn9">9</btn>
    <btn id="btnDiv">/</btn>
    <btn id="btn4">4</btn>
    <btn id="btn5">5</btn>
    <btn id="btn6">6</btn>
    <btn id="btnMulti">*</btn>
    <btn id="btn1">1</btn>
    <btn id="btn2">2</btn>
    <btn id="btn3">3</btn>
    <btn id="btnSub">-</btn>
    <btn id="btn0">0</btn>
    <btn id="btnAdd">+</btn>
    <btn id="btnE">=</btn>
</div>
</div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
