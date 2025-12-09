import {type PlanContextType } from "@/types";
import { createContext} from "react";

export const PlanContext = createContext<PlanContextType | null>(null)
export const PlanUpdateContext = createContext<PlanContextType | null>(null)