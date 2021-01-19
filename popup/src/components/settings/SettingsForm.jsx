import React from 'react';
import { connect } from 'react-redux';
import { Form, FormText, Label, Input, Button } from 'reactstrap';

import styles from './settings.module.scss';
import { receiveApiKeys } from '../../actions/settings_actions';

const mapStateToProps = (state) => ({
  apiKeys: state.settings.keys,
});

const mapDispatchToProps = (dispatch) => ({
  receiveApiKeys: (keys) => dispatch(receiveApiKeys(keys)),
});

const SettingsForm = ({ apiKeys, receiveApiKeys }) => {
  const { iex, av } = apiKeys;
  const [iexKey, setIexKey] = React.useState(iex || '');
  const [avKey, setAvKey] = React.useState(av || '');
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (iexKey.length === 0 && avKey.length === 0) return;
    console.log('here');
    let keys = {};
    if (iexKey.length) keys['iex'] = iexKey;
    if (avKey.length) keys['av'] = avKey;
    receiveApiKeys({ keys });
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label for="iexKey" className={!iex ? 'negative' : 'positive'}>
        Iex API key
      </Label>
      <Input
        id="iexKey"
        type="text"
        className="settings-input"
        value={iexKey}
        placeholder="Iex API key"
        required
        onChange={(e) => setIexKey(e.currentTarget.value)}
      />
      <FormText>
        <p>
          Need to add iex API key to have access to stock data. Sign up{' '}
          <a target="_blank" href="https://iexcloud.io/">
            here
          </a>
        </p>
      </FormText>

      <Label for="avKey" className={!avKey ? 'negative' : 'positive'}>
        Alphavantage API key
      </Label>
      <Input
        id="avKey"
        type="text"
        className="settings-input"
        value={avKey}
        placeholder="Alphavantage API key"
        onChange={(e) => setAvKey(e.currentTarget.value)}
      />
      <FormText>
        <p>
          <b>Note</b>: this isn't currently required. Sign up for a free
          Alphavantage key
          <a target="_blank" href="https://iexcloud.io/">
            {' '}
            here
          </a>
        </p>
      </FormText>

      <Button>Submit</Button>

      {success && (
        <div className={styles.success}>
          <p className="positive">Settings Saved</p>
        </div>
      )}
    </Form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsForm);
