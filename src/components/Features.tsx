import { Button } from "./ui/Button";
import Divider from "./ui/Divider";
import image_feature_1 from "@assets/image-feature-1.png";
import image_feature_2 from "@assets/image-feature-2.png";
import image_feature_3 from "@assets/image-feature-3.png";
import image_feature_4 from "@assets/image-feature-4.png";

const Card = ({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-radial-gradient rounded-[40px] py-10 px-6 flex flex-col justify-center items-center">
      <div className="p-[14px] bg-[#0E0E0E]/35 rounded-full">
        <img src={img} alt="" className="rounded-full" />
      </div>
      <h2 className="text-2xl font-bold my-5">{title}</h2>
      <Divider width="154px" height="1px"  className="mx-0" />
      <p className="text-xs mt-5 mb-9"> {description} </p>
      <Button>TRY IT NOW</Button>
    </div>
  );
};

const featuresList = [
  {
    img: image_feature_1,
    description:
      "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.",
    title: "SIMULATION",
  },

  {
    img: image_feature_2,
    description:
      "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.",
    title: "EDUCATION",
  },
  {
    img: image_feature_3,
    description:
      "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.",
    title: "SELF-CARE",
  },
  {
    img: image_feature_4,
    description:
      "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.",
    title: "OUTDOOR",
  },
];

const Features = () => {
  return (
    <section className="grid grid-cols-4 items-start gap-x-3 mt-24">
      {featuresList.map((f) => (
        <Card
          key={f.title}
          title={f.title}
          description={f.description}
          img={f.img}
        />
      ))}
    </section>
  );
};

export default Features;
