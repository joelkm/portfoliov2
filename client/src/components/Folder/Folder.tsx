import React, { useState } from 'react'

function Folder(files) {
    const [state, setState] = useState(false);
    const toggleFolder = () => {
        if (state) {
            setState(false);
        } else {
            setState(true);
        }
    }

    const listFile = files.map(file => 
        <li>
            {file.name}
        </li>
    )

    return ( 
        <li>
            <button><i className="fa-solid fa-angle-right"></i><i className="fa-solid fa-folder"></i>Intro</button>
            {state ?(<ul>
                {listFile}
            </ul>):
            null}
            
        </li>
    )
}