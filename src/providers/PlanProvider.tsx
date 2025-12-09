import { PlanContext } from "@/context/PlanContext";
import type { Plan, PlanProviderProps } from "@/types";
import { useState } from "react";

const PlanProvider = ({children}: PlanProviderProps) => {
    const [plan, setPlan] = useState<Plan[]>([])
    const [planToUpdate, setPlanToUpdate] = useState<Plan[]>([])
    console.log("update", planToUpdate);
    
    return (
        <PlanContext.Provider value={{plan, setPlan, planToUpdate, setPlanToUpdate}}>
            {children}
        </PlanContext.Provider>
    );
};

export default PlanProvider;