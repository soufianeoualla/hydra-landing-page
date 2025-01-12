import { ArrowRight } from "lucide-react";
import TitleHeader from "./ui/TitleHeader";
import line from "@assets/line-steps.svg";
import Layout from "./ui/Layout";

const steps = [
  {
    title: "3D Conception& Design",
  },
  {
    title: "Interaction Design",
  },
  {
    title: "VR World User Testing",
  },
  {
    title: "Hydra VR Deploy",
  },
];

const Build = () => {
  return (
    <section>
      <Layout>
        <div className="flex justify-between items-start mt-24">
          <TitleHeader title="HOW WE BUILD" underTitle="WITH HYDRA VR?" />
          <p className="w-1/2">
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
      </Layout>
      <div className="mt-24 relative">
        <img
          src={line}
          alt=""
          className="absolute w-screen bg-contain z-0 -translate-y-10 "
        />
        <Layout className="flex justify-between">
          {steps.map((s, index) => (
            <div key={index} className="z-50">
              <div className="w-[200px] h-[200px] bg-[#0D0D0D]/35 rounded-full flex justify-center items-center">
                <div className="w-[159px] h-[159px] rounded-full bg-customPurple flex justify-center items-center text-6xl font-bold text-primary ">
                  0{index + 1}
                </div>
              </div>
              <div className="flex items-start gap-x-4 mt-6">
                <ArrowRight
                  color="#8176af"
                  className="w-[42px] h-[33px] cursor-pointer"
                />
                <h1 className="text-2xl font-bold w-2/3 ">{s.title} </h1>
              </div>
            </div>
          ))}
        </Layout>
      </div>
    </section>
  );
};

export default Build;
