import React from 'react'
import PageBanner from './_components/PageBanner'
import LatestVacancies from './_components/LatestVacancies'
import PerkBenefits from './_components/PerkBenefits'
import TeamInfo from './_components/TeamInfo'
import TalkToExpert from '@/src/common/TalkToExpert'

function page() {
  return (
    <>
        <PageBanner/>
        <LatestVacancies/>
        <PerkBenefits/>
        <TeamInfo/>
        <TalkToExpert/>
    </>
  )
}

export default page