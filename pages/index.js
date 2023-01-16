import Head from 'next/head'
import Image from 'next/image'
import ButtonComponent from '../components/buttons/ButtonComponent'
import CardComponent from '../components/cards/CardComponent'
import DropdownComponent from '../components/dropdown/DropdownComponent'
import HeaderComponent from '../components/header/HeaderComponent'
import FooterComponent from '../components/footer/FooterComponent'
import SliderComponent from '../components/sliders/SliderComponent'
import TitleComponent from '../components/titles/TitleComponent'
import WrapperComponent from '../components/wrapper/WrapperComponent'
import styled from 'styled-components';

const WelcomeStyled = styled.div`
  min-height: 100rem;
  background: url('/welcome.png') no-repeat center/cover;

  .header {
    &-info {
      font-size: 2.2rem;
      color: #fff;
      margin-top: 5rem;
      width: 50rem;
    }

    &-info p:last-child {
      margin-top: 5rem;
    }

    &-button {
      margin-top 5rem;
    }
  }

  .header-content {
    margin-left: 10rem;
  }
`;

export default function Home() {
  return (
    <WrapperComponent>
      <WelcomeStyled className="welcome">
        <div className="header-content">
          <TitleComponent title="do more get more" color="#fff" deColor="#41B6E6" width={330}/>
          <div className="header-info">
            <p>DO MORE. GET MORE is the Dataminr partner incentive program that rewards Partner Sales Representatives for selling across the Dataminr portfolio and delivering solutions to our customers that matter.</p>
            <p>Enroll today to learn more about DO MORE. GET MORE rewards.</p>
          </div>
          <div className="header-button">
            <div style={{display: 'inline-block', marginRight: '0.5rem'}}>
              <ButtonComponent type="transparent">
                Enroll Now <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
              </ButtonComponent>
            </div>
            <div style={{display: 'inline-block'}}>
              <ButtonComponent type="transparent">
                Login <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
              </ButtonComponent>
            </div>
          </div>
        </div>
      </WelcomeStyled>
      {/* <CardComponent/>
      <DropdownComponent/>
      <ButtonComponent type="text">
        Learn more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
      </svg>
      </ButtonComponent>
      <SliderComponent height="500px"/>
      <TitleComponent title="do more get more" width={330} color="#FFE13E"/> */}
    </WrapperComponent>
  )
}
