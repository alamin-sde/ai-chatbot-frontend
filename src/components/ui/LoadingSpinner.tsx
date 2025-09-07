import type { LoadingSpinnerPropsType } from "../../types/loadingSpinner.type"

const LoadingSpinner = ({ size = 'md', className = '' }: LoadingSpinnerPropsType) => {
    const sizeClasses = {
        sm: 'w-4 h-4 border-2',
        md: 'w-6 h-6 border-2',
        lg: 'w-8 h-8 border-2',
        xl: 'w-12 h-12 border-3'
    }
    return (
        <div
            className={`loading-spinner ${sizeClasses[size]} ${className}`}
        >
            <span className='sr-only'>Loading...</span>
        </div>
    )
}
export default LoadingSpinner