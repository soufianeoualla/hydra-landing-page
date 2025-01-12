import { cn } from "@utils/tailwindMerge";

const Divider = ({
  height,
  width,
  className,
  
}: {
  height?: string;
  width?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn("bg-footer-gradient ml-24 mr-14 ", className)}
      style={{
        height: height ?? "186px",
        width: width ?? "6px",
      }}
    />
  );
};

export default Divider;
