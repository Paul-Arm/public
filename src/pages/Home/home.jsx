import React from "react";
import { Carousel } from "flowbite-react";
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";


export default function Home() {
  return (
    <div>
      <section
        className="hero"
        class="bg-[url('https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg')] h-100"
      >
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Unser cooles Motto !
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-200">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.Anim aute id magna aliqua ad ad non deserunt sunt.
                Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat
                veniam occaecat fugiat aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-66"></div>
      </section>

      <section className="welcome">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                abc
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Wir sind toll !
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
                Suspendisse eget egestas a elementum pulvinar et feugiat blandit
                at. In mi viverra elit nunc.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="images">
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel indicators={true} >
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                alt="..."
              />
            </Carousel>
          </div>

      </section>
      <div className="mt-10 flex items-center justify-center gap-x-66"></div>
      
      <Footer container>
      <Footer.Copyright href="#" by="Test" year={2024} />
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">AGBs</Footer.Link>
        <Footer.Link href="#">Kontakt</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
    </div>
  );
}
