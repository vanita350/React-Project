
import React from 'react';
import { Film } from 'lucide-react';
import HomePage from './pages/Home.jsx'; 

const App = () => {
    return (
        <div className="min-h-screen bg-gray-50 pb-10 font-sans">
            <header className="bg-gray-800 text-white shadow-lg sticky top-0 z-10">
                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="text-3xl font-extrabold flex items-center space-x-2">
                        <Film className="w-7 h-7 text-red-500"/>
                        <span>BookMyShow Lite Clone</span>
                    </h1>
                    <div className="text-sm font-medium text-gray-300">
                        Movis
                    </div>
                </div>
            </header>
            <HomePage /> 
        </div>
    );
}

export default App;
