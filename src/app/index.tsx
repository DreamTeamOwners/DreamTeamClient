import React from 'react';
import { Pages } from '../pages';
import { Header } from './header';
import './styles/global-styles.css';

// import { Routing } from "pages";

// import { withProviders } from "./providers";

// I don't like idea of re-exporting scss that's weird IMHO that's why I'd go to styles folder
// import './styles/index.scss';

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <Pages />
    </>
  );
};
export default App;
// export default withProviders(App);
