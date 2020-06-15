import React, { Component } from 'react';
import Form from 'react-jsonschema-form';
import Select from 'react-select';

export class FormComponent3 extends Component {
  state = {
    form_object: '',
  };
  
  onChange = (setObject) => {    
    this.setState({ form_object: setObject.value });    
    console.log(setObject.value);
  };

  render() {
    const { text_object } = this.state;

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

    const MyCustomWidget = (props) => {
      return <Select value={text_object} onChange={this.onChange} options={options}  />;
    };

    const widgets = {
        myCustomWidget: MyCustomWidget
      };

    const schema = {
      type: 'string',
    };

    const uiSchema = {
      'ui:widget': 'myCustomWidget',
    };

    return <Form schema={schema} uiSchema={uiSchema} widgets={widgets}  />;
  }
}

export default FormComponent3;
