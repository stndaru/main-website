import React from "react";

export interface NumberProps {
  description: string;
  isNumber?: boolean;
}

export const ButtonComponent: React.FC<NumberProps> = ({
  description,
  isNumber,
}) => (
  <div className="flex items-center bg-black w-full aspect-square p-[0.12rem] sm:p-[0.18rem] [box-shadow:inset_0px_-1px_1px_0px_hsla(0,0%,100%,0.25)]">
    <div
      className="flex w-full aspect-square rounded-lg py-[0.4rem] sm:py-[0.8rem] px-[0.6rem] sm:px-[1rem] transition-all ease-out duration-150 cursor-pointer group
                        [background-image:radial-gradient(circle_at_top_left,hsla(0,0%,100%,0.1),hsla(0,0%,100%,0)),radial-gradient(circle_at_center,hsla(0,0%,0%,0),hsla(0,0%,0%,0.15)),linear-gradient(to_bottom_right,hsla(90,3%,11%,0.7)_0%,hsla(90,2%,13%,0.7)_50%,hsla(0,0%,11%,0.7)_100%)] 
                        [box-shadow:inset_4px_4px_8px_0px_hsla(0,0%,0%,0.15),inset_1px_1px_1px_0px_hsla(227,15%,87%,0.5),inset_1px_2px_2px_0px_hsla(80,2%,37%,1),8px_8px_12px_0px_hsla(0,0%,0%,0.5),4px_4px_8px_0px_hsla(0,0%,0%,0.5),12px_12px_24px_0px_hsla(0,0%,0%,0.5),16px_16px_32px_0px_hsla(0,0%,0%,0.3),24px_24px_40px_0px_hsla(0,0%,0%,0.5)] 
                        active:[box-shadow:inset_4px_4px_8px_0px_hsla(0,0%,0%,0.5)] 
                        active:[background-image:radial-gradient(circle_at_bottom_right,hsla(0,0%,100%,0.05),hsla(0,0%,100%,0)),radial-gradient(circle_at_center,hsla(0,0%,0%,0),hsla(0,0%,0%,0.3)),linear-gradient(to_bottom_right,hsla(90,3%,11%,0.4)_0%,hsla(90,2%,13%,0.4)_50%,hsla(0,0%,11%,0.4)_100%)]
                        active:scale-[0.9]

              "
    >
      <div
        className={`select-none w-full text-zinc-300 group-active:text-zinc-400 ${
          isNumber
            ? "text-lg sm:text-3xl"
            : "text-sm sm:text-xl uppercase text-center"
        }`}
      >
        {description}
      </div>
    </div>
  </div>
);
