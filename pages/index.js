/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import CountdownTimer from "../components/countdown_timer";
import FaqSection from "../components/faq";

export default function Home() {
  return (
    <>
      {/* main  */}
      <section className="relative py-20">
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="mb-5 text-3xl font-bold">Are you ready to make your First ₹50,000 online?</h2>
            <h4 className="mb-5 text-2l ">If your answer is Maybe, I will give you Over ₹42,745 Worth of Step-By-Step Monetization Secrets For FREE So You Can Finally launch that workshop or course and earn from your community.</h4>
            <h2 className="mb-5 text-3xl font-bold">Launch in just 7 days with a Step By Step Masterplan.</h2>

          </div>
        </div>

        <div className="max-w-2xl mx-auto p-4">
          <div className="aspect-w-16 aspect-h-9 rounded">
            <iframe src="https://www.youtube.com/embed/r9jwGansp1E" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-2 text-center font-bold text-2l">
          Hurry! Only 100 FREE seats available
        </div>

        <div className="max-w-2xl grid grid-cols-2 gap-4 mx-auto p-4">
          <div className="bg-secondary text-center py-4 rounded-xl">01</div>
          <div className="bg-secondary text-center py-4 rounded-l">02</div>
          <div className="bg-secondary text-center py-4 rounded">01</div>
          <div className="bg-secondary text-center py-4">02</div>
          <div className="bg-secondary text-center py-8">01</div>
          <div className="bg-secondary text-center py-8">02</div>
        </div>
      </section>

      {/* featured in */}
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

      {/* about us */}
      <section className="pb-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto">
            <h2 className="mb-6 text-3xl font-semibold font-heading">When I was a developer, I often had a hundred questions when</h2>
            <p className="mb-6 text-xl text-gray-500 text-justify">If you want to monetize your audience and launch your first workshop, course or community, and make more than ₹50,000 worth of sales converting your followers, then read ahead:</p>
            <p className="mb-6 text-xl text-gray-500 text-justify font-bold">Here’s an offer you cannot refuse:</p>
            <p className="mb-6 text-xl text-gray-500 text-justify">I’m looking for creators who have just started or have NOT monetized their audience on social media or elsewhere using workshops, courses or a paid community</p>
            <p className="mb-6 text-xl text-gray-500 text-justify">OR coaches, trainers, consultants who are struggling to scale their service based offerings.</p>
            <p className="mb-6 text-xl text-gray-500 text-justify">I have great news for you!</p>
            <p className="mb-6 text-xl text-gray-500 text-justify">Today, I’m going to GIVE YOU A 99.99% “Done-For-You” Approach on doing just that!</p>
            <p className="mb-6 text-xl text-gray-500 text-center font-bold">But That’s Not All</p>
            <p className="mb-6 text-xl text-gray-500 text-justify">I’m going to personally help you in building a complete funnel to monetize your audience using workshops, courses and paid communities. Including ₹42,745 worth of Step-By-Step Monetization Secrets (Tools and Resources)</p>
            <p className="mb-6 text-xl text-gray-500 text-center font-bold">Absolutely FREE!</p>

            <div className="h-112 mb-10">
              <img className="w-full h-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt="" />
            </div>

            <p className="mb-6 text-xl text-gray-500">My name is Shashwat Aditya, I’m the cofounder of Kohbee. I have done my graduation from IIT BHU, and now I help more than 200,000 creators like you in operating like a business, and make money directly from their audience.</p>
            <p className="mb-6 text-xl text-gray-500">If you’re still wondering if this is right for you, I want to make it crystal clear that</p>

            <ul>
              <li className="flex mb-8 items-center">
                <span className="flex-shrink-0 flex mr-4 items-center justify-center w-8 h-8 bg-secondary rounded-full text-gray-50 font-semibold font-heading">1</span>
                <h3 className="text-xl">It doesn’t matter if you’ve never made a SINGLE RUPEE online yet</h3>
              </li>
              <li className="flex mb-8 items-center">
                <span className="flex-shrink-0 flex mr-4 items-center justify-center w-8 h-8 bg-secondary rounded-full text-gray-50 font-semibold font-heading">2</span>
                <h3 className="text-xl">It doesn’t matter if you do not have a mailing list or contact information of your audience on social media</h3>
              </li>
              <li className="flex mb-8 items-center">
                <span className="flex-shrink-0 flex mr-4 items-center justify-center w-8 h-8 bg-secondary rounded-full text-gray-50 font-semibold font-heading">3</span>
                <h3 className="text-xl">It doesn’t matter if you’re not sure “what” you want to sell (this is in fact a good thing, you’ll see why)</h3>
              </li>
              <li className="flex mb-8 items-center">
                <span className="flex-shrink-0 flex mr-4 items-center justify-center w-8 h-8 bg-secondary rounded-full text-gray-50 font-semibold font-heading">4</span>
                <h3 className="text-xl">It doesn’t matter if you do not have a team or lakhs of money to spend on ads, or creating content or hiring people</h3>
              </li>
              <li className="flex mb-8 items-center">
                <span className="flex-shrink-0 flex mr-4 items-center justify-center w-8 h-8 bg-secondary rounded-full text-gray-50 font-semibold font-heading">5</span>
                <h3 className="text-xl">And it DEFINITELY doesn’t matter if you are not that “tech-savvy” (as long as you can follow STEP-BY-STEP instructions to set things up)</h3>
              </li>
            </ul>

            <p className="mb-6 text-xl text-gray-500">In just a moment I’m going to “demystify” everything you’ve been told about starting and growing a money making machine online.</p>
            <p className="mb-6 text-xl text-gray-500">As well as show you, the exact step-by-step guide on how to launch a workshop, course or community for which people will not only pay you, but spread the word themselves and bring more audience for you!</p>
            <p className="mb-6 text-xl text-gray-500">Now, you might be wondering</p>
            <p className="mb-6 text-xl text-gray-500">“Why is Shashwat being so generous and doing all this for FREE, what is in it for him?”</p>
            <p className="mb-6 text-xl text-gray-500">Well, there’s no point in beating around the bush</p>
            <p className="mb-6 text-xl text-gray-500">Quite simply, I want you to STOP PROCRASTINATING and START OPERATING LIKE A BUSINESS</p>
            <p className="mb-6 text-xl text-gray-500">And, to become an evangelist for my STEP-BY-STEP Secrets for others in your circle.</p>
            <p className="mb-6 text-xl text-gray-500 text-justify font-bold">Sounds fair?</p>
            <p className="mb-6 text-xl text-gray-500">I just want you to promise one thing, that if my methods work for you, then you will share it with 5 of your friends, who this makes ABSOLUTE sense for.</p>
            <p className="mb-6 text-xl text-gray-500 text-justify font-bold">Deal?</p>
            <p className="mb-6 text-xl text-gray-500">But before that! I know this is NOT A JOKE, and there’s only 100 people that I can help through this challenge.</p>
            <p className="mb-6 text-xl text-gray-500">If you have doubts on whether you can do this, or you DO NOT consider yourself as a creator, trainer, coach or expert. Then PLEASE STOP! This is probably not for you.</p>
            <p className="mb-6 text-xl text-gray-500">And if, all of that is NOT TRUE, and you really want to make REAL MONEY off of things that you LOVE doing, then go ahead and REGISTER for the FREE WORKSHOP, where I’ll personally help you in LAUNCHING your own workshop, course and community to start your monetization journey!</p>
            <p className="mb-6 text-xl text-gray-500">To date, Kohbee has helped over 200,000 creators in setting this up for themselves and transitioning from being <b>a creator to an entrepreneur.</b></p>
          </div>
        </div>
      </section>

      {/* counter */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center">
            <div className="mb-8 w-full md:w-1/2 lg:w-1/4">
              <span className="text-3xl lg:text-4xl font-bold">200,000+</span>
              <h4 className="mb-2 text-gray-500">Total Revenue</h4>
            </div>
            <div className="mb-8 w-full md:w-1/2 lg:w-1/4">
              <span className="text-3xl lg:text-4xl font-bold">5.0</span>
              <h4 className="mb-2 text-gray-500">Star Rating</h4>
            </div>
            <div className="mb-8 w-full md:w-1/2 lg:w-1/4">
              <span className="text-3xl lg:text-4xl font-bold">140,000+</span>
              <h4 className="mb-2 text-gray-500">Websites</h4>
            </div>
            <div className="mb-8 w-full md:w-1/2 lg:w-1/4">
              <span className="text-3xl lg:text-4xl font-bold">₹ 42,725</span>
              <h4 className="mb-2 text-gray-500">Worth Tools</h4>
            </div>
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className="pb-20">
        <div className="bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="mb-16 max-w-md text-center mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold font-heading">Here’s how it works</h2>
            </div>
            <div className="relative flex flex-wrap -mx-4 z-0">
              <div className="hidden lg:block absolute inset-x-0 max-w-2xl xl:max-w-3xl mx-auto py-px rounded bg-primary" style={{ top: 10 + '%', zIndex: -1 }}></div>
              <div className="mb-8 w-full lg:w-1/3 px-4 text-center">
                <span className="relative mb-6 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center bg-primary rounded-full text-white text-2xl">1</span>
                <h3 className="mb-4 text-2xl font-bold font-heading">Plan, Plan, Plan</h3>
                <p className="text-gray-500 leading-loose">We’ll help you identify a niche which suits you the best. This has to be something that your audience really wants and cares about. Using our blueprint, you’ll be able to create content around the Niche. As a part of the planning process, we’ll help you structure the content leading to the workshop, in the workshop and post workshop. Including all the copy and automation needed in all of these steps.</p>
              </div>
              <div className="mb-8 w-full lg:w-1/3 px-4 text-center">
                <span className="mb-4 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center bg-primary rounded-full text-white text-2xl">2</span>
                <h3 className="mb-4 text-2xl font-bold font-heading">Build Content and Landing Pages</h3>
                <p className="text-gray-500 leading-loose">Once the planning is done, it’s time for us to take ACTION. We’ll be setting up landing pages to convert your audience into leads (by collecting their email and phone numbers) and create automation flows to optimise the entire selling process.</p>
              </div>
              <div className="w-full lg:w-1/3 px-4 text-center">
                <span className="mb-4 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center bg-primary rounded-full text-white text-2xl">3</span>
                <h3 className="mb-4 text-2xl font-bold font-heading">Get Traffic and Sell</h3>
                <p className="text-gray-500 leading-loose">In the last step, we’ll look at your audience in different spaces and understand more avenues online where you can find more audience. We start with as basic as Google My Business listing, all the way to online forums where the audience for your niche resides. We even help you partner with other creators in similar niches and run affiliate deals with them to drive more traffic.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* faq */}
      <FaqSection></FaqSection>

      {/* Testimonials */}
      <section>
        <div className="pb-20 bg-gray-50 radius-for-skewed overflow-hidden">
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
                  <p className="mb-8 text-gray-500 leading-loose">“Kohbee” Game changer app to launch my skin & hair course!
                    Never thought it would be so easy!!! Happy learning!!
                  </p>
                  <img className="mb-2 mx-auto w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1484588168347-9d835bb09939?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80" alt="" />
                  <h4 className="mb-1 text-2xl font-bold font-heading">Sneha Kewalramani</h4>
                  <p className="text-gray-500">Skincare Specialist</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap max-w-6xl px-2 mx-auto">
              <div className="mb-4 w-full lg:w-1/3 px-3">
                <div className="p-8 bg-white rounded shadow text-center">
                  <div className="bg-no-repeat bg-left-top">
                    <p className="mb-8 text-gray-500 leading-loose">“Kohbee” Game changer app to launch my skin & hair course!
                      Never thought it would be so easy!!! Happy learning!!
                    </p>
                    <img className="mb-2 mx-auto w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1484588168347-9d835bb09939?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80" alt="" />
                    <h4 className="mb-1 text-2xl font-bold font-heading">Sneha Kewalramani</h4>
                    <p className="text-gray-500">Skincare Specialist</p>
                  </div>
                </div>
              </div>
              <div className="mb-4 w-full lg:w-1/3 px-3">
                <div className="p-8 bg-white rounded shadow text-center">
                  <div className="bg-no-repeat bg-left-top">
                    <p className="mb-8 text-gray-500 leading-loose">It&apos;s been a wonderful experience being associated with Kohbee. They [support you with] the onboarding process & take care of all the logistics thereafter so you can concentrate solely on creating.
                      A very user friendly platform makes conducting sessions very easy & importantly ensures security of your intellectual property.</p>
                    <img className="mb-2 mx-auto w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1484588168347-9d835bb09939?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80" alt="" />
                    <h4 className="mb-1 text-2xl font-bold font-heading">Molshree Jain</h4>
                    <p className="text-gray-500">Freelance Artist</p>
                  </div>
                </div>
              </div>
              <div className="mb-4 w-full lg:w-1/3 px-3">
                <div className="p-8 bg-white rounded shadow text-center">
                  <div className="bg-no-repeat bg-left-top">
                    <p className="mb-8 text-gray-500 leading-loose">I am quite happy with the services offered by Kohbee. Especially the behaviour of almost all the contact persons. Also, the idea of putting all the effort first without getting anything in return and then gaining profit only when the creator is getting it, is quite impressive and something that should be really appreciated.</p>
                    <img className="mb-2 mx-auto w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt="" />
                    <h4 className="mb-1 text-2xl font-bold font-heading">Nitin Sharma</h4>
                    <p className="text-gray-500">Psychologist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <div className="fixed bottom-0 left-0 bg-black w-screen">
        <div className="flex items-center h-20 justify-between px-4">

          <div className="text-white">
            <span className="font-bold text-2xl">FREE</span> <s className="text-lg">र 999</s>
            <CountdownTimer></CountdownTimer>
          </div>
          <Link href="/register">
            <div className="text-white py-2 px-6 font-semibold bg-primary rounded">Register</div>
          </Link>
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
