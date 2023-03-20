import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div class="calculator">
    <div class="screen">.</div>
    <br/>
    <div class="buttons">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>+</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>*</button>
        <button>0</button>
        <button>.</button>
        <button>/</button>
        <button id="equals">=</button>
    </div>
    <br/>
    <button id="clear">CLEAR</button>
</div>
`;
