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
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">

            <div className="relative">



                <h3 className="font-semibold text-lg">
                    {technology.name}
                </h3>

                <img src={technology.icon} alt={technology.name} className="w-12 h-12 mt-4" />


                <p className="text-sm text-gray-500 mt-4">
                    {technology.description}
                </p>


                <span className="absolute top-0 right-0 text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                    {technology.badge}
                </span>



                <div className="mt-6 flex items-center justify-between">
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {technology.category}
                    </span>

                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {technology.difficulty}
                    </span>

                    <span className="text-sm">
                        ⭐ {technology.rating}
                    </span>
                </div>
            </div>

            <div className="mt-5">
                <button
                    onClick={handleSelectTechnology}
                    disabled={isSelected}
                    type="button"
                    className={`w-full px-4 py-2 rounded-md ${isSelected
                        ? 'bg-gray-200 text-gray-600'
                        : 'bg-black text-white hover:bg-gray-900'
                        }`}
                >
                    {isSelected === true ? "✓ Added to Stack" : "Add to Stack"}
                </button>

            </div>

        </div >
    )
}

export default TechnologyCard