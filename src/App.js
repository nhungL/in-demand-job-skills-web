import logo from './logo.svg';
import './App.css';
import { useQuery, gql } from '@apollo/client';

const GET_ALL_JOBS = gql`
  query getAllJobs {
    getAllJobs{
        id
        title
        skills
    }
  }
`;

function DisplayJobs() {
  const { loading, error, data } = useQuery(GET_ALL_JOBS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.getAllJobs.map((job) => (
    <div key={job.id}>
      <h3>{job.title}</h3>
      <br />
      <p>Skills: {job.skills.join(', ')}</p>
      <br />
    </div>
  ));
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>My first Apollo app 🚀</h2>
        </a>
        <DisplayJobs />
      </header>
    </div>
  );
}

export default App;
