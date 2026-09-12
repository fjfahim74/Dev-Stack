import HeroPicture from '../../assets/banner-stack.png' //
import { brandGradient } from '../../brand'

export default function Hero() {

    return (
        <section className="container mx-auto grid md:grid-cols-2 items-center gap-6 px-4 py-10 md:py-16">

            {/* Left Side */}
            <div className="max-w-160 text-center md:text-left">
                <h1 className="text-3xl lg:text-6xl font-extrabold leading-tight">
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

                <p className="mt-4 text-base lg:text-lg text-gray-600">
                    Explore frontend, backend, database, and tooling options, compare them side by side,
                    and put together the stack that fits your next project.
                </p>

                <div className="mt-6 flex justify-center lg:justify-start gap-4">
                    <button
                        type="button"
                        className="rounded-[10px] w-40 sm:w-50 h-12 text-sm sm:text-base text-white shadow-md"
                        style={{ background: brandGradient }}
                    >
                        Explore Technologies
                    </button>

                    <button
                        type="button"
                        className="rounded-[10px] w-40 sm:w-50 h-12 text-sm sm:text-base border border-gray-300 hover:border-gray-400"
                    >
                        Learn More
                    </button>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex justify-center -mt-7 md:justify-end md:my-0">
                <img
                    src={HeroPicture}
                    alt="Right Side Picture"
                    className="w-full scale-140 md:scale-100 md:max-w-130"
                />
            </div>
        </section>
    )
}