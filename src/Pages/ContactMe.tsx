import MainSection from "../components/MainSection";
import message from "../assets/Animation - 1719078289256.json";
import Lottie from "lottie-react";
import { useForm, ValidationError } from "@formspree/react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Label from "../components/ui/Label";
import Textarea from "../components/ui/Textarea";
import { FaMessage } from "react-icons/fa6";
import { SOCIAL_MEDIA } from "../components/data";
import { Helmet } from "react-helmet";

const ContactMe = () => {
  const [state, handleSubmit] = useForm("mjvnlzed");

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Skills</title>
      </Helmet>
      <MainSection
        name={
          <h3 className="flex items-center gap-x-2 font-extrabold text-2xl md:text-3xl lg:text-4xl mb-6">
            <FaMessage className="-mb-2" /> Contact Me
          </h3>
        }
        paragraph={
          " You're welcome to contact me for work or just to say hello."
        }
        lottie={
          <div className="lg:flex-1 ">
            <Lottie
              className={"text-lg animate-transY"}
              animationData={message}
            />
          </div>
        }
        form={
          <form onSubmit={handleSubmit} className="flex-col space-y-4">
            <div className="">
              <Label htmlFor="email">Enter Your Email</Label>
              <Input
                type="email"
                placeholder="Your Email"
                name="email"
                required
                id="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="">
              <Label htmlFor="message">Enter Your Message</Label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Your Message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <Button type="submit" disabled={state.submitting} width="w-fit">
              {state.submitting ? "Submitting..." : "Send Message"}
            </Button>
            {state.succeeded && (
              <h3>Your message has been sent successfully ✅</h3>
            )}
            {state.errors && <h3>try again ❌</h3>}
          </form>
        }
        socialIcons={
          <div className="flex flex-wrap my-4 space-x-4 gap-y-4 ">
            {SOCIAL_MEDIA.map((item) => (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-16 h-16 text-lg bg-transparent font-semibold py-2 px-4 border hover:border-transparent rounded duration-500 hover:bg-white hover:text-zinc-800 border-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white dark:border-zinc-800"
              >
                {item.icon}
              </a>
            ))}
          </div>
        }
      />
    </>
  );
};

export default ContactMe;
