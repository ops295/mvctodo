import React from 'react'
import Footer from '../components/Footer'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'

const AllPage = () => {
  return (
    <>
      <TodoInput />
      <TodoList />
      <Footer />
    </>
  )
}

export default AllPage