import React from "react";

export interface NumberProps {
  objID: string;
  description: string;
  state?: boolean;
}

export const IndicatorComponent: React.FC<NumberProps> = ({
  objID,
  description,
  state = false,
}) => (
  <div>
    <div
      id={objID}
      className="flex flex-row w-full h-fit pb-4 gap-2 sm:gap-4 text-zinc-900 items-center"
    >
      <div className="flex p-[1px] items-center w-[12px] h-[12px] sm:w-[20px] sm:h-[20px] rounded-[999px] [background-image:linear-gradient(to_top_left,#FFF_0%,hsla(0,0%,0%,0)_50%)]">
        <div
          className={`w-full h-full rounded-[999px] transition 
                      ${
                        state
                          ? " [background-image:radial-gradient(circle_at_top_left,hsla(0,100%,46%,0)_0%,hsla(22,100%,58%,0.5)_90%),linear-gradient(to_top_right,hsla(0,0%,0%,0)_0%,hsla(0,0%,0%,0.2)_50%,hsla(0,0%,0%,0)_100%),radial-gradient(circle_at_bottom_right,hsla(22,100%,44%,0.75),hsla(11,100%,55%,0.75)_50%,hsla(7,100%,38%,0.75)),linear-gradient(to_bottom_right,#E82000,#AC0202)]"
                          : " [background-image:radial-gradient(circle_at_bottom_right,hsla(0,0%,75%,0.4)_0%,hsla(0,0%,36%,0.4)_85%),linear-gradient(to_bottom_right,#000,#000)]"
                      }
                      [box-shadow:inset_0px_0px_1px_0px_#686868,inset_0px_0px_2px_0px_hsla(0,0%,0%,0.75),0px_0px_2px_0px_hsla(0,0%,100%,0.75)]
                    `}
        ></div>
      </div>
      <div className="text-sm sm:text-md">{description}</div>
    </div>
  </div>
);
