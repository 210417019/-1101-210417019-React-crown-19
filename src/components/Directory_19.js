import React, { useState } from 'react';
import './Directory_19.scss'
import MenuItem_19 from '../components/MenuItem_19';
import items from './menu-items-data'

const Directory_19 = () => {
    const [menuItems, setMenuItems] = useState(items);
    console.log('menuItems',menuItems);
    return(
        <div className="directory-menu">
          { menuItems.map( item => {
              const {id, name, remoteUrl, size} = item;
              return (
                <MenuItem_19 id={id} name={name} remoteUrl={remoteUrl} size={size}/>
              )
          })

          }
        </div>
    )
}

export default Directory_19;


