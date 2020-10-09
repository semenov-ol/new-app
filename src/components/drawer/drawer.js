import React from 'react';
import './drawer.css'

const Drawer = () => {
    return (
        <div className='Drawer'>
            <div className='Logo'>
                <div className='logo-text'>Logo</div>
                <div className='title'>
                    <div className='personal'>
                        Personal
                    </div>
                    <div className='project'>
                        projects.com
                    </div>
                </div>
                    <div className='buttons'>
                        <div className='button-active'><div>HOME</div></div>
                        <div className='button'><div>LEARN</div></div>
                    </div>
                <div className='second-buttons'>
                    <div className='buttons-title'>YOUR WORK</div>
                    <div className='button'><div>Cloud Documents</div></div>
                    <div className='button'><div>Plugins</div></div>
                    <div className='button'><div>Deleted</div></div>
                </div>
                <button className='create-new-btn'>Create New</button>
                <button className='open-btn'>Open</button>
                <div className='small-logo'><div className='small-logo-text'>Logo</div></div>
            </div>
        </div>
    )
}

export default Drawer;
