import React, { useState } from 'react'
import MainHotelDashboardModal from './components/modal';

export const MainHotelDashboard = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <>
            <button
                className="rounded bg-blue-500 text-white p-2 hover:bg-blue-400"
                onClick={() => setModalOpen(!isModalOpen)}
            >
                Open Modal
            </button>
            <MainHotelDashboardModal isOpen={isModalOpen} closeModal={() => setModalOpen(false)} />
        </>
    )
}

