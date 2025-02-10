"use client";

import { Init } from "@/components/init/init";

const LayoutImpersonated = ({ children }: { children: React.ReactNode }) => {
  return <Init>{children}</Init>;
};

export default LayoutImpersonated;
