import logo from '../favicon.ico';
import Image from 'next/image';
import pango from '../../assets/pango.jpg'

export default function Footer(){
    return (
    <footer className="bg-white rounded-lg dark:bg-gray-900 m-4 mt-24 md:mt-36 static bottom-0">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <Image src={logo} alt='pango logo'/>    
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Pango</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="/aboutus" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                    </li>
                    <li>
                        <a href="/contactus" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://pango.at/" className="hover:underline">Pango</a>. All Rights Reserved.</span>
        </div>
    </footer>
    )
  }
  