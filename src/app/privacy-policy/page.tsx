import React from 'react'
import PageBanner from './_components/PageBanner'
import PrivacyPolicyText from './_components/PrivacyPolicyText'
import TalkToExpert from '@/src/common/TalkToExpert'

function page() {
  return (
    <>
        <PageBanner />
        <PrivacyPolicyText />
        <TalkToExpert/>
    </>
  )
}

export default page