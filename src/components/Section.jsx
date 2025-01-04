const Section = ({ className, children }) => {
  return (
    <div
      className={`py-10 md:py-14 lg:py-20 xl:py-32 ${className && className}`}
    >
      {children}
    </div>
  );
};

export default Section;
