import { classNames } from "@/utils/classNames";
import Logo from "./Logo";

export default function MenuButton({ menuOpen, setMenuOpen }) {
	return (
		<button
			type="button"
			id="menu-button"
			onClick={() => setMenuOpen(!menuOpen)}
			className={classNames(
				menuOpen
					? "bg-gray-light border-gray-light hover:bg-gray-200 active:bg-gray-200"
					: "bg-teal border-teal hover:bg-gray-light active:bg-gray-light",
				"group fixed top-5 right-5 md:top-6 md:right-6 lg:top-8 lg:right-9 xl:top-10 xl:right-12 2xl:top-12 2xl:right-14 rounded-full shadow shadow-gray-dark/50 px-[17px] py-2 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 2xl:px-7 2xl:py-3.5 transition-colors ease-in-out duration-300 border-2 focus:outline-none focus-visible:outline-2 focus-visible:outline-gray-mid outline-offset-1 z-50"
			)}>
			<div className="w-full h-full relative">
				{/* Open menu (logo icon) */}
				<>
					<span class="sr-only">Open menu</span>
					<Logo
						className={classNames(
							menuOpen
								? "opacity-0 motion-safe:rotate-90"
								: "opacity-100 motion-safe:rotate-0",
							"h-6 w-6 lg:h-8 lg:w-8 xl:h-9 xl:w-9 2xl:h-10 2xl:w-10 text-gray-light transition duration-400 group-hover:text-teal"
						)}
					/>
				</>
				{/* Close menu (minus icon) */}
				<>
					<span class="sr-only">Close menu</span>
					<div
						className="absolute inset-0 h-6 w-6 lg:h-8 lg:w-8 xl:h-9 xl:w-9 2xl:h-10 2xl:w-10 flex justify-center items-center"
						aria-hidden="true">
						<div
							className={classNames(
								menuOpen
									? "opacity-100 motion-safe:rotate-0"
									: "opacity-0 motion-safe:-rotate-90",
								"h-[4.5px] w-[22px] lg:h-1.5 lg:w-[29px] xl:h-[7px] xl:w-8 2xl:h-2 2xl:w-9 bg-teal transition duration-400"
							)}
						/>
					</div>
				</>
			</div>
		</button>
	);
}
