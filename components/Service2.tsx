import React from 'react';
import { Star } from 'lucide-react';

const Service2 = () => {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">Our Services</p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              Services That Drive <span className="text-brand-orange">Real Results</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              From stunning 3D websites to intelligent automation, we deliver cutting-edge solutions that transform your business and accelerate growth.
            </p>
          </div>

          <div className="relative mt-10 md:mt-24">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div
                className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                style={{
                  background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)'
                }}
              ></div>
            </div>

            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-2">
              <div className="group relative flex flex-col overflow-hidden">
                {/* Glass morphism background with backdrop blur */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-xl border border-white/40 rounded-2xl"></div>

                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Floating particles effect */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
                <div className="absolute top-8 right-6 w-3 h-3 bg-purple-400/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-6 left-8 w-2 h-2 bg-pink-400/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

                <div className="relative flex flex-col justify-between flex-1 p-8 lg:py-10 lg:px-9">
                  <div className="flex-1">
                    <div className="flex items-center mb-6">
                      <div className="mr-5">
                        <div className="w-14 h-14 bg-gray-200 rounded-xl flex items-center justify-center">
                          <span className="text-gray-500 text-xs font-medium">ICON</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 font-pj">High Converting Websites</h3>
                        <h4 className="text-lg font-medium text-gray-700 font-pj">3D & Animated Websites</h4>
                      </div>
                    </div>

                    <p className="mt-4 text-lg leading-relaxed text-gray-900 font-pj">
                      We craft stunning, quality websites that combine sophisticated animations with fully responsive designs. Every element is meticulously designed to deliver exceptional user experiences across all devices while driving meaningful conversions for your business.
                    </p>
                  </div>

                  {/* Button temporarily hidden */}
                  {/*
                  <div className="mt-8">
                    <a
                      href="#contact"
                      className="inline-flex items-center px-4 py-2 text-base font-semibold text-white bg-brand-orange rounded-lg hover:bg-brand-orange/90 transition-colors duration-200"
                    >
                      Explore 3D Websites
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                  */}
                </div>
              </div>

              <div className="group relative flex flex-col overflow-hidden">
                {/* Glass morphism background with backdrop blur */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-xl border border-white/40 rounded-2xl"></div>

                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-teal-400/10 to-cyan-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Floating particles effect */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-green-400/30 rounded-full animate-pulse"></div>
                <div className="absolute top-8 right-6 w-3 h-3 bg-teal-400/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-6 left-8 w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

                <div className="relative flex flex-col justify-between flex-1 p-8 lg:py-10 lg:px-9">
                  <div className="flex-1">
                    <div className="flex items-center mb-6">
                      <div className="mr-5">
                        <div className="w-14 h-14 bg-gray-200 rounded-xl flex items-center justify-center">
                          <span className="text-gray-500 text-xs font-medium">ICON</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 font-pj">AI Automation</h3>
                        <h4 className="text-lg font-medium text-gray-700 font-pj">AI Business Automation</h4>
                      </div>
                    </div>

                    <p className="mt-4 text-lg leading-relaxed text-gray-900 font-pj">
                      Intelligent workflows that eliminate repetitive tasks with custom automation solutions, system integrations, and chatbots tailored for your business.
                    </p>
                  </div>

                  {/* Button temporarily hidden */}
                  {/*
                  <div className="mt-8">
                    <a
                      href="#contact"
                      className="inline-flex items-center px-4 py-2 text-base font-semibold text-white bg-brand-orange rounded-lg hover:bg-brand-orange/90 transition-colors duration-200"
                    >
                      Discover Automation
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service2;