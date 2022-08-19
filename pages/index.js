import Carousel from "../components/carousel";
import Register from "./register";

/* eslint-disable @next/next/no-img-element */
export default function Landing() {
  return (
    <>
      <section className="pb-20 text-center">
        <div className=" contaier bg-center py-20 md:py-40 bg-[url('https://www.kohbee.com/wp-content/uploads/2022/05/slide1.jpg')]">
          <p className="p-4 bg-red-600">
            <span className="text-3xl lg:text-6xl font-semibold">
              Grow 15X Faster With Kohbee Premium 💎
            </span>
          </p>
          <div className="text-xl lg:text-2xl font-semibold">
            Earn More.Love What You Do!
          </div>
        </div>
      </section>

      <section className="pb-5 text-center px-4">
        <button className="text-xl font-medium font-semibold py-3 px-8 text-white bg-red-400 rounded">REGISTER</button>
      </section>

      <section className="pb-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center -mx-4 -mb-8">
            <div className="w-full lg:w-1/2 px-4 mb-8 text-center">
              <img src="https://www.kohbee.com/wp-content/uploads/2022/07/Last-section-mixed-colors@2x@2x-1-2048x1915.png" alt=""></img>
            </div>
            <div className="w-full lg:w-1/2 px-4 mb-8 text-center">
              <img src="https://www.kohbee.com/wp-content/uploads/2022/07/Empowering-Creators_Rohan-9-768x918.png" alt=""></img>

            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 text-center px-4">
        <div className="text-3xl lg:text-4xl font-semibold">
          Want to Unlock Your Growth Potential?
        </div>
        <div className="text-3xl lg:text-4xl font-semibold">
          Join Kohbee Premium
        </div>
      </section>

      <section className="pb-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center -mx-4 -mb-8">
            <div className="w-full lg:w-1/2 px-4 mb-8 text-center">
              <div className="text-5xl font-semibold pb-5">
                Get the kohbee premium e book to monetize
              </div>
              <div className="pb-5">
                <p className="text-7xl">
                  1500
                </p>
                <span>
                  Creators Using the Premium E-Book
                </span>
              </div>
              <div className="pb-5">
                <p className="text-7xl">
                  25x
                </p>
                <span>
                  Increase in monetization
                </span>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 mb-8 text-center">
              <img src="https://www.kohbee.com/wp-content/uploads/2022/07/How-to-make-money-online-Kohbee_page-0001-768x1229.jpg" alt=""></img>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 text-center px-4">
        <div className="text-3xl lg:text-4xl font-semibold">
          Don&apos;t Believe Us? Hear it from our Creators.....
        </div>
      </section>

      <Carousel></Carousel>

      <section className="pb-20 text-center px-4">
        <div className="text-3xl lg:text-4xl font-semibold">
          Still Not Convinced?
        </div>
        <div className="text-3xl lg:text-4xl font-semibold">
          Here is What You Get with Kohbee Premium
        </div>
      </section>

      <section className="pb-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 mb-8 text-center">
              <img src="https://www.kohbee.com/wp-content/uploads/2022/07/Empowering-Creators_Rohan-6.png" alt=""></img>
            </div>
          </div>
        </div>
      </section>

      <Register></Register>

    </>
  )
}