import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 5px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  
  .Logo {
    max-width: 168px;
  }
  @media (max-width: 900px) {
    .Logo1 {
      max-width: 70px;
      max-height: 20px;
    }
    .Logo2{
      max-width: 40px;
      max-height: 20px;
    }
    .Logo3{
      max-width: 10px;
      max-height: 10px;
    }
  }
`;

