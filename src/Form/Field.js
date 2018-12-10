import { cloneElement, isValidElement, PureComponent } from 'react'
import PropTypes from 'prop-types'

class Field extends PureComponent {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    if (value && value.nativeEvent) {
      // eslint-disable-next-line
      value = value.target.value
    }

    this.props.onChange(value)
  }

  render() {
    const { children, value, error } = this.props

    if (typeof children === 'function') {
      return children({ value, error, onChange: this.handleChange })
    }

    if (isValidElement) {
      return cloneElement(children, { value, error, onChange: this.handleChange })
    }

    console.error('Form.Field expect a single ReactElement or a function.')
    return null
  }
}

Field.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
  ]).isRequired,
  error: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any,
}

export default Field
