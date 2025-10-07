import React from 'react'

interface infoStepData{
    bgCard: string
    cardTag: string
    cardTitle: string
    tagColor: string
    titleColor: string
    cardListPoints:cardListPoints[]
}

interface cardListPoints {
    pointText: string
    pointColor:string
}

interface StepInfoCardProps{
    infoStepData:infoStepData[]
}

const StepInfoCard:React.FC <StepInfoCardProps> = ({infoStepData}) => {
  return (
    <>
        {infoStepData.map((data,index)=>(
            <>
          <div className={`2xl:px-[80px] xl:px-[60px] lg:px-[53px] md:px-[35px] px-[20px] 2xl:py-[40px] xl:py-[30px] md:py-[26px] py-[20px] flex justify-between items-start 2xl:rounded-[15px] xl:rounded-[12px] md:rounded-[11px] rounded-[10px] max-[991px]:flex-wrap max-[991px]:flex-col max-[991px]:gap-[25px] ${data.bgCard}`} key={index}>
                <div className=''>
                    <span className={`font-semibold 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[13.5px] ${data.tagColor}`}>{data.cardTag}</span>
                    <h2 className={`font-semibold 2xl:text-[32px] xl:text-[28px] md:text-[25px] text-[22px] text-nowrap ${data.titleColor}`}>{data.cardTitle}</h2>
                </div>
                <div className='2xl:w-[651px] xl:w-[490px] lg:w-[435px] max-[991px]:w-full'>
                    <ul className='ps-[17px] list-disc grid grid-cols-2 max-[575px]:!grid-cols-1 2xl:gap-5 xl:gap-4 md:gap-3 gap-2.5'>
                        {data.cardListPoints.map((item,subindex)=>(
                            <li className={`2xl:text-[18px] xl:text-[13.5px] text-[12px] ${item.pointColor}`} key={subindex}>
                                {item.pointText}
                            </li>
                        ))}
                    </ul>
                </div>
             </div>
            </>
        ))}
    </>
  )
}

export default StepInfoCard