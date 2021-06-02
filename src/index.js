import * as React from "react";
import { View, Text } from "react-native";
import Home from "./screens/Home/Home";
import { store } from "./config/store";
import { Provider } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Home />
        </View>
      </Provider>

    );
  }
}

export default App;
