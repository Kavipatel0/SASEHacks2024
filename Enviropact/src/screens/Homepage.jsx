import React from "react";
import { Button } from "antd";

function Homepage() {
  return (
    <>
      <div>
        <nav className="bg-transparent flex justify-between items-center px-20 py-5 z-10">
          <ul className="flex items-center justify-end w-full gap-6">
            <li className="mr-auto text-lg text-black geist-reg flex items-center justify-center">
              <img src="../../assets/images/tree-icon.svg" className="px-2" />
              <p>Enviro-Pact</p>
            </li>
            <li className="text-md text-black geist-reg">Contact</li>
            <li>
              <Button
                type="primary"
                className="text-md text-black geist-reg"
                style={{ background: "rgb(132 204 22)" }}
              >
                Sign In
              </Button>
            </li>
          </ul>
        </nav>
        {/*Hero Page */}
        <section className="min-h-screen bg-[url('../../assets/images/Background.svg')] bg-cover bg-no-repeat bg-right-bottom">
          <div className="flex flex-col px-20 py-40 max-w-full gap-4">
            <h1 className="font-bold text-6xl text-zinc-300 geist-reg">
              Preserve your pact
              <br />
              with the Earth.
            </h1>
            <div className="pb-5 text-lg max-w-full">
              <p className="text-lime-500 text-base geist-reg">
                A new way to engage with your community and better
                <br /> the Earth together, one trash bag at a time.
              </p>
            </div>
            <Button
              type="primary"
              className="p-5 text-lg text-black w-40"
              style={{ background: "rgb(132 204 22)" }}
            >
              Search Events →
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Homepage;
