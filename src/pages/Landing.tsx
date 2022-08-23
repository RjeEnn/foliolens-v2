import productShot from "../assets/product-shot.png";
import finalShot from "../assets/final-shot-landing.png";
import trackShot from "../assets/track-shot.png";
import philosophyIcon from "../assets/philosophy-icon.png";
import { HiOutlinePlay } from "react-icons/hi";
import { FiLinkedin, FiGithub, FiGlobe } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div id="landing-page" className="w-full mt-[80px] bg-white">
      <section className="bg-[#07031F] landing-gradient">
        <div className="flex items-center justify-center flex-col gap-4 w-full lg:w-2/5">
          <h1 className="text-white text-6xl font-extrabold lg:w-4/5">
            See What's Best For <span className="lg:text-indigo-500">You</span>
          </h1>
          <p className="text-white lg:w-4/5 text-xl">
            Start growing and protecting your money. Your hard earned cash
            deserves better than risky, low-return investments. Let's help you.
          </p>
          <div className="flex items-center justify-between gap-4 mt-2">
            <button onClick={() => navigate("/signup")}>Get started</button>
            <button className="flex items-center justify-center bg-transparent">
              <a
                href="https://youtube.com"
                className="flex items-center justify-center gap-2"
              >
                <HiOutlinePlay className="text-[#4C35E6] text-5xl" />
                <p className="text-white text-md">Learn more about FolioLens</p>
              </a>
            </button>
          </div>
        </div>
        <img className="w-full lg:w-2/5" src={productShot} alt="" />
      </section>

      <section className="my-32">
        <div className="hidden lg:flex flex-col items-center justify-start w-2/6">
          <img className="h-48" src={philosophyIcon} alt="" />
          <h2 className="text-4xl font-bold">Our Philosophy</h2>
        </div>
        <div className="w-full py-8 lg:w-3/6 flex flex-col items-center justify-center">
          <h2 className="lg:hidden text-3xl font-bold mb-4">Our Philosophy</h2>
          <p className="text-lg mb-4 lg:w-2/3">
            It makes sense that different investments earn different returns.
            Some investments are also riskier than others. But here's the
            thing—to get a higher return, you need to stomach more risk of
            losing your hard-earned cash. Fun? No way.
          </p>
          <p className="text-lg mb-4 lg:w-2/3">
            This harsh “more risk, more return” reality doesn't only mean the
            rich get richer. It also means there is no one perfect investment
            portfolio. A young, well-paid professional can afford a lot more
            risk than a retiree on a tight budget—and that's OK. Their
            portfolios look different because they are different and they have
            different situations in life. And since everyone's situation is
            different, everyone needs a different portfolio. We decided to
            create something that provides just that.
          </p>
        </div>
      </section>

      <section id="how-it-works" className="partial-bg py-4">
        <div className="w-full flex flex-col items-center justify-center mt-32">
          <h1 className="text-5xl font-bold text-white mb-8 text-center">
            How FolioLens Works
          </h1>
          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 w-full lg:w-4/5">
            <div className="flex flex-col items-center justify-center gap-12 bg-white rounded-md px-4 py-12 lg:w-1/4 shadow-slate-400 shadow-md">
              <h2 className="text-center rounded-md px-6 py-4 bg-[#3720D2] text-white text-6xl font-bold mb-4">
                1
              </h2>
              <p className="text-center text-lg">
                We learn a little about you to figure out what your investment
                needs are.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-12 bg-white rounded-md px-4 py-12 lg:w-1/4 shadow-slate-400 shadow-md">
              <h2 className="text-center rounded-md px-6 py-4 bg-[#3720D2] text-white text-6xl font-bold mb-4">
                2
              </h2>
              <p className="text-center text-lg">
                Next, we do some math to pinpoint how much value you can squeeze
                out of the market while keeping your cash safe.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-12 bg-white rounded-md px-4 py-12 lg:w-1/4 shadow-slate-400 shadow-md">
              <h2 className="text-center rounded-md px-6 py-4 bg-[#3720D2] text-white text-6xl font-bold mb-4">
                3
              </h2>
              <p className="text-center text-lg">
                We use AI to genetically engineer a portfolio personalized for
                you. Sounds like sci-fi?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-24">
        <div className="p-4 lg:w-2/5">
          <h1 className="font-bold text-5xl mb-4">Track Your Portfolio</h1>
          <p className="text-xl lg:w-4/5 mb-8">
            One more thing: we don't just give you a bomb portfolio and abandon
            you to the market—we track your portfolio for you. You can skip the
            complicated math and finance if that's not your thing…just log in
            anytime to see how it's doing.
          </p>
          <button onClick={() => navigate("/signup")}>
            Get started for free
          </button>
        </div>
        <div className="lg:shrink-0 lg:w-2/5">
          <img src={trackShot} alt="" />
        </div>
      </section>

      <section className="bg-[#07031F] pt-12">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl text-center mb-8 font-bold text-white">
            Meet The Team
          </h1>
          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 w-full lg:w-5/6">
            <div className="bg-white rounded-md p-8 lg:w-1/4 shadow-slate-400 shadow-md">
              <h2 className="my-2 text-lg font-bold">Jason DeCambre</h2>
              <h3 className="my-2 text-[#4C35E6]">Co-founder</h3>
              <p className="my-2">
                Jason handles the math and AI backend at FolioLens. While
                serving as the Director of Investor Information at the UWI Young
                Investors' Club, he realized that lots of hardworking persons'
                money gets lost in Jamaica because of poor financial literacy.
                So he wanted to leverage 21st century technology to address that
                problem. He studied computer science and economics at the UWI
                Mona, and likes to play guitar, paint and try new dishes from
                around the world in his free time.
              </p>
              <div className="flex gap-4 mt-4">
                <a
                  className="bg-[#4C35E6] rounded-full p-2 hover:scale-95"
                  href="https://jasondecambre.me/"
                >
                  <FiGlobe className="text-2xl text-white" />
                </a>
                <a
                  className="bg-[#4C35E6] rounded-full p-2 hover:scale-95"
                  href="http://www.linkedin.com/in/jasondecambre"
                >
                  <FiLinkedin className="text-2xl text-white" />
                </a>
                <a
                  className="bg-[#4C35E6] rounded-full p-2 hover:scale-95"
                  href="https://github.com/jasondecambre/"
                >
                  <FiGithub className="text-2xl text-white" />
                </a>
              </div>
            </div>
            <div className="bg-white rounded-md p-8 lg:w-1/4 shadow-slate-400 shadow-md">
              <h2 className="my-2 text-lg font-bold">Marlon James</h2>
              <h3 className="my-2 text-[#4C35E6]">Co-founder</h3>
              <p className="my-2">
                Marlon helps to keep the team organized and focuses on keeping
                the FolioLens backend and frontend in sync. Passionate about
                UI/UX, he takes pride in creating stunning visual designs and
                effects that tell memorable stories. He brings a wealth of
                experience to the team, having been on the development teams for
                many revolutionary tech products in the Caribbean space. Marlon
                majored in computer science at the UWI Mona, and happens to be
                quite the chef when he's not coding.
              </p>
              <div className="flex gap-4 mt-4">
                <a
                  className="bg-[#4C35E6] rounded-full p-2 hover:scale-95"
                  href="https://www.marlonjames.tech/"
                >
                  <FiGlobe className="text-2xl text-white" />
                </a>
                <a
                  className="bg-[#4C35E6] rounded-full p-2 hover:scale-95"
                  href="https://www.linkedin.com/in/marlon-jameswc/"
                >
                  <FiLinkedin className="text-2xl text-white" />
                </a>
                <a
                  className="bg-[#4C35E6] rounded-full p-2 hover:scale-95"
                  href="https://github.com/omisoul"
                >
                  <FiGithub className="text-2xl text-white" />
                </a>
              </div>
            </div>
            <div className="bg-white rounded-md p-8 lg:w-1/4 shadow-slate-400 shadow-md">
              <h2 className="my-2 text-lg font-bold">Rojae Martin</h2>
              <h3 className="my-2 text-[#4C35E6]">Co-founder</h3>
              <p className="my-2">
                Rojae makes sure that FolioLens delivers the quality that our
                users deserve, whether that be tweaking the UX, fixing bugs or
                seeing how best to implement feedback that we get from our
                stakeholders. He has an impressive portfolio of projects in
                tech, understanding that ugly websites don't do anyone any
                good.He studied computer science at the UWI Mona and is heavily
                passionate about the latest technology and tech updates.
              </p>
              <div className="flex gap-4 mt-4">
                <a
                  className="bg-[#4C35E6] rounded-full p-2 hover:scale-95"
                  href="https://r-martin.tech"
                >
                  <FiGlobe className="text-2xl text-white" />
                </a>
                <a
                  className="bg-[#4C35E6] rounded-full p-2 hover:scale-95"
                  href="https://www.linkedin.com/in/rojae-martin-965277211"
                >
                  <FiLinkedin className="text-2xl text-white" />
                </a>
                <a
                  className="bg-[#4C35E6] rounded-full p-2 hover:scale-95"
                  href="https://github.com/rjeenn"
                >
                  <FiGithub className="text-2xl text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#4C35E6] lg:pb-0 pt-24">
        <img
          className="w-full lg:w-2/5 rounded-md lg:rounded-none"
          src={finalShot}
          alt=""
        />
        <div className="flex items-center justify-center flex-col gap-4 w-full lg:w-2/5">
          <h1 className="text-white text-6xl font-extrabold lg:w-4/5 mb-4">
            Get started today!
          </h1>
          <p className="text-white lg:w-4/5 text-xl mb-8">
            Start by getting your free stock portfolio suggestion today!
          </p>
          <div className="w-full lg:w-4/5 flex items-center justify-start gap-4 mt-2">
            <button
              className="bg-white text-[#4C35E6] m-auto lg:m-0"
              onClick={() => navigate("/signup")}
            >
              Get started for free
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#07031F]">
        <p className="text-center text-xl text-white py-2">
          © Copyright 2022. FolioLens. All Rights Reserved.
        </p>
      </section>
    </div>
  );
};

export default Landing;
