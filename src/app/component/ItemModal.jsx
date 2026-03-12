export default function ItemModal({item, onClose}) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
            <div
                className="bg-[#0b0c14] border border-gray-800 w-full max-w-md rounded-2xl p-6 shadow-2xl transition-all scale-100">
                <div className="flex justify-between items-start mb-6">
                    <h2 className="text-white text-xl font-bold">Item Details</h2>
                    <button onClick={onClose}
                            className="text-gray-400 hover:text-white border border-gray-700 px-3 py-1 rounded-md text-xs">
                        Close
                    </button>
                </div>

                <div className="space-y-4 text-sm">
                    <p className="text-white"><span className="font-bold">ID:</span> {item.id}</p>
                    <p className="text-white"><span className="font-bold">Name:</span> {item.item_name}</p>
                    <p className="text-white"><span className="font-bold">Price:</span> ${item.item_price}</p>
                    <div className="pt-2">
                        <span className="text-white font-bold block mb-1">Description:</span>
                        <p className="text-gray-400 leading-relaxed">{item.item_description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}