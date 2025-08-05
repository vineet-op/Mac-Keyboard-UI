import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import { keyboardLayout } from '@/utils/keyboardLayout'

const Keyboard = () => {
    return (
        <div className="p-4 rounded-lg shadow-2xl bg-neutral-900 lg:max-w-5xl max-w-2xl mx-auto">
            {keyboardLayout.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center">
                    {row.map((key, keyIndex) => (
                        <CustomButton
                            key={keyIndex}
                            label={key.label}
                            subLabel={key.subLabel}
                            wide={key.wide}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Keyboard