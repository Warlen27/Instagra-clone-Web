import styled from 'styled-components';

export const Container = styled.section`
    padding:  10px ;


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

`;

export const WrapperImage = styled.article`
    width: 66px;
    height: 66px;
    border-radius: 66px;
    border: 2px solid crimson;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 7px;
    
    img {
    width: 58px;
    height: 58px;
    border-radius: 58px;
    border: transparent;
}

`;
