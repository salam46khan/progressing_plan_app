import { Button } from "@/components/ui/button";
import { usePlan } from "@/hooks/usePlan";
import { Link } from "react-router";
import { type Plan } from "@/types";
import PlanCard from "./Plan";

const PlanBoard = () => {
    const {plan} = usePlan()
    console.log(plan);
    
    return (
        <div className="container mx-auto py-10 p-3">
            <div>src here</div>
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">My Plan</h2>
                <Link to={'/add'}><Button>Add Plan</Button></Link>
            </div>
            <div className="grid pt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    plan.map((plan: Plan) => <PlanCard key={plan.id} plan={plan}/>)
                }
            </div>
        </div>
    );
};

export default PlanBoard;