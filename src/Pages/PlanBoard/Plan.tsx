import { Button } from "@/components/ui/button";
import type { Plan } from "@/types";
import { AiOutlineEdit } from "react-icons/ai";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { MdOutlinePending } from "react-icons/md";
import { TbProgressCheck } from "react-icons/tb";
import { useNavigate } from "react-router";

type TPlanCardProps = {
    plan: Plan;
    onDelete: (id: string) => void;
};

const PlanCard = ({plan, onDelete}: TPlanCardProps) => {
    const navigate = useNavigate()
    

    const handleEditPlan = (editData: Plan) => {
        navigate('/add', {state: editData})
    }

    

    const cardBg = {
        high: "bg-red-50 border-red-200",
        mid: "bg-yellow-50 border-yellow-200",
        low: "bg-blue-50 border-blue-200",
    };
    const dateBg = {
        high: "bg-red-100 text-red-600",
        mid: "bg-yellow-100 text-yellow-600",
        low: "bg-blue-100 text-blue-600",
    };

    const doted = {
        high: "bg-red-500",
        mid: "bg-yellow-500",
        low: "bg-blue-500",
    };

    return (
        <div className={`p-5 flex flex-col shadow-xl rounded-xl border w-full ${cardBg[plan.priority]}`}>
            <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                    <div className={`border py-0.5 px-2 rounded ${dateBg[plan.priority]}`}>
                        <p>{plan.date}</p>
                    </div>
                    <div className={`border py-0.5 px-2 rounded flex gap-1 items-center ${dateBg[plan.priority]}`}>
                        <div className={`h-2 w-2 bg-black rounded-full ${doted[plan.priority]}`}></div>
                        <p>{plan.priority}</p>
                    </div>
                </div>
                <p className="text-3xl font-bold">
                    <span>{plan.title}</span>
                    <span className="inline-block">
                        {plan.status === "completed" && <IoCheckmarkDoneCircleOutline className="text-green-600"/>}  
                        {plan.status === "in-progress" && <TbProgressCheck className="text-orange-600"/>}  
                        {plan.status === "pending" && <MdOutlinePending className="text-sky-600"/>}     
                    </span> 
                </p>
                <div className="flex flex-wrap pt-1.5 gap-2.5 items-center">
                    {
                        plan.tags.map((tag, i) =><span key={i} className="bg-gray-300 text-gray-900 py-0.5 px-2 rounded-full">{tag}</span> )
                    }
                    
                </div>
                <p className="text-gray-500">{plan.description}</p>
            </div>

            <div>
                <hr className={`p-[0.5px] ${doted[plan.priority]} opacity-50`}/>
                <div className="mt-2 flex items-center gap-3">
                    <div className="w-full">
                        <Button 
                        onClick={()=>handleEditPlan(plan)} 
                        className="bg-orange-200 hover:bg-orange-300 text-orange-600 w-full flex items-center gap-1 cursor-pointer">
                            <AiOutlineEdit />
                            Edit
                        </Button>
                    </div>
                    <div className="w-full">
                        <Button 
                        onClick={()=>onDelete(plan.id)} 
                        className="bg-red-200 hover:bg-red-300 text-red-600 w-full flex items-center gap-1 cursor-pointer">
                            <AiOutlineEdit />
                            Delete
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanCard;