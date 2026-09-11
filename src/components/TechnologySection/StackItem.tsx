import type { Dispatch, SetStateAction } from 'react'
import type { Tech } from '../../types/Tech'
import { toast } from 'react-toastify'

interface StackItemProps {
    technology: Tech
    selectedTechnologies: Tech[]
    setSelectedTechnologies: Dispatch<SetStateAction<Tech[]>>
}

function StackItem({
    technology,
    selectedTechnologies,
    setSelectedTechnologies,
}: StackItemProps) {
    const handleRemoveTechnology = () => {
        const remainingTechnologies = selectedTechnologies.filter(
            (item) => item.id !== technology.id
        )

        setSelectedTechnologies(remainingTechnologies)
        toast.success(`${technology.name} is removed successfully`)
    }

    return (
        <div>
            <span>{technology.name}</span>

            <button onClick={handleRemoveTechnology}>
                X
            </button>
        </div>
    )
}

export default StackItem