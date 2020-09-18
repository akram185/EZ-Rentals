import React, { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import CarDetail from '../screens/CarDetail'
import CarEdit from '../screens/CarEdit'
import Cars from '../screens/Cars'
import Types from '../screens/Types'
import { getAllCars, putCar } from '../services/cars'
import { getAllTypes } from '../services/types'

export default function MainContainer() {
  const [types, setTypes] = useState([])
  const [cars, setCars] = useState([])
  const history = useHistory()

  useEffect(() => {
    const fetchTypes = async () => {
      const typeArray = await getAllTypes()
      setTypes(typeArray)
    }
    const fetchCars = async () => {
      const carArray = await getAllCars()
      setCars(carArray)
    }
    fetchTypes()
    fetchCars()
  }, [])

  const updateSubmit = async (id, formData) => {
    const updatedCar = await putCar(id, formData)
    setCars((prevState) =>
      prevState.map((car) => (car.id === Number(id) ? updatedCar : car))
    )
    history.push('/cars')
  }

  return (
    <Switch>
      <Route path='/cars/:id/edit'>
        <CarEdit cars={cars} updateSubmit={updateSubmit} />
      </Route>
      <Route path='/cars/:id'>
        <CarDetail types={types} />
      </Route>
      <Route path='/types'>
        <Types types={types} />
      </Route>
      <Route path='/cars'>
        <Cars cars={cars} />
      </Route>
    </Switch>
  )
}
