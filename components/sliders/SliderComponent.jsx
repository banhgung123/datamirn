import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import Slider from "react-slick";
import { useRef, useEffect } from 'react';
import TitleComponent from '../titles/TitleComponent';

const SliderStyled = styled(Slider)`
    .slick-dots {
        bottom: 22%;
    }

    .slick-dots li {
        margin: 0 8px;

        & div {
            width: 30px;
            height: 3px;
            background-color: rgba(204, 204, 204, 0.5);
            transition: background-color 0.8s linear;
        }

        &.slick-active div {
            background-color: #fff;
        }
    }

    .slider {
        position: relative;
        height: 500px;

        & img {
            width: 100%;
            height: ${props => props.height};
        }
    }

    .title {
        line-height: 7rem;
        left: 100px;
        top: 0;
        transform: translateY(-200%);
    }
`;

function SliderComponent({sliders, height}) {
    const slider = useRef();
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        speed: 3000,
        cssEase: "linear",
        customPaging: i => (
            <div style={{width: 30, height: 3,}} onClick={() => slider.current.slickNext()}/>
        )
    };

    useEffect(() => {
        let interval;
        if (!interval) {
            setInterval(() => {
                slider.current.slickNext();
            }, 6000);
        }
        return () => {
            clearInterval(interval);
            interval = null;
        }
    }, []);
    

    return (
        <>
        <SliderStyled ref={slider} sliders={sliders} {...settings} height={height}>
            {sliders.map((item, index) => (
            <div key={index} className="slider">
                <img src={item?.img} alt={item?.title}/>
                <TitleComponent title={item?.title} width={item?.width} color={item?.color} deColor={item?.deColor}/>
            </div>
            ))}
        </SliderStyled>
        </>
    );
}

SliderComponent.propTypes = {
  sliders: PropTypes.array,  
};

SliderComponent.defaultProps = {
    sliders: [
        {img: '/slider1.png', title: 'do more get more', width: 330, color: '#FFE13E', deColor: '#41B6E6'},
        {img: '/slider2.png', title: 'datamirn datamirn', width: 330, color: '#fff', deColor: '#41B6E6'},
        {img: '/slider3.png', title: 'eligible rewards', width: 330, color: '#fff', deColor: '#002F6C'},
    ],
};

export default SliderComponent;