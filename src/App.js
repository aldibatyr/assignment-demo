import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import UserControls from './Components/UserControls/UserControls';
import MainSection from './Components/MainSection/MainSection';
import FullListSection from './Components/FullListSection/FullListSection';
import { Spinner } from 'react-bootstrap';
import GroupedViewSection from './Components/GroupedViewSection/GroupedViewSection';

function App() {

  const [fullList, setFullList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const url = 'https://rocky-oasis-22098.herokuapp.com/casinos'

  const fetchData = async () => {
    setError(false);
    setLoading(true);
    const res = await fetch(url);
    res
      .json()
      .then(res => setFullList(res))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <nav className='nav-wrapper'>
          <UserControls />
        </nav>
      </header>
      <div className='main-content'>
        <aside className='left-10'>
          <Dashboard />
        </aside>
        {error ? (
          <div className="error-message">
            <h4>We encountered error: {error}</h4>
          </div>
        ) : (
            loading ? (
              <div className="loading-container">
                <Spinner animation="border" role="status" >
                  <span className="sr-only">Loading ...</span>
                </Spinner>
              </div>
            ) : (

                <main className='main-90'>
                  <Route exact path='/' render={(props) => <MainSection {...props} list={fullList} />} />
                  <Route path='/list' render={(props) => <FullListSection {...props} list={fullList} />} />
                  <Route path='/grouped' render={(props) => <GroupedViewSection {...props} list={fullList}/>}/>
                </main>

              )
          )
        }
      </div>
    </div>
  );
}

export default App;
