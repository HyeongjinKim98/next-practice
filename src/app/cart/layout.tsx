export default function CartLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col gap-6 p-8">
            <h1 className="text-3xl font-bold">장바구니</h1>
            {children}
        </div>
    )
}