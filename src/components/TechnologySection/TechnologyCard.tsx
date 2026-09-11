import { type Dispatch, type SetStateAction } from 'react'
import type { Tech } from '../../types/Tech'
import { toast } from 'react-toastify'


interface TechnologyCardProps {
    technology: Tech
    selectedTechnologies: Tech[]
    setSelectedTechnologies: Dispatch<SetStateAction<Tech[]>>
}

function TechnologyCard({
    technology,
    selectedTechnologies,
    setSelectedTechnologies,
}: TechnologyCardProps) {

    const isSelected = selectedTechnologies.some(
        (item) => item.id === technology.id
    )

    const handleSelectTechnology = () => {


        setSelectedTechnologies([...selectedTechnologies, technology])
        toast.success(`${technology.name} is added successfully`)
    }

    return (
        <div>
            <h3>{technology.name}</h3>

            <button
                onClick={handleSelectTechnology}
                disabled={isSelected}
            >
                {isSelected === true ? "✓ Added to Stack" : "Add to Stack"}
            </button>
        </div>
    )
}

export default TechnologyCard