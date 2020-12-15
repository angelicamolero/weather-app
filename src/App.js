import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {

  const [search, saveSearch] = useState ({
    city: '',
    country: ''
  });

  const [consult, saveConsult] = useState(false);
  const [result, saveResult] = useState({});

  const { city, country } = search;

  useEffect(() => {
    const getAPI = async () => {

      if (consult) {
        const appId = '65d6f989bca14885b264342f5cd052db';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
  
        const answer = await fetch(url);
        const result = await answer.json();
  
        saveResult(result);
      }
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
