import React from 'react';
// import styled from 'styled-components';

// Need this import for css modules
import styles from './Button.module.css';

// Using styled-components:
// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     /* & -> Applies for button's focus - special pseudo-selector */
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;
// What the styled components package does is:
// Looks at the styles, then wrap styles into generated class names,
// where it guarantees that each class name is unique so it can't spill over
// to other components in the App

const Button = (props) => {
  return (
    // CSS Modules Adds button class to this element
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
