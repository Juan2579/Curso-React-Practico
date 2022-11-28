import React from 'react'
import { Switch, HashRouter, Route } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { CreateAccountPage } from '../pages/CreateAccountPage'
import { NotFound } from '../pages/NotFound'
import { Header } from '../containers/Header'
import { Nav } from '../components/Nav'
import { AppProvider } from '../context/AppContext'
import { CartPage } from '../pages/CartPage'

export const App = () => {
  return (
    <AppProvider>
      <HashRouter>
        <Route exact path={["/", "/products"]}>
          <>
            <Header>
              <Nav />
            </Header>
          </>
        </Route>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/profile" component={LoginPage} />
          <Route exact path="/profile/create-account" component={CreateAccountPage} />
          <Route exact path="/cart" component={CartPage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </HashRouter>
    </AppProvider>
    
  )
}