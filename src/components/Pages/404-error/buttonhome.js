import styled from 'styled-components';


const ButtonHome = styled.button`
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 395px; left: 900px;
    color: var(--white);
    background: var(--black);
    border: 1px solid #b0b0ec;
    box-sizing: border-box;
    cursor: pointer;
    padding: 5px 13px;
    text-decoration: none;
    transition: opacity .3s;
  }
  .ButtonLink:hover,
  .ButtonLink:focus {
    opacity: .10;
  }
`;
export default ButtonHome;
