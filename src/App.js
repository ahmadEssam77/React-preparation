import './App.css';
import Layout from './components/Layout';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import QuestionOne from './components/QuestionOne';
import QuestionTwo from './components/QuestionTwo';
import QuestionThree from './components/QuestionThree';


function App() {
  return (
    <div className="App">
      <Router>
            <Layout /> {/* out of routes dynamic pagination */}
        <Routes>
            {/* <Route exact path="/" element={<Layout />} />*/} {/* inside routes so pagination, go to another page */}
            <Route exact path="/1" element={<QuestionOne />} />
            <Route exact path="/2" element={<QuestionTwo />} />
            <Route exact path="/3" element={<QuestionThree />} />
        </Routes>

        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link> */}
      </Router>
    </div>
  );
}

export default App;
