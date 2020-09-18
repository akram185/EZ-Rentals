import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import CarEdit from '../screens/CarEdit'
import Cars from '../screens/Cars'
import Types from '../screens/Types'
import { getAllCars } from '../services/cars'
import { getAllTypes } from '../services/types'

export default function MainContainer() {
  const [types, setTypes] = useState([])
  const [cars, setCars] = useState([])

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

  return (
    <Switch>
      <Route path='/cars/:id/edit'>
        <CarEdit cars={cars} />
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
