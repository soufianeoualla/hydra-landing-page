import { LucideProps, Mail, MapPin, PhoneCall } from "lucide-react";
import { cn } from "../utils/tailwindMerge";

const items = [
  {
    title: "Pay Us a Visit",
    description: "Union St, Seattle, WA 98101, United States",
    icon: MapPin,
  },
  {
    title: "Give Us a Call",
    description: "(110) 1111-1010",
    icon: PhoneCall,
  },
  {
    title: "Send Us a Message",
    description: "Contact@HydraVTech.com",
    icon: Mail,
  },
];

const Item = ({
  Icon,
  title,
  description,
  withBorder,
}: {
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
  withBorder: boolean;
}) => {
  return (
    <div
      className={cn(
        "flex gap-x-7 items-center px-10 py-4",
        withBorder &&
          "border-l border-r border-l-customPurple/35 border-r-customPurple/35"
      )}
    >
      <Icon width={59} height={59} color="rgb(129,118,175)" />
      <div className="space-y-2">
        <strong className="text-2xl">{title}</strong>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <div
      className="rounded-[90px] flex justify-between items-center py-8 mt-28 bg-radial-gradient"    
    >
      {items.map((i, index) => (
        <Item
          key={i.title}
          Icon={i.icon}
          description={i.description}
          title={i.title}
          withBorder={index === 1}
        />
      ))}
    </div>
  );
};

export default Banner;
