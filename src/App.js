import React from 'react';
// import logo from './logo.svg';
import './style/App.scss';
import { Routes, Route, Navigate} from 'react-router-dom';
import {AppContext} from './Context/AppContext';
import {useInitialState} from './hooks/useInitialState';

import {Login} from './pages/Login/Login';
import {RecoveryPassword} from './pages/RecoveryPassword/RecoveryPassword';
import {NotFound} from './pages/NotFound/NotFound';
import {Home} from './pages/Home/Home';
import {CreateAccount} from './pages/CreateAccount/CreateAccount';
import {MyAccount} from './pages/MyAccount/MyAccount';
import {EditMyAccount} from './pages/EditMyAccount/EditMyAccount';
import {SendEmailRecovery} from './pages/SendEmailRecovery/SendEmailRecovery';
import {NewPassword} from './pages/NewPassword/NewPassword';

import {LoggedMenu} from './Components/LoggedMenu/LoggedMenu';
import {ProductGrid} from './Components/ProductGrid/ProductGrid';
import {Grid} from './templates/Grid/Grid';
import {ShoppingCart} from './templates/ShoppingCart/ShoppingCart';



function App() {
  const initialState = useInitialState();
  
  return (
    <React.Fragment>
      <AppContext.Provider value={initialState}>
        <Routes>

          {/* Complementos */}
          <Route path="/product-grid" element={<ProductGrid />} />
          <Route path="/grid" element={<Grid />} />
          <Route path="/loggedMenu" element={<LoggedMenu />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />}/>

          {/* Templates */}

          {/* Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recovery-password" element={<RecoveryPassword />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/edit-my-account" element={<EditMyAccount />} />
          <Route path="/send-email-recovery" element={<SendEmailRecovery />} />
          <Route path="/new-password" element={<NewPassword />} />

          <Route path="/not-found" element={<NotFound />} /> {/*Asi manejamos los 404*/}
          <Route path="*" element={<Navigate to='not-found' />} />
        </Routes>
      </AppContext.Provider>
      
    </React.Fragment>
    
  );
}

export default App;
