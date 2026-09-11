import HeroPicture from '../../assets/banner-stack.png' // 

export default function Hero() {
    const brandGradient = 'linear-gradient(90deg, #ff7a18 0%, #ff5a8d 50%, #7c4dff 100%)'

    return (
        <section className="container mx-auto grid md:grid-cols-2 items-center gap-8 px-6 py-12 md:py-20">

            {/* Left Side */}
            <div className="max-w-160">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                    Build Your Ideal
                    <span
                        className="block mt-1"
                        style={{
                            background: brandGradient,
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}
                    >
                        Development Stack
                    </span>

                </h1>

                <p className="mt-4 text-gray-600">
                    Explore frontend, backend, database, and tooling options, compare them side by side,
                    and put together the stack that fits your next project.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                    <button
                        type="button"
                        className="rounded-md px-5 py-2 text-white shadow-md"
                        style={{ background: brandGradient }}
                    >
                        Explore Technologies
                    </button>

                    <button
                        type="button"
                        className="rounded-md px-5 py-2 border border-gray-300 hover:border-gray-400"
                    >
                        Learn More
                    </button>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex justify-center md:justify-end">
                <img
                    src={HeroPicture}
                    alt="Right Side Picture"
                    className="max-w-90 w-full"
                />
            </div>
        </section>
    )
}