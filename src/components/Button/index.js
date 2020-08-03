import styled from 'styled-components';

const Button = styled.button`

    color: var(--white);
    background: var(--black);
    border: 0px solid #161634;
    box-sizing: border-box;
    cursor: pointer;
    padding: 9px 7px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
  }
  .ButtonLink:hover,
  .ButtonLink:focus {
    opacity: .5;



`;

export default Button;
