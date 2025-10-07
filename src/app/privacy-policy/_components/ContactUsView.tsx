import Link from 'next/link'
import React from 'react'

function ContactUsView() {
  return (
    <>
        <div className='2xl:text-[18px] xl:text-[13.5px] text-[12px] text-[#777777] [&_a]:text-[#3563E9] [&_a]:font-medium [&_a]:underline'>
            If you have any questions about this Privacy Policy, please contact us by email: <Link href='mailto:support@elogictech.com'>support@elogictech.com</Link>.
        </div>
    </>
  )
}

export default ContactUsView