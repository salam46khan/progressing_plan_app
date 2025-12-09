import { usePlan } from "@/hooks/usePlan";
import { useState } from "react";
import "./AddPlan.css"
import { Button } from "@/components/ui/button";
import {type Plan } from "@/types";
import { useLocation } from "react-router";


const AddPlan = () => {
    const {plan, setPlan} = usePlan()
    const [err, setErr] = useState('')
    const {state} = useLocation()
    
    const [formData, setFormData] = useState<Plan>(state || {
        id: crypto.randomUUID(),
        title: "",
        description: "",
        date: "",
        priority: "high",
        status: "pending",
        tags: [],
    })

    const HandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement| HTMLTextAreaElement>) =>{
        const dataName = e.target.name
        const dataValue = e.target.value
        const processValue = dataName === "tags" ? dataValue.split(","): dataValue

        setFormData({
            ...formData,
            [dataName]: processValue
        })
    }

    const handleSubmit = () => {
        console.log('click');
        setErr("")
        if(formData.title === ""){
            setErr("Title is empty, please Provide plan title")
            return
        }
        if(formData.description === ""){
            setErr("Description is empty, please Provide plan description")
            return
        }
        if(formData.date === ""){
            setErr("Date is empty, please Provide plan date")
            return
        }
        if(formData.tags.length === 0){
            setErr("Tags is empty, please Provide plan tag")
            return
        }
        
        if(state){
            setPlan(
                plan.map(p => {
                    if(p.id === state.id){
                        return formData
                    }else{
                        return p
                    }
                })
            )
        }else{
            setPlan([...plan, formData])
        }
        
        setFormData({
            id: crypto.randomUUID(),
            title: "",
            description: "",
            date: "",
            priority: "high",
            status: "pending",
            tags: [],
        })
    }

    return (
        <div className="flex justify-center items-center">
            <div className="w-full max-w-3xl my-10 bg-green-800/25 p-10 rounded-2xl">
                <h3 className="text-2xl font-bold">{state ? "Edit Plan": "Add Plan"}</h3>

                <form>
                    <div className="py-2">
                        <label>Title</label>
                        <input onChange={HandleChange} name="title" value={formData.title} type="text" />
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center md:gap-3">
                        <div className="py-2 w-full md:w-1/2">
                            <label>Date</label>
                            <input onChange={HandleChange} name="date" value={formData.date} type="date" />
                        </div>
                        <div className="py-2 w-full md:w-1/2">
                            <label>Tags</label>
                            <input onChange={HandleChange} value={formData.tags} name="tags" type="text" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center md:gap-3">
                        <div className="py-2 w-full md:w-1/2">
                            <label>Priority</label>
                            <select onChange={HandleChange} value={formData.priority} name="priority">
                                <option value='high'>High</option>
                                <option value='mid'>Mid</option>
                                <option value='low'>Low</option>
                            </select>
                        </div>
                        <div className="py-2 w-full md:w-1/2">
                            <label>Status</label>
                            <select onChange={HandleChange} value={formData.status} name="status">
                                <option value='pending'>Pending</option>
                                <option value='completed'>Completed</option>
                                <option value='in-progress'>In-progress</option>
                            </select>
                        </div>
                    </div>
                    <div className="py-2">
                        <label>Description</label>
                        <textarea onChange={HandleChange} value={formData.description} name="description"/>
                    </div>
                    {
                        err && <p className="text-red-500">{err}</p>
                    }
                    <Button onClick={handleSubmit} type="button" className="bg-green-600 w-full mt-2">Add Plan</Button>
                </form>
            </div>
        </div>
    );
};

export default AddPlan;