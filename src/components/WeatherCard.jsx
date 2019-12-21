import React from 'react'

import styled from 'styled-components'

const WeatherCard = ({ weather }) => {
  const { name, main, sys } = weather
  // The city slug for the image search in Unsplash
  const citySlug = name.replace(/\s/g, '-').toLowerCase()
  // The temp out of the box is in K, so a conversion is needed to get it in Celsius
  const tempInCelsius = Math.floor(main.temp - 273.15)

  // Component View
  return (
    <StyledCard
      style={{
        backgroundImage: `url(https://source.unsplash.com/800x600/?${citySlug})`
      }}
    >
      <div>
        <h3>{name}</h3>
        <h4>Country: {sys.country}</h4>
      </div>
      <div>
        <p>{tempInCelsius}°</p>
      </div>
    </StyledCard>
  )
}

// Styles
const StyledCard = styled.li`
  background-repeat: no-repeat;
  background-size: cover;
  padding: 4em 1em 1em 1em;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  color: #fff;
  ::after {
    content: '';
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(16, 16, 16, 0.45);
  }
  h3,
  h4,
  p {
    z-index: 2;
    position: relative;
  }
  h3 {
    font-size: 1.25em;
    font-weight: 500;
  }
  h4 {
    font-size: 1em;
    font-weight: 400;
    opacity: 0.725;
  }
  p {
    font-size: 2.25em;
    font-weight: 500;
  }
`

export default WeatherCard
