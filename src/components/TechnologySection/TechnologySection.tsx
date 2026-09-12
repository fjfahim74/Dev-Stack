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
        <section className="py-12">
            <div className="container mx-auto px-6">
                <Suspense fallback={<h2 className="text-center py-8">Loading.......</h2>}>
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-extrabold">Explore the <span className="text-pink-500">Technologies</span>
                        </h2>

                        <p className="mt-3 text-gray-600">
                            Pick one technology per category to build your ideal stack.
                        </p>
                    </div>


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