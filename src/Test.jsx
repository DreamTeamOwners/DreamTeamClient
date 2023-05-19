import React, { useState } from 'react';

function Test() {
  const [inputs, setInputs] = useState(['']); // Начальное состояние с одним полем ввода

  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    setInputs([...inputs, '']);
  };

  const handleRemoveInput = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Обработка отправки формы
    // Можете использовать inputs для получения введенных значений
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {inputs.map((input, index) => (
          <div key={index}>
            <input
              type="text"
              value={input}
              onChange={(e) => handleChange(index, e.target.value)}
            />
            <button type="button" onClick={() => handleRemoveInput(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddInput}>
          Add
        </button>
        <button type="submit">Submit</button>
      </form>

      <div>
        {inputs.map((input, index) => (
          <div key={index}>
            input_{index + 1}: '{input}'
          </div>
        ))}
      </div>
    </div>
  );
}

export default Test;
