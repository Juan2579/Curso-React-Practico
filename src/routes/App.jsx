import React from 'react'
import { Switch, HashRouter, Route,  } from 'react-router-dom'
import { Header } from '../containers/Header'
import { HomePage } from '../pages/HomePage'
import { NotFound } from '../pages/NotFound'
import { Nav } from "../components/Nav"

export const App = () => {
  return (
    <HashRouter>
      <Header>
        <Nav />
      </Header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </HashRouter>
  )
}