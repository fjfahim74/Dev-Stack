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
        <div className="flex items-center justify-between gap-3 p-3 rounded-md border border-gray-200 bg-white">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-gray-50 flex items-center justify-center">

                    <img src={technology.icon} alt={technology.name} className="w-6 h-6" />
                </div>

                <div>
                    <div className="text-sm font-semibold text-gray-800">{technology.name}</div>
                    <div className="text-xs text-gray-400">{technology.category}
                    </div>
                </div>
            </div>

            <button type="button" onClick={handleRemoveTechnology}
                aria-label={`Remove ${technology.name}`}
                className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-blue-50">
                X
            </button>
        </div>
    )
}

export default StackItem