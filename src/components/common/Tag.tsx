import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";

type TagProps = {
  tag: string;
  clickable?: boolean;
  variant?: "primary" | "outline";
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const variants = {
  primary: "rounded-[20px] bg-neutralLightest px-2 py-1",
  outline: "rounded-[35px] border border-black px-4 py-2",
};

const Tag = ({ tag, clickable, variant, onClick }: TagProps) => {
  return (
    <div
      onClick={onClick}
      className={cn("flex items-center gap-2", variants[variant || "primary"])}
    >
      <p className="c-small text-[#1B1B1B]">{tag}</p>
      {clickable && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="12"
          viewBox="0 0 11 12"
          fill="none"
        >
          <path
            d="M10.3995 10.773L10.0459 11.1266C9.85068 11.3218 9.53411 11.3218 9.33881 11.1266L5.27298 7.06065L1.20708 11.1265C1.01186 11.3218 0.695267 11.3218 0.500004 11.1265L0.146447 10.7729C-0.0488156 10.5777 -0.0488156 10.2611 0.146447 10.0658L4.21233 6L0.146447 1.9341C-0.0488156 1.73888 -0.0488156 1.42229 0.146447 1.22702L0.499996 0.873474C0.695259 0.678212 1.01186 0.678212 1.20708 0.873474L5.27298 4.93935L9.33881 0.873467C9.53411 0.678205 9.85068 0.678205 10.0459 0.873467L10.3995 1.22702C10.5948 1.42228 10.5948 1.73888 10.3995 1.9341L6.33363 6L10.3995 10.0658C10.5948 10.2611 10.5948 10.5777 10.3995 10.773Z"
            fill="black"
          />
        </svg>
      )}
    </div>
  );
};

export default Tag;
