import { useState } from "react";

const MonthPicker = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState({
        month: 8,
        year: 2025,
    });

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const handleSelect = (month, year) => {
        setSelectedMonth({
            month,
            year,
        });

        setIsOpen(false);
    };

    return (
        <div className="relative">
            {/* Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50"
            >
                <span>
                    {months[selectedMonth.month]} {selectedMonth.year}
                </span>

                <svg
                    className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""
                        }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m6 9 6 6 6-6"
                    />
                </svg>
            </button>

            {/* Dropdown */}
            {isOpen && (
                <div className="absolute right-0 z-50 mt-2 w-[280px] rounded-lg border border-gray-200 bg-white p-4 shadow-lg">

                    {/* Header */}
                    <div className="mb-4 flex items-center justify-between">
                        <button className="rounded-md p-1 hover:bg-gray-100">
                            ←
                        </button>

                        <span className="text-sm font-semibold text-gray-700">
                            {selectedMonth.year}
                        </span>

                        <button className="rounded-md p-1 hover:bg-gray-100">
                            →
                        </button>
                    </div>

                    {/* Months */}
                    <div className="grid grid-cols-3 gap-2">
                        {months.map((month, index) => (
                            <button
                                key={month}
                                onClick={() =>
                                    handleSelect(
                                        index,
                                        selectedMonth.year
                                    )
                                }
                                className={`rounded-md px-2 py-2 text-sm transition ${selectedMonth.month === index
                                        ? "bg-gray-800 text-white"
                                        : "text-gray-600 hover:bg-gray-100"
                                    }`}
                            >
                                {month.slice(0, 3)}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MonthPicker;