import FormBase from "../../Components/forms/FormBase";

export default function CreateUser(){
    return(
        <div className="father">
            <FormBase 
            button ="Create Student" 
            hasLocalStrorage = {false}
            navigate = "dashboard/users"
            />
        </div>
    )
}