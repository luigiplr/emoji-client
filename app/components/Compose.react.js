import React from 'react';
import Form from './Form.react';

class Compose extends React.Component {
  render() {
    return (
      <div className="compose">
        <Form formType="post" />
      </div>
    )
  }
}

export default Compose;
