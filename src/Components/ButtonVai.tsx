import React from 'react';

type ButtonProps = {
  label: string;
}

function ButtonVai(props: ButtonProps) {

  //Funzione pre cambiare colore al click del bottone
  const handleTouchEvent = (e): void => {
    e.preventDefault();

    e.target.addEventListener('touchstart', () => {
      e.target.classList.add("change-bgdcolour");
      
    });
  };

    return (
        <>
         <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          onTouchStart={handleTouchEvent}
        >
          {props.label}
        </a>
        </>
    );
};

export default ButtonVai;