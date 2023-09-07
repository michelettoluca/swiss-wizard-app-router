"use client"
import { Apple, Home, LayoutDashboard, LucideIcon } from "lucide-react"
import Link from "next/link"
import { ComponentProps } from "react"
import { useSelectedLayoutSegment } from "next/navigation"
import clsx from "clsx"

type NavbarProps = {} & React.HTMLProps<HTMLDivElement>

export function Navbar({ className, ...props }: NavbarProps) {
	const navLinks = [
		{
			text: "Home",
			href: "/app/aa",
			segment: "aa",
			Icon: Home
		},
		{
			text: "Dashboard",
			href: "/app/bb",
			segment: "bb",
			Icon: LayoutDashboard
		},
		{
			text: "Apple",
			href: "/app/cc",
			segment: "cc",
			Icon: Apple
		}
	] as const

	return (
		<div
			className={clsx("rounded-lg bg-neutral-900 p-2", className)}
			{...props}
		>
			{navLinks.map(({ text, ...props }, idx) => (
				<NavLink key={idx + 1} {...props}>
					{text}
				</NavLink>
			))}
		</div>
	)
}

type NavLinkProps = {
	segment: string
	Icon: LucideIcon
} & ComponentProps<typeof Link>

export function NavLink({ segment, Icon, children, ...props }: NavLinkProps) {
	const activeSegment = useSelectedLayoutSegment()

	const isActiveSegment = segment === activeSegment

	return (
		<Link {...props}>
			<span
				className={clsx(
					"flex gap-4 p-4 transition-all",
					isActiveSegment
						? "text-white"
						: "text-neutral-400 hover:text-white"
				)}
			>
				{Icon && <Icon fill={isActiveSegment ? "white" : "none"} />}
				{children}
			</span>
		</Link>
	)
}
