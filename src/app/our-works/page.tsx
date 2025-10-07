import React from 'react'
import PageBanner from './_components/PageBanner'
import Overview from './_components/Overview'
import TalkToExpert from '@/src/common/TalkToExpert'
import Projects from './_components/Projects'

function page() {
  return (
    <>
        <PageBanner/>
        <Overview/>
        <Projects/>
        <TalkToExpert/>
    </>
  )
}

export default page