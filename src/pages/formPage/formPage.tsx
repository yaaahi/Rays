
import { FormEvent } from "react"
import "./formStyle.css"

type UserData = {
    name: string,
    address: string,
    field: string,
    phone: string,
    preference: string
}

type FormPageProps = UserData & {
    onUpdate: (parameters: Partial<UserData>) => void
}

export function FormPage({name, address, phone, field, preference, onUpdate}: FormPageProps){

    function handleSubmit(e: FormEvent){
        e.preventDefault()
        
    }
    
    return(
        <section className="form-container" id="form">
            
            <form className="form" onSubmit={handleSubmit}>
                <h1>申し込み記入欄</h1>
                <label>
                    <span >name: </span>
                    <input type="text" required value={name} onChange={e => {
                        onUpdate({name: e.target.value})
                    }}/>
                </label>

                <label>
                    <span >address: </span>
                    <input type="text" required value={address} onChange={e => {
                        onUpdate({address: e.target.value})
                    }}/>
                </label>

                <label>
                    <span >fields: </span>
                    <input type="text" required value={field} onChange={e => {
                        onUpdate({field: e.target.value})
                    }}/>
                </label>

                <label>
                    <span >phone: </span>
                    <input type="text" required value={phone} onChange={e => {
                        onUpdate({phone: e.target.value})
                    }}/>
                </label>

                <h3>希望など</h3>
                <textarea value={preference} onChange={e => {
                        onUpdate({preference: e.target.value})
                    }}/>

                <button type="submit">Submit</button>
            </form>

        </section>
    )
}