function App() {
    return (
        <div className={'bg-black min-h-screen text-white flex items-center justify-center'}>
            <div className={'container mx-auto p-4 flex flex-col lg:flex-row items-center lg:items-start justify-center'}>
                {/* Left side content */}
                <div className={'flex flex-col items-center lg:items-start text-center lg:text-left p-4'}>
                    <div className={'border-2 border-gray-500 w-fit px-4 py-1 rounded-full text-sm font-semibold tracking-wider'}>
                        Cirurgião Plástico SBCP
                    </div>
                    <h1 className={'text-4xl md:text-6xl font-light mt-6'}>
                        Dr. Marlon <br />
                        Câmara Lopes
                    </h1>
                    <p className={'text-gray-400 max-w-sm mt-4 text-base md:text-lg'}>
                        Cirurgia plástica com excelência técnica, segurança e resultados naturais que realçam a sua beleza única.
                    </p>
                    <button className={'mt-8 px-6 py-3 border-2 border-white rounded-full flex items-center space-x-2 transition-colors duration-300 hover:bg-white hover:text-black'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="lucide lucide-message-circle w-5 h-5">
                            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                        </svg>
                        <span>Agende sua consulta</span>

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Right side image */}
                <div className={'mt-10 lg:mt-0 lg:ml-10'}>
                    {/* Replace 'path-to-your-image.jpg' with the actual path to the doctor's image */}
                    <img
                        src="./assets/DrMarlon.png"
                        alt="Dr. Marlon Câmara Lopes"
                        className={'rounded-full object-cover w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-gray-700'}
                    />
                </div>
            </div>
        </div>
    );
}


export default App;
