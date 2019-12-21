import React from 'react'

import styled from 'styled-components'

const AddButton = ({ openModal }) => {
  return (
    <StyledButton
      onClick={() => {
        openModal()
      }}
    >
      <p>+</p>
    </StyledButton>
  )
}

const StyledButton = styled.button`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 3.325rem;
  height: 3.325rem;
  border-radius: 50%;
  border: none;
  z-index: 3;
  background: var(--actionFill);
  color: #fff;
  box-shadow: rgba(0, 123, 255, 0.75) 2px 3px 9px;
  cursor: pointer;
  p {
    font-size: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-55%);
  }
  :active,
  :focus {
    outline: none;
  }
`

export default AddButton
