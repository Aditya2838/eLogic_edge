import React from 'react'
import PageBanner from './_components/PageBanner'
import Approach from './_components/Approach'
import WhyChooseCard from './_components/WhyCard'
import TeamInfo from './_components/TeamInfo';
import WhatYouGiveUs from './_components/WhatYouGiveUs';
import DesignDevelop from './_components/DesignDevelop';
import TalkToExpert from '@/src/common/TalkToExpert';

function page() {
  const cardData = [
    {
      title: "Insights",
      cardTag:'Why Choose Us',
      description:"During our development process, we diligently gather insights from our design iterations: what succeeded, what fell short, and why certain solutions excel. We share these findings with your team in real-time, making it feel like the development is happening right next door.",
    },
    {
      title: "Control",
      cardTag:'Why Choose Us',
      description:"Our project management team employs industry-leading agile-for-hardware methodologies to keep the team on track and our results-oriented deliverables mean that work isn't accepted as complete until the quality is up to the exacting standards set forth in our agreement.",
    },
    {
      title: "Flexibility",
      cardTag:'Why Choose Us',
      description:"We love to think on our feet and solve actual problems! If a project/sprint we are working on is rendered unusable due to changing conditions on your end, we are more than happy to alter course and work to get us back on track.",
    },
    {
      title: "IP",
      cardTag:'Why Choose Us',
      description:"The protection of our clients' IP is our number-one priority! We believe that trust is the first step in collaboration and our agreement terms are stringently drafted to protect the clients' interests. We also adopt state-of-the-art IT infrastructure for data security.",
    },
  ];

  const listofData = [
    {cardTitle:'Concept:',
      listOfPoints:[
        {pointText:'Idea'},
        {pointText:'Sketch'},
        {pointText:'Model'},
        {pointText:'Block diagram'},
        {pointText:'Concept notes'},
        {pointText:'Concept renders'},
      ]
    },
    {cardTitle:'Specification Matrix:',
      listOfPoints:[
        {pointText:'Electrical specifications'},
        {pointText:'Mechanical specifications'},
        {pointText:'Computational resource &'},
        {pointText:'memory specifications'},
        {pointText:'Peripherals specifications'},
        {pointText:'Wireless specifications'},
        {pointText:'Environmental specifications'},
      ]
    },
    {cardTitle:'Functional Requirement:',
      listOfPoints:[
        {pointText:'Feature list'},
        {pointText:'Cross compatibility requirements'},
        {pointText:'Standards compliance requirements'},
        {pointText:'Form factor requirements'},
      ]
    },
    {cardTitle:'ReferenceProducts:',
      listOfPoints:[
        {pointText:'Alternative products'},
        {pointText:'Design inspirations'},
        {pointText:'User experience references'},
      ]
    },
    {cardTitle:'Commercial requirements:',
      listOfPoints:[
        {pointText:'Forecasted production volumes'},
        {pointText:'Production cost target'},
        {pointText:'Supply chain sourcing requirements'},
        {pointText:'Go-to market timeline'},
      ]
    },
  ]

  return (
    <>
        <PageBanner />
        <Approach />
        <WhyChooseCard cardData={cardData}/>
        <TeamInfo />
        <WhatYouGiveUs listofData={listofData}/>
        <DesignDevelop />
        <TalkToExpert/>
    </>
  )
}

export default page