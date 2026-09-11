import { use } from 'react'

function TechnologyGrid({ technologyPromise }) {
    const technologies = use(technologyPromise)
    console.log(technologies)
    return (
        <div>
            Technology Grid
        </div>
    )
}

export default TechnologyGrid