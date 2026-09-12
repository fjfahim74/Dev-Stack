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
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Your Stack</h3>
                    <p className="text-sm text-gray-400 mt-1">No technologies added yet.</p>
                </div>

                <div className="mt-4 border-dashed border-2 border-gray-200 rounded-lg p-6 text-center text-gray-400">
                    Your Stack is empty.
                </div>
            </div>
        )
    }
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <div className="flex items-start justify-between">
                <div>
                    <h3 className="font-semibold text-lg">Your Stack</h3>

                    <p className="text-sm text-gray-500  mt-1">{selectedTechnologies.length} Technology selected</p>
                </div>

                <div className="mt-4">
                    <button type="button" onClick={handleRemoveAll} className="w-full py-2 px-4 rounded-md border border-red-200 text-red-600 font-medium hover:bg-red-50">
                        Remove All
                    </button>
                </div>

            </div>

            <div className="mt-4 space-y-3">
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
        </div>
    )
}

export default YourStack