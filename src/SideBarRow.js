import React from 'react';
import './SideBarRow.css';

function SideBarRow({ selected, Icon, title }) {
    return (
        <div className={`side_bar_row ${selected && 'selected'}`}>
            <Icon className='side_barrow_icon' />
            <h2 className='side_barrow_title'>{title}</h2>
        </div>
    )
}

export default SideBarRow
