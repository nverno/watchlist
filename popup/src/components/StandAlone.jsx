import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'reactstrap';

import styles from './standalone.module.scss';
import SettingsForm from './settings/SettingsForm';

const mapStateToProps = (state) => ({
  settings: state.settings,
});

const StandAlone = ({ settings, ...props }) => {
  const [showControls, setShowControls] = React.useState(false);
  const {
    keys: { iex },
  } = settings;

  const toggle = (
    <Button onClick={() => setShowControls(!showControls)}>
      {showControls ? 'Hide Settings' : 'Change Settings'}
    </Button>
  );

  return (
    <Row className={styles.body}>
      <Col md={8} className={styles.main}>
        <div>
          <p>Some page with the sidebar opened at the right.</p>
          <br />
          <div className={styles.settings}>
            <div>{toggle}</div>
            {(!iex || showControls) && <SettingsForm />}
          </div>
        </div>
      </Col>
      <Col md={4} className={styles.panel}>
        {/* <div className={styles.body} style={{height: '20px'}}/> */}
        {props.children}
      </Col>
    </Row>
  );
};

export default connect(mapStateToProps)(StandAlone);
