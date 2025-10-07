import React from 'react'
import ServiceOverview from './_components/ServiceOverview'
import OurCulturedValues from './_components/ExampleApplications'
import PageBanner from './_components/PageBanner'
import TalkToExpert from '@/src/common/TalkToExpert'

function page() {
  return (
    <>  
      <PageBanner />
        <ServiceOverview />
        <OurCulturedValues />
        <TalkToExpert/>
    </>
  )
}

export default page