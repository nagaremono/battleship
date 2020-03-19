/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form(props) {
    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this.state = {
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
      destroyer3: { horizontal: '', vertical: '', direction: 'horizontal' }
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Form, [{
    key: 'handleChange',
    value: function handleChange(event) {
      var name = event.target.name;
      var commaLocation = name.indexOf(',');
      var shipName = name.slice(0, commaLocation);
      var shipProperty = name.search('direction') !== -1 ? 'direction' : name.search('horizontal') !== -1 ? 'horizontal' : 'vertical';

      this.setState(_defineProperty({}, shipName[shipProperty], event.target.value));
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      var formData = this.state;
      var toBeStored = JSON.stringify(formData);
      localStorage.setItem('board', toBeStored);
      event.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { onSubmit: this.handleSubmit },
        React.createElement(
          'p',
          null,
          'Carrier'
        ),
        React.createElement(ShipDetail, {
          name: 'carrier',
          number: '0',
          change: this.handleChange,
          horizontal: this.state.carrier0.horizontal,
          vertical: this.state.carrier0.vertical
        }),
        React.createElement(
          'p',
          null,
          'battleship'
        ),
        React.createElement(ShipDetail, {
          name: 'battleship',
          number: '0',
          change: this.handleChange,
          horizontal: this.state.battleship0.horizontal,
          vertical: this.state.battleship0.vertical
        }),
        React.createElement(
          'p',
          null,
          'Heavy Cruiser'
        ),
        React.createElement(ShipDetail, {
          name: 'heavycruiser',
          number: '0',
          change: this.handleChange,
          horizontal: this.state.heavyCruiser0.horizontal,
          vertical: this.state.heavyCruiser0.vertical
        }),
        React.createElement(ShipDetail, {
          name: 'heavycruiser',
          number: '1',
          change: this.handleChange,
          horizontal: this.state.heavyCruiser1.horizontal,
          vertical: this.state.heavyCruiser1.vertical
        }),
        React.createElement(
          'p',
          null,
          'Light Cruiser'
        ),
        React.createElement(ShipDetail, {
          name: 'lightcruiser',
          number: '0',
          change: this.handleChange,
          horizontal: this.state.lightCruiser0.horizontal,
          vertical: this.state.lightCruiser0.vertical
        }),
        React.createElement(ShipDetail, {
          name: 'lightcruiser',
          number: '1',
          change: this.handleChange,
          horizontal: this.state.lightCruiser1.horizontal,
          vertical: this.state.lightCruiser1.vertical
        }),
        React.createElement(ShipDetail, {
          name: 'lightcruiser',
          number: '2',
          change: this.handleChange,
          horizontal: this.state.lightCruiser2.horizontal,
          vertical: this.state.lightCruiser2.vertical
        }),
        React.createElement(
          'p',
          null,
          'Destroyer'
        ),
        React.createElement(ShipDetail, {
          name: 'destroyer',
          number: '0',
          change: this.handleChange,
          horizontal: this.state.destroyer0.horizontal,
          vertical: this.state.destroyer0.vertical
        }),
        React.createElement(ShipDetail, {
          name: 'destroyer',
          number: '1',
          change: this.handleChange,
          horizontal: this.state.destroyer1.horizontal,
          vertical: this.state.destroyer1.vertical
        }),
        React.createElement(ShipDetail, {
          name: 'destroyer',
          number: '2',
          change: this.handleChange,
          horizontal: this.state.destroyer2.horizontal,
          vertical: this.state.destroyer2.vertical
        }),
        React.createElement(ShipDetail, {
          name: 'destroyer',
          number: '3',
          change: this.handleChange,
          horizontal: this.state.destroyer3.horizontal,
          vertical: this.state.destroyer3.vertical
        }),
        React.createElement(
          'div',
          { className: 'form-group row' },
          React.createElement(
            'div',
            { className: 'col-sm-10' },
            React.createElement(
              'button',
              { type: 'submit', className: 'btn btn-primary' },
              'Create Board'
            )
          )
        )
      );
    }
  }]);

  return Form;
}(React.Component);

function ShipDetail(props) {
  var type = props.name;
  var number = props.number;
  var horizontal = ',horizontal';
  var vertical = ',vertical';
  var direction = ',direction';

  return React.createElement(
    'div',
    { className: 'form-group row' },
    React.createElement(
      'label',
      {
        htmlFor: type + number + horizontal,
        className: 'col-sm-1 col-form-label'
      },
      'Horizontal'
    ),
    React.createElement(
      'div',
      { className: 'col-sm-1' },
      React.createElement('input', {
        type: 'text',
        className: 'form-control',
        id: type + number + horizontal,
        name: type + number + horizontal,
        onChange: props.change,
        value: props.horizontal
      })
    ),
    React.createElement(
      'label',
      {
        htmlFor: type + number + vertical,
        className: 'col-sm-1 col-form-label'
      },
      'Vertical'
    ),
    React.createElement(
      'div',
      { className: 'col-sm-1' },
      React.createElement('input', {
        type: 'text',
        className: 'form-control',
        id: type + number + vertical,
        name: type + number + vertical,
        onChange: props.change,
        value: props.vertical
      })
    ),
    React.createElement(
      'fieldset',
      { className: 'form-group' },
      React.createElement(
        'div',
        { className: 'row' },
        React.createElement(
          'legend',
          { className: 'col-form-label col-sm-2 pt-0' },
          'Direction'
        ),
        React.createElement(
          'div',
          { className: 'col-sm-10' },
          React.createElement(
            'div',
            { className: 'form-check' },
            React.createElement('input', {
              className: 'form-check-input',
              type: 'radio',
              name: type + number + direction,
              id: type + direction + number + horizontal,
              value: 'horizontal',
              onChange: props.change,
              checked: true
            }),
            React.createElement(
              'label',
              {
                className: 'form-check-label',
                htmlFor: type + direction + number + horizontal
              },
              'Horizontal'
            )
          ),
          React.createElement(
            'div',
            { className: 'form-check' },
            React.createElement('input', {
              className: 'form-check-input',
              type: 'radio',
              name: type + number + direction,
              id: type + direction + number + vertical,
              onChange: props.change,
              value: 'vertical'
            }),
            React.createElement(
              'label',
              {
                className: 'form-check-label',
                htmlFor: type + direction + number + vertical
              },
              'Vertical'
            )
          )
        )
      )
    )
  );
}

ReactDOM.render(React.createElement(Form, null), document.querySelector('#form'));