import React from 'react'

import styled from 'styled-components'
import WeatherCard from './WeatherCard'
import SingleLoader from './SingleLoader'

const WeatherCards = ({ weatherList, loading }) => {
  return (
    <StyledList>
      <h2>Featured Cities</h2>
      <ul>
        {loading ? (
          <SingleLoader />
        ) : (
          weatherList.map((item, i) => <WeatherCard key={i} weather={item} />)
        )}
      </ul>
    </StyledList>
  )
}

const StyledList = styled.section`
  padding: 0 1.5rem 2.5rem 1.5rem;
  h2 {
    color: var(--secondFill);
    font-weight: 400;
    font-size: 1em;
    margin-bottom: 1.25em;
  }
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1em;
  }
  @media (min-width: 768px) {
    ul {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 992px) {
    ul {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`

export default WeatherCards
