import { useState } from "react";

const Number = () => {
  const [num1, set1value] = useState();
  const [num2, set2value] = useState();

  const value1 = (e) => {
    set1value(e.target.value);
  };

  const value2 = (e) => {
    set2value(e.target.value);
  };

  return (
    <>
      <input value={num1} onChange={value1} />
      <input value={num2} onChange={value2} />
      <div>
        덧셈 : {num1} + {num2} =
      </div>
      <div>
        뺄셈 : {num2} - {num1} ={num2 - num1}
      </div>
      <div>
        곱셈 : {num1} x {num2} = {num1 * num2}
      </div>
      <div>
        나눗셈 : {num2} / {num1} ={num2 / num1}
      </div>
    </>
  );
};

export default Number;
