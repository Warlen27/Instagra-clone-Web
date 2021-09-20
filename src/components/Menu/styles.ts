import styled from 'styled-components';

export const Container = styled.section`
   position: relative;
   display: flex;
   flex-direction: column;
`;

export const Button = styled.button`
   background: transparent;
   border:0;
   cursor: pointer;

   
`;

export const TopButton = styled.button`
   border-bottom: 1px solid #ddd;
   
`;

export const MenuArticle = styled.article`
   background: #fff;
    position: absolute;
    width: 70px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: inherit;
    justify-content: center;

    button {
    line-height: 23px;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    border: 0;
    width: 100%;
   
    }



    a{
    color: #000;
    }
`;

