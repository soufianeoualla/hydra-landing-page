import { cn } from "../../utils/tailwindMerge";

const Layout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("max-w-screen-xl mx-auto",className)}>{children}</div>;
};

export default Layout;
