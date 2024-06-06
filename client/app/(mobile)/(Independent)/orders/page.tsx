import HeadingWrapper from '@/components/mobile/Layout/Providers/heading-wrapper'
import React from 'react'
import Orders from './orders'

const page = () => {
  return (
    <HeadingWrapper back heading="Booking & Orders">
      <Orders/>
    </HeadingWrapper>
  )
}

export default page