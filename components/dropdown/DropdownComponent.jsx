import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select, { IndicatorSeparator } from 'react-select';

const DropdownStyled = styled(Select)`
    font-size: 1.6rem;
    color: #2E3B45;

    .react-select__placeholder {
        color: color: rgba(33, 37, 41, 0.6);
    }

    .react-select__control,
    .react-select__option {
        cursor: pointer;
    }

    .react-select__option--is-focused,
    .react-select__option:hover {
        background-color: rgba(196, 196, 196, 0.3);
    }

    .react-select__option--is-focused.react-select__option--is-selected,
    .react-select__option.react-select__option--is-selected {
        background-color: rgba(196, 196, 196, 0.8);
    }
`;

function DropdownComponent({options, placeholder}) {
    return (
        <DropdownStyled
            options={options}
            placeholder={placeholder}
            classNamePrefix="react-select"
            components={{IndicatorSeparator:() => null}}
        />
    );
}

DropdownComponent.propTypes = {
    options: PropTypes.array,
    placeholder: PropTypes.string,
};

DropdownComponent.defaultProps = {
    options:  [
        {value: 1, label: 1},
        {value: 2, label: 2},
        {value: 3, label: 3},
        {value: 4, label: 4},
        {value: 5, label: 5},
    ],
    placeholder: '',
};

export default DropdownComponent;