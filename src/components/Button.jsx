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
          ? "bg-transparent text-colorBlack hover:text-textButtonHover !px-2"
          : isSecondary
          ? "bg-darkBlue text-white hover:bg-secondaryHover"
          : "bg-yellow hover:bg-buttonHover"
      } ${
        isSmall
          ? "text-base py-2 px-6 md:py-[18px] md:px-5"
          : isLarge
          ? "text-2xl py-2 px-6 md:px-12 md:py-[18px]"
          : "py-2 px-6 md:px-12 md:py-[18px] text-lg"
      } ${isWhite ? "text-colorWhite" : "text-colorDark"}`}
    >
      {children}
    </button>
  );
};

export default Button;
