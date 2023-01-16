import styled from 'styled-components';
import FooterComponent from '../footer/FooterComponent';
import HeaderComponent from '../header/HeaderComponent';

const WrapperStyled = styled.div`
    width: 1440px;
    margin: 0 auto;
`;

function WrapperComponent({children}) {
    return (
        <WrapperStyled>
            <HeaderComponent/>
                {children}
            <FooterComponent/>
        </WrapperStyled>
    );
}

export default WrapperComponent;