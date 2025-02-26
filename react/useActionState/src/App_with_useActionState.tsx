import {useActionState} from 'react'

function App_with_useActionState() {
    const [data, action, isPending] = useActionState(saveUser, undefined)

    return (
        <form action={action} style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <label htmlFor="firstName">First Name</label>
            <input defaultValue={data?.fieldData?.firstName ?? ""} type="text" name="firstName" id="firstName"/>
            <button disabled={isPending} style={{marginTop: '.5rem'}}>
                Submit
            </button>
            {data?.error && <span style={{color: 'red'}}>{data?.error}</span>}
            {data?.message && <span style={{color: 'green'}}>{data?.message}</span>}
        </form>
    )
}

export default App_with_useActionState


async function saveUser(previousState: unknown, formData: FormData) {
    const firstName = formData.get('firstName');
    await wait(1000);
    if (firstName === "") {
        return {error: "Name is required"}
    }

    return {message: "User saved", fieldData: {firstName}}
}

function wait(duration: number) {
    return new Promise(resolve => setTimeout(resolve, duration));
}