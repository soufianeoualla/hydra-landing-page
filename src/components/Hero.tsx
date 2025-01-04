import { ArrowRight } from "lucide-react";
import { Button } from "./Button";
import hero_image from "@assets/hero-image.png";

const Span = ({ text }: { text: string }) => {
  return (
    <span className=" bg-gradient-custom bg-clip-text text-transparent text-5xl">
      {text}
    </span>
  );
};

const Hero = () => {
  return (
    <section className="flex justify-between items-start mt-32">
      <div className="w-1/2">
        <h1 className="text-4xl mb-8 font-bold ">
          <Span text="Dive" /> Into The Depths
          <br />
          Of <Span text="Virtual Reality" />
        </h1>
        <p className="w-2/3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          deleniti, iusto nihil, sed vel ipsam dolorum sequi quasi quae magni
          debitis. Voluptas recusandae doloremque dolorum nam. Obcaecati
          temporibus voluptas est.
        </p>
        <div className="flex items-center mt-16 gap-x-8">
          <Button>BUILD YOUR WORLD</Button>
          <ArrowRight color="#8176af" className="w-[42px] h-[33px] cursor-pointer" />
        </div>
      </div>

      <div className="p-6 bg-black/[0.13] rounded-t-[100px] rounded-br-[100px] rounded-bl-[240px]">
        <img
          src={hero_image}
          alt=""
          className=" rounded-t-[100px] rounded-br-[100px] rounded-bl-[240px] "
        />
      </div>
    </section>
  );
};

export default Hero;
