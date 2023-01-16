import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const ButtonStyled = styled.button`
    padding: 16px 10px;
    line-height: 2rem;
    color: #fff;
    font-size: 20px;

    ${props => {
        switch (props.type) {
            case 'transparent':
                return css `
                    width: 180px;
                    height: 60px;
                    border: 2px solid #41B6E6;
                    transition: width 0.5s ease, height 0.5s ease, border 0.5s ease;
                    background-color: transparent;

                    &:hover {
                        width: 184px;
                        height: 64px;
                        border: 4px solid #41B6E6;
                    }
                `;
            case 't&c':
                return css `
                    width: 300px;
                    height: 60px;
                    border: 2px solid #41B6E6;
                    transition: width 1s ease, height 1s ease, border 1s ease;

                    &:hover {
                        width: 304px;
                        height: 64px;
                        border: 4px solid #41B6E6;
                    }
                `;
            case 'text':
                return css `
                    border: none;
                    color: #002F6C;
                    background-color: transparent;
                `;
            default:
                return css `
                    width: 200px;
                    height: 60px;
                    background-color: #002F6C;
                    transition: width 1s ease, height 1s ease;

                    &:hover {
                        width: 204px;
                        height: 64px;
                    }
                `;
        }
    }}
`;

function ButtonComponent({children, type}) {
    return (
        <ButtonStyled type={type}>
            {children}
        </ButtonStyled>
    );
}

ButtonComponent.propTypes = {
    type: PropTypes.string,
    children: PropTypes.node,
};

ButtonComponent.defaultProps = {
    type: '',
    children: 'Button Component',
};

export default ButtonComponent;