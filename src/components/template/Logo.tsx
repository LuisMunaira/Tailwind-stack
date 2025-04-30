import { IconBrandTailwind, IconDeviceDesktopSearch, IconHome2, IconHomeEdit, IconSmartHome } from '@tabler/icons-react'

export default function Logo() {
    return (
        <div className="flex items-center gap-2">
            <IconDeviceDesktopSearch size={40} stroke={1} color='blue' />
            <div>
                <span className="font-black">Luis </span>
                <span>_Munaira Junior</span>
            </div>
        </div>
    )
}
