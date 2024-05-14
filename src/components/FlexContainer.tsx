export default function FlexContainer({ children }) {
        return (
        <div className="flex flex-col items-start gap-2">
            {children}
        </div>
    )
}
