import { Button } from "./ui/Button";
import about_image from "@assets/about-image.png";

const TitleHeader = ({
  title,
  underTitle,
  gap,
}: {
  title: string;
  underTitle: string;
  gap?: number;
}) => {
  return (
    <div
      className="flex flex-col"
      style={{
        gap,
      }}
    >
      <strong className="text-4xl"> {title} </strong>
      <p className="text-3xl font-extralight">{underTitle} </p>
    </div>
  );
};

const Introduction = () => {
  return (
    <section className="mt-24">
      <div className="flex justify-between items-start">
        <TitleHeader title="INTRODUCTION" underTitle="TO HYDRA VR" gap={15} />
        <p className="w-1/2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
          necessitatibus enim, temporibus quae sequi beatae omnis atque corrupti
          praesentium alias amet cumque quaerat doloremque nemo corporis eaque
          ullam architecto adipisci aperiam ipsam. Sunt, deserunt harum.
        </p>
      </div>
      <article className="flex justify-between items-center gap-x-24 my-24">
        <img
          src={about_image}
          alt=""
          className="rounded-tl-[100px] rounded-br-[100px] rounded-tr-[240px] rounded-bl-[240px] "
        />
        <div>
          <TitleHeader title="ABOUT" underTitle="HYDRA VR" />
          <p className="mt-10 mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            voluptatum molestias maxime odio iure dolorum exercitationem tempora
            nihil fuga a magnam aut quam nulla impedit cumque sapiente autem
            architecto quasi, esse qui dolor? Eius tempora dolorem cum, vitae
            quis, accusamus modi quia consequuntur rem autem sapiente optio
            inventore tempore quaerat nostrum, cumque deleniti doloribus.
            Laborum aliquam illum nisi quos corporis esse, rerum exercitationem
            quidem quas neque asperiores, vero sequi mollitia reiciendis.
            Commodi enim, quasi quisquam expedita maxime, in optio reiciendis
            blanditiis nam est mollitia eveniet molestiae, fugiat perferendis ut
            ex exercitationem. Deserunt placeat aperiam recusandae obcaecati?
            Autem fuga dolor molestiae?
          </p>
          <Button>LET’S GET IN TOUCH</Button>
        </div>
      </article>
      <div className="flex justify-between items-start">
        <TitleHeader title="WHY BUILD" underTitle="WITH HYDRA?" gap={15} />
        <p className="w-1/2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
          necessitatibus enim, temporibus quae sequi beatae omnis atque corrupti
          praesentium alias amet cumque quaerat doloremque nemo corporis eaque
          ullam architecto adipisci aperiam ipsam. Sunt, deserunt harum.
        </p>
      </div>
    </section>
  );
};

export default Introduction;
