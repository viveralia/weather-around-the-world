import React from 'react'

import styled from 'styled-components'
import { FaReact } from 'react-icons/fa'

const Footer = () => {
  return (
    <StyledFooter>
      A Weather App built with{' '}
      <span>
        {' '}
        <FaReact />
      </span>
      . Images by{' '}
      <a href='http://unsplash.com' target='_blank' rel='noopener noreferrer'>
        Unsplash
      </a>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  text-align: center;
  color: var(--secondFill);
  padding: 2rem 1.5rem;
  font-size: 90%;
  span {
    font-size: 80%;
  }
  a {
    color: currentColor;
    text-decoration: none;
    opacity: 0.75;
    transition: all 0.5s ease;
    :hover {
      opacity: 1;
    }
  }
`

export default Footer
