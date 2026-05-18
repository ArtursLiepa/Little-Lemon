import "./App.css";
import LayoutComponent from "./Components/LayoutComponent/LayoutComponent";
import StartUp from "./Components/StartUpComponent/StartUpComponent";
import TableReservation from "./Components/TableReservation/TableReservation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutComponent />}>
          <Route index element={<StartUp />} />
          <Route path="tableReservation" element={<TableReservation />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
