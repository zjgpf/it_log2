import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import SearchBar from './components/layouts/SearchBar';
import BtnsModal from './components/layouts/BtnsModal';
import Alerts from './components/layouts/Alerts';
import Logs from './components/logs/Logs';
import ModalAddEditLog from './components/logs/ModalAddEditLog';
import ModalListTechs from './components/techs/ModalListTechs';
import ModalAddTech from './components/techs/ModalAddTech';

function App() {
  return (
    <Provider store={store} >
      <Fragment>
        <Alerts />
        <SearchBar />
        <Logs />
        <BtnsModal />
        <ModalAddEditLog />
        <ModalListTechs />
        <ModalAddTech />
      </Fragment>
    </Provider>
  );
}

export default App;
