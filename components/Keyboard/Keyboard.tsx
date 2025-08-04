import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import { keyboardLayout } from '@/utils/keyboardLayout'

const Keyboard = () => {
    return (
        <div className="bg-neutral-900 p-4 rounded-lg shadow-2xl w-full max-w-5xl mx-auto">
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