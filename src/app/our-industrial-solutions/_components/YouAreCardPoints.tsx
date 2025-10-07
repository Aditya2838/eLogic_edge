import React from 'react'

interface decListData{
    listTitle: string
    orderListData: orderListData[]
}

interface orderListData{
    subTitle: string
}

interface YouAreCardPointsProps{
    decListData:decListData[]
}

const YouAreCardPoints:React.FC <YouAreCardPointsProps> = ({decListData}) => {
  return (
    <>
        <ul className='list-decimal ps-[17px] text-white font-semibold 2xl:text-[20px] xl:text-[15px] md:text-[13.33px] text-[15.24px]'>
            {decListData.map((data,index)=>(
                <li key={index}>
                    {data.listTitle}
                    <ol className='list-disc'>
                        {data.orderListData.map((item,subindex)=>(
                            <li key={subindex}>
                                {item.subTitle}
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ul>
    </>
  )
}

export default YouAreCardPoints