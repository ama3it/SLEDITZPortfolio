import About from "../About/About";
import Projects from "../Projects/Projects";


const Contact = () => {
  return (
    <section className="relative overflow-hidden md:py-24 py-16">
      <About />

    

      {/* Services Demo */}

      <Projects />

      {/* 
        <div className="container relative lg:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-6 text-center">
                <h3 className="mb-4 md:text-2xl text-xl font-medium">Customer's Review</h3>

                <p className="text-slate-400 dark:text-white/60 max-w-xl mx-auto">This is just a simple text made for this
                    unique and awesome template, you can replace it with any text.</p>
            </div>

            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-6 gap-6">
                <ul className="space-y-6">
                    <li className="rounded-xl shadow dark:shadow-gray-800 p-6 bg-white dark:bg-slate-900">
                        <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                            <img src="assets/img/01.jpg" className="h-14 w-14 rounded-full shadow dark:shadow-gray-800"
                                alt="">

                            <div className="ps-3">
                                <a href="" className="text-[16px] font-medium hover:text-blue-500 duration-500">Thomas
                                    Israel</a>
                                <p className="text-slate-400 dark:text-white/60">C.E.O</p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <p className="text-slate-400 dark:text-white/60">I didn't know a thing about icon design until I
                                read this book. Now I can create any icon I need in no time. Great resource!</p>
                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                            </ul>
                        </div>
                    </li>

                    <li className="rounded-xl shadow dark:shadow-gray-800 p-6 bg-white dark:bg-slate-900">
                        <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                            <img src="assets/img/05.jpg" className="h-14 w-14 rounded-full shadow dark:shadow-gray-800"
                                alt="">

                            <div className="ps-3">
                                <a href="" className="text-[16px] font-medium hover:text-blue-500 duration-500">Barbara
                                    McIntosh</a>
                                <p className="text-slate-400 dark:text-white/60">C.E.O</p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <p className="text-slate-400 dark:text-white/60">There
                                are so many things I had to do with my old software that I just don't
                                do at all with Techwind. Suspicious but I can't say I don't love it.</p>
                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                            </ul>
                        </div>
                    </li>
                </ul>

                <ul className="space-y-6 hidden sm:block">
                    <li className="rounded-xl shadow dark:shadow-gray-800 p-6 bg-white dark:bg-slate-900">
                        <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                            <img src="assets/img/02.jpg" className="h-14 w-14 rounded-full shadow dark:shadow-gray-800"
                                alt="">

                            <div className="ps-3">
                                <a href="" className="text-[16px] font-medium hover:text-blue-500 duration-500">Carl
                                    Oliver</a>
                                <p className="text-slate-400 dark:text-white/60">C.E.O</p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <p className="text-slate-400 dark:text-white/60">The
                                best part about Techwind is every time I pay my employees, my bank
                                balance doesn't go down like it used to. Looking forward to spending
                                this extra cash when I figure out why my card is being declined.</p>
                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                            </ul>
                        </div>
                    </li>

                    <li className="rounded-xl shadow dark:shadow-gray-800 p-6 bg-white dark:bg-slate-900">
                        <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                            <img src="assets/img/04.jpg" className="h-14 w-14 rounded-full shadow dark:shadow-gray-800"
                                alt="">

                            <div className="ps-3">
                                <a href="" className="text-[16px] font-medium hover:text-blue-500 duration-500">Jill
                                    Webb</a>
                                <p className="text-slate-400 dark:text-white/60">C.E.O</p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <p className="text-slate-400 dark:text-white/60">I'm
                                trying to get a hold of someone in support, I'm in a lot of trouble
                                right now and they are saying it has something to do with my books.
                                Please get back to me right away.</p>
                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                            </ul>
                        </div>
                    </li>
                </ul>

                <ul className="space-y-6 hidden lg:block">
                    <li className="rounded-xl shadow dark:shadow-gray-800 p-6 bg-white dark:bg-slate-900">
                        <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                            <img src="assets/img/03.jpg" className="h-14 w-14 rounded-full shadow dark:shadow-gray-800"
                                alt="">

                            <div className="ps-3">
                                <a href="" className="text-[16px] font-medium hover:text-blue-500 duration-500">Barbara
                                    McIntosh</a>
                                <p className="text-slate-400 dark:text-white/60">C.E.O</p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <p className="text-slate-400 dark:text-white/60">I
                                used to have to remit tax to the EU and with Techwind I somehow don't
                                have to do that anymore. Nervous to travel there now though.</p>
                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                            </ul>
                        </div>
                    </li>

                    <li className="rounded-xl shadow dark:shadow-gray-800 p-6 bg-white dark:bg-slate-900">
                        <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                            <img src="assets/img/06.jpg" className="h-14 w-14 rounded-full shadow dark:shadow-gray-800"
                                alt="">

                            <div className="ps-3">
                                <a href="" className="text-[16px] font-medium hover:text-blue-500 duration-500">Janisha
                                    Doll</a>
                                <p className="text-slate-400 dark:text-white/60">C.E.O</p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <p className="text-slate-400 dark:text-white/60">This
                                is the fourth email I've sent to your support team. I am literally
                                being held in jail for tax fraud. Please answer your damn emails, this
                                is important.</p>
                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div className="container relative lg:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-6 text-center">
                <h3 className="mb-4 md:text-2xl text-xl font-medium">Meet Our Teammates</h3>

                <p className="text-slate-400 dark:text-white/60 max-w-xl mx-auto">This is just a simple text made for this
                    unique and awesome template, you can replace it with any text.</p>
            </div>

            <div className="grid md:grid-cols-12 grid-cols-1 mt-6 gap-6">
                <div className="lg:col-span-3 md:col-span-6">
                    <div className="group text-center">
                        <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                            <img src="assets/img/04.jpg" className="" alt="">

                            <ul
                                className="list-none absolute top-1/2 -translate-y-1/2 -end-20 group-hover:end-5 transition-all duration-500 ease-in-out">
                                <li className=""><a href=""
                                        className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600 text-white"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            className="feather feather-facebook h-4 w-4">
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z">
                                            </path>
                                        </svg></a></li>
                                <li className="mt-1"><a href=""
                                        className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600 text-white"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            className="feather feather-instagram h-4 w-4">
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                        </svg></a></li>
                                <li className="mt-1"><a href=""
                                        className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600 text-white"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            className="feather feather-linkedin h-4 w-4">
                                            <path
                                                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                                            </path>
                                            <rect x="2" y="9" width="4" height="12"></rect>
                                            <circle cx="4" cy="4" r="2"></circle>
                                        </svg></a></li>
                            </ul><!--end icon-->
                        </div>

                        <div className="content mt-3">
                            <a href="" className="text-lg font-medium hover:text-blue-500 duration-500">Jack John</a>
                            <p className="text-slate-400 dark:text-white/60">Designer</p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-3 md:col-span-6">
                    <div className="group text-center">
                        <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                            <img src="assets/img/05.jpg" className="" alt="">

                            <ul
                                className="list-none absolute top-1/2 -translate-y-1/2 -end-20 group-hover:end-5 transition-all duration-500 ease-in-out">
                                <li className=""><a href=""
                                        className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600 text-white"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            className="feather feather-facebook h-4 w-4">
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z">
                                            </path>
                                        </svg></a></li>
                                <li className="mt-1"><a href=""
                                        className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600 text-white"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            className="feather feather-instagram h-4 w-4">
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                        </svg></a></li>
                                <li className="mt-1"><a href=""
                                        className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600 text-white"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            className="feather feather-linkedin h-4 w-4">
                                            <path
                                                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                                            </path>
                                            <rect x="2" y="9" width="4" height="12"></rect>
                                            <circle cx="4" cy="4" r="2"></circle>
                                        </svg></a></li>
                            </ul><!--end icon-->
                        </div>

                        <div className="content mt-3">
                            <a href="" className="text-lg font-medium hover:text-blue-500 duration-500">Krista John</a>
                            <p className="text-slate-400 dark:text-white/60">Designer</p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-3 md:col-span-6">
                    <div className="group text-center">
                        <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                            <img src="assets/img/06.jpg" className="" alt="">

                            <ul
                                className="list-none absolute top-1/2 -translate-y-1/2 -end-20 group-hover:end-5 transition-all duration-500 ease-in-out">
                                <li className=""><a href=""
                                        className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600 text-white"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            className="feather feather-facebook h-4 w-4">
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z">
                                            </path>
                                        </svg></a></li>
                                <li className="mt-1"><a href=""
                                        className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600 text-white"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            className="feather feather-instagram h-4 w-4">
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                        </svg></a></li>
                                <li className="mt-1"><a href=""
                                        className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600 text-white"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            className="feather feather-linkedin h-4 w-4">
                                            <path
                                                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                                            </path>
                                            <rect x="2" y="9" width="4" height="12"></rect>
                                            <circle cx="4" cy="4" r="2"></circle>
                                        </svg></a></li>
                            </ul><!--end icon-->
                        </div>

                        <div className="content mt-3">
                            <a href="" className="text-lg font-medium hover:text-blue-500 duration-500">Roger Jackson</a>
                            <p className="text-slate-400 dark:text-white/60">Designer</p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-3 md:col-span-6">
                    <div className="group text-center">
                        <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                            <img src="assets/img/07.jpg" className="" alt="">

                            <ul
                                className="list-none absolute top-1/2 -translate-y-1/2 -end-20 group-hover:end-5 transition-all duration-500 ease-in-out">
                                <li className=""><a href=""
                                        className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600 text-white"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            className="feather feather-facebook h-4 w-4">
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z">
                                            </path>
                                        </svg></a></li>
                                <li className="mt-1"><a href=""
                                        className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600 text-white"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            className="feather feather-instagram h-4 w-4">
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                        </svg></a></li>
                                <li className="mt-1"><a href=""
                                        className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600 text-white"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            className="feather feather-linkedin h-4 w-4">
                                            <path
                                                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                                            </path>
                                            <rect x="2" y="9" width="4" height="12"></rect>
                                            <circle cx="4" cy="4" r="2"></circle>
                                        </svg></a></li>
                            </ul><!--end icon-->
                        </div>

                        <div className="content mt-3">
                            <a href="" className="text-lg font-medium hover:text-blue-500 duration-500">Johnny English</a>
                            <p className="text-slate-400 dark:text-white/60">Designer</p>
                        </div>
                    </div>
                </div>
            </div><!--end grid-->
        </div>

        <div className="container relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-6 text-center">
                <h3 className="mb-6 md:text-2xl text-xl font-medium">Blogs &amp; News</h3>

                <p className="text-slate-400 dark:text-white/60 max-w-xl mx-auto">This is just a simple text made for this
                    unique and awesome template, you can replace it with any text.</p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                <div className="group">
                    <div className="relative overflow-hidden rounded-xl shadow-md dark:shadow-gray-700">
                        <img src="assets/img/1.jpg" className="" alt=""/>
                        <div
                            className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500">
                        </div>
                        <div
                            className="absolute start-4 bottom-4 opacity-0 group-hover:opacity-100 flex items-center duration-500">
                            <img src="assets/img/01.jpg" className="h-9 w-9 rounded-xl" alt=""/>
                            <div className="ms-2">
                                <a href="" className="text-white hover:text-blue-500 text-[15px]">Calvin Carlo</a>
                                <p className="text-white/70 text-sm">5 Min Read</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-4">
                        <a href="https://shreethemes.in/muvico/layouts/blog-detail.html"
                            className="title text-lg font-medium hover:text-blue-500 duration-500">Design your apps in
                            your own way</a>
                        <p className="text-slate-400 dark:text-white/60 mt-3">The phrasal sequence of the is now so that
                            many campaign and benefit</p>

                        <div className="mt-3">
                            <a href="https://shreethemes.in/muvico/layouts/blog-detail.html"
                                className="hover:text-blue-500">Read More <i
                                    className="mdi mdi-arrow-right align-middle"></i></a>
                        </div>
                    </div>
                </div>

                <div className="group">
                    <div className="relative overflow-hidden rounded-xl shadow-md dark:shadow-gray-700">
                        <img src="assets/img/2_002.jpg" className="" alt="">
                        <div
                            className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500">
                        </div>
                        <div
                            className="absolute start-4 bottom-4 opacity-0 group-hover:opacity-100 flex items-center duration-500">
                            <img src="assets/img/01.jpg" className="h-9 w-9 rounded-xl" alt="">
                            <div className="ms-2">
                                <a href="" className="text-white hover:text-blue-500 text-[15px]">Calvin Carlo</a>
                                <p className="text-white/70 text-sm">5 Min Read</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-4">
                        <a href="https://shreethemes.in/muvico/layouts/blog-detail.html"
                            className="title text-lg font-medium hover:text-blue-500 duration-500">How apps is changing
                            the IT world</a>
                        <p className="text-slate-400 dark:text-white/60 mt-3">The phrasal sequence of the is now so that
                            many campaign and benefit</p>

                        <div className="mt-3">
                            <a href="https://shreethemes.in/muvico/layouts/blog-detail.html"
                                className="hover:text-blue-500">Read More <i
                                    className="mdi mdi-arrow-right align-middle"></i></a>
                        </div>
                    </div>
                </div><!--end content-->

                <div className="group">
                    <div className="relative overflow-hidden rounded-xl shadow-md dark:shadow-gray-700">
                        <img src="assets/img/3.jpg" className="" alt="">
                        <div
                            className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500">
                        </div>
                        <div
                            className="absolute start-4 bottom-4 opacity-0 group-hover:opacity-100 flex items-center duration-500">
                            <img src="assets/img/01.jpg" className="h-9 w-9 rounded-xl" alt="">
                            <div className="ms-2">
                                <a href="" className="text-white hover:text-blue-500 text-[15px]">Calvin Carlo</a>
                                <p className="text-white/70 text-sm">5 Min Read</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-4">
                        <a href="https://shreethemes.in/muvico/layouts/blog-detail.html"
                            className="title text-lg font-medium hover:text-blue-500 duration-500">Smartest Applications
                            for Business</a>
                        <p className="text-slate-400 dark:text-white/60 mt-3">The phrasal sequence of the is now so that
                            many campaign and benefit</p>

                        <div className="mt-3">
                            <a href="https://shreethemes.in/muvico/layouts/blog-detail.html"
                                className="hover:text-blue-500">Read More <i
                                    className="mdi mdi-arrow-right align-middle"></i></a>
                        </div>
                    </div>
                </div><!--end content-->
            </div><!--end grid-->
        </div> */}

      <div className="container relative md:mt-24 mt-16">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
          <img src="assets/img/contact.svg" alt="" />

          <div className="lg:ms-5">
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-700 p-6">
              <h3 className="mb-6 text-2xl leading-normal font-medium">
                Get in touch !
              </h3>

              <form method="post" name="myForm" id="myForm">
                <p className="mb-0" id="error-msg"></p>
                <div id="simple-msg"></div>
                <div className="grid lg:grid-cols-12 lg:gap-6">
                  <div className="lg:col-span-6 mb-5">
                    <label htmlFor="name" className="form-label font-medium">
                      Your Name:
                    </label>
                    <input
                      name="name"
                      id="name"
                      type="text"
                      className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none focus:border-blue-500/50 dark:focus:border-blue-500/50 focus:ring-0 mt-2"
                      placeholder="Name :"
                    />
                  </div>

                  <div className="lg:col-span-6 mb-5">
                    <label htmlFor="email" className="form-label font-medium">
                      Your Email:
                    </label>
                    <input
                      name="email"
                      id="email"
                      type="email"
                      className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none focus:border-blue-500/50 dark:focus:border-blue-500/50 focus:ring-0 mt-2"
                      placeholder="Email :"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1">
                  <div className="mb-5">
                    <label htmlFor="subject" className="form-label font-medium">
                      Your Question:
                    </label>
                    <input
                      name="subject"
                      id="subject"
                      className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none focus:border-blue-500/50 dark:focus:border-blue-500/50 focus:ring-0 mt-2"
                      placeholder="Subject :"
                    />
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="comments"
                      className="form-label font-medium"
                    >
                      Your Comment:
                    </label>
                    <textarea
                      name="comments"
                      id="comments"
                      className="form-input w-full py-2 px-3 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none focus:border-blue-500/50 dark:focus:border-blue-500/50 focus:ring-0 mt-2 textarea h-28"
                      placeholder="Message :"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  id="submit"
                  name="send"
                  className="py-2 px-5 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600 text-white rounded-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
