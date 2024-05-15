import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <h1>Мой питомец</h1>
        <nav>
          <Link to="/activity-tracker"><button>Трекер активности</button></Link>
          <Link to="/vet-appointment"><button>Запись к ветеринару</button></Link>
          <Link to="/groomer-appointment"><button>Запись к грумеру</button></Link>
        </nav>
        <Routes>
          <Route path="/activity-tracker" element={<div>Activity Tracker Page</div>} />
          <Route path="/vet-appointment" element={<div>Vet Appointment Page</div>} />
          <Route path="/groomer-appointment" element={<div>Groomer Appointment Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
