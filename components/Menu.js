"use client";

import { useState, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import MenuButton from "./MenuButton";

export default function Menu({ navigation }) {
	// Track current path for navigation
	const pathname = usePathname();

	// Track state for menu open/close
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			{/* Open/close menu button */}
			<MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

			<Transition show={menuOpen}>
				<Dialog onClose={() => setMenuOpen(false)} className="relative z-40">
					{/* Backdrop */}
					<Transition.Child
						as={Fragment}
						enter="ease-in-out duration-400"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in-out duration-400"
						leaveFrom="opacity-100"
						leaveTo="opacity-0">
						<div className="fixed inset-0 bg-gray-dark/40" aria-hidden="true" />
					</Transition.Child>

					{/* Modal */}
					<Transition.Child
						as={Fragment}
						enter="duration-400 ease-in-out"
						enterFrom="motion-safe:-translate-y-full motion-reduce:opacity-0"
						enterTo="motion-safe:translate-y-0 motion-reduce:opacity-100"
						leave="duration-400 ease-in-out"
						leaveFrom="motion-safe:translate-y-0 motion-reduce:opacity-100"
						leaveTo="motion-safe:-translate-y-full motion-reduce:opacity-0">
						<Dialog.Panel className="fixed inset-x-0 top-0 flex flex-col bg-teal ring-1 ring-gray-light/25">
							{/* Navigation */}
							<nav className="flex flex-col p-6 sm:p-7 md:p-8 lg:p-10 xl:p-14 2xl:p-20">
								<ul
									role="list"
									className="flex flex-col gap-y-3 md:gap-y-4 lg:gap-y-5 xl:gap-y-6 2xl:gap-y-7">
									{navigation.map((item) => (
										<li
											key={item.name}
											className="group w-fit text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold tracking-wide">
											<Link
												href={item.href}
												onClick={() => setMenuOpen(false)}
												className="flex items-center gap-x-2 lg:gap-x-2.5 xl:gap-x-3 2xl:gap-x-4 drop-shadow aria-current-page:text-gray-200 aria-current-false:text-gray-light aria-current-false:hover:text-gray-200 aria-current-false:motion-safe:hover:translate-x-2 transition-all ease-in-out duration-300 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-gray-light focus-visible:outline-offset-4"
												aria-current={pathname === item.href ? "page" : false}>
												{pathname === item.href ? (
													<Logo className="h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6 2xl:h-8 2xl:w-8" />
												) : (
													<div
														className="h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6 2xl:h-8 2xl:w-8 flex justify-center items-center"
														aria-hidden="true">
														<div className="h-2.5 w-2.5 md:h-[13px] md:w-[13px] lg:h-4 lg:w-4 xl:h-[19px] xl:w-[19px] 2xl:h-[26px] 2xl:w-[26px] rounded-full border-2 md:border-[2.5px] lg:border-[3px] xl:border-[3.5px] 2xl:border-[4.5px] border-gray-light group-hover:bg-gray-200 group-hover:border-gray-200 transition ease-in-out duration-300" />
													</div>
												)}
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							</nav>
						</Dialog.Panel>
					</Transition.Child>
				</Dialog>
			</Transition>
		</>
	);
}
