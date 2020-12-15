import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {

  const [search, saveSearch] = useState ({
    city: '',
    country: ''
  });

  const [consult, saveConsult] = useState(false);

  const { city, country } = search;

  useEffect(() => {
    const getAPI = async () => {
      http://api.openweathermap.org/data/2.5/weather?q=guadalajara,mexico&appid=65d6f989bca14885b264342f5cd052db
    }
    getAPI();
  }, [consult]);

  return (
    <Fragment>
      <Header
        titulo="Weather React App"
      />
      <div className="container-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                saveSearch={saveSearch}
                saveConsult={saveConsult}
              />
            </div>
            <div className="col m6 s12">
              2
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
