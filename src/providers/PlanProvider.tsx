import { PlanContext } from "@/context/PlanContext";
import type { Plan, PlanProviderProps } from "@/types";
import { useState } from "react";

const PlanProvider = ({children}: PlanProviderProps) => {
    const [plan, setPlan] = useState<Plan[]>([])
    return (
        <PlanContext.Provider value={{plan, setPlan}}>
            {children}
        </PlanContext.Provider>
    );
};

export default PlanProvider;