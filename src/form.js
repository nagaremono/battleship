/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
'use strict'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      carrier0: { horizontal: '', vertical: '', direction: 'horizontal' },
      battleship0: { horizontal: '', vertical: '', direction: 'horizontal' },
      heavyCruiser0: { horizontal: '', vertical: '', direction: 'horizontal' },
      heavyCruiser1: { horizontal: '', vertical: '', direction: 'horizontal' },
      lightCruiser0: { horizontal: '', vertical: '', direction: 'horizontal' },
      lightCruiser1: { horizontal: '', vertical: '', direction: 'horizontal' },
      lightCruiser2: { horizontal: '', vertical: '', direction: 'horizontal' },
      destroyer0: { horizontal: '', vertical: '', direction: 'horizontal' },
      destroyer1: { horizontal: '', vertical: '', direction: 'horizontal' },
      destroyer2: { horizontal: '', vertical: '', direction: 'horizontal' },
      destroyer3: { horizontal: '', vertical: '', direction: 'horizontal' },
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const name = event.target.name
    const commaLocation = name.indexOf(',')
    const shipName = name.slice(0, commaLocation)
    const shipProperty =
      name.search('direction') !== -1
        ? 'direction'
        : name.search('horizontal') !== -1
        ? 'horizontal'
        : 'vertical'

    this.setState({ [shipName[shipProperty]]: event.target.value })
  }

  handleSubmit(event) {
    const formData = this.state
    const toBeStored = JSON.stringify(formData)
    localStorage.setItem('board', toBeStored)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Carrier</p>
        <ShipDetail
          name="carrier"
          number="0"
          change={this.handleChange}
          horizontal={this.state.carrier0.horizontal}
          vertical={this.state.carrier0.vertical}
        />
        <p>battleship</p>
        <ShipDetail
          name="battleship"
          number="0"
          change={this.handleChange}
          horizontal={this.state.battleship0.horizontal}
          vertical={this.state.battleship0.vertical}
        />
        <p>Heavy Cruiser</p>
        <ShipDetail
          name="heavycruiser"
          number="0"
          change={this.handleChange}
          horizontal={this.state.heavyCruiser0.horizontal}
          vertical={this.state.heavyCruiser0.vertical}
        />
        <ShipDetail
          name="heavycruiser"
          number="1"
          change={this.handleChange}
          horizontal={this.state.heavyCruiser1.horizontal}
          vertical={this.state.heavyCruiser1.vertical}
        />
        <p>Light Cruiser</p>
        <ShipDetail
          name="lightcruiser"
          number="0"
          change={this.handleChange}
          horizontal={this.state.lightCruiser0.horizontal}
          vertical={this.state.lightCruiser0.vertical}
        />
        <ShipDetail
          name="lightcruiser"
          number="1"
          change={this.handleChange}
          horizontal={this.state.lightCruiser1.horizontal}
          vertical={this.state.lightCruiser1.vertical}
        />
        <ShipDetail
          name="lightcruiser"
          number="2"
          change={this.handleChange}
          horizontal={this.state.lightCruiser2.horizontal}
          vertical={this.state.lightCruiser2.vertical}
        />
        <p>Destroyer</p>
        <ShipDetail
          name="destroyer"
          number="0"
          change={this.handleChange}
          horizontal={this.state.destroyer0.horizontal}
          vertical={this.state.destroyer0.vertical}
        />
        <ShipDetail
          name="destroyer"
          number="1"
          change={this.handleChange}
          horizontal={this.state.destroyer1.horizontal}
          vertical={this.state.destroyer1.vertical}
        />
        <ShipDetail
          name="destroyer"
          number="2"
          change={this.handleChange}
          horizontal={this.state.destroyer2.horizontal}
          vertical={this.state.destroyer2.vertical}
        />
        <ShipDetail
          name="destroyer"
          number="3"
          change={this.handleChange}
          horizontal={this.state.destroyer3.horizontal}
          vertical={this.state.destroyer3.vertical}
        />
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">
              Create Board
            </button>
          </div>
        </div>
      </form>
    )
  }
}

function ShipDetail(props) {
  const type = props.name
  const number = props.number
  const horizontal = ',horizontal'
  const vertical = ',vertical'
  const direction = ',direction'

  return (
    <div className="form-group row">
      <label
        htmlFor={type + number + horizontal}
        className="col-sm-1 col-form-label"
      >
        Horizontal
      </label>
      <div className="col-sm-1">
        <input
          type="text"
          className="form-control"
          id={type + number + horizontal}
          name={type + number + horizontal}
          onChange={props.change}
          value={props.horizontal}
        />
      </div>
      <label
        htmlFor={type + number + vertical}
        className="col-sm-1 col-form-label"
      >
        Vertical
      </label>
      <div className="col-sm-1">
        <input
          type="text"
          className="form-control"
          id={type + number + vertical}
          name={type + number + vertical}
          onChange={props.change}
          value={props.vertical}
        />
      </div>
      <fieldset className="form-group">
        <div className="row">
          <legend className="col-form-label col-sm-2 pt-0">Direction</legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name={type + number + direction}
                id={type + direction + number + horizontal}
                value="horizontal"
                onChange={props.change}
                checked
              />
              <label
                className="form-check-label"
                htmlFor={type + direction + number + horizontal}
              >
                Horizontal
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name={type + number + direction}
                id={type + direction + number + vertical}
                onChange={props.change}
                value="vertical"
              />
              <label
                className="form-check-label"
                htmlFor={type + direction + number + vertical}
              >
                Vertical
              </label>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  )
}

ReactDOM.render(<Form />, document.querySelector('#form'))
