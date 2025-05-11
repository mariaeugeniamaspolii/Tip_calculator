import type { MenuItemT } from "../types"

type MenuItemProps = {
    item: MenuItemT
    addItem: (item: MenuItemT) => void
}

export const MenuItem = ({ item, addItem }: MenuItemProps) => {
    return (
        <button
            className="border-1 border-blue-100 rounded hover:bg-blue-900 hover:border-blue-900 hover:text-white w-full p-3 flex justify-between"
            onClick={() => addItem(item)}
            >
            <p>{item.name}</p>
            <p className="font-black">{item.price}</p>
        </button>
    )
}

