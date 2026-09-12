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
    const getBadgeColor = () => technology.badge === "Popular" ? "badge-primary" : technology.badge === "Versatile" ? "badge-secondary" : technology.badge === "Fast" ? "badge-accent" : technology.badge === "SSR / Edge" ? "badge-info" : technology.badge === "Standard" ? "badge-info" : technology.badge === "Top SQL" ? "badge-success" : technology.badge === "Cache" ? "badge-warning" : technology.badge === "Ubiquitous" ? "badge-primary" : technology.badge === "Essential" ? "badge-error" : technology.badge === "Modern" ? "badge-accent" : technology.badge === "Containers" ? "badge-info" : technology.badge === "Robust" ? "badge-success" : "badge-neutral"

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

                <span className={`absolute top-0 right-0 badge badge-soft ${getBadgeColor()}`}>
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