import React, { Component } from 'react';
import Select from 'react-select';

const options = [
  { value: 'Dublin', label: 'Dublin' },
  { value: 'Chicago', label: 'Chicago' },
  { value: 'Singapore', label: 'Singapore' },
  { value: 'Tokyo', label: 'Tokyo' },
  { value: 'Delhi', label: 'Delhi' },
  { value: 'Shanghai', label: 'Shanghai' },
  { value: 'Cairo', label: 'Cairo' },
  { value: 'Mumbai', label: 'Mumbai' },
  { value: 'Beiging', label: 'Beiging' },
  { value: 'Dhaka', label: 'Dhaka' },
  { value: 'Osaka', label: 'Osaka' },
  { value: 'Newyork', label: 'Newyork' },
  { value: 'BuenosAires', label: 'BuenosAires' },
  { value: 'Chongquing', label: 'Chongquing' },
  { value: 'Kolkata', label: 'Kolkata' },
  { value: 'Manilla', label: 'Manilla' },
  { value: 'Lagos', label: 'Lagos' },
];

export class SelectComponent2 extends Component {
  state = {
    text_object: null,
  };

  onChange = (setObject) => {    
    this.setState({ text_object: setObject });
    this.props.setValues(setObject.value);       
  };

  render() {
    const { text_object } = this.state;
    return (
      <div>
        <Select value={text_object} onChange={this.onChange} options={options}  />
      </div>
    );
  }
}

export default SelectComponent2;
