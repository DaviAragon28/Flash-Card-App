export function ContainerPages({  children }) {
    return (
        <main className='container mx-auto dark:text-slate-200 px-5 flex flex-col items-center gap-5 py-24'>
            { children }
        </main>
    )
}