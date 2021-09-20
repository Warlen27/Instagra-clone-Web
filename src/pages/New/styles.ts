import styled from 'styled-components';

export const Form = styled.form`
   width: 100%;
    max-width: 900px;
    margin: 0px auto 0;
    background: #fff;
    border:1px solid #ddd; 
`;

export const HeaderStyle = styled.header`
   height: 60px;
   border-bottom: #ddd 2px solid;
   padding: 10px;

   display: flex;
   justify-content: space-between;
   align-items: center;

   button {
    background: transparent;
    border: 0;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    color: #3897f0;
}
`;

export const Footer = styled.footer`
    height: 90px;
    padding: 10px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    > img {
    width: 35px;
    height: 35px;
    margin-right: 10px;
    border-radius: 35px;
    border: 1px solid transparent;
    border: transparent;
    background: black;
}

textarea {
    height: 45px;
    width: 100%;
    border: none;
    color: #262626;
    font-size: 20px;
    outline: 0;
    line-height: 18px;
    height: 45px;
    overflow: auto;
    overflow-wrap: break-word;
    resize: none;
}
`;


export const ContainerLabel = styled.section`
   input[type=file] {
    display: none;
}
`;

export const Thumbnail = styled.label`
   width: 80px;
    height: 80px;
    background-size:cover;
    cursor: pointer;
   
    display: flex;
    justify-content: center;
    align-items: center;

    .placeholder img {
    display: none;
    }
`;

