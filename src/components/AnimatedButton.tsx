import React, { useState } from "react";

const AnimatedButton = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className: string;
  onClick: () => void;
}) => {
  const [effect, setEffect] = useState<boolean>(false);

  const buttonClick = () => {
    setEffect(true);
    onClick();
  };

  return (
    <button
      className={`${className} ${effect && "animate-wiggle"}`}
      onClick={buttonClick}
      onAnimationEnd={() => setEffect(false)}
    >
      {children}
    </button>
  );
};

export default AnimatedButton;
