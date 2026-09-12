import TechnologyGrid from './TechnologyGrid'
import YourStack from './YourStack'
import { Suspense, useState } from 'react'
import type { Tech } from '../../types/Tech'

const technologyFetch = async (): Promise<Tech[]> => {
    const res = await fetch("/technologies.json");
    const data = await res.json();
    return data;
};

function TechnologySection() {
    const [selectedTechnologies, setSelectedTechnologies] = useState<Tech[]>([])
    console.log(selectedTechnologies)
    const [technologyPromise] = useState(() => technologyFetch())
    return (
        <section className="-mt-10 md:py-5">
            <div className="container mx-auto px-6">

                <div className="mb-2 md:mb-8">
                    <h2 className="text-[25px] text-center md:text-4xl md:text-start font-extrabold">Explore the <span className="text-pink-500">Technologies</span>
                    </h2>

                    <p className="mt-3 text-[15px] md:text-[17px] text-center md:text-start text-gray-600">
                        Pick one technology per category to build your ideal stack.
                    </p>
                </div>

                <Suspense fallback={
                    <div className="flex justify-center py-8">
                        <button className="btn">
                            <span className="loading loading-spinner"></span>
                            loading
                        </button>
                    </div>
                }>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        <div className="lg:col-span-3">
                            <TechnologyGrid technologyPromise={technologyPromise}
                                selectedTechnologies={selectedTechnologies}
                                setSelectedTechnologies={setSelectedTechnologies}
                            />
                        </div>

                        <div className="lg:col-span-1">
                            <YourStack selectedTechnologies={selectedTechnologies}
                                setSelectedTechnologies={setSelectedTechnologies} />
                        </div>
                    </div>
                </Suspense>
            </div >
        </section >
    )
}

export default TechnologySection