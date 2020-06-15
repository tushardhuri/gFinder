import React, { Component } from 'react';
import Form from 'react-jsonschema-form';
import SelectComponent from './SelectComponent';

export class FormComponent extends Component {
  render() {
    const schema = {
      type: 'string',
    };

    const uiSchema = {
      'ui:widget': SelectComponent,
    };

    return <Form schema={schema} uiSchema={uiSchema} />;
  }
}

export default FormComponent;
