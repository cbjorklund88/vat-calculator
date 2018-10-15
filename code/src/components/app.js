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

handleRadioChange = (e) => {
  this.setState({
    vatRate: e.target.value
  })
}

handleInputIncVat = (e) => {
  this.setState({
    incVat: exVatToIncVat(this.state.vatRate, parseInt(e.target.value))
  })
}

handleInputExVat = (e) => {
  this.setState({
    exVat: parseInt(e.target.value)
  })
}



render() {
  return (
    <div>
      <div className="App">
        <p>Example calculating ex vat for 1000kr inc vat @ 25%: {incVatToExtVat(25, 1000)}</p>
        <p>Example calculating inc vat for 600kr ex vat @ 6%: {exVatToIncVat(6, 600)}</p>
      </div>
      <form>
        <div>
          <label htmlFor="option1">25%</label>
          <input
            id="option1"
            type="radio"
            value="25%"
            checked={this.state.vatRate === "25%"}
            onChange={this.handleRadioChange} />
        </div>

        <div>
          <label htmlFor="option2">12%</label>
          <input
            id="option2"
            type="radio"
            value="12%"
            checked={this.state.vatRate === "12%"}
            onChange={this.handleRadioChange} />
        </div>

        <div>
          <label htmlFor="option3">6%</label>
          <input
            id="option3"
            type="radio"
            value="6%"
            checked={this.state.vatRate === "6%"}
            onChange={this.handleRadioChange} />
        </div>
        <div>
        Inklusive moms (kr):
          <input
            type="text"
            name="incVat"
            onChange={this.handleInputIncVat}
            value={this.state.incVat} />
        </div>
        <div>
        Exclusive moms (kr):
          <input
            type="text"
            name="exVat"
            onChange={this.handleInputExVat}
            value={this.state.exVat} />
        </div>
      </form>
    </div>
    )
  }

}

export default App
