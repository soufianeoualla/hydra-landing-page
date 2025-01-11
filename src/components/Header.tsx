import logo from "@assets/logo.svg";
import hydra from "@assets/hydra.svg";
import { Button } from "./ui/Button";
import NavLink from "./NavLink";

const menuLinks = [
  {
    label: "about",
  },
  {
    label: "services",
  },
  {
    label: "technologies",
  },
  {
    label: "how to",
  },
];

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="flex justify-start gap-4 ">
        <img src={logo} width={100} height={100} />
        <img src={hydra} width={76} height={46} />
      </div>
      <nav className="">
        <ul className="flex items-center gap-x-10 text-xs font-bold">
          {menuLinks.map((l) => (
            <NavLink link={l} key={l.label} />
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-x-8">
        <Button variant={"secondary"}>contact us</Button>
        <Button>join hydra</Button>
      </div>
    </header>
  );
};

export default Header;
