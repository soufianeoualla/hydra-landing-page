import TitleHeader from "./ui/TitleHeader";
import tech_image_1 from "../assets/Hydra-Tech-1.png";
import tech_image_2 from "../assets/Hydra-Tech-2.png";
import tech_image_3 from "../assets/Hydra-Tech-3.png";
import tech_image_4 from "../assets/Hydra-Tech-4.png";

const imgs = [tech_image_1, tech_image_2, tech_image_3, tech_image_4];
const Technologies = () => {
  return (
    <section className="mt-24">
      <div className="relative flex justify-center items-center before:absolute before:bg-primary/75 before:inset-0 before:w-full before:h-full rounded-[160px] h-[300px] bg-cover  bg-[url('@assets/image-tech.jpg')]">
        <TitleHeader
          title="TECHNOLOGIES & HARDWARE"
          underTitle="USED BY HYDRA VR."
          center
        />
      </div>
      <div className="grid grid-cols-4 justify-center items-center mt-16">
        {imgs.map((img, index) => (
          <img key={index} src={img} alt="" />
        ))}
      </div>
 
    </section>
  );
};

export default Technologies;
