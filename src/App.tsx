import { Outlet } from "react-router";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <div>
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
};

export default App;