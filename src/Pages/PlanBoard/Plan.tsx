import { Button } from "@/components/ui/button";
import type { Plan } from "@/types";
import { useNavigate } from "react-router";

type TPlanCardProps = {
    plan: Plan;
};

const PlanCard = ({plan}: TPlanCardProps) => {
    const navigate = useNavigate()
    const handleEditPlan = (editData: Plan) => {
        navigate('/add', {state: editData})
    }
    return (
        <div className="p-5 shadow-2xl rounded-2xl bg-amber-100 w-full">
            <p>{plan.title}</p>
            <p>{plan.date}</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur earum veniam quod libero ratione?</p>

            <button onClick={()=>handleEditPlan(plan)}>
                <Button  className="bg-amber-500">Edit</Button>
            </button>
        </div>
    );
};

export default PlanCard;