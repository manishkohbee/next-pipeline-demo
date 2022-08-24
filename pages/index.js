import Link from "next/link";
import { useEffect } from "react";
import Carousel from "../components/carousel";
import CountdownTimer from "../components/countdown_timer";

/* eslint-disable @next/next/no-img-element */
export default function Landing() {
  useEffect(() => {
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js',
      });
      const f = d.getElementsByTagName(s)[0];
      const j = d.createElement(s);
      const dl = l !== 'dataLayer' ? `&l=${l}` : '';
      j.async = true;
      j.src = `https://www.googletagmanager.com/gtm.js?id=${i}${dl}`;
      f.parentNode.insertBefore(j, f);
    }(window, document, 'script', 'dataLayer', 'GTM-XXYYXXX'));
  }, []);


  return (
    <>
      <section className="pb-20 text-center">
        <div className=" contaier bg-center py-20 md:py-40 bg-[url('https://www.kohbee.com/wp-content/uploads/2022/05/slide1.jpg')]">
          <p className="p-4 bg-white">
            <span className="text-3xl lg:text-6xl font-bold">
              Grow 15X Faster With Kohbee Premium 💎
            </span>
          </p>
          <div className="pt-4 text-2xl lg:text-3xl font-bold">
            Earn More.Love What You Do!
          </div>
        </div>
        <Link href="/register">
          <button className="text-xl font-medium font-bold mt-8 py-3 px-8 text-white bg-primary rounded">YES, I WANT CONSULTATION</button>
        </Link>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h3 className="mb-10 text-2xl font-bold font-heading">As seen on</h3>
          <div className="flex flex-wrap -mx-2">
            <div className="mb-4 w-full px-2">
              <div className="py-8 px-4 bg-gray-50 rounded">
                <a href="#">
                  <img className="mx-auto h-8" src="https://static.toiimg.com/photo/92222747.cms" alt="" />
                </a>
              </div>
            </div>
            <div className="mb-4 w-full px-2">
              <div className="py-8 bg-gray-50 rounded">
                <a href="#">
                  <img className="mx-auto h-8" src="https://images.yourstory.com/logos/svg/logo_yourstory.svg" alt="" />
                </a>
              </div>
            </div>
            <div className="mb-4 w-full px-2">
              <div className="py-8 bg-gray-50 rounded">
                <a href="#">
                  <img className="mx-auto h-8" src="https://static.theprint.in/wp-content/uploads/2017/08/logo_800x149_transp-1.png" alt="" />
                </a>
              </div>
            </div>
            <div className="w-full px-2">
              <div className="py-8 bg-gray-50 rounded">
                <a href="#">
                  <img className="mx-auto h-8" src="https://english.cdn.zeenews.com/static/apprun/dna/icons/logodna.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
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
                <button className="text-xl font-medium font-bold mt-8 py-3 px-8 text-white bg-primary rounded">YES, I WANT CONSULTATION</button>
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

      <div className="fixed bottom-0 left-0 bg-overlay w-screen lg:hidden">
        <div className="flex items-center h-20 justify-between px-4">
          <div className="text-white">
            <span className="font-bold text-2xl">FREE</span> <s className="text-lg">र 999</s>
            <CountdownTimer></CountdownTimer>
          </div>
          <Link href="/register">
            <div className="my-4 py-2 px-6 rounded bg-primary text-white font-bold leading-loose transition duration-200">BOOK SLOT</div>
          </Link>
        </div>
      </div>

    </>
  )
}