import React from 'react'
import PageBanner from './_components/PageBanner'
import PlatformFeatures from './_components/PlatformFeatures'
import CostControlAllocation from './_components/CostControlAllocation'
import SmartFaultDetection from './SmartFaultDetection'
import Hardware from './_components/Hardware'
import TalkToExpert from '@/src/common/TalkToExpert'

function page() {
  return (
    <>
        <PageBanner/>
        <PlatformFeatures/>
        <CostControlAllocation/>
        <SmartFaultDetection/>
        {/* <ComplianceReporting/> */}
        <Hardware/>
        <TalkToExpert/>
    </>
  )
}

export default page