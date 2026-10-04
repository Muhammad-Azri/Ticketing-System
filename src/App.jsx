import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layouts/main/main";
import DashboardPage from "./pages/dashboard/DashboardPage";
import RequestsPage from "./pages/ticket-topics/RequestsPage";
import InboxPage from "./pages/inbox/InboxPage";
import AssignmentPage from "./pages/ticket-assignment/AssignmentPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="ticket-topics">
            <Route index element={<RequestsPage />} />
            {/* <Route path=":city" element={<span>City</span>} />
          <Route path="Jakarta" element={<span>Persija</span>} /> */}
          </Route>
          <Route path="inbox">
            <Route index element={<InboxPage />} />
          </Route>
          <Route path="ticket-assignment">
            <Route index element={<AssignmentPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
