import React from "react"
import Select from 'react-select'

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
    backgroundColor: state.isFocused ? 'darkgray' : provided.backgroundColor,
  }),

  multiValueRemove: (provided, state) => ({
    ...provided,
    ':hover': {
      backgroundColor: 'darkgray',
      color: 'gray'
    },
  }),
}

const Multiselect = props => <Select className='centered' styles={customStyles} isMulti closeMenuOnSelect={false} {...props} />

export default Multiselect