import { Outlet } from "react-router";
import Layout from "./components/layout/Layout";
import PlanProvider from "./providers/PlanProvider";

const App = () => {
  return (
    <PlanProvider>
      <Layout>
        <Outlet />
      </Layout>
    </PlanProvider>
  );
};

export default App;