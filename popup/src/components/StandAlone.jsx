import React from 'react';
import { Row, Col } from 'reactstrap';
import styles from './standalone.module.scss';

const StandAlone = (props) => {
  return (
    <Row>
      <Col md={8} className={styles.body}>
        <div style={{ margin: '0 auto' }}>
          <p>Some page with the sidebar opened at the right.</p>
          <br />
          <p>Need to add iex API key to have access to stock data.</p>
        </div>
      </Col>
      <Col md={4}>
        {/* <div className={styles.body} style={{height: '20px'}}/> */}
        {props.children}
      </Col>
    </Row>
  );
};

export default StandAlone;
