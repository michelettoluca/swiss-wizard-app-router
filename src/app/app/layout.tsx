import { Navbar } from "@/components/Navbar"

type AppLayoutProps = {} & React.PropsWithChildren

export default function AppLayout({ children }: AppLayoutProps) {
	return (
		<div className="flex h-screen gap-4 p-4 text-neutral-200">
			<div className="flex w-[300px] flex-col gap-4">
				<Navbar />
				<div className="grow rounded-lg bg-neutral-900 p-6">
					Sezionissima
				</div>
			</div>
			<div className="grow rounded-lg bg-neutral-900 p-6">{children}</div>
		</div>
	)
}
