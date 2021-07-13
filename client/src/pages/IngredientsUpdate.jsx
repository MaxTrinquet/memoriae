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

class IngredientsUpdate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.id,
        name: '',
        quantity: '',
        measure: '',
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

  handleUpdateIngredient = async () => {
    const { id, name, quantity, measure, consomable } = this.state
    const payload = { name, quantity, measure, consomable}

    await api.updateIngredientById(id, payload).then(res => {
      window.alert(`Ingredient updated successfully`)
      console.log(id)
      this.setState({
        name: '',
        quantity: '',
        measure: '',
        consomable: '',
      })
    })
  }

  componentDidMount = async () => {
    const { id } = this.state
    const ingredient = await api.getIngredientById(id)
    console.log(id)

    this.setState({
      name: ingredient.data?.data.name,
      quantity: ingredient.data?.data.quantity,
      measure: ingredient.data?.data.measure,
      consomable: ingredient.data?.data.consomable
    })
  }

  render() {
    const { name, quantity, consomable, measure } = this.state
    return (
      <Wrapper>
        <Title>Create Ingredient</Title>

        <Label>Name: </Label>
        <InputText
          type="text"
          value={name}
          onChange={this.handleChangeInputName}
        />

        <Label>Quantity </Label>
        <InputText
          type="number"
          pattern="[0-9]+([,\.][0-9]+)?"
          value={quantity}
          onChange={this.handleChangeInputQuantity}
        />

        <Label>Measure </Label>
        <InputText
          type="text"
          value={measure}
          onChange={this.handleChangeInputMeasure}
        />

        <Label>Consomable </Label>
        <InputText
          type="text"
          value={consomable}
          onChange={this.handleChangeInputConsomable}
        />

        <Button onClick={this.handleUpdateIngredient}>Update Ingredient</Button>
        <CancelButton href={'/ingredients/list'}>Cancel</CancelButton>
      </Wrapper>
    )
  }
}

export default IngredientsUpdate
