import './style.css'

function App(){
  return (
    <div className="calculate-grid">
      <div className="output">
        <div className="previous-operand"></div>
        <div className="current-operand"></div>
      </div>
    <buttton className="span-two">AC</buttton>
    <buttton>Del</buttton>
    <buttton>÷</buttton>
    <buttton>1</buttton>
    <buttton>2</buttton>
    <buttton>3</buttton>
    <buttton>*</buttton>
    <buttton>4</buttton>
    <buttton>5</buttton>
    <buttton>6</buttton>
    <buttton>+</buttton>
    <buttton>7</buttton>
    <buttton>8</buttton>
    <buttton>9</buttton>
    <buttton>-</buttton>
    <buttton>.</buttton>
    <buttton>0</buttton>
    <buttton className="span-two">=</buttton>
    </div>
  )
}

export default App