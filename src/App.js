import "./App.css";

import Products from "./components/Products";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Products />
        <Cart />
      </Provider>
    </div>
  );
}

export default App;
