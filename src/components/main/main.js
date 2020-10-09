import React from 'react'
import './main.css'
import Block from "../block/block";
import RightDrawer from "../right-drawer/right-drawer";

const Main = () => {
    return (
        <div>
        <div className='Main'>
            <div className='main-title'>Build Your Skills</div>
            <div className='main-description'>Find information that may be useful to you</div>
            <div className='blocks'>
                <Block title='Mobile App' desc='Building Blocks for a Successful App'/>
                <Block title='Mobile App' desc='Building Blocks for a Successful App'/>
                <Block title='Mobile App' desc='Building Blocks for a Successful App'/>
                <Block title='Mobile App' desc='Building Blocks for a Successful App'/>
            </div>
            <div className='learn-more'>Learn More</div>

            <div className='main-content'>
            <div className='main-title2'>Recent Projects</div>
                <div className='main-description'>Continue working on your latest files created </div>
                <div className='blocks'>
                <Block title='Mobile App Essentials' desc='4 days ago' />
                <Block title='Mobile App Essentials' desc='4 days ago' />
                <Block title='Mobile App Essentials' desc='4 days ago' />
                <Block title='Mobile App Essentials' desc='4 days ago' />
                </div>
                <div className='blocks'>
                    <Block title='Mobile App Essentials' desc='4 days ago' />
                    <Block title='Mobile App Essentials' desc='4 days ago' />
                    <Block title='Mobile App Essentials' desc='4 days ago' />
                    <Block title='Mobile App Essentials' desc='4 days ago' />
                </div>
                <div className='search'>Search
                <input type='text' placeholder='search recent projects'/></div>
            </div>

        </div>
            <RightDrawer/>
        </div>
    )
};

export default Main;
