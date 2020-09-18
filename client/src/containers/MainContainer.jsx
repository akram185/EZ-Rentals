import React, { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import CarDetail from '../screens/CarDetail'
import CarEdit from '../screens/CarEdit'
import CarCreate from '../screens/CarCreate'
import Cars from '../screens/Cars'
import Types from '../screens/Types'
import { deleteCar, getAllCars, postCar, putCar } from '../services/cars'
import { getAllTypes } from '../services/types'

export default function MainContainer(props) {
  const [types, setTypes] = useState([])
  const [cars, setCars] = useState([])
  const history = useHistory()
  const { currentUser } = props

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

  const createSubmit = async (formData) => {
    const newCar = await postCar(formData)
    setCars((prevState) => [...prevState, newCar])
    history.push('/cars')
  }

  const handleDelete = async (id) => {
    await deleteCar(id)
    setCars((prevState) => prevState.filter((car) => car.id !== id))
  }

  return (
    <Switch>
      <Route path='/cars/new'>
        <CarCreate createSubmit={createSubmit} />
      </Route>
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
        <Cars
          cars={cars}
          handleDelete={handleDelete}
          currentUser={currentUser}
        />
      </Route>
    </Switch>
  )
}
