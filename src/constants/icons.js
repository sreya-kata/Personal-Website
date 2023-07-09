import React from "react";
import { white, orange } from "./colors";

const Hamburger = () => {
  return (
    <svg
      width="39"
      height="22"
      viewBox="0 0 39 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="2.72" fill={orange} />
      <rect y="9.52002" width="32" height="2.72" fill={orange} />
      <rect y="19.04" width="32" height="2.72" fill={orange} />
    </svg>
  );
};

const Cross = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.09938 5.99991L11.7719 10.6727C12.076 10.9767 12.076 11.4681 11.7719 11.772C11.468 12.076 10.9766 12.076 10.6726 11.772L5.99993 7.09924L1.32737 11.772C1.02329 12.076 0.532001 12.076 0.228062 11.772C-0.0760205 11.4681 -0.0760205 10.9767 0.228062 10.6727L4.90062 5.99991L0.228062 1.32711C-0.0760205 1.02317 -0.0760205 0.531728 0.228062 0.227782C0.379533 0.0761652 0.578696 0 0.777716 0C0.976736 0 1.17576 0.0761652 1.32737 0.227782L5.99993 4.90058L10.6726 0.227782C10.8242 0.0761652 11.0233 0 11.2223 0C11.4213 0 11.6203 0.0761652 11.7719 0.227782C12.076 0.531728 12.076 1.02317 11.7719 1.32711L7.09938 5.99991Z"
        fill={white}
      />
    </svg>
  );
};

export { Hamburger, Cross };
