import React from "react";
import BubbleMenu from "./BubbleMenu";

const Navbar = () => {
  const items = [
    {
      label: "home",
      href: "#",
      rotation: -6,
      hoverStyles: { bgColor: "#3b82f6", textColor: "#fff" },
    },
    {
      label: "about",
      href: "#",
      rotation: 4,
      hoverStyles: { bgColor: "#10b981", textColor: "#fff" },
    },
    {
      label: "projects",
      href: "#",
      rotation: -3,
      hoverStyles: { bgColor: "#f59e0b", textColor: "#fff" },
    },
    {
      label: "blog",
      href: "#",
      rotation: 5,
      hoverStyles: { bgColor: "#ef4444", textColor: "#fff" },
    },
    {
      label: "contact",
      href: "#",
      rotation: -4,
      hoverStyles: { bgColor: "#8b5cf6", textColor: "#fff" },
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-2xl mx-auto px-4">
        <BubbleMenu
          logo={
            <span
              style={{ fontWeight: 600 }}
              className="font-bruno text-lg text-white"
            >
              Codebusters
            </span>
          }
          items={items}
          menuAriaLabel="Toggle navigation"
          menuBg="#1d4ed8"
          menuContentColor="#fff"
          useFixedPosition={true} // menu overlay fixed in viewport
          animationEase="back.out(1.5)"
          animationDuration={0.5}
          staggerDelay={0.12}
        />
      </div>
    </nav>
  );
};

export default Navbar;
