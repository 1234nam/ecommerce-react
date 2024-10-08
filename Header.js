import { Link, useNavigate } from "react-router-dom"


export default  function Header({count}) {

    var navigate = useNavigate()

    return (
        <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
            <div className="text-xl font-bold">
                <a href="#" className="hover:text-blue-300">MyLogo</a>
            </div>

            {/* <nav className="hidden md:flex space-x-4">
                <a href="#" className="hover:text-blue-300">Home</a>
                <a href="#" className="hover:text-blue-300">About</a>
                <a href="#" className="hover:text-blue-300">Services</a>
                <a href="#" className="hover:text-blue-300">Contact</a>
            </nav> */}

            <a className=" text-blue-600 rounded hidden md:block relative" onClick={ () => navigate("/cart")}>
                <svg className="w-[25px] h-[25px] fill-[#FFFFFF]" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                </svg>   
                <span class="absolute top-0 right-0 -mt-2 -mr-2 w-4 h-4 bg-red-600 text-white text-xs font-bold flex items-center justify-center rounded-full">
                    {count}
                </span>         
            </a>

        </div>
    </header>
    );
  }