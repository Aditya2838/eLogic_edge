'use client'
import { Checkbox } from '@/components/ui/checkbox'
import Link from 'next/link'
import React, { useState } from 'react'

function ContactUsWidgets () {
  const [selectedTab, setSelectedTab] = useState('services')
  const [formData, setFormData] = useState({
    selectionType: 'services',
    name: '',
    email: '',
    company: '',
    phone: '',
    services: [] as string[],
    description: '',
    role: '',
    resume: {
      filename: '',
      content: ''
    },
    experience: '',
    notRelevant: false,
    PdfBase64: '',
    solution: [] as string[],
    you_are: [] as string[]
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  // Convert file to Base64
  const convertToBase64 = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = error => reject(error)
      reader.readAsDataURL(file)
    })

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0]

      try {
        const base64Resume = await convertToBase64(selectedFile)

        setFormData(prev => ({
          ...prev,
          resume: {
            filename: selectedFile.name,
            content: base64Resume.split(',')[1]
          },
          PdfBase64: base64Resume.split(',')[1]
        }))
      } catch (error) {
        console.error('An error occurred:', error)
        setMessage('Failed to upload resume. Please try again.')
      }
    }
  }

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    const apiUrl =
      'https://gaysgxqov0.execute-api.ap-south-1.amazonaws.com/formData'
    const payload = {
      ...formData,
      selectionType: selectedTab
    }

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      const data = await response.json()

      if (response.ok) {
        setMessage('Form submitted successfully!')
        setFormData({
          selectionType: 'services',
          name: '',
          email: '',
          company: '',
          phone: '',
          services: [] as string[],
          description: '',
          role: '',
          resume: {
            filename: '',
            content: ''
          },
          experience: '',
          notRelevant: false,
          PdfBase64: '',
          solution: [],
          you_are:[]
        })
      } else {
        setMessage(`Error: ${data.message || 'Something went wrong!'}`)
      }
    } catch (error) {
      setMessage('Failed to connect to the server. Please try again.')
      console.log(error)
    } finally {
      console.log(message)
      setLoading(false)
    }
  }

  return (
    <section>
      <div className='bg-[#EEF1F5] 2xl:py-[100px] xl:py-[75px] lg:py-[66px] md:py-[45px] py-[50px] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] md:pb-0 pb-12'>
        <div className='flex justify-between 2xl:gap-[100px] xl:gap-[75px] lg:gap-[66px] lg:flex-nowrap flex-wrap'>
          {/* Form Section */}
          <div className='lg:w-[900px] w-full 2xl:rounded-[26px] xl:rounded-[19.5px] md:rounded-[17.33px] rounded-[16.21px] bg-white 2xl:shadow-[0_0_50px_rgba(0,0,0,0.1)] xl:shadow-[0_0_18px_rgba(146,146,146,0.25)] md:shadow-[0_0_16px_rgba(146,146,146,0.25)] shadow-[0_0_14px_rgba(0,0,0,0.25)] 2xl:p-[50px] xl:p-[40px] lg:p-[35px] md:p-[30px] p-[25px]'>
            <h2 className='text-[#262626] font-bold 2xl:text-[36px] xl:text-[27px] md:text-[24px] text-[22.45px] text-center'>
              Are you looking for?
            </h2>
            <div className='2xl:pt-[60px] xl:pt-[50px] md:pt-[40px] pt-[30px] overflow-hidden'>
              <form method='post' onSubmit={handleSubmit}>
                {/* Tab Selection */}
                <div className='flex items-center justify-between gap-3 md:flex-nowrap flex-wrap'>
                  {['services', 'partnership', 'career', 'solution'].map(
                    tab => (
                      <label
                        key={tab}
                        className='flex items-center gap-2 cursor-pointer'
                      >
                        <input
                          type='radio'
                          name='contactType'
                          value={tab}
                          checked={selectedTab === tab}
                          onChange={() => setSelectedTab(tab)}
                          className='hidden'
                        />
                        <div
                          className={`relative border w-[18px] h-[18px] rounded-full flex justify-center items-center transition-all duration-300 ${
                            selectedTab === tab
                              ? 'shadow-[inset_#007AFF_0px_0px_0px_4px] border-[#007AFF]'
                              : 'border border-[rgba(0,0,0,0.15)] shadow-[inset_0_1px_4px_0_rgba(0,0,0,0.12)]'
                          }`}
                        >
                          <span
                            className={`absolute left-[4px] top-[4px] w-[8px] h-[8px] rounded-full transition-all duration-300 ${
                              selectedTab === tab ? '' : ''
                            }`}
                          ></span>
                        </div>
                        <span
                          className={`text-black opacity-[0.85] font-medium 2xl:text-[20px] xl:text-[15px] text-[13.33px] transition-all duration-300 ${
                            selectedTab === tab ? '' : ''
                          }`}
                        >
                          {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </span>
                      </label>
                    )
                  )}
                </div>

                {/* Common Fields */}
                <div className='grid grid-cols-2 2xl:gap-[30px] xl:gap-[22.5px] md:gap-[20px] gap-[18.75px] my-[30px]'>
                  <div>
                    <label
                      htmlFor='name'
                      className='font-semibold text-[#262626] 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] 2xl:mb-[7px] md:mb-[9px] mb-1.5 flex'
                    >
                      Name
                    </label>
                    <input
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      className='outline-none focus:shadow-[inset_0_0_0_1px_#3563E9] w-full bg-[#F5F5F5] ring-0 2xl:rounded-[8px] xl:rounded-[6px] h-auto 2xl:text-[18px] md:text-[13.5px] text-[11.22px] py-[12.55px] 2xl:px-[20px] xl:px-[15px] md:px-[13.5px] px-[12.5px] placeholder:text-[#656567] text-black border-0'
                      type='text'
                      placeholder='Enter your Name'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='company'
                      className='font-semibold text-[#262626] 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] 2xl:mb-[7px] md:mb-[9px] mb-1.5 flex'
                    >
                      Company
                    </label>
                    <input
                      id='company'
                      name='company'
                      value={formData.company}
                      onChange={handleChange}
                      className='outline-none focus:shadow-[inset_0_0_0_1px_#3563E9] w-full bg-[#F5F5F5] ring-0 2xl:rounded-[8px] xl:rounded-[6px] h-auto 2xl:text-[18px] md:text-[13.5px] text-[11.22px]   py-[12.55px] 2xl:px-[20px] xl:px-[15px] md:px-[13.5px] px-[12.5px] placeholder:text-[#656567] text-black border-0'
                      type='text'
                      placeholder='Enter your company name'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='email'
                      className='font-semibold text-[#262626] 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] 2xl:mb-[7px] md:mb-[9px] mb-1.5 flex'
                    >
                      Email
                    </label>
                    <input
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      className='outline-none focus:shadow-[inset_0_0_0_1px_#3563E9] w-full bg-[#F5F5F5] ring-0 2xl:rounded-[8px] xl:rounded-[6px] h-auto 2xl:text-[18px] md:text-[13.5px] text-[11.22px]   py-[12.55px] 2xl:px-[20px] xl:px-[15px] md:px-[13.5px] px-[12.5px] placeholder:text-[#656567] text-black border-0'
                      type='email'
                      placeholder='Enter your email'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='phone'
                      className=' font-semibold text-[#262626] 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] 2xl:mb-[7px] md:mb-[9px] mb-1.5 flex'
                    >
                      Phone Number
                    </label>
                    <input
                      id='phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      className='outline-none focus:shadow-[inset_0_0_0_1px_#3563E9] w-full bg-[#F5F5F5] ring-0 2xl:rounded-[8px] xl:rounded-[6px] h-auto 2xl:text-[18px] md:text-[13.5px] text-[11.22px]   py-[12.55px] 2xl:px-[20px] xl:px-[15px] md:px-[13.5px] px-[12.5px] placeholder:text-[#656567] text-black border-0'
                      type='tel'
                      placeholder='Enter your phone number'
                    />
                  </div>
                </div>

                 {selectedTab === 'services' && (
                  <>
                    <div className='2xl:pt-[30px] xl:pt-[20px] pt-[18px] 2xl:pb-[40px] xl:pb-[30px] pb-[22px]'>
                      <div className='text-black font-semibold 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] mb-4'>
                        Choose a Service
                      </div>

                      <div className='grid md:grid-cols-3 grid-cols-2 max-[500px]:grid-cols-1 xl:gap-[20px] gap-[15px]'>
                        {[
                          'Embedded Hardware Design',
                          'Manufacturing Support',
                          'Custom IoT application development',
                          'Mechanical and Industrial Design',
                          'Embedded Software Design',
                          'Wireless Systems Development',
                          ' Human Machine Interface Development',
                          'Technology Consulting'
                        ].map(services => (
                          <label
                            key={services}
                            className='relative [&_input:checked_+_div]:shadow-[inset_0_0_0_1px_#3563E9] [&_input:checked_+_div]:text-[#3563E9]'
                          >
                            <input
                              type='checkbox'
                              value={services}
                              checked={formData.services.includes(services)}
                              onChange={e => {
                                const { value, checked } = e.target
                                setFormData(prev => ({
                                  ...prev,
                                  services: checked
                                    ? [...prev.services, value]
                                    : prev.services.filter(
                                        item => item !== value
                                      )
                                }))
                              }}
                              className='absolute -left-[9999999px] top-0'
                            />

                            <div className='px-3 bg-[#F5F5F5] font-medium rounded-[8px] text-[#656567] text-[12px] justify-center flex items-center h-[41px] text-center'>
                              {services}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor='description'
                        className='text-[#262626] 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] 2xl:mb-[7px] md:mb-[9px] mb-1.5 flex mt-5 font-semibold'
                      >
                        Tell Us About Your Project
                      </label>
                      <textarea
                        id='description'
                        name='description'
                        value={formData.description}
                        onChange={handleChange}
                        className='outline-none focus:shadow-[inset_0_0_0_1px_#3563E9] w-full bg-[#F5F5F5] ring-0 2xl:rounded-[8px] xl:rounded-[6px] h-auto 2xl:text-[18px] md:text-[13.5px] text-[11.22px] 2xl:py-[23.5px] xl:py-[15px] md:py-[12.35px] py-[12.55px] 2xl:px-[20px] xl:px-[15px] md:px-[13.5px] px-[12.5px] placeholder:text-[#656567] text-black border-0'
                        placeholder='Enter description'
                      />
                    </div>
                  </>
                )}

                {selectedTab === 'partnership' && (
                  <div>
                    <label
                      htmlFor='description'
                      className='font-semibold text-[#262626] 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] 2xl:mb-[7px] md:mb-[9px] mb-1.5 flex'
                    >
                      Description
                    </label>
                    <textarea
                      id='description'
                      name='description'
                      value={formData.description}
                      onChange={handleChange}
                      className='outline-none focus:shadow-[inset_0_0_0_1px_#3563E9] w-full bg-[#F5F5F5] ring-0 2xl:rounded-[8px] xl:rounded-[6px] h-auto 2xl:text-[18px] md:text-[13.5px] text-[11.22px] 2xl:py-[23.5px] xl:py-[15px] md:py-[12.35px] py-[12.55px] 2xl:px-[20px] xl:px-[15px] md:px-[13.5px] px-[12.5px] placeholder:text-[#656567] text-black border-0'
                      placeholder='Enter description'
                    />
                  </div>
                )}

                {selectedTab === 'career' && (
                  <div>
                    <label
                      htmlFor='role'
                      className='font-semibold text-[#262626] 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] 2xl:mb-[7px] md:mb-[9px] mb-1.5 flex'
                    >
                      Role
                    </label>
                    <input
                      id='role'
                      name='role'
                      value={formData.role}
                      onChange={handleChange}
                      className='outline-none focus:shadow-[inset_0_0_0_1px_#3563E9] w-full bg-[#F5F5F5] ring-0 2xl:rounded-[8px] xl:rounded-[6px] h-auto 2xl:text-[18px] md:text-[13.5px] text-[11.22px] 2xl:py-[23.5px] xl:py-[15px] md:py-[12.35px] py-[12.55px] 2xl:px-[20px] xl:px-[15px] md:px-[13.5px] px-[12.5px] placeholder:text-[#656567] text-black border-0'
                      type='text'
                      placeholder='Enter your current role'
                    />
                    <div className='mt-5 flex items-center gap-2.5'>
                      <input
                        type='file'
                        id='resume'
                        name='resume'
                        onChange={handleFileChange}
                        className='hidden'
                      />
                      <label
                        htmlFor='resume'
                        className='px-4 py-2 border border-[#3563E9] text-[#3563E9] rounded-[8px] cursor-pointer'
                      >
                        Upload Resume
                      </label>
                      <small className='text-gray-500'>(Max Size 4 MB)</small>
                    </div>
                    {formData.resume.filename && (
                      <p className='mt-2 text-sm text-gray-600'>
                        Uploaded file: {formData.resume.filename}
                      </p>
                    )}
                    <div className='mt-5'>
                      <label
                        htmlFor='experience'
                        className='font-semibold text-[#262626] 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] 2xl:mb-[7px] md:mb-[9px] mb-1.5 flex'
                      >
                        Experience in years
                      </label>
                      <input
                        id='experience'
                        name='experience'
                        value={formData.experience}
                        onChange={handleChange}
                        className='outline-none focus:shadow-[inset_0_0_0_1px_#3563E9] w-full bg-[#F5F5F5] ring-0 2xl:rounded-[8px] xl:rounded-[6px] h-auto 2xl:text-[18px] md:text-[13.5px] text-[11.22px] 2xl:py-[23.5px] xl:py-[15px] md:py-[12.35px] py-[12.55px] 2xl:px-[20px] xl:px-[15px] md:px-[13.5px] px-[12.5px] placeholder:text-[#656567] text-black border-0'
                        type='number'
                        placeholder='Please enter your total experience'
                      />
                      <small className='flex items-center gap-2 mt-2'>
                        <Checkbox
                          id='notRelevant'
                          checked={formData.notRelevant}
                          onCheckedChange={checked =>
                            setFormData(prev => ({
                              ...prev,
                              notRelevant: !!checked
                            }))
                          }
                        />
                        Check box if your experience is not relevant
                      </small>
                    </div>
                  </div>
                )}
                {selectedTab === 'solution' && (
                  <div>
                    <label
                      htmlFor='solution'
                      className='font-semibold text-[#262626] 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] 2xl:mb-[7px] md:mb-[9px] mb-1.5 flex'
                    >
                      Solutions
                    </label>
                    <div className='grid md:grid-cols-3 grid-cols-2 max-[500px]:grid-cols-1 xl:gap-[20px] gap-[15px]'>
                      {['IIoT', 'Mobility', 'Smart buildings solutions'].map(
                        solution => (
                          <label
                            key={solution}
                            className='relative [&_input:checked_+_div]:shadow-[inset_0_0_0_1px_#3563E9] [&_input:checked_+_div]:text-[#3563E9]'
                          >
                            <input
                              type='checkbox'
                              value={solution}
                              checked={formData.solution.includes(solution)}
                              onChange={e => {
                                const { value, checked } = e.target
                                setFormData(prev => ({
                                  ...prev,
                                  solution: checked
                                    ? [...prev.solution, value]
                                    : prev.solution.filter(
                                        item => item !== value
                                      )
                                }))
                              }}
                              className='absolute -left-[9999999px] top-0'
                            />

                            <div className='px-3 bg-[#F5F5F5] font-medium rounded-[8px] text-[#656567] text-[12px] justify-center flex items-center h-[41px] text-center'>
                              {solution}
                            </div>
                          </label>
                        ) 
                      )}
                    </div>
                    <label
                      htmlFor='you_are'
                      className='font-semibold text-[#262626] 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] 2xl:mb-[7px] md:mb-[9px] mb-1.5 flex mt-6'
                    >
                      You Are
                    </label>
                    <div className='grid md:grid-cols-3 grid-cols-2 max-[500px]:grid-cols-1 xl:gap-[20px] gap-[15px]'>
                      {['Factory or manufacturing plant', 'Plant EPC contractor or system integrator', 'Industrial machine or instrument maker'].map(
                        you_are => (
                          <label
                            key={you_are}
                            className='relative [&_input:checked_+_div]:shadow-[inset_0_0_0_1px_#3563E9] [&_input:checked_+_div]:text-[#3563E9]'
                          >
                            <input
                              type='checkbox'
                              value={you_are}
                              checked={formData.you_are.includes(you_are)}
                              onChange={e => {
                                const { value, checked } = e.target
                                setFormData(prev => ({
                                  ...prev,
                                  you_are: checked
                                    ? [...prev.you_are, value]
                                    : prev.you_are.filter(
                                        item => item !== value
                                      )
                                }))
                              }}
                              className='absolute -left-[9999999px] top-0'
                            />

                            <div className='px-3 bg-[#F5F5F5] font-medium rounded-[8px] text-[#656567] text-[12px] justify-center flex items-center h-[41px] text-center'>
                              {you_are}
                            </div>
                          </label>
                        )
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor='description'
                        className='font-semibold text-[#262626] 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] 2xl:mb-[7px] md:mb-[9px] mb-1.5 flex mt-4'
                      >
                        Tell Us About Your Project
                      </label>
                      <textarea
                        id='description'
                        name='description'
                        value={formData.description}
                        onChange={handleChange}
                        className='outline-none focus:shadow-[inset_0_0_0_1px_#3563E9] w-full bg-[#F5F5F5] ring-0 2xl:rounded-[8px] xl:rounded-[6px] h-auto 2xl:text-[18px] md:text-[13.5px] text-[11.22px] 2xl:py-[23.5px] xl:py-[15px] md:py-[12.35px] py-[12.55px] 2xl:px-[20px] xl:px-[15px] md:px-[13.5px] px-[12.5px] placeholder:text-[#656567] text-black border-0'
                        placeholder='Enter description'
                      />
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <div className='flex justify-center mt-8'>
                  <button
                    type='submit'
                    className='bg-[#3563E9] text-white rounded-[10px] 2xl:w-[200px] xl:w-[175px] md:w-[160px] w-[135px] 2xl:h-[50px] xl:h-[45px] md:h-[42px] h-[40px] 2xl:text-[20px] xl:text-[16px] md:text-[15px] text-[15.24px] cursor-pointer transition-all duration-500 hover:bg-black'
                    disabled={loading}
                  >
                    {loading ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info and Map Section */}
          <div className='lg:w-[calc(100%_-_900px)] w-full 2xl:pt-8 lg:mt-0 mt-10'>
            <div className='grid grid-cols-1 h-full'>
              <div className='flex flex-col border-b border-b-[#DCDCDC] 2xl:pb-[40px] xl:pb-[30px] md:pb-[26px] pb-[20px]'>
                <span className='text-[#656567] tracking-[-0.22px] 2xl:text-[18px] md:text-[13.5px] text-[11.22px]'>
                  Email Address
                </span>
                <Link
                  href='mailto:info@eltedge.io'
                  className='mt-[5px] flex font-semibold text-[#4B5563] 2xl:text-[20px] xl:text-[15px] text-[13.33px]'
                >
                  info@eltedge.io
                </Link>
              </div>
              <div className='flex flex-col border-b border-b-[#DCDCDC] 2xl:pb-[40px] xl:pb-[30px] md:pb-[26px] pb-[20px] 2xl:mt-[40px] xl:mt-[30px] md:mt-[26px] mt-[20px]'>
                <span className='text-[#656567] tracking-[-0.22px] 2xl:text-[18px] md:text-[13.5px] text-[11.22px]'>
                  Phone Number
                </span>
                <Link
                  href='tel:+919177444992'
                  className='mt-[5px] flex font-semibold text-[#4B5563] 2xl:text-[20px] xl:text-[15px] text-[13.33px]'
                >
                  +91 9177444992
                </Link>
              </div>
              <div className='flex flex-col 2xl:pb-[40px] xl:pb-[30px] md:pb-[26px] pb-[20px] 2xl:mt-[40px] xl:mt-[30px] md:mt-[26px] mt-[20px]'>
                <span className='text-[#656567] tracking-[-0.22px] 2xl:text-[18px] md:text-[13.5px] text-[11.22px]'>
                  Office Address
                </span>
                <Link
                  href='tel:+919177444992'
                  className='mt-[5px] flex font-semibold text-[#4B5563] 2xl:text-[20px] xl:text-[15px] text-[13.33px]'
                >
                  2nd Floor, Ashoka HiTech Chambers, Road No. 2, opp. KBR Park,
                  Banjara Hills, Hyderabad, Telangana 500034
                </Link>
              </div>
              <div className='rounded-[10px] overflow-hidden'>
                <iframe
                  className='w-full 2xl:h-[550px] lg:h-[470px] h-[450px]'
                  src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30453.907124137066!2d78.423904!3d17.424338!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb970d18993739%3A0x90c151e6974d10e8!2seLogicTech%20Edge!5e0!3m2!1sen!2sin!4v1738235240338!5m2!1sen!2sin'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUsWidgets
