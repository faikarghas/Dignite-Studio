import React from 'react'
import Link from 'next/link'

const ButtonViewAllProjects = () => {
    return (
        <div className="view_allpr">
            <Link  href="/work"><a>View all our projects</a></Link>
        </div>
    )
}

export default ButtonViewAllProjects
