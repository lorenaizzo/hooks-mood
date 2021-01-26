import React, { useState } from 'react';


export default function MoodForm({handleNewMood}) {

    const [mood, setMood] = useState('Contento');
    const [message, setMessage] = useState('');

    const handleChangeInput = (event) => {
        setMessage(event.target.value);
    }

    const handleChangeSelect = (event) => {
        setMood(event.target.value);
    }

    const handleClick = (event) => {
        handleNewMood(mood, message);
    }

    return (
      <div>
          <label>Estado de animo</label>
          <select value = {mood} name='mood'onChange={handleChangeSelect}>
            <option value='Contento'>Contento</option>
            <option value='Triste'>Triste</option>
            <option value='Ilusionado'>Ilusionado</option>
            <option value='Enojado'>Enojado</option>
          </select>

          <label>Mensaje</label>
          <input value={message} onChange={handleChangeInput} name="message"></input>
      
          <button onClick={handleClick}>Guardar</button>
      </div>
    );
}
