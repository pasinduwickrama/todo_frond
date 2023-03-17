import React from 'react'
import Header from '../Header/Header'
import TodoForm from '../Todo/TodoForm'
import TodoList from '../Todo/TodoList'

const Home = () => {
  return (
    <div>
        <Header />
        <TodoForm />
        <TodoList />
    </div>
  )
}

export default Home