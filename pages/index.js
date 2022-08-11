/* eslint-disable @next/next/no-img-element */

import CountdownTimer from "../components/countdown_timer";
import FaqSection from "../components/faq";

export default function Home() {
  return (
    <>
      {/* main  */}
      <section className="relative py-20">
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="mb-5 text-2xl font-bold">Build Your Lead Generation Machine Using The Power Of LinkedIn In Just 5 Days!</h2>
            <h4 className="mb-5 text-l ">Secrets that generated me over 300K+ followers, and 1000s of leads for FREE bringing in thousands of dollars on a monthly basis from Linkedin.</h4>
          </div>
        </div>

        <div className="max-w-3xl mx-auto p-4">
          <div className="aspect-w-16 aspect-h-9 rounded">
            <iframe src="https://www.youtube.com/embed/r9jwGansp1E" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center font-bold text-2l">
          Reserve a seat before Aug 10 to win bonuses worth 20000

        </div>

        <div className="grid grid-cols-2 gap-4 mx-auto p-4">
          <div className="bg-red-200 text-center py-4 rounded-xl">01</div>
          <div className="bg-red-200 text-center py-4 rounded-l">02</div>
          <div className="bg-red-200 text-center py-4 rounded">01</div>
          <div className="bg-red-200 text-center py-4">02</div>
          <div className="bg-red-200 text-center py-8">01</div>
          <div className="bg-red-200 text-center py-8">02</div>
        </div>


      </section>

      {/* feature */}
      <section className="pb-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="mb-10 text-2xl font-heading">Trusted by brands all over the world</h3>
          <div className="flex flex-wrap -mx-2">
            <div className="mb-4 w-1/2 lg:w-1/4 px-2">
              <div className="py-16 bg-gray-50 rounded">
                <a href="#">
                  <img className="mx-auto h-8" src="atis-assets/logo/brands/slack.png" alt="" />
                </a>
              </div>
            </div>
            <div className="mb-4 w-1/2 lg:w-1/4 px-2">
              <div className="py-16 bg-gray-50 rounded">
                <a href="#">
                  <img className="mx-auto h-8" src="atis-assets/logo/brands/dropbox.png" alt="" />
                </a>
              </div>
            </div>
            <div className="mb-4 w-1/2 lg:w-1/4 px-2">
              <div className="py-16 bg-gray-50 rounded">
                <a href="#">
                  <img className="mx-auto h-8" src="atis-assets/logo/brands/spotify.png" alt="" />
                </a>
              </div>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2">
              <div className="py-16 bg-gray-50 rounded">
                <a href="#">
                  <img className="mx-auto h-8" src="atis-assets/logo/brands/stripe.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* how it works */}
      <section>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="mb-16 max-w-md text-center mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold font-heading">Build &amp; Launch without problems</h2>
            </div>
            <div className="relative flex flex-wrap -mx-4 z-0">
              <div className="hidden lg:block absolute inset-x-0 max-w-2xl xl:max-w-3xl mx-auto py-px rounded bg-green-600" style={{ top: 10 + '%', zIndex: -1 }}></div>
              <div className="mb-8 w-full lg:w-1/3 px-4 text-center">
                <span className="relative mb-6 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center bg-green-600 rounded-full text-white text-2xl">1</span>
                <h3 className="mb-4 text-2xl font-bold font-heading">Lorem ipsum dolor sit amet consectutar</h3>
                <p className="text-gray-500 leading-loose">Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.</p>
              </div>
              <div className="mb-8 w-full lg:w-1/3 px-4 text-center">
                <span className="mb-4 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center bg-green-600 rounded-full text-white text-2xl">2</span>
                <h3 className="mb-4 text-2xl font-bold font-heading">Lorem ipsum dolor sit amet consectutar</h3>
                <p className="text-gray-500 leading-loose">Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.</p>
              </div>
              <div className="w-full lg:w-1/3 px-4 text-center">
                <span className="mb-4 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center bg-green-600 rounded-full text-white text-2xl">3</span>
                <h3 className="mb-4 text-2xl font-bold font-heading">Lorem ipsum dolor sit amet consectutar</h3>
                <p className="text-gray-500 leading-loose">Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* counter */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center">
            <div className="mb-8 w-full md:w-1/2 lg:w-1/4">
              <h4 className="mb-2 text-gray-500">Total Revenue</h4>
              <span className="text-3xl lg:text-4xl font-bold">$33,261</span>
            </div>
            <div className="mb-8 w-full md:w-1/2 lg:w-1/4">
              <h4 className="mb-2 text-gray-500">Subscribers</h4>
              <span className="text-3xl lg:text-4xl font-bold">481,095</span>
            </div>
            <div className="mb-8 w-full md:w-1/2 lg:w-1/4">
              <h4 className="mb-2 text-gray-500">Conversations</h4>
              <span className="text-3xl lg:text-4xl font-bold">643,533</span>
            </div>
            <div className="mb-8 w-full md:w-1/2 lg:w-1/4">
              <h4 className="mb-2 text-gray-500">Modal Sale Rate</h4>
              <span className="text-3xl lg:text-4xl font-bold">25%</span>
            </div>
          </div>
        </div>
      </section>

      {/* about us */}
      <section>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8 p-6 flex flex-wrap items-center bg-white rounded-lg shadow">
                <div className="w-full lg:w-1/3">
                  <img className="mb-5 lg:mb-0 w-full rounded-lg object-cover" style={{ maxHeight: 350 + "px" }} src="https://images.unsplash.com/photo-1484588168347-9d835bb09939?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80" alt="" />
                </div>
                <div className="w-full lg:w-2/3">
                  <div className="max-w-lg mx-auto">
                    <p className="mb-8 text-2xl text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-2xl font-bold font-heading">Alice Bradley</h4>
                        <p className="text-blueGrey-500">Backend Developer</p>
                      </div>
                      <a href="#">
                        <img className="h-6" src="atis-assets/social/facebook-name.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-md mx-auto text-center">
                <button className="mr-1 bg-gray-200 rounded-full p-1"></button>
                <button className="mr-1 bg-green-600 rounded-full p-1"></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* faq */}
      <FaqSection></FaqSection>

      {/* Testimonials */}
      <section>
        <div className="py-20 bg-gray-50 radius-for-skewed overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 pb-6 lg:pb-16">
            <div className="flex flex-wrap justify-center lg:justify-between items-center text-center lg:text-left">
              <div className="w-full lg:w-4/5 mb-4 lg:mb-0">
                <h2 className="text-4xl lg:text-5xl font-bold font-heading">Testimonials</h2>
              </div>
            </div>
          </div>
          <div className="relative flex">
            <div className="hidden lg:block absolute top-0 left-0 lg:w-1/3 px-3 -ml-80 opacity-25">
              <div className="p-8 bg-white rounded shadow text-center">
                <div className="bg-no-repeat bg-left-top">
                  <p className="mb-8 text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                  <img className="mb-2 mx-auto w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1484588168347-9d835bb09939?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80" alt="" />
                  <h4 className="mb-1 text-2xl font-bold font-heading">Alice Bradley</h4>
                  <p className="text-gray-500">Backend Developer</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap max-w-6xl px-2 mx-auto">
              <div className="mb-4 w-full lg:w-1/3 px-3">
                <div className="p-8 bg-white rounded shadow text-center">
                  <div className="bg-no-repeat bg-left-top">
                    <p className="mb-8 text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                    <img className="mb-2 mx-auto w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1484588168347-9d835bb09939?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80" alt="" />
                    <h4 className="mb-1 text-2xl font-bold font-heading">Alice Bradley</h4>
                    <p className="text-gray-500">Backend Developer</p>
                  </div>
                </div>
              </div>
              <div className="mb-4 w-full lg:w-1/3 px-3">
                <div className="p-8 bg-white rounded shadow text-center">
                  <div className="bg-no-repeat bg-left-top">
                    <p className="mb-8 text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                    <img className="mb-2 mx-auto w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt="" />
                    <h4 className="mb-1 text-2xl font-bold font-heading">Dennis Robertson</h4>
                    <p className="text-gray-500">Frontend Developer</p>
                  </div>
                </div>
              </div>
              <div className="mb-4 w-full lg:w-1/3 px-3">
                <div className="p-8 bg-white rounded shadow text-center">
                  <div className="bg-no-repeat bg-left-top">
                    <p className="mb-8 text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                    <img className="mb-2 mx-auto w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80" alt="" />
                    <h4 className="mb-1 text-2xl font-bold font-heading">Daisy Carter</h4>
                    <p className="text-gray-500">Product Developer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block absolute top-0 right-0 lg:w-1/3 px-3 -mr-80 opacity-25">
              <div className="p-8 bg-white rounded shadow text-center">
                <div className="bg-no-repeat bg-left-top">
                  <p className="mb-8 text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                  <img className="mb-2 mx-auto w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1484588168347-9d835bb09939?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80" alt="" />
                  <h4 className="mb-1 text-2xl font-bold font-heading">Alice Bradley</h4>
                  <p className="text-gray-500">Backend Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <div className="fixed bottom-0 left-0 bg-blue-200 w-screen">
        <div className="flex items-center h-20 justify-between px-4">

          <div>
            FREE <s>र 999</s>
            <CountdownTimer></CountdownTimer>
          </div>
          <div><a className="inline-block py-2 px-6 bg-green-600 text-white font-semibold rounded" href="#">Register</a></div>
        </div>
      </div>

    </>
  )
}

function Stripes() {
  return (
    <>
      <div className="skew skew-bottom mr-for-radius">
        <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
          <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
        </svg>
      </div><div className="skew skew-bottom ml-for-radius">
        <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
          <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
        </svg>
      </div>
    </>
  )
}
