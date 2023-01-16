import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardStyled = styled.div`
    width: 350px;
    height: 350px;
    padding: 90px 50px;
    background-color: ${props => props.bgColor};
    color: ${props => props.fColor};
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        border: 5px solid ${props => props.bdColor};
        transition: border 0.3s linear
    }


    h3 {
        font-size: 4rem;
    }

    h5 {
        font-size: 2.5rem;
    }
`;

function CardComponent({bgColor, fColor, bdColor, content}) {
    return (
        <CardStyled
            bgColor={bgColor}
            fColor={fColor}
            bdColor={bdColor}
            content={content}
            className="d-flex justify-content-center align-items-center"
        >
            <div className="d-flex flex-column justify-content-center align-items-center text-center">
                <h3>{content?.title}</h3>
                <h5>{content?.info}</h5>
            </div>
        </CardStyled>
    );
}

CardComponent.propTypes = {
    bgColor: PropTypes.string,
    fColor: PropTypes.string,
    bdColor: PropTypes.string,
    content: PropTypes.object,
};

CardComponent.defaultProps = {
    bgColor: '#01A982',
    fColor: '#fff',
    bdColor: '#000',
    content: {title: '$100 PER COURSE', info: 'LEARN & EARN'},
}

export default CardComponent;