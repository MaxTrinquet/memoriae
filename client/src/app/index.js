import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { IngredientList, IngredientInsert, IngredientsUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/ingredients/list" exact component={IngredientList}/>
        <Route path="/ingredients/create" exact component={IngredientInsert} />
        <Route path="/ingredients/update/:id" exact component={IngredientsUpdate} />
      </Switch>
    </Router>
  )
}

export default App
