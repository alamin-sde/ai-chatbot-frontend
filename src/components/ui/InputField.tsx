import { Eye, EyeOff } from "lucide-react"
import type { IputFieldPropsType } from "../../types/inputField.type"
const InputField = ({
    id,
    name,
    label,
    type = "text",
    value,
    placeholder,
    autoComplete,
    //   required = false,
    onChange,
    handleShowPassword,
    showPassword = false,
    isPassword = false,
    //   error,
    icon
}: IputFieldPropsType) => {

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
                {label}
            </label>
            <div className="relative flex  items-center ">
                <div className="absolute left-0 pl-3">
                    {icon}
                </div>

                <input
                    id={id}
                    name={name}
                    type={type}
                    autoComplete={autoComplete}
                    value={value}
                    onChange={(e) => onChange(e)}
                    placeholder={placeholder}
                    className="input-field pl-10"
                />
                {isPassword && <button
                    type='button'
                    className="absolute right-0 pr-3 text-gray-400 hover:text-gray-500"
                    onClick={handleShowPassword}
                >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>}
            </div>
        </div>
    )
}
export default InputField 