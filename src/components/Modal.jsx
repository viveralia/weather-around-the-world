import React from 'react'

import styled from 'styled-components'

const Modal = ({ isModalOpen, closeModal, handleChange, handleSubmit }) => {
  return (
    <StyledModal className={isModalOpen ? 'show' : 'hide'}>
      <div className='card'>
        <button
          className='close'
          onClick={() => {
            closeModal()
          }}
        >
          ☓
        </button>
        <h2>Add a new City</h2>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='city'
            placeholder='City'
            onChange={handleChange}
          />
          <input
            type='text'
            name='countryCode'
            placeholder='Country Code (2 digits)'
            onChange={handleChange}
          />
          <button type='submit'>Get weather</button>
        </form>
      </div>
    </StyledModal>
  )
}

const StyledModal = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  .card {
    border: 1px solid #eee;
    box-shadow: rgba(0, 0, 0, 0.125) 2px 3px 9px;
    border-radius: 10px;
    padding: 1rem;
    width: 90%;
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
    background: #fff;
    z-index: 4;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .close {
      font-size: 1rem;
      font-weight: 700;
      height: 2em;
      width: 2em;
      text-align: center;
      position: absolute;
      top: -10px;
      right: -10px;
      background: #fff;
      border-radius: 50%;
      border: 1px solid #eee;
      box-shadow: rgba(0, 0, 0, 0.125) 2px 3px 9px;
      cursor: pointer;
      :focus,
      :active {
        outline: none;
      }
    }
    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    form {
      input {
        display: block;
        width: 100%;
        font-size: 1rem;
        margin-bottom: 0.5rem;
        border: 1px solid #eee;
        border-radius: 5px;
        padding: 1rem;
      }
      button {
        background: var(--actionFill);
        color: #fff;
        display: block;
        width: 100%;
        font-size: 1.125rem;
        font-weight: 600;
        padding: 1rem;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        box-shadow: rgba(0, 123, 255, 0.25) 2px 3px 9px;
      }
    }
  }
`

export default Modal
