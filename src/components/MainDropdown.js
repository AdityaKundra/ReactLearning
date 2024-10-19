import React, { Component } from 'react'

class MainDropdown extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        countries: [
            {
              name: "Germany",
              cities: ["Duesseldorf", "Leinfelden-Echterdingen", "Eschborn"]
            },
            { name: "Spain", cities: ["Barcelona"] },
    
            { name: "USA", cities: ["Downers Grove"] },
            {
              name: "Mexico",
              cities: ["Puebla"]
            },
            {
              name: "India",
              cities: ["Delhi", "Kolkata", "Mumbai", "Bangalore"]
            }
          ],
          cities:[]
      }
    }

    countryHandler = (elm)=>{
        this.setState({
            cities: this.state.countries.find((val)=>{return  val.name === elm.target.value}).cities
            
        })
    }

  render() {
    return (
      <div>
        <form>
            <div className='country'>
                <label>Select Country</label>
                <select onChange={this.countryHandler}>
                    {this.state.countries.map((e, idx) => {return <option key={idx}>{e.name}</option>})}
                </select>
            </div>
            <div className='cities'>
                <label>Select State</label>
                <select>
                {this.state.cities.map((e, key) => {return <option key={key}>{e}</option>;})}
                </select>
            </div>
        </form>
      </div>
    )
  }
}

export default MainDropdown