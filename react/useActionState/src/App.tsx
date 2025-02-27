import {FormEvent, useRef, useState} from 'react'

interface IData {
    error?: string;
    message?: string;
}

function App() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<IData>();

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        if (inputRef.current?.value === null) return
        const data = await saveUser(inputRef?.current?.value ?? '');
        setData(data);
        setIsLoading(false);
    }

    return (
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" ref={inputRef}/>
            <button disabled={isLoading} style={{marginTop: '.5rem'}}>
                Submit
            </button>
            {data?.error && <span style={{color: 'red'}}>{data?.error}</span>}
            {data?.message && <span style={{color: 'green'}}>{data?.message}</span>}
        </form>
    )
}

export default App


async function saveUser(firstName: string) {
    await wait(1000);
    if (firstName.length === 0) {
        return {error: "Name is required"}
    }

    return {message: "User saved"}
}

function wait(duration: number) {
    return new Promise(resolve => setTimeout(resolve, duration));
}