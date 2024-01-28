import 'bootstrap/dist/css/bootstrap.min.css';
import Header
  from "./components/Header";
import CostView
  from "./components/CostView";
function App() {
  return (
    <>
      <Header procedureId="LT403" />
      <CostView state="California" stateCode="CA" procedureId="LT403" />
    </>
  );
}

export default App;
