import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Container, Row, Col } from 'reactstrap';

import './app.scss';
import Search from './search/Search';
import SearchMenu from './search/SearchMenu';

const App = ({ searchResults }) => {
  return (
    <>
      <Container fluid>
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

        <Row>
          <h3>Tickers list</h3>
        </Row>
      </Container>
    </>
  );
};

export default App;
