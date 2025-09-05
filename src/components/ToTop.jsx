import { IoIosArrowDropupCircle } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";

function ToTop({ toTop }) {

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>
            {toTop && (
                <span className="fixed bottom-12 right-12 rounded-full text-yellow-500 text-center z-10" onClick={scrollUp}>
                    <IoIosArrowDropupCircle className="w-10 h-10" />
                </span>
            )}

            {toTop && (
                <a
                    href="https://wa.me/+919108560381?text=Hello! Gandeevan Technologies"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span className="whatsapp ">
                        <span className="fs-1 cursor-pointer">
                            <FaWhatsapp className="w-10 h-10" />
                        </span>
                    </span>
                </a>
            )}
        </div>
    );
}

export default ToTop;