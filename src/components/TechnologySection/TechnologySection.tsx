import TechnologyGrid from './TechnologyGrid'
import YourStack from './YourStack'

function TechnologySection() {
    return (
        <section>
            <div className="container mx-auto">
                <h2>Explore the Technologies</h2>

                <p>
                    Pick one technology per category to build your ideal stack.
                </p>

                <div>
                    <div>
                        <TechnologyGrid />
                    </div>

                    <div>
                        <YourStack />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechnologySection