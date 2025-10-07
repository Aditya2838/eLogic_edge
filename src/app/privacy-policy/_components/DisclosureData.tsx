import React from 'react'

function DisclosureData() {
  return (
    <>
        <div className='2xl:text-[18px] xl:text-[13.5px] text-[12px] text-[#777777] [&_a]:text-[#3563E9] [&_a]:font-medium [&_a]:underline'>
            We may disclose personal information that we collect, or you provide:
            <ul className="list-disc list-outside md:pl-6">
                <li className="ml-4 font-medium">Disclosure for Law Enforcement.</li>
                    <ul className="list-disc list-outside md:pl-6">
                        <li className="ml-4 font-medium">Under certain circumstances, we may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities.</li>
                    </ul>
                <li className="ml-4 font-medium">Business Transaction.</li>
                    <ul className="list-disc list-outside md:pl-6">
                        <li className="ml-4 font-medium">If we or our subsidiaries are involved in a merger, acquisition or asset sale, your Personal Data may be transferred.</li>
                    </ul>
                <li className="ml-4 font-medium">Other cases. We may disclose your information also:
                    <ol className='list-[upper-roman] md:ps-6 ps-4'>
                        <li className='font-normal'>To our subsidiaries and affiliates.</li>
                        <li className='font-normal'>To contractors, service providers, and other third parties we use to support our business</li>
                        <li className='font-normal'>To fulfill the purpose for which you provide it.</li>
                        <li className='font-normal'>For the purpose of including your company’s logo on our website</li>
                        <li className='font-normal'>For any other purpose disclosed by us when you provide the information</li>
                        <li className='font-normal'>With your consent in any other cases</li>
                        <li className='font-normal'>If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of the Company, our customers, or others.</li>
                    </ol>
                </li>
            </ul>
        </div>
    </>
  )
}

export default DisclosureData