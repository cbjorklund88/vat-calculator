import React from "react"
import { exVatToIncVat, incVatToExtVat } from "../calculations"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      vatRate: 25,
      incVat: 0,
      exVat: 0,
      vatSum: 0
    }
  }

handleInput = (e) => {
  this.setState({
    vatRate: parseInt(e.target.value),
    incVat: 0,
    exVat: 0
  })
}

handleInputIncVat = (e) => {
  this.setState({
    exVat: incVatToExtVat(this.state.vatRate, parseInt(e.target.value)),
    incVat: parseInt(e.target.value),
    vatSum: parseInt(e.target.value)
  })
}

handleInputExVat = (e) => {
  this.setState({
    incVat: exVatToIncVat(this.state.vatRate, parseInt(e.target.value)),
    exVat: parseInt(e.target.value),
    vatSum: parseInt(e.target.value)
  })
}

render() {
  return (
    <div>
      <h1>Momsuträknare</h1>
      <form>
        <div>
          <label htmlFor="25percent">25%</label>
          <input
            onChange={this.handleInput}
            id="25percent"
            type="radio"
            value="25"
            checked={this.state.vatRate === 25} />
        </div>

        <div>
          <label htmlFor="12percent">12%</label>
          <input
            onChange={this.handleInput}
            id="12percent"
            type="radio"
            value="12"
            checked={this.state.vatRate === 12} />
        </div>

        <div>
          <label htmlFor="6percent">6%</label>
          <input
            onChange={this.handleInput}
            id="6percent"
            type="radio"
            value="6"
            checked={this.state.vatRate === 6} />
        </div>
        <div>
        Inklusive moms (kr):
          <input
            type="number"
            name="incVat"
            onChange={this.handleInputIncVat}
            value={this.state.incVat} />
        </div>
        <div>
        Exclusive moms (kr):
          <input
            type="number"
            name="exVat"
            onChange={this.handleInputExVat}
            value={(this.state.exVat).toFixed(2)} />
        </div>
        <div>
        Momssumma (kr):
          <input
            type="number"
            name="vatSum"
            value={(this.state.incVat - this.state.exVat).toFixed(2)} />
        </div>
      </form>
    </div>
  )
}

}

export default App
