import React from 'react'
import PageBanner from './_components/PageBanner'
import TeamInfo from './_components/TeamInfo'
import TeamMembers from './_components/TeamMembers'
import TalkToExpert from '@/src/common/TalkToExpert'

function page() {
  return (
    <>
        <PageBanner/>
        <TeamInfo />
        <TeamMembers />
        <TalkToExpert/>
    </>
  )
}

export default page