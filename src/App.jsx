import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layouts/main/Layout";
import DashboardPage from "./pages/dashboard/DashboardPage";
import RequestsPage from "./pages/ticket-topics/RequestsPage";
import AssignmentPage from "./pages/ticket-assignment/AssignmentPage";
import InboxPage from "./pages/inbox/InboxPage";
import Login from "./layouts/Login";

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
        <Route element={<Login />}>
          <Route path="login"></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
