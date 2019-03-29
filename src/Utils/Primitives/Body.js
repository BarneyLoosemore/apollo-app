import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Body = styled.p`
  font-size: ${props => props.size}px
  font-family: Open Sans;
  font-weight: 200
`

Body.defaultProps = {
  size: "12",
}

Body.propTypes = {
  size: PropTypes.oneOf([
    "8",
    "12",
    "16",
  ]),
}