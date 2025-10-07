import React from 'react'

function PersonalData() {
  return (
    <>
        <div className='2xl:text-[18px] xl:text-[13.5px] text-[12px] text-[#777777] [&_a]:text-[#3563E9] [&_a]:font-medium [&_a]:underline'>
        While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (“Personal Data”). Personally identifiable information may include, but is not limited to:
        <ul className='list-decimal list-inside ps-5'>
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Address, Country, State, Province, ZIP/Postal code, City</li>
            <li>Cookies and Usage Data</li>
        </ul>
        We may use your Personal Data to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link.
        </div>
    </>
  )
}

export default PersonalData