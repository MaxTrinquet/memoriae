import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'
import ReactTable from "react-table-6";
import "react-table-6/react-table.css"

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateIngredient extends Component {
  updateUser = event => {
    event.preventDefault()
    window.location.href = `/ingredients/update/${this.props.id}`
  }
  render() {
    return <Update onClick={this.updateUser}>Update</Update>
  }
}

class DeleteIngredient extends Component {
  deleteUser = event => {
    event.preventDefault()
    if (
      window.confirm(
        `Do tou want to delete this ingredient ${this.props.id} permanently?`,
      )
    ) {
      api.deleteIngredientById(this.props.id)
      window.location.reload()
    }
  }
  render() {
    return <Delete onClick={this.deleteUser}>Delete</Delete>
  }
}


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
      },
      {
        Header: '',
        accessor: '',
        Cell: function (props) {
          return (
            <span>
              <DeleteIngredient id={props.original._id} />
            </span>
          )
        },
      },
      {
        Header: '',
        accessor: '',
        Cell: function (props) {
          return (
            <span>
              <UpdateIngredient id={props.original._id} />
            </span>
          )
        },
      },
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
