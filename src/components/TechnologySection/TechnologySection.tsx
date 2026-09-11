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
        <section>
            <div className="container mx-auto">
                <Suspense fallback={<h2>Loading.......</h2>}>
                    <h2>Explore the Technologies</h2>

                    <p>
                        Pick one technology per category to build your ideal stack.
                    </p>

                    <div>
                        <div>
                            <TechnologyGrid technologyPromise={technologyPromise}
                                selectedTechnologies={selectedTechnologies}
                                setSelectedTechnologies={setSelectedTechnologies}
                            />
                        </div>

                        <div>
                            <YourStack selectedTechnologies={selectedTechnologies}
                                setSelectedTechnologies={setSelectedTechnologies} />
                        </div>
                    </div>
                </Suspense>
            </div>
        </section>
    )
}

export default TechnologySection