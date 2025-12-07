import { PlanContext } from "@/context/PlanContext"
import type { PlanContextType } from "@/types";
import { useContext } from "react"

export const usePlan = () => {
    const context = useContext<PlanContextType | null>(PlanContext)
    if (!context) {
        throw new Error("usePlan must be used inside PlanProvider");
    }
    return context
} 