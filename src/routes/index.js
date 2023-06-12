import { Routes, Route,  BrowserRouter } from "react-router-dom";
import { routes } from "./routeList";
import { Navbar } from "@core";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {routes.map((item) => {
          return <Route path={item?.path} element={item?.component} />;
        })}
        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
