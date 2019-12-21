import React, { Component } from 'react'

import '../Global.css'
import Header from './Header'
import WeatherCards from './WeatherCards'
import featuredCities from '../constants/featured'
import styled from 'styled-components'
import Footer from './Footer'
import ListLoader from './ListLoader'
import AddButton from './AddButton'
import Modal from './Modal'

export default class App extends Component {
  state = {
    loading: false,
    error: null,
    isModalOpen: false,
    city: '',
    countryCode: '',
    weatherList: []
  }

  getWeather = async (city, countryCode) => {
    this.setState({
      loading: true
    })
    try {
      const token = '6877bf4707e0e07acfd04c1349876fe3'
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${token}`
      const response = await fetch(url)
      const data = await response.json()
      this.setState({
        loading: false,
        weatherList: [...this.state.weatherList, data]
      })
    } catch (error) {
      this.setState({
        loading: false,
        error
      })
    }
  }

  componentDidMount() {
    featuredCities.forEach(city => {
      this.getWeather(city.city, city.country)
    })
  }

  openModal = () => {
    this.setState({
      isModalOpen: true
    })
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    const { city, countryCode } = this.state
    e.preventDefault()
    this.setState({
      isModalOpen: false
    })
    this.getWeather(city, countryCode)
  }

  render() {
    const { loading, weatherList, isModalOpen } = this.state
    return (
      <StyledLayout>
        <Header />
        {loading ? (
          <ListLoader />
        ) : (
          <WeatherCards weatherList={weatherList} loading={loading} />
        )}
        <AddButton openModal={this.openModal} />
        <Modal
          isModalOpen={isModalOpen}
          closeModal={this.closeModal}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Footer />
      </StyledLayout>
    )
  }
}

const StyledLayout = styled.main`
  position: relative;
  @media (min-width: 992px) {
    width: 90vw;
    max-width: 1920px;
    margin: auto;
  }
`
