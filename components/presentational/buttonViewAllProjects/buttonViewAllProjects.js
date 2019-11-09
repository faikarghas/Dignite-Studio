import React from 'react'
import Link from 'next/link'
import useTranslation from '../../../hooks/useTranslation'

const ButtonViewAllProjects = () => {
    const {locale,t} = useTranslation()
    return (
        <div className="view_allpr">
            <Link  href="/[langs]/work" as={`/${locale}/work`}><a>View all our projects</a></Link>
        </div>
    )
}

export default ButtonViewAllProjects
