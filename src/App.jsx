
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './layout';
import DashboardPage from './pages/dashboard/DashboardPage';
import AssignmentPage from './features/ticket-assignments/Assignment';
import RequestsPage from './pages/ticket-topics/RequestsPage';


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
       <Route element={<Layout/>}>
         <Route index element={<DashboardPage />} />
        <Route path="ticket-topics">
          <Route index element={<RequestsPage />} />
          {/* <Route path=":city" element={<span>City</span>} />
          <Route path="Jakarta" element={<span>Persija</span>} /> */}
        </Route>
        <Route path="inbox">
          <Route index element={<p>Inbox</p>} />
        </Route>
        <Route path="ticket-assignment">
          <Route index element={<AssignmentPage />} />
        </Route>
       </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App;