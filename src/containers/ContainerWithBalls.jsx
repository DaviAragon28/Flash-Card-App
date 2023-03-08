import { Balls } from "../components/Balls";

export function ContainerWithBalls({ children }) {
    return (
        <div className="flex flex-row flex-wrap gap-10 justify-center relative">
            <Balls />
            {children}
        </div>
    )
}