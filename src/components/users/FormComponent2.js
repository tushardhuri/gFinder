import React, { Component } from 'react';
import Form from 'react-jsonschema-form';
import SelectComponent2 from './SelectComponent2';

export class FormComponent2 extends Component {
  state = {
    form_object: '',
  };
  setValues = async (text) => {
    this.setState({ form_object: text });
    console.log(text);
  };

  render() {
    const MyCustomWidget = (props) => {
      return <SelectComponent2 setValues={this.setValues} />;
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

export default FormComponent2;
