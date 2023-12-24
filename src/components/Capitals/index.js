import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {isCapitalId: countryAndCapitalsList[0].id}

  onChange = event => {
    this.setState({isCapitalId: event.target.value})
  }

  getCountry = () => {
    const {isCapitalId} = this.state
    const isActiveCapitalAndCountry = countryAndCapitalsList.find(
      eachOne => eachOne.id === isCapitalId,
    )

    return isActiveCapitalAndCountry.country
  }

  render() {
    const {isCapitalId} = this.state
    const country = this.getCountry(isCapitalId)

    return (
      <div className="bg-con">
        <div className="card">
          <h1>Countries And Capitals</h1>
          <div className="set-col">
            <select
              onChange={this.onChange}
              value={isCapitalId}
              className="input-ele"
            >
              {countryAndCapitalsList.map(eachObject => (
                <option
                  key={eachObject.id}
                  value={eachObject.id}
                  className="list-item"
                >
                  {eachObject.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country?</p>
          </div>

          <p>{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
