import { Provider } from "react-redux";

import { store } from "./redux/store";
import MainPage from "./pages/MainPage";

import "./styles/reset.css";
import "./styles/App.css";

function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default App;
