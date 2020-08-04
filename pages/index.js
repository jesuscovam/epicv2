import { useEffect, useContext } from 'react'
import { AnswersContext } from '../context/AnswersProvider'
import Hero from '../src/Hero'

export default function Home() {
  const { dispatch } = useContext(AnswersContext)
  useEffect(() => {
    dispatch({type: 'CLEAN_ANSWERS'})
  }, [])
  
  return (
    <>
      <Hero/>
    </>
  )
}