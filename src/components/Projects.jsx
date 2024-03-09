import { DatePicker, Tabs } from 'antd'
import React, { useState } from 'react'
import AllProjects from './AllProjects';
import { projects } from '../constant';

const Projects = () => {
    const [items, setItems] = useState([
        // {
        //     key: '1',
        //     label: 'All',
        //     children: <AllProjects data={projects}/>,
        // },
        {
            key: '1',
            label: 'Autocad',
            children:  <AllProjects data={projects.filter((item)=>item.category === "Autocad")}/>,
        },
        {
            key: '2',
            label: 'Revit',
            children:  <AllProjects data={projects.filter((item)=>item.category === "Revit")}/>,
        },
        {
            key: '3',
            label: 'SketchUp',
            children:  <AllProjects data={projects.filter((item)=>item.category === "Sketch")}/>,
        },
        {
            key: '4',
            label: 'Civil3d',
            children:  <AllProjects data={projects.filter((item)=>item.category === "Civil3d")}/>,
        },
    ]);
    return (
        <div className='mt-10' id='Projects'>
            <div className='text-white flex justify-center items-center'>
                <h1 className='text-3xl'>My Projects</h1>
            </div>
            <div className='px-6'>
                <Tabs items={items} />
            </div>
        </div>
    )
}

export default Projects
