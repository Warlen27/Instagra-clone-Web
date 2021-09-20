import styled from 'styled-components';

export const Container = styled.section`
    margin: 12px auto 0;
    max-width: 350px;
    width: 100%;
    background: #fff;
    border: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    align-items: center;

    > span {
    height: 51px;
    width: 175px;
    margin-top: 30px;
    background-size: cover;
}

`;

export const Content = styled.article`
    background: #fff;
    margin-top: 30px;
    border-radius: 4px;
    padding: 30px;
    width: 100%;

`;

export const Form = styled.form`
     display: flex;
    flex-direction: column;

    input {
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius:3px;
    height:45px;
    padding:0 15px;
    font-size: 16px;
}

button {
    border: 0;
    border-radius: 2px;
    width: 100%;
    height: 42px;
    padding: 0 20px;
    font-size: 16px;
    font-weight: bold;
    background:  #3897f0;
    color: #fff;
    cursor: pointer;
}

`;

// .content form label {
//     font-size: 14px;
//     color: #444;
//     font-weight: bold;
//     margin-bottom: 8px;
// }

// .content label#avatar {
//     margin-bottom: 8px;
//     border: 1px solid #ddd;
//     background-size: cover;
//     cursor: pointer;
//     width: 150px;
//     height: 150px;
//     border-radius: 150px;

//     display: flex;
//     justify-content: center;
//     align-items: center;
// }

// .content label#avatar img {
//     width: 150px;
//     height: 150px;
//     border-radius: 150px;
// }

// .content label#avatar input {
//     display: none;
// }

export const Footer = styled.footer`
     height: 63px;

     

`;

export const RegisterText = styled.p`
    margin: 15px;

    span {
    margin-left: 3px;
    font-weight: 600;
    color: #3897f0;
}

`;
// .footer - register {
//     height: 63px;
// }
// p.register{
//     margin: 15px;
// }

// p.register span {
//     margin - left: 3px;
//     font - weight: 600;
//     color: #3897f0;
// }