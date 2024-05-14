export default function FlexContainer({ children }: any) {
        return (
        <div className="flex flex-col items-start gap-2">
            {children}
        </div>
    )
}
