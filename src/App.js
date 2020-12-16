import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import Error from './components/Error';


function App() {

  const [search, saveSearch] = useState ({
    city: '',
    country: ''
  });

  const [consult, saveConsult] = useState(false);
  const [result, saveResult] = useState({});
  const [error, saveError] = useState(false);

  const { city, country } = search;

  useEffect(() => {
    const getAPI = async () => {

      if (consult) {
        const appId = '65d6f989bca14885b264342f5cd052db';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
  
        const answer = await fetch(url);
        const result = await answer.json();
  
        saveResult(result);
        saveConsult(false);

        // Check if we have correct results
        if (result.cod === "404") {
          saveError(true);
        } else {
          saveError(false);
        }


      }
    }
    getAPI();
  }, [consult]);

  let component;
  if(error) {
    component = <Error message="There's no results"/>
  } else {
    component = <Weather
                result = {result}
                />
  }


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
              {component}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
