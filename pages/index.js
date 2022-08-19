import Link from "next/link";
import Carousel from "../components/carousel";
import Register from "./register";

/* eslint-disable @next/next/no-img-element */
export default function Landing() {
  return (
    <>
      <section className="pb-20 text-center">
        <div className=" contaier bg-center py-20 md:py-40 bg-[url('https://www.kohbee.com/wp-content/uploads/2022/05/slide1.jpg')]">
          <p className="p-4 bg-gray-200">
            <span className="text-3xl lg:text-6xl font-bold">
              Grow 15X Faster With Kohbee Premium 💎
            </span>
          </p>
          <div className="pt-4 text-2xl lg:text-3xl font-bold">
            Earn More.Love What You Do!
          </div>
        </div>
        <Link href="/register">
          <button className="text-xl font-medium font-bold mt-8 py-3 px-8 text-white bg-primary rounded">REGISTER</button>
        </Link>
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

      <section className="pb-20 text-center px-4 text-secondaryLightBlue">
        <div className="text-3xl lg:text-4xl font-bold">
          Want to Unlock Your Growth Potential?
        </div>
        <div className="text-3xl lg:text-4xl font-bold">
          Join Kohbee Premium
        </div>
      </section>

      <section className="pb-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center -mx-4 -mb-8">
            <div className="w-full lg:w-1/2 px-4 mb-8 text-center">
              <div className="text-5xl lg:text-6xl font-bold pb-5">
                Get the Kohbee Premium E-book to Monetize
              </div>
              <div className="py-5">
                <p className="text-7xl text-secondaryLightBlue font-bold">
                  1500
                </p>
                <span className="text-xl font-semibold text-gray-400">
                  Creators Using the Premium E-Book
                </span>
              </div>
              <div className="py-5">
                <p className="text-7xl text-secondaryLightBlue font-bold">
                  25x
                </p>
                <span className="text-xl font-semibold text-gray-400">
                  Increase in monetization
                </span>
              </div>
              <div className="text-2xl lg:text-3xl font-bold py-5">
                Become the Next Big Content Creator.
                Download the Free E-Book Today!
              </div>
              <Link href="/register">
                <button className="text-xl font-medium font-bold mt-8 py-3 px-8 text-white bg-primary rounded">REGISTER</button>
              </Link>
            </div>
            <div className="w-full lg:w-1/2 px-4 mb-8 text-center">
              <img src="https://www.kohbee.com/wp-content/uploads/2022/07/How-to-make-money-online-Kohbee_page-0001-768x1229.jpg" alt=""></img>
            </div>
          </div>
        </div>
      </section>

      <Carousel></Carousel>

      <section className="pb-20 text-center px-4">
        <div className="text-3xl lg:text-4xl font-bold text-secondaryLightBlue">
          Still Not Convinced?
        </div>
        <div className="text-3xl lg:text-4xl font-bold text-secondaryLightBlue">
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

    </>
  )
}