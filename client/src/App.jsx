import Aside from "./components/aside/Aside";
import Header from "./components/header/Header";
import Product from "./components/main/Product";

function App() {
  return (
    <div className="flex justify-between pt-5 max-w-[1500px] mx-auto gap-4 ">
      <div className="w-1/4 max-h-[calc(100vh-_20px)]">
        <Header />
      </div>

      <div className="w-2/4 max-h-[calc(100vh-_20px)] overflow-x-auto">
        <Product />
      </div>
      <div className="w-1/4">
        <Aside />
      </div>
    </div>
  );
}

export default App;
