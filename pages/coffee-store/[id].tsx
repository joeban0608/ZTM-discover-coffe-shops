import { useRouter } from 'next/router'
import React from 'react'

const coffeeStore = () => {
  const router = useRouter()
  const {query} = router
  console.log('router', router)
  return (
    <div>coffee store page {query.id}</div>
  )
}

export default coffeeStore