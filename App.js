import React, { PureComponent } from "react";
import { StatusBar, AsyncStorage } from "react-native";
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import Routes from "./src/Routes";
import { createStore} from "redux";
import { Provider } from "react-redux";
import appReducer from "./src/redux/reducers/index";

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}
 
const persistedReducer = persistReducer(persistConfig, appReducer);

const store = createStore(persistedReducer);

let persistor = persistStore(store)

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    );
  }
}
