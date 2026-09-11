import type { Dispatch, SetStateAction } from 'react'
import type { Tech } from '../../types/Tech'
import StackItem from './StackItem'
import { toast } from 'react-toastify'


interface YourStackProps {
    selectedTechnologies: Tech[]
    setSelectedTechnologies: Dispatch<SetStateAction<Tech[]>>
}

function YourStack({
    selectedTechnologies,
    setSelectedTechnologies,
}: YourStackProps) {
    const handleRemoveAll = () => {
        setSelectedTechnologies([])
        toast.success("All technologies are removed successfully")
    }
    if (selectedTechnologies.length === 0) {
        return (
            <div>
                No technologies added yet.
            </div>
        )
    }
    return (
        <div>
            <h2>Your Stack</h2>

            <p>{selectedTechnologies.length} selected</p>

            <button onClick={handleRemoveAll}>
                Remove All
            </button>
            {selectedTechnologies.map((technology: Tech, ind: number) => {
                return (
                    <StackItem
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

export default YourStack