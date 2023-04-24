import './Navigation.css'
import Folder from '../Folder/Folder'
 

function Navigation() {
    const files = ["Intro", "Me"]
    return (
        <div className="navigation">
            <Folder files={files}>Intro</Folder>
        </div>
    )
}

export default Navigation;