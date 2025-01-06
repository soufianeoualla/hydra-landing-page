
const NavLink = ({
  link,
}: {
  link: {
    label: string;
  };
}) => {
  return (
    <li
      key={link.label}
      className="list-none text-white uppercase group cursor-pointer"
    >
      {" "}
      {link.label}{" "}
      <div className="h-0.5 w-full group-hover:bg-white rounded-full mt-0.5" />
    </li>
  );
};

export default NavLink;
