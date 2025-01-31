import React from "react";

const Button = ({
  isSecondary,
  isSmall,
  isLarge,
  isWhite,
  isText,
  className,
  children,
}) => {
  return (
    <button
      className={`group rounded-primary font-medium ${className} ${
        isText
          ? "bg-transparent !px-2 text-colorBlack hover:text-textButtonHover"
          : isSecondary
            ? "bg-darkBlue text-white hover:bg-secondaryHover"
            : "bg-yellow hover:bg-buttonHover"
      } ${
        isSmall
          ? "px-6 py-2 text-base md:px-5 md:py-[18px]"
          : isLarge
            ? "px-6 py-2 text-2xl md:px-12 md:py-[18px]"
            : "px-6 py-2 text-lg md:px-12 md:py-[18px]"
      } ${isWhite ? "text-colorWhite" : "text-colorDark"}`}
    >
      {children}
    </button>
  );
};

export default Button;
