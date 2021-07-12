import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'
import ReactTable from "react-table-6";
import "react-table-6/react-table.css"

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class IngredientsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredients: [],
      columns: [],
      isLoading: false,
    }
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true })

    await api.getAllIngredients().then(ingredients => {
      this.setState({
        ingredients: ingredients.data,
        isLoading: false,
      })
    })
  }

  render() {
    const { ingredients, isLoading } = this.state
    console.log('TCL: IngredientsList -> render -> ingredients', ingredients)

    const columns = [
      {
        Header: 'Name',
        accessor: 'name',
        filterable: true,
      },
      {
        Header: 'Quantity',
        accessor: 'quantity',
        filterable: true,
      },
      {
        Header: 'Measure',
        accessor: 'measure',
      },
      {
        Header: 'Consomable',
        accessor: 'consomable',
        filterable: true,
      }
    ]
    console.log(ingredients)
    let showTable = true
    if (!ingredients) {
      showTable = false
    }

    return (
      <Wrapper>
        {showTable && (
          <ReactTable
            data={ingredients}
            columns={columns}
            loading={isLoading}
            defaultPageSize={10}
            showPageSizeOptions={true}
            minRows={0}
          />
        )}
      </Wrapper>
    )
  }
}

export default IngredientsList
