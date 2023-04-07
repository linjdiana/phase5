import { useState } from 'react';

function ChefCard({ chefObject }) {
    const { name, image, bio } = chefObject
    const [ showBio, setShowBio] = useState(false)
    function handleClick() {
        setShowBio((currentBio) => !currentBio)
    }

    const bioText = showBio ? <p>{bio}</p> : null;
    const buttonText = showBio ? "Hide Bio" : "Show Bio"
    
    return (
        <div className="chefcard">

        </div>
    )
}

export default ChefCard