import styled from 'styled-components';

export const Container = styled.section`
   width: 100%;
    max-width: 660px;
    margin: 0 auto;
    padding: 0 30px;

    article{
    background: #fff;
    border: 1px solid #ddd;
    margin-top: 60px;
    > img {
    width: 100%;
    
    }
    }
   
   

    header{
    padding: 20px;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    }

    footer {
    padding: 20px;

    }

    p {
    font-size: 13px;
    margin-top: 2px;
    line-height: 18px;
    }

    span {
    color: #000;
    display: block;
    }
`;

export const UserInfo = styled.div`
   display: flex;
    flex-direction: row;
    align-items: center;

    img{
    width: 35px;
    height: 35px;
    border-radius: 35px;
    border: 1px solid transparent;
    border: transparent;
    background: black;
  
    }

    span {
    font-size: 11px;
    color: #666;
    margin-top: 3px;
}
`;


export const WrapperImage = styled.div`
       margin-right: 7px;

`;

export const ContainerActions = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Actions = styled.div`
        margin-bottom: 10px;

    button {
    background: transparent;
    border:0;
    cursor: pointer;
    }

    img {
    height: 20px;
    margin-right: 10px;
    }

`;





