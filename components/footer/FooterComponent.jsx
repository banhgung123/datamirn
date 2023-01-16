import PropTypes from 'prop-types';
import styled from 'styled-components';

FooterComponent.propTypes = {
    
};

const FooterStyled = styled.div`
    height: 150px;
    padding: 0 100px;
    color: #fff;
    background-color: #002F6C;

    .left,
    .right span:first-child {
        font-size: 1.4rem;
    }

    .right span:last-child {
        font-size: 2.5rem;
        font-weight: bold;
    }
`;

function FooterComponent(props) {
    return (
        <FooterStyled className="d-flex justify-content-between align-items-center">
            <div className="left d-flex flex-column">
                <span>&copy; 2022 - Dataminr And/Or its Affiliates. All Rights Reserved.</span>
                <span>Dataminr | Powered By Karrot</span>
            </div>
            <div className="right d-flex flex-column">
                <span>Privacy Policy | Terms & Conditions</span>
                <span>Dataminr</span>
            </div>
        </FooterStyled>
    );
}

export default FooterComponent;