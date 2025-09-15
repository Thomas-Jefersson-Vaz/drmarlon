import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

function App() {
    return (
        <div className="bg-black text-white font-sans min-h-screen">
            {/* Navbar Section */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-md p-4 flex justify-between items-center text-sm lg:text-base">
                <a href="#home" className="flex items-center space-x-2">
                    <img src="/img.png" alt="Logo" className="w-8 h-8 rounded-full"/>
                    <span className="font-semibold hidden sm:block">Dr. Marlon</span>
                </a>
                <div className="flex space-x-4 lg:space-x-8">
                    <a href="#about" className="hover:text-gray-400">Quem é o Marlon?</a>
                    <a href="#formation" className="hover:text-gray-400">Formação</a>
                    <a href="#specialty" className="hover:text-gray-400">Especialidades</a>
                    <a href="#gallery" className="hover:text-gray-400">Galeria</a>
                    <a href="#contact" className="hover:text-gray-400">Contato</a>
                </div>
                <a href="https://api.whatsapp.com/send?phone=5542991316413" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-4 py-2 rounded-full hidden lg:block hover:bg-green-600 transition-colors">
                    Agende sua consulta
                </a>
            </nav>

            {/* Main Hero Section */}
            <section id="home" className="pt-24 lg:pt-32 pb-16 lg:pb-24">
                <div className="container mx-auto px-4 lg:px-16 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-10 lg:mb-0">
                        <div className="border border-white w-fit px-4 py-1 rounded-full text-sm font-semibold tracking-wider">
                            Cirurgião Plástico SBCP
                        </div>
                        <h1 className="text-4xl md:text-6xl font-light mt-6 leading-tight">
                            Dr. Marlon <br />
                            Câmara Lopes
                        </h1>
                        <p className="text-gray-400 max-w-sm mt-4 text-base md:text-lg">
                            Cirurgia plástica com excelência técnica, segurança e resultados naturais que realçam a sua beleza única.
                        </p>
                        <button className="mt-8 px-6 py-3 border-2 border-white rounded-full flex items-center space-x-2 transition-colors duration-300 hover:bg-white hover:text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
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
                    <div className="relative mt-10 lg:mt-0">
                        <img
                            src="/DrMarlon.png"
                            alt="Dr. Marlon Câmara Lopes"
                            className="rounded-full object-cover w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-black shadow-lg"
                        />
                        {/* Social media icons positioned over the image like in the video */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                            <a href="https://instagram.com/dr.marloncamaralopes" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="https://facebook.com/drmarloncamaralopes" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 lg:py-24 bg-gray-900">
                <div className="container mx-auto px-4 lg:px-16 flex flex-col items-center">
                    <h2 className="text-3xl md:text-4xl font-light mb-6">Quem é o Marlon?</h2>
                    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">
                        <img src="/Quem.png" alt="Dr. Marlon explicando" className="rounded-lg w-full lg:w-1/2 mb-8 lg:mb-0"/>
                        <div className="text-center lg:text-left lg:w-1/2 text-2xl">
                            <p className="text-gray-400 mb-4">
                                Com mais de uma década de experiência em cirurgia plástica, <b>Dr. Marlon Câmara Lopes</b> dedica-se a proporcionar resultados naturais e harmoniosos, sempre priorizando a segurança e o bem-estar de seus pacientes.
                            </p>
                            <p className="text-gray-400 mb-4">
                                Sua abordagem humanizada e técnica refinada garantem que cada procedimento seja personalizado, respeitando as características únicas de cada pessoa e suas expectativas.
                            </p>
                            <p className="text-gray-400">
                                A busca constante pelo aperfeiçoamento e pelas mais modernas técnicas cirúrgicas fazem de Dr. Marlon uma referência em cirurgia plástica na região.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Formation Section */}
            <section id="formation" className="py-16 lg:py-24">
                <div className="container mx-auto px-4 lg:px-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-light mb-12">Minha Formação</h2>
                    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center lg:space-x-16">
                        <div className="mb-8 lg:mb-0 lg:w-1/2 text-left">
                            <h3 className="text-xl font-semibold mb-4">Formação Acadêmica</h3>
                            <ul className="list-disc list-inside text-gray-400 space-y-2">
                                <li>Graduado em Medicina - Universidade Federal de Santa Catarina (2008)</li>
                                <li>Residência em Cirurgia Geral - Pontifícia Universidade Católica do Paraná (2011)</li>
                                <li>Residência em Cirurgia Plástica - Hospital das Clínicas UFPR</li>
                                <li>Especialização em Cirurgia Crânio-Maxilo-Facial - PR e Hospital Universitário Cajuru</li>
                                <li>Membro Titular da Sociedade Brasileira de Cirurgia Plástica (SBCP)</li>
                            </ul>
                        </div>
                        <div className="lg:w-1/2 text-left">
                            <h3 className="text-xl font-semibold mb-4">Experiência Profissional</h3>
                            <ul className="list-disc list-inside text-gray-400 space-y-2">
                                <li>Corpo Clínico do Hospital Santa Casa de Misericórdia - Ponta Grossa</li>
                                <li>Preceptor de Cirurgia Plástica - Hospital Universitário Evangélico de Curitiba</li>
                                <li>Médico do SAMU - Prefeitura Municipal de Curitiba</li>
                                <li>Especialista em Reconstrução de Mama</li>
                                <li>Ampla experiência em Cirurgia Geral e Cirurgia Plástica</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specialty Section */}
            <section id="specialty" className="py-16 lg:py-24 bg-gray-900">
                <div className="container mx-auto px-4 lg:px-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-light mb-12">Minha Especialidade</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <img src="/abdominoplastia.png" alt="Abdominoplastia" className="w-full h-48 object-cover rounded-md mb-4"/>
                            <h3 className="text-xl font-semibold mb-2">Abdominoplastia</h3>
                            <p className="text-gray-400 text-sm">Remoção do abdômen para um contorno mais harmônico</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <img src="/lipoaspiracao.jpg" alt="Lipoaspiração" className="w-full h-48 object-cover rounded-md mb-4"/>
                            <h3 className="text-xl font-semibold mb-2">Lipoaspiração</h3>
                            <p className="text-gray-400 text-sm">Remoção de gordura localizada com técnicas avançadas</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <img src="/rinoplastia.png" alt="Rinoplastia" className="w-full h-48 object-cover rounded-md mb-4"/>
                            <h3 className="text-xl font-semibold mb-2">Rinoplastia</h3>
                            <p className="text-gray-400 text-sm">Harmonização nasal respeitando as características faciais</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <img src="/mastopexia.png" alt="Mastopexia" className="w-full h-48 object-cover rounded-md mb-4"/>
                            <h3 className="text-xl font-semibold mb-2">Mastopexia</h3>
                            <p className="text-gray-400 text-sm">Elevação e remodelação das mamas com resultados naturais</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <img src="/lifting-facial.png" alt="Lifting Facial" className="w-full h-48 object-cover rounded-md mb-4"/>
                            <h3 className="text-xl font-semibold mb-2">Lifting Facial</h3>
                            <p className="text-gray-400 text-sm">Rejuvenescimento facial com técnicas minimamente invasivas</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <img src="/ginecomastia.png" alt="Ginecomastia" className="w-full h-48 object-cover rounded-md mb-4"/>
                            <h3 className="text-xl font-semibold mb-2">Ginecomastia</h3>
                            <p className="text-gray-400 text-sm">Correção do aumento das mamas masculinas</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="py-16 lg:py-24">
                <div className="container mx-auto px-4 lg:px-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-light mb-6">Galeria da Clínica</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-12">
                        Conheça nossa estrutura moderna e segura, projetada para oferecer o máximo de conforto e tranquilidade aos nossos pacientes.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <img src="/clinica1.jpg" alt="Clínica 1" className="w-full h-64 object-cover rounded-lg"/>
                        <img src="/clinica2.jpg" alt="Clínica 2" className="w-full h-64 object-cover rounded-lg"/>
                        <img src="/clinica3.jpg" alt="Clínica 3" className="w-full h-64 object-cover rounded-lg"/>
                    </div>
                    <p className="text-gray-500 text-sm mt-4">
                        Ambiente seguro e acolhedor com tecnologia de ponta para sua tranquilidade
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 lg:py-24 bg-gray-900">
                <div className="container mx-auto px-4 lg:px-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-light mb-6">Entre em contato</h2>
                    <p className="text-gray-400 max-w-lg mx-auto mb-12">
                        Agende sua consulta e dê o primeiro passo para realizar seus objetivos estéticos
                    </p>
                    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-around space-y-8 lg:space-y-0 lg:space-x-12">
                        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                            <h3 className="text-xl font-semibold mb-4">Localização</h3>
                            <div className="flex items-center space-x-2 text-gray-400">
                                <MapPin size={20} className="text-white"/>
                                <span>Rua Nestor Guimarães, 281<br/>Estrela, Ponta Grossa - PR</span>
                            </div>
                            <div className="mt-6 w-full max-w-md h-64 bg-gray-800 rounded-lg overflow-hidden">
                                <iframe
                                    title="Google Maps Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.6033100690184!2d-50.15570882414732!3d-25.09341497782729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e803d9d3002273%3A0x63347b7a2d82939b!2sR.%20Nestor%20Guimar%C3%A3es%2C%20281%20-%20Estrela%2C%20Ponta%20Grossa%20-%20PR%2C%2084040-390!5e0!3m2!1spt-BR!2sbr!4v1715878239088!5m2!1spt-BR!2sbr"
                                    width="100%"
                                    height="100%"
                                    style={{border:0}}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                            <a href="https://maps.app.goo.gl/YourGoogleMapsLink" target="_blank" rel="noopener noreferrer" className="mt-4 text-blue-400 hover:underline">Ver no Google Maps</a>
                        </div>

                        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Instagram</h3>
                                <a href="https://instagram.com/drmarloncamaralopes" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-white">
                                    <Instagram size={20}/>
                                    <span>@dr.marloncamaralopes</span>
                                </a>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Telefone</h3>
                                <div className="flex flex-col items-center lg:items-start space-y-2">
                                    <a href="tel:+5542991316413" className="flex items-center space-x-2 text-gray-400 hover:text-white">
                                        <Phone size={20}/>
                                        <span>(42) 99131-6413</span>
                                    </a>
                                    <a href="https://api.whatsapp.com/send?phone=5542991316413" target="_blank" rel="noopener noreferrer" className="text-blue-400 flex items-center space-x-2 hover:underline">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle-code"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="m10 14-2 2-2-2"/><path d="m14 14 2 2 2-2"/></svg>
                                        <span>Agende sua consulta pelo WhatsApp</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-6 text-center text-gray-500 text-sm">
                <p>Desenvolvido por Thomas Jefersson Vaz e Pedro Menchon</p>
            </footer>
        </div>
    );
}

export default App;
