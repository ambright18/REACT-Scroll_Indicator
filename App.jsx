import "./App.css";
import ScrollIndicator from "./components/Scroll_Indicator/Scroll";
function App() {
  return (
    <>
    <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} /> {/* Dummy Data courtesy of dummyjson.com */}
    </>
  );
}

export default App;
