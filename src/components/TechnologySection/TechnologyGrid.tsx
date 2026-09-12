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
        <div className="py-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
    )
}

export default TechnologyGrid