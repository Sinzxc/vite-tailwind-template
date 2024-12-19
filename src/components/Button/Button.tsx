import clsx from 'clsx';
import { ButtonProps } from './types';

export function Button({
    children,
    variant = 'primary',
    size = 'medium',
    className,
    onClick,
    disabled,
    type = 'button',
    icon,
    iconPosition = 'right',
    iconClassName,
    fullWidth,
    loading
}: ButtonProps) {
    const sizeClasses = {
        small: 'px-2 py-1 text-sm',
        medium: 'px-4 py-2',
        large: 'px-6 py-3 text-lg'
    }

    const variantClasses = {
        primary: 'bg-[#fb8b24] text-white hover:opacity-80 disabled:bg-orange-300',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-gray-100',
        bordered: 'border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white disabled:border-gray-400 disabled:text-gray-400'
    }

    if (loading) {
        return (
            <div
                className={clsx(
                    'rounded bg-gray-200 animate-pulse',
                    sizeClasses[size],
                    fullWidth && 'w-full'
                )}
            />
        )
    }

    return (
        <button
            className={clsx(
                'rounded  duration-300 flex items-center justify-center gap-2',
                variantClasses[variant],
                sizeClasses[size],
                fullWidth && 'w-full',
                className
            )}
            disabled={disabled}
            onClick={onClick}
            type={type}
        >
            {icon && iconPosition === 'left' && <span className={iconClassName}>{icon}</span>}
            {children}
            {icon && iconPosition === 'right' && <span className={iconClassName}>{icon}</span>}
        </button>
    )
}
