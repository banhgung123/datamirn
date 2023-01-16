import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styled from 'styled-components';

HeaderComponent.propTypes = {
    
};

const HeaderStyled = styled.div`
    height: 70px;
    background-color: ${props => props.bgColor || '#002F6C'};
    color: #fff;
    padding: 0 100px;

    .header-logo {
        font-size: 4.4rem;
        font-weight: bold;
    }

    .header-menu {
        font-size: 1.6rem;

        & li:not(:first-child) {
            margin-left: 20px;
        }
    }
`;

function HeaderComponent({bgColor}) {
    const {query} = useRouter();

    return (
        <HeaderStyled bgColor={bgColor} className="d-flex justify-content-between align-items-center">
            <span className="header-logo">DATAMIRN</span>
            <ul className="header-menu d-flex justify-content-end mb-0 ps-0 w-25">
                {(() => {
                    if (Object.keys(query)?.length === 0) return <li>Register</li>;
                    return <>
                        <li>Account</li>
                        <li>Logout</li>
                    </>;
                })()}
                <li>Contact</li>
            </ul>
        </HeaderStyled>
    );
}

export default HeaderComponent;