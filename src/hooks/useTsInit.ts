import { useContext } from "react";
import { tsInitContext } from "@/components/ts-init-provider/ts-init-context";

export const useTsInit = () => useContext(tsInitContext);
