
import { BrowserRouter, Route, Routes } from 'react-router'
import DashboardPage from './pages/dashboard/DashboardPage'
import Requests from './components/TicketTopics/Requests';
import AssignmentPage from './components/TicketAssignment/AssignmentPage';
import Layout from './components/layout';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
       <Route element={<Layout/>}>
         <Route index element={<DashboardPage />} />
        <Route path="Ticket-Topics">
          <Route index element={<Requests />} />
          {/* <Route path=":city" element={<span>City</span>} />
          <Route path="Jakarta" element={<span>Persija</span>} /> */}
        </Route>
        <Route path="inbox">
          <Route index element={<p>Inbox</p>} />
        </Route>
        <Route path="Ticket-Assignment">
          <Route index element={<AssignmentPage />} />
        </Route>
       </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App;