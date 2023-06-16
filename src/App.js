import './App.css';
import {
    BrowserRouter as Router,
    createBrowserRouter,
    createRoutesFromElements,
    Link, Outlet,
    Route, RouterProvider,
    Routes
} from 'react-router-dom';
import {AllJobs} from "./components/AllJobs";
import {Job} from "./components/Job";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root/>}>
                <Route exact path="/api/all-jobs" element={<AllJobs/>}/>
                <Route exact path='/api/all-jobs/{id}' element={<Job id={8}/>}/>
            </Route>
        )
    );
    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

const Root = () => {
  return (
      <div>
          <div className="App-header">
              <h3>IN-DEMAND SKILLS IN TECH</h3>
          </div>

          <div className="container">
              <div className="menu">
                  <ul className="menu-list">
                      <li>
                          <Link to="/api/all-jobs">Jobs Summary</Link>
                      </li>
                      <li>
                          <Link to='/api/all-jobs/{id}'>Skills Ranking</Link>
                      </li>
                      <li>
                          <Link to='/api/all-jobs/{id}'>Salary Ranking</Link>
                      </li>
                  </ul>
              </div>

              <div className="job-content">
                  <Outlet/>
              </div>
          </div>

          <div className="App-footer">
              ---------FOOTER---------
          </div>

      </div>
  );
}

export default App;
