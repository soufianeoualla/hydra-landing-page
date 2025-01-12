import { cn } from "../../utils/tailwindMerge";

const TitleHeader = ({
  title,
  underTitle,
  gap,
  center,
}: {
  title: string;
  underTitle: string;
  gap?: number;
  center?: boolean;
}) => {
  return (
    <div
      className={cn("flex flex-col z-50", center && "justify-center items-center ")}
      style={{
        gap,
      }}
    >
      <strong className="text-4xl"> {title} </strong>
      <p className="text-3xl font-extralight">{underTitle} </p>
    </div>
  );
};

export default TitleHeader;
