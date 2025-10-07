import React from 'react'

interface ListData {
    leftTitle: string;
    rightDes: string;
  }
  
  interface CulturedPointsProps {
    listData: ListData[];
  }

  const CulturedPoints: React.FC<CulturedPointsProps> = ({ listData }) => {
  return (
    <>
        <ul className='list-none'>
            {listData.map((data,index)=>(
                <li key={index} className='border-t border-t-[rgba(255,255,255,0.5)] 2xl:pt-[25px] xl:pt-[20px] lg:pt-[20px] md:pt-[7px] pt-[18px] xl:pb-[15px] lg:pb-[11.5px] flex justify-between text-white 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px]'>
                    <div className='font-semibold capitalize pe-[15px] 2xl:w-[355px] xl:w-[205px] lg:w-[178px] md:w-[165px] sm:w-[160px] w-[120px]'>{data.leftTitle}</div>
                    <div className='font-normal 2xl:w-[464px] xl:w-[calc(100%_-_205px)] lg:w-[calc(100%_-_178px)] md:w-[calc(100%_-_165px)] sm:w-[calc(100%_-_160px)] w-[calc(100%_-_120px)] 2xl:h-[120px] xl:h-[80px] lg:h-[55px] md:h-[75px] h-auto md:pb-0 pb-5'>{data.rightDes}</div>
                </li>
            ))}
        </ul>
    </>
  )
}

export default CulturedPoints