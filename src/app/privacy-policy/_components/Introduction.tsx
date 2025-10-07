import Link from 'next/link'
import React from 'react'

function Introduction() {
  return (
    <>
        <div className='2xl:text-[18px] xl:text-[13.5px] text-[12px] text-[#777777] [&_a]:text-[#3563E9] [&_a]:font-medium [&_a]:underline'>
            Welcome to eLogic Engineering Services Private Limited.<br/>
            eLogic Engineering Services Private Limited (“us”, “we”, or “our”) operates <Link href='http://www.eltedge.io' target='_blank'>http://www.eltedge.io</Link> (hereinafter referred to as “Service”).<br/>
            Our Privacy Policy governs your visit to <Link href='http://www.eltedge.io' target='_blank'>http://www.eltedge.io</Link>, and explains how we collect, safeguard and disclose information that results from your use of our Service.<br/>
            We use your data to provide and improve Service. By using Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.<br/>
            Our Terms and Conditions (“Terms”) govern all use of our Service and together with the Privacy Policy constitutes your agreement with us (“agreement”).
        </div>
    </>
  )
}

export default Introduction