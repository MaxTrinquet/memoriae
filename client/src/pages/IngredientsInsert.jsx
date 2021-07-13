import React, { Component } from 'react'
import api from '../conn'

import styled from 'styled-components'

const Title = styled.h1.attrs({
  className: 'h1',
})``

const Wrapper = styled.div.attrs({
  className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
  className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
  className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
  className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class IngredientsInsert extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      quantity: '',
      measure : '',
      consomable: '',
    }
  }

  handleChangeInputName = async event => {
    const name = event.target.value
    this.setState({ name })
  }

  handleChangeInputQuantity = async event => {
    const quantity = event.target.validity.valid
      ? event.target.value
      : this.state.quantity

    this.setState({ quantity })
  }

  handleChangeInputMeasure = async event => {
    const measure = event.target.value
    this.setState({ measure })
  }

  handleChangeInputConsomable = async event => {
    const consomable = event.target.value
    this.setState({ consomable })
  }

  handleIncludeIngredient = async () => {
    const { name, quantity, measure, consomable } = this.state
    const payload = { name, quantity, measure, consomable }

    await api.insertIngredient(payload).then(res => {
      window.alert(`Ingredient inserted successfully`)
      this.setState({
        name: '',
        quantity: '',
        measure: '',
        consomable: '',
      })
    })
  }

  render() {
    const { name, quantity, measure, consomable } = this.state
    return (
      <Wrapper>
        <Title>Create Ingredient</Title>

        <Label>Name: </Label>
        <InputText
          type="text"
          value={name}
          onChange={this.handleChangeInputName}
        />

        <Label>Quantity: </Label>
        <InputText
          type="number"
          lang="en-US"
          pattern="[0-9]+([,\.][0-9]+)?"
          value={quantity}
          onChange={this.handleChangeInputQuantity}
        />

        <Label>Measure: </Label>
        <InputText
          type="text"
          value={measure}
          onChange={this.handleChangeInputMeasure}
        />

        <Label>Consomable: </Label>
        <InputText
          type="text"
          value={consomable}
          onChange={this.handleChangeInputConsomable}
        />

        <Button onClick={this.handleIncludeIngredient}>Add Ingredient</Button>
        <CancelButton href={'/ingredients/list'}>Cancel</CancelButton>
      </Wrapper>
    )
  }
}

export default IngredientsInsert
