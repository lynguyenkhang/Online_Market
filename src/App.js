import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import AuthRoute from './features/Auth/AuthRoute';
import MarketRoute from './features/Market/MarketRoute';
import ProductRoute from './features/Product/ProductRoute';
import UserRoute from './features/User/UserRoute';
import AdminRoute from './features/Admin/AdminRoute';


const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: '#035597',
    },
    secondary: {
      main: '#fad037',
    },
  },
  typography: {
    subtitle1: {
      // fontWeight: 500,
    },
    subtitle2: {
      fontWeight: 400,
      // color: '#888',
      fontSize: '1rem',
    },
    h5: {
      fontWeight: 500,
    }
  }

})




function App() {

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Switch>
            <AuthRoute exact path="/" />

            <UserRoute path="/user" />

            <MarketRoute path="/market" />

            <ProductRoute path="/product" />

            <AdminRoute path="/admin" />


            <Route path="/" > <h1>NOT FOUND 404</h1> </Route>

          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
