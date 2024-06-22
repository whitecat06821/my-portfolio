import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { PROJECTS } from "../data";
import { RxVercelLogo } from "react-icons/rx";
import { AiFillGithub } from "react-icons/ai";

export default function Example() {
  return (
    <div className="">
      <div>
        <TabGroup className={`lg:flex gap-6`}>
          <TabList>
            {PROJECTS.map(({ name }) => (
              <Tab
                key={name}
                className="lg:flex lg:-ml-3 rounded-lg lg:py-4 lg:pl-4 lg:w-52 py-2 mb-4 px-4 text-sm font-semibold dark:text-zinc-800 dark:data-[selected]:bg-zinc-800/10 dark:data-[hover]:bg-zinc-800/5 dark:data-[selected]:data-[hover]:bg-zinc-800/10 dark:data-[focus]:outline-zinx-800 text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className={`w-full`}>
            {PROJECTS.map(({ name, description, image, vercel, github }) => (
              <>
                <TabPanel
                  key={name}
                  className="lg:flex md:flex-row justify-around py-12 rounded-xl dark:bg-zinc-800/5 bg-white/5 p-3"
                >
                  <div>
                    <ul>
                      {description.map((desc) => (
                        <li className="relative rounded-md p-3 text-sm/6 font-semibold text-white dark:text-zinc-800">
                          {desc}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-x-2">
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center mb-4 mt-4 ml-3 w-16 h-16 text-lg bg-transparent font-semibold py-2 px-4 border hover:border-transparent rounded duration-500 hover:bg-white text-white hover:text-zinc-800 border-zinc-400 dark:hover:bg-zinc-800 dark:text-zinc-800 dark:hover:text-white dark:border-zinc-800"
                      >
                        <AiFillGithub />
                      </a>
                      {vercel === "" ? (
                        ""
                      ) : (
                        <a
                          href={vercel}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex justify-center items-center mb-4 mt-4 ml-3 w-16 h-16 text-lg bg-transparent font-semibold py-2 px-4 border hover:border-transparent rounded duration-500 hover:bg-white text-white hover:text-zinc-800 border-zinc-400 dark:hover:bg-zinc-800 dark:text-zinc-800 dark:hover:text-white dark:border-zinc-800"
                        >
                          <RxVercelLogo />
                        </a>
                      )}
                    </div>
                  </div>
                  <img
                    src={image}
                    className="bg-zinc-900 dark:bg-white p-2 rounded-md lg:w-[50%] lg:h-[100%] xl:h-[40 0px]"
                    alt=""
                  />
                </TabPanel>
              </>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
