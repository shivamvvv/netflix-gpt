import { Provider } from "react-redux";
import { Body } from "./components/Body";
import appstore from "./Utils/appStore";

function App() {
  return (
    <div>
      <Provider store={appstore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
