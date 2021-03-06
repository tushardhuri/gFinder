import React, { Component } from 'react';
import Select from 'react-select';

  
export class Typeahead extends Component {
  state = {
    selectedOption: null,
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () => console.log(`Option selected:`, this.state.selectedOption));
  };
  render() {
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ];

    const { selectedOption } = this.state;

    return <Select value={selectedOption} onChange={this.handleChange} options={options} />;
  }
}

export default Typeahead;
