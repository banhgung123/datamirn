import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const TitleStyled = styled.div`
    position: relative;
    width: ${props => props.width ? `${props.width}px` : '100%'};
    h1 {
        text-transform: uppercase;
        font-size: 6.5rem;
        color: ${props => props.color || '#fff'};
    }

    &:before {
        content: '';
        display: block;
        position: absolute;
        ${props => {
            switch (props.position) {
                case 'center':
                    return css`
                        left: 50%;
                    `;
                case 'right':
                    return css`
                        right: 0;
                    `;
                default:
                    return css`
                        left: 0;
                    `;
            }
        }};
        bottom: -10%;
        width: 94px;
        height: 6px;
        background-color: ${props => props.deColor || '#41B6E6'};
    }
`;

function TitleComponent({title, color, deColor, position, width}) {
    return (
        <TitleStyled className="title" color={color} deColor={deColor} position={position} width={width}>
            <h1>{title}</h1>
        </TitleStyled>
    );
}

TitleComponent.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  deColor: PropTypes.string,
  position: PropTypes.string,
  width: PropTypes.number,  
};

TitleComponent.defaultProps = {
    title: 'do more get more',
    color: '#FFE13E',
    deColor: '#1B6E6',
    position: 'left',
    width: 300,
};

export default TitleComponent;