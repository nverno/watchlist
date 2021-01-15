import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../index.scss';

const App = (props) => {
  return (
    <>
      <Container fluid>
        <Row>
          <h1>Panel</h1>
        </Row>

        <Row>
          <h3>list</h3>
        </Row>
      </Container>
    </>
  );
};

export default App;
