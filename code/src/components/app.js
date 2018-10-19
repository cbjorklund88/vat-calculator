import React from "react"
import { exVatToIncVat, incVatToExtVat } from "../calculations"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      vatRate: 25,
      incVat: 0,
      exVat: 0
    }
  }

handleInput = (e) => {
  const vat = parseInt(e.target.value)
  const { incVat } = this.state
  const exVat = incVatToExtVat(vat, incVat)

  this.setState({
    vatRate: vat,
    exVat
  })
}

handleInputIncVat = (e) => {
  this.setState({
    exVat: incVatToExtVat(this.state.vatRate, parseInt(e.target.value)),
    incVat: parseInt(e.target.value)
  })
}

handleInputExVat = (e) => {
  this.setState({
    incVat: exVatToIncVat(this.state.vatRate, parseInt(e.target.value)),
    exVat: parseInt(e.target.value),
  })
}

render() {
  return (
    <div className="wrapper">
      <h1>Momsuträknare</h1>
      <form>
        <div className="percentege-container">
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
        </div>
        <div className="inputs-container">
          <div className="inc-vat-container">
        Inklusive moms (kr):
            <input
              type="number"
              name="incVat"
              onChange={this.handleInputIncVat}
              value={this.state.incVat} />
          </div>
          <div className="ex-vat-container">
        Exclusive moms (kr):
            <input
              type="number"
              name="exVat"
              onChange={this.handleInputExVat}
              value={(this.state.exVat).toFixed(2)} />
          </div>
          <div className="sum-vat-container">
          Momssumma (kr):
            <input
              type="number"
              name="vatSum"
              value={(this.state.incVat - this.state.exVat).toFixed(2)} />
          </div>
        </div>
      </form>
    </div>
  )
}

}

export default App
