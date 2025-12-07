import type { ReactNode } from "react";

export type PlanProviderProps = {
  children: ReactNode;
};

// export type Plan = []
export type Priority = "high" | "mid" | "low";
export type Status= "pending" | "completed" | "in-progress" | "canceled";

export type Plan = {
    id: string;
    title: string;
    description: string;
    date: string;
    priority: Priority;
    status: Status;
    tags: string[];
};

export type PlanContextType = {
  plan: Plan[];
  setPlan: React.Dispatch<React.SetStateAction<Plan[]>>;
};