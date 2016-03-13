import React from 'react';
import Form from './Form.react';

class Compose extends React.Component {
  render() {
    return (
      <div className="compose-overlay">
        <div className="compose">
          <Form formType="post" expanded={true}/>
        </div>
      </div>
    )
  }
}

export default Compose;
