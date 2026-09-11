import {
    use, type Dispatch,
    type SetStateAction,
} from 'react'
import type { Tech } from '../../types/Tech'
import TechnologyCard from './TechnologyCard'

interface TechnologyGridProps {
    technologyPromise: Promise<Tech[]>
    selectedTechnologies: Tech[]
    setSelectedTechnologies: Dispatch<SetStateAction<Tech[]>>
}

function TechnologyGrid({ technologyPromise, selectedTechnologies,
    setSelectedTechnologies, }: TechnologyGridProps) {
    const technologies = use(technologyPromise)
    console.log(technologies)
    return (
        <div>
            {technologies.map((technology: Tech, ind: number) => {
                return (
                    <TechnologyCard
                        key={ind}
                        technology={technology}
                        selectedTechnologies={selectedTechnologies}
                        setSelectedTechnologies={setSelectedTechnologies}
                    />
                )
            })}
        </div>
    )
}

export default TechnologyGrid