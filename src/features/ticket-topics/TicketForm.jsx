import Button from "@/components/Button";
import { useState } from "react";

const TicketForm = ({ onClose, onAdd = () => { } }) => {
    const [newForm, setNewForm] = useState({
        id: "",
        name: "",
        email: "",
        subject: "",
        attachment: null,
        message: "",
        created: "",
        status: "New",
    })

    const onChangeForm = (e) => {
        const { name, value } = e.target;

        setNewForm((prev) => {
            return { ...prev, [name]: value }
        });
        // console.log(onChangeForm)
    };

    const onSubmit = () => {
        console.log(newForm)
        const today = new Date();

        const created = `${String(today.getDate()).padStart(2, "0")}-${String(
            today.getMonth() + 1
        ).padStart(2, "0")}-${today.getFullYear()}`;

        const ticket = {
            ...newForm,
            id: Date.now(),
            created,
        };
        // onAdd({ ...newForm, id: Date.now()})
        onAdd(ticket)
        onClose()
    }

    return (
        <div className="w-full max-w-130 max-h-[95vh] rounded-2xl bg-white p-6 shadow-xl flex flex-col gap-4">
            <h1 className="font-semibold text-2xl text-gray-800">
                CreateTicket
            </h1>

            <form className="flex flex-col gap-3">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="name"
                            className="text-[12px] font-medium text-gray-700"
                        >Name
                        </label>

                        <input
                            id="name"
                            name="name"
                            type="text"

                            placeholder="Enter Your Name"
                            onChange={onChangeForm}
                            className="h-9 rounded-lg border border-gray-300 px-4 text-[12px] text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="email"
                            className="text-[12px] font-medium text-gray-700"
                        >Email
                        </label>

                        <input
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            onChange={onChangeForm}
                            className="h-9 rounded-lg border border-gray-300 px-4 text-[12px] text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="subject"
                        className="text-[12px] font-medium text-gray-700"
                    >Subject
                    </label>

                    <input
                        id="subject"
                        type="text"
                        name="subject"
                        onChange={onChangeForm}
                        placeholder="What can we help you with?"
                        className="h-9 rounded-lg border border-gray-300 px-4 text-[12px] text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                </div>

                {/* <div className="flex flex-col gap-2">
                    <label
                        htmlFor="message"
                        className="text-[12px] font-medium text-gray-700"
                    >Message
                    </label>

                    <textarea
                        id="message"
                        rows="3"
                        name="message"
                        onChange={onChangeForm}
                        placeholder="Describe your issue or request..."
                        className="resize-none rounded-lg border border-gray-300 px-4 py-3 text-[12px] text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                </div> */}

                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="attachment"
                        className="text-[12px] font-medium text-gray-700"
                    >Attachment
                        <span className="ml-1 font-normal text-gray-400">
                            (Optional)
                        </span>
                    </label>

                    <input
                        id="attachment"
                        type="file"
                        name="attachment"
                        className="w-full cursor-pointer rounded-lg border border-dashed border-gray-300 px-4 py-3 text-[12px] text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-green-600 file:hover:bg-green-700 file:px-4 file:py-2 file:font-medium file:text-white hover:border-blue-400 file:cursor-pointer"
                    />

                    <p className="text-xs text-gray-400">Maximum file size: 5MB</p>
                </div>

                <div className="mt-2 flex items-center justify-end gap-3 border-gray-100">
                    <Button
                        variant="secondary"
                        type="button"
                        onClick={onClose}
                        className="rounded-lg border border-gray-300 px-5 py-2.5 text-[12px] font-medium text-gray-700 transition hover:bg-gray-50"
                    >Cancel
                    </Button>

                    <Button
                        onClick={onSubmit}
                        className="rounded-lg bg-green-600 px-5 py-2.5 text-[12px] font-medium text-white transition hover:bg-green-700"
                    >Submit Ticket
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default TicketForm;
