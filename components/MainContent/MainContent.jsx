import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import MiddlePart from '../MiddlePart/MiddlePart'
import Slider from '../Slider/Slider'

const MainContent = () => {
  return (
    <main>
       <div className="container mx-auto">
            <div className="flex relative perspective-[600px]">
                <Sidebar />
                <MiddlePart />
                <Slider />
            </div>
        </div> 
    </main>
  )
}

export default MainContent