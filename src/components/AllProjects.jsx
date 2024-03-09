// import { Col, Grid, Row } from 'antd'
import React from 'react'
import adrawing from "../assets/adrawing.png"
import beam from "../assets/beam.png"
import column from "../assets/column.png"
import foundation from "../assets/foundation.png"
import palace from "../assets/Palace.jpg"
import banglow from "../assets/Banglow.jpg"
import corner from "../assets/Corner.jpeg"
import archhouse from "../assets/ArchHouse.jpg"
import hin from "../assets/houseInnoon.png"
import him from "../assets/HouseInMorning.png"
import him2 from "../assets/HouseInMor2.png"
import hie from "../assets/HouseInEvening.png"
import section from "../assets/section.png"
import surface from "../assets/surface.png"
import attain from "../assets/Attainment.png"
import vertical from "../assets/vertical.png"
const AllProjects = ({ data }) => {
    const pics = {
        Adrawing: adrawing,
        Beam: beam,
        Column: column,
        Foundation: foundation,
        Palace: palace,
        Banglow: banglow,
        Corner: corner,
        ArchHouse: archhouse,
        HouseInNoon: hin,
        HouseinMorning: him,
        HouseinEvening: hie,
        HouseinMorning2: him2,
        Section: section,
        Surface: surface,
        Attainment: attain,
        Vertical: vertical
    }
    return (
        <div className='py-7'>
            <div className="flex justify-center items-center flex-wrap w-[100%] gap-x-4 gap-y-6">
                {data?.map((item, index) => {
                    const picture = pics[item?.img]
                    return (

                        <div className='w-[100%] border-2 border-red-50 md:w-[70%] lg:w-[30%] 2xl:w-[20%] h-[300px]' key={index}>
                            <div className='w-[100%] h-[80%] p-3'>
                                <img src={picture} alt="" className='w-[100%] h-[100%]' />
                            </div>
                            <hr />
                            <h2 className='text-white text-center mt-4 text-2xl'>{item?.name}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AllProjects
