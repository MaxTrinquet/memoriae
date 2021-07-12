import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { IngredientsList, IngredientsInsert, IngredientsUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/ingredients/list" exact component={IngredientsList}/>
        <Route path="/ingredients/create" exact component={IngredientsInsert} />
        <Route path="/ingredients/update/:id" exact component={IngredientsUpdate} />
      </Switch>
    </Router>
  )
}

export default App
