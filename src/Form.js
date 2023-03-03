import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class FormComponent extends React.Component {

  render() {
    return (
      <>
        <Form onSubmit={this.props.hornCount}>
          <Form.Group controlId="filterHorns">
            <Form.Label>
              Select Your Amount of Horns
            </Form.Label>
            <Form.Select name="select" onChange={this.props.select}>
              <option value="all">All Horns</option>
              <option value="1">1 Horn</option>
              <option value="2">2 Horns</option>
              <option value="3">3 Horns</option>
              <option value="4">Too Much Horns Going on Here</option>
            </Form.Select>
            <Button type="submit">Get Horny</Button>
          </Form.Group>
        </Form>
      </>
    )
  }
}

export default FormComponent;
