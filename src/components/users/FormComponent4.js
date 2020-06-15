import React, { Component } from 'react';
import Form from 'react-jsonschema-form';
import Select from 'react-select';

export class FormComponent4 extends Component {
  state = {
    city_object:'',
    name_object: '',
  };

  selectChange = (setObject) => {
    this.setState({ city_object: setObject });
  };

  formChange = (e) => {
    this.setState({ name_object: e.formData.name });
  };

  formSubmit = (e) => {
    console.log(e.formData);
  };

  render() {
    const { city_object, name_object } = this.state;

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
      return <Select value={city_object} onChange={this.selectChange} options={options} />;
    };

    const widgets = {
      myCustomWidget: MyCustomWidget,
    };

    const schema = {
      title: 'Test Form',
      type: 'object',
      properties: {
        name: { type: 'string' },
        city: { type: 'string' },
      },
    };

    const uiSchema = {
      city: {
        'ui:widget': 'myCustomWidget',
      },
    };

    const formData = {
      name: name_object,
      city: city_object.value,
    };

    return <Form schema={schema} uiSchema={uiSchema} widgets={widgets} onChange={this.formChange} formData={formData} onSubmit={this.formSubmit} />;
  }
}

export default FormComponent4;
