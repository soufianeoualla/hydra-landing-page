import logo from "@assets/logo.svg";
import hydra from "@assets/hydra.svg";
import { Button } from "./Button";

const menuLinks = [
  {
    label: "about",
    path: "/",
  },
  {
    label: "services",
    path: "/",
  },
  {
    label: "technologies",
    path: "/",
  },
  {
    label: "how to",
    path: "/",
  },
];

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="flex justify-start gap-4 ">
        <img src={logo} width={100} height={100} />
        <img src={hydra} width={76} height={46} />
      </div>
      <nav className="flex items-center gap-x-10 text-xs font-bold ">
        {menuLinks.map((l) => (
          <li key={l.label} className="list-none text-white uppercase group cursor-pointer">
            {" "}
            {l.label}{" "}
            <div className="h-0.5 w-full group-hover:bg-white rounded-full mt-0.5" />
          </li>
        ))}
      </nav>
      <div className="flex items-center gap-x-8">
        <Button variant={"secondary"}>contact us</Button>
        <Button>join hydra</Button>
      </div>
    </header>
  );
};

export default Header;
