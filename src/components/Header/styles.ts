import styled from 'styled-components';

export const Container = styled.header`
   background: #ffff;
    height: 72px;
    border-bottom: 1px solid #ddd;
`;

export const HeaderContent = styled.section`
    width: 100%;
    max-width: 980px;
    margin: 0 auto;
    height: 72px;
    padding: 0 30px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LeftContent = styled.article`
    height: 36px;

    display: flex;
    flex-direction: row;
    align-items: center;

    #logo2 {
    height: 29px;
    width: 103px;
    }
`;

export const Separator = styled.div`
    width: 1px;
    background: #000;
    margin: 0 16px;
    height: 28px;
`;

export const HeightContent = styled.article`
    height: 36px;
    width: 80px;
    width: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;


