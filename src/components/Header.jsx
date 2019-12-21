import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const Header = () => {
  return (
    <StyledHeader>
      <h2>{moment().format('MMM Do, YYYY')}</h2>
      <h1>How's the weather today around the world?</h1>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  padding: 2rem 1.5rem;
  h2 {
    color: var(--secondFill);
    font-weight: 400;
    font-size: 1em;
    margin-bottom: 0.5rem;
  }
  h1 {
    font-size: 1.875em;
    font-weight: 700;
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 2.5em;
      width: 50%;
      max-width: 600px;
    }
  }
`

export default Header
