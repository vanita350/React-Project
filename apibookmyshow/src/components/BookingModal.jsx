import React from 'react';
import { Ticket, X } from 'lucide-react';

export const BookingModal = ({ movieTitle, onClose }) => {
    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <div className="modal-header">
                    <h3 className="modal-title">
                        <Ticket className="title-icon"/> Booking Confirmation
                    </h3>
                    <button onClick={onClose} className="close-btn">
                        <X className="close-icon"/>
                    </button>
                </div>
                <p className="modal-text">
                    You have simulated booking a ticket for the movie **"{movieTitle}"**.
                </p>
                <p className="modal-note">
                    *Note: This is just a demo, real booking will not take place here.*
                </p>
                <button 
                    onClick={onClose} 
                    className="confirm-btn"
                >
                    Close
                </button>
            </div>
            
            <style jsx>{`
                .modal-backdrop {
                    /* fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 */
                    position: fixed;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    background-color: rgba(0, 0, 0, 0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 50;
                    padding: 1rem;
                }

                .modal-content {
                    /* bg-white rounded-lg p-6 shadow-2xl w-full max-w-sm transform transition-all scale-100 */
                    background-color: white;
                    border-radius: 0.5rem;
                    padding: 1.5rem;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                    width: 100%;
                    max-width: 24rem;
                    transition: transform 0.2s;
                }

                .modal-header {
                    /* flex justify-between items-start border-b pb-3 mb-4 */
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    border-bottom: 1px solid #e5e7eb; /* border-b */
                    padding-bottom: 0.75rem; /* pb-3 */
                    margin-bottom: 1rem; /* mb-4 */
                }

                .modal-title {
                    /* text-xl font-bold text-red-600 flex items-center */
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #dc2626; /* text-red-600 */
                    display: flex;
                    align-items: center;
                }

                .title-icon {
                    /* w-6 h-6 mr-2 */
                    width: 1.5rem;
                    height: 1.5rem;
                    margin-right: 0.5rem;
                }

                .close-btn {
                    /* text-gray-400 hover:text-gray-700 transition */
                    color: #9ca3af;
                    transition: color 0.15s ease-in-out;
                    cursor: pointer;
                    background: none;
                    border: none;
                    padding: 0;
                }
                
                .close-btn:hover {
                    color: #374151; /* hover:text-gray-700 */
                }
                
                .close-icon {
                    /* w-6 h-6 */
                    width: 1.5rem;
                    height: 1.5rem;
                }

                .modal-text {
                    /* text-gray-700 mb-4 */
                    color: #374151;
                    margin-bottom: 1rem;
                }

                .modal-note {
                    /* text-sm text-gray-500 */
                    font-size: 0.875rem;
                    color: #6b7280;
                }

                .confirm-btn {
                    /* mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg */
                    margin-top: 1.5rem;
                    width: 100%;
                    background-color: #dc2626;
                    color: white;
                    font-weight: 600;
                    padding: 0.5rem 1rem;
                    border: none;
                    border-radius: 0.5rem;
                    cursor: pointer;
                    transition: background-color 0.15s ease-in-out;
                }

                .confirm-btn:hover {
                    background-color: #b91c1c; /* hover:bg-red-700 */
                }
            `}</style>
        </div>
    );
};
