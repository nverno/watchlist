import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Container, Row, Col } from 'reactstrap';

import './app.scss';
import Search from './search/Search';
import SearchMenu from './search/SearchMenu';
import WatchList from './watchlist/WatchList';

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
          <h3>Stock chart ???</h3>
        </Row>

        <Row>
          <h3>WatchList</h3>
          <WatchList />
        </Row>
      </Container>
    </>
  );
};

export default App;
