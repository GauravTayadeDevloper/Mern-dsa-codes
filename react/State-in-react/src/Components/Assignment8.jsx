import { useState } from "react";

function Assignment8()
{
    let [form,setDetail] = useState({
        name:"",
        city:"",
        age:"",
    });
    function formToObject(e)
    {
        const {name,value}=e.target;
        setDetail(prev =>({...prev,[name]:value,}))
    }
    function handleSubmit(e)
    {
        e.preventDefault();


    }
    return(
        <> <form onSubmit={handleSubmit}>
            <input name="name" value={form.name} placeholder="Name" onChange={formToObject} ></input>
            <input name="city" value={form.city} placeholder="City" onChange={formToObject} ></input>
            <input name="age" value={form.age} placeholder="Age" onChange={formToObject}></input>
            <button type="submit">Submit</button>
        </form>
            <p>{form.name} {form.age} {form.city}</p>
        </>
    )
}
export default Assignment8;