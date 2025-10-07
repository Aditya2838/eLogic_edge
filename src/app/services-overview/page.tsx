import React from 'react'
import PageBanner from './_components/PageBanner'
import ServicesView from './_components/ServicesView'
import TalkToExpert from '@/src/common/TalkToExpert'

function page() {
  return (
    <>
        <PageBanner />
        <ServicesView />
        <TalkToExpert/>
    </>
  )
}

export default page