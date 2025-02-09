import logo from "@assets/logo-footer.png";
import Facebook from "@assets/facebook.svg";
import Twitter from "@assets/twitter.svg";
import Linkedin from "@assets/linkedin.svg";
import Instagram from "@assets/instagram.svg";
import { Button } from "./ui/Button";
import NavLink from "./NavLink";
import Divider from "./ui/Divider";
import line_1 from "../assets/line-footer-1.png";
import line_2 from "../assets/line-footer-2.png";
import Layout from "./ui/Layout";

const firstLinks = [
  {
    label: "About Us",
  },
  {
    label: "Services",
  },
  {
    label: "Technologies",
  },
  {
    label: "HOW TO",
  },
  {
    label: "JOIN HYDRA",
  },
];

const secondLinks = [
  {
    label: "F.A.Q",
    path: "/faq",
  },
  {
    label: "sitemap",
    path: "/sitemap",
  },
  {
    label: "conditions",
    path: "/conditions",
  },

  {
    label: "licenses",
    path: "/licenses",
  },
];

const socialLinks = [
  {
    label: "Facebook",
    icon: Facebook,
  },
  {
    label: "Twitter",
    icon: Twitter,
  },
  {
    label: "Linkedin",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    icon: Instagram,
  },
];

const List = ({ links }: { links: { label: string }[] }) => {
  return (
    <ul className="uppercase flex flex-col gap-y-4 text-sm font-bold items-start">
      {links.map((l) => (
        <NavLink link={l} key={l.label} />
      ))}
    </ul>
  );
};
const IconWrapper = ({ Icon }: { Icon: string }) => {
  return <img src={Icon} alt="icon" width={32} height={32} />;
};

const Footer = () => {
  return (
    <footer className="mt-8 relative">
      <img src={line_2} alt="" className="absolute -translate-y-1/4 w-screen" />
      <img src={line_1} alt="" className="absolute -top-10 w-screen" />

      <Layout className="flex justify-between items-start relative">
        <img src={logo} alt="logo" height={186} />

        <Divider />
        <List links={firstLinks} />
        <Divider />
        <List links={secondLinks} />
        <Divider />
        <div className="social">
          <b className="text-base">SOCIALIZE WITH HYDRA</b>
          <div className="flex justify-start gap-x-4 items-center my-10">
            {socialLinks.map((l) => (
              <IconWrapper Icon={l.icon} key={l.label} />
            ))}
          </div>
          <Button>BUILD YOUR WORLD</Button>
        </div>
      </Layout>
      <Divider height="1px" width="100%" className="mt-20 mx-0" />

      <b className="mt-12 mb-4 flex justify-center items-center">
        2025 © HYDRA LANDING PAGE - DESIGN BY ZINE. E. FALOUTI - ALL RIGHTS
        RESERVED{" "}
      </b>
    </footer>
  );
};

export default Footer;
