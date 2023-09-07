type IdPageProps = {
	params: { id: string }
}

export default function IdPage({ params }: IdPageProps) {
	return <pre>{JSON.stringify(params, null, 3)}</pre>
}
