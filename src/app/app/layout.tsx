type AppLayoutProps = {
	// ...
} & React.PropsWithChildren

export default function AppLayout({ children }: AppLayoutProps) {
	return <div>{children}</div>
}
