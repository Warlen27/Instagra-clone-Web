import styled from 'styled-components';

export const Container = styled.section`
   width: 100%;
    max-width: 900px;
    height: 100vh;
    margin: 0 auto;
  

    display:flex;
    flex-direction: column;
    justify-content: space-between;
`;


export const HeaderContent = styled.article`
   height: 50vh;
    margin-top: 50px;
   
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 3fr  repeat(6, 1fr 20px);
	grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
   "avatar avatar .  username EditePerfil"
   "avatar avatar .  content-pff content-pff "
   "avatar avatar .  nome .";

   @media (max-width: 735px) {

    grid-template-columns: 20vw repeat(2, 35vw auto);
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
   "avatar username "
   "avatar EditePerfil "
   "nome ."
   "content-pff content-pff";
}
`;

export const Avatar = styled.article`
   grid-area: avatar;
    padding: .5em;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
    width: 100%;
    height: 100%;
    border-radius: 100%;

    @media (max-width: 735px) {
        width: 100%;
        height: 100%;
    }
    }

    img {
    height: 90%;
    width: 91%;
    border-radius: 53%; 
    border: 3px solid #fff;

    @media (max-width: 735px) {

    width: 100%;
    height: 100%;
    }

    }

    @media (max-width: 735px) {

    width: 20vw;
    height: 20vw;
    }

    @media (max-width: 534px) {

    align-self: center;
    }

`;

export const Username = styled.span`
     grid-area: username;
    font-size: 28px;
    color: #262626;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 735px) {

    font-size: 5vw;
    height: 32px;
    align-self: end;
   
    }

    @media (max-width: 534px) {

    font-size: 4vw;
    align-self: end;
    }

`;

export const BtnProfile = styled.div`
     grid-area: EditePerfil;
    grid-column: 6/10;
   
    display: flex;
    align-items: center;

    button {
    background: transparent;
    border:1px solid #dbdbdb;
    border-radius: 4px;
    color: #262626;
    font-weight: 600;
    cursor: pointer;
    padding: 7px 9px;

    @media (max-width: 735px) {
    width: 100%;
    }
    }    

    @media (max-width: 735px) {

        grid-area: EditePerfil;
        grid-column: 2/5;
        align-self: start;
    }

`;

export const ContentPff = styled.ul`
    width: 400px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    grid-area: content-pff; 
    font-size: 18px;

    @media (max-width: 735px) {
    width: 100vw;
    justify-content: space-around;

    .p, .f1, .f2 {
        display: flex;
        flex-direction: column;
       align-items: center; 
    }

    .count-publication, .publications,
    .count-followers, .followers, 
    .count-following, .following {
        font-size: 80.4%;
    }
   
    }
`;

export const CountSpan = styled.span`
     font-weight: bold;
    margin-right: 5px; 
`;

export const Name = styled.span`
    font-weight: bold;
    font-size: 20px;
    grid-area: nome;
    grid-column: 4/5;

    @media (max-width: 735px) {

    grid-area: nome;
    font-size: 14px;
    align-self: center;
    display: flex;
    justify-content: center;
    }

    @media (max-width: 534px) {

    width: 21vw;
    }

    @media (max-width: 375px) {
          width: 30vw;
   }
`;

export const Posts = styled.ul`
     list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 27px;
    width: 100%;
    max-width: 900px;
    height: 260px;
    margin-bottom: 50px;

    li {
    display: flex;
    flex-direction: column;
    height: 260px;
    border: 1px solid #555;
  }

  img {
    width: 100%;
    height: 100%;
    
    
  }

  @media (max-width: 534px) {

    grid-gap: 2px;
  }

`;




