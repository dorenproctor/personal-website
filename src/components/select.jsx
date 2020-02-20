import React from "react"
import ReactSelect from 'react-select'

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    backgroundColor: 'gray',
  }),

  control: (provided, state) => ({
    ...provided,
    backgroundColor: 'lightgray'
  }),

  multiValue: (provided, state) => ({
    ...provided,
    backgroundColor: 'gray',
  }),

  multiValueLabel: (provided, state) => ({
    ...provided,
    color: 'lightgray'
  }),

  option: (provided, state) => ({
    ...provided,
    color: 'lightgray',
    borderBottom: 'lightgray 1px solid',
    backgroundColor: state.isFocused ? 'darkgray' : state.isSelected ? 'slategray' : 'gray',
  }),

  multiValueRemove: (provided, state) => ({
    ...provided,
    ':hover': {
      backgroundColor: 'darkgray',
      color: 'gray'
    },
  }),
}

//closeMenuOnSelect={false} isMulti
const Select = props => <ReactSelect className='centered' styles={customStyles} {...props} />

export default Select