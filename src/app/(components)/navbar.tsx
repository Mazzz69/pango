import Link from "next/link";
import logo from '../favicon.ico';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="mt-6 flex flex-row justify-start items-center ml-14">
            <Link href="/" className="opacity-80 flex flex-row gap-4 cursor-pointer">
                <Image src={logo} alt='Pango logo' />
                <span className="text-2xl">Pango</span>
            </Link>
            <div className="flex gap-10 ml-10">
                <Link href="/aboutus" className="opacity-80 cursor-pointer">About Us</Link>
                <Link href="/contactus" className="opacity-80 cursor-pointer">Contact Us</Link>
                <Link href="/templates" className="opacity-80 cursor-pointer">Templates</Link>
            </div>
        </nav>
    );
}
