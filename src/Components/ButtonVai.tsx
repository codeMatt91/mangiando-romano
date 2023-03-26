import React from 'react';

type ButtonProps = {
  label: string;
}

function ButtonVai(props: ButtonProps) {
    return (
        <>
         <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.label}
        </a>
        </>
    );
};

export default ButtonVai;