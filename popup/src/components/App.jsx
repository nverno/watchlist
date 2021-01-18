import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Container, Row } from 'reactstrap';

import './app.scss';
import Search from './search/Search';
import SearchMenu from './search/SearchMenu';
import Lists from './lists/Lists';
const Wrapper = process.env.REACT_APP_STANDALONE
  ? require('./StandAlone').default
  : null;

const App = () => {
  const panel = (
    <>
      <Row>
        <section className="search-section">
          <header>
            <Search />

            <div className="cancel-button">
              <AiOutlineClose
                size={24}
                className="cancel-button-icon"
                color="gray"
              />
            </div>
          </header>

          <SearchMenu />
        </section>
      </Row>

      <Row>{/* <h3>Stock charttt</h3> */}</Row>

      <Row>
        <section className="lists-section">
          <Lists />
        </section>
      </Row>
    </>
  );

  return (
    <Container fluid>
      {process.env.REACT_APP_STANDALONE ? <Wrapper>{panel}</Wrapper> : panel}
    </Container>
  );
};

export default App;
