import React from 'react'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'

const CompletedPage = () => {
  return (<>
    <TodoList variants="completed" />
    <Footer />
  </>)
}

export default CompletedPage