import { SiTeamspeak } from "react-icons/si"; 
import { ImLocation } from "react-icons/im";
import { CgTime } from "react-icons/cg";
import { MdDateRange } from "react-icons/md";
import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
interface prop {
    seminar: any,
    handleDelete: (seminarId: string) => void;
}

const SeminarCard: React.FC<prop> = ({ seminar, handleDelete }) => {
    const [showDeleteIcon, setShowDeleteIcon] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const confirmDelete = () => {
        setShowConfirmation(true);
    };

    const cancelDelete = () => {
        setShowConfirmation(false);
    };

    const handleDeleteConfirmation = () => {
        handleDelete(seminar._id);
        setShowConfirmation(false);
    };
    return (
        <div
            className="relative"
            onMouseEnter={() => {
                setShowDeleteIcon(true);
            }}
            onMouseLeave={() => setShowDeleteIcon(false)}
        >
            <div className="card shadow-md hover:shadow-xl duration-1000 h-full">
                <div className="card-body lg:p-4 xl:p-6">
                    <h2 className="text-2xl font-bold">{seminar?.title}</h2>
                    <p className="flex items-center gap-1 font-semibold text-violet-500"><ImLocation className="text-xl text-violet-500" />{seminar?.location}</p>
                    <p className="flex justify-end items-center gap-1 font-semibold text-violet-500"> {seminar?.date}<MdDateRange className="text-xl" /></p>
                    <p className="flex items-center gap-1 font-semibold text-violet-500"><CgTime className="text-xl" />{seminar?.startTime} - {seminar?.endTime}</p>
                    <p className="flex justify-end items-center gap-1 font-semibold text-violet-500">{seminar?.speaker} <SiTeamspeak className="text-2xl"/></p>
                    <a href="#seminar_details" onClick={openModal} className="btn btn-sm bg-accentTwo text-white hover:bg-btnbg">Details</a>
                </div>
            </div>
            {showDeleteIcon && (
                <div className="absolute top-2 right-2 ">
                    <div className="bg-red-600 p-2 rounded">
                        <RiDeleteBinLine
                            className="text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-150"
                            onClick={confirmDelete} // Show confirmation dialog on click
                        />
                    </div>
                </div>
            )}
            {showConfirmation && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md shadow-2xl w-60">
                    <p className="text-md font-semibold">Are you sure you want to delete this seminar?</p>
                    <div className="flex justify-center mt-4">
                        <button className="bg-red-500 text-white px-4 py-1 rounded-md mr-2" onClick={handleDeleteConfirmation}>
                            Yes
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-4 py-1 rounded-md" onClick={cancelDelete}>
                            No
                        </button>
                    </div>
                </div>
            )}

            {
                isModalOpen && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
                        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md shadow-2xl w-96">
                            <div className="flex justify-end">
                                <button onClick={closeModal}>X</button>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h1 className="text-2xl font-bold">Seminar on "{seminar?.title}"</h1>
                                <p className="flex items-center gap-1 font-semibold text-violet-500"><ImLocation className="text-xl text-violet-500" />{seminar?.location}</p>
                                <p className="flex justify-end items-center gap-1 font-semibold text-violet-500"> {seminar?.date}<MdDateRange className="text-xl" /></p>
                                <p className="flex items-center gap-1 font-semibold text-violet-500"><CgTime className="text-xl" />{seminar?.startTime} - {seminar?.endTime}</p>
                                <p className="flex justify-end items-center gap-1 font-semibold text-violet-500">{seminar?.speaker} <SiTeamspeak className="text-2xl"/></p>
                                <p>{seminar?.description}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default SeminarCard;