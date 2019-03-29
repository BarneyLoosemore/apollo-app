import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Title = styled.h1`
  font-size: ${props => props.size}px;
  font-family: Roboto;
  text-align: center;
`

Title.defaultProps = {
  size: "24",
}

Title.propTypes = {
  size: PropTypes.oneOf([
    "24",
    "30",
    "36",
  ])
}