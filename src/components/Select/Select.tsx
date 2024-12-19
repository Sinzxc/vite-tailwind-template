import clsx from 'clsx';
import { forwardRef } from 'react';
import { SelectProps } from './types';

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({
    label,
    options,
    error,
    hint,
    size = 'medium',
    variant = 'outlined',
    fullWidth,
    className,
    selectClassName,
    labelClassName,
    disabled,
    loading,
    success,
    floatingLabel = false,
    placeholder,
    value,
    defaultValue,
    focusColor,
    ringOnFocus = true,
    ...props
}, ref) => {

    const sizeClasses = {
        small: 'px-2 py-1 text-sm h-8',
        medium: 'px-3 py-2 text-base h-10',
        large: 'px-4 py-3 text-lg h-12'
    };

    const variantClasses = {
        outlined: clsx(
            'border border-gray-300 bg-white',
            ringOnFocus && [
                focusColor?.startsWith('#')
                    ? 'focus:ring-1 focus:border-[color:var(--focus-color)] focus:ring-[color:var(--focus-color)]'
                    : 'focus:ring-1 focus:ring-blue-500 focus:border-blue-500'
            ]
        ),
        filled: 'border-0 bg-gray-100 focus:bg-gray-50',
        standard: 'border-0 border-b border-gray-300 bg-transparent px-0'
    };

    return (
        <div className={clsx('relative', fullWidth && 'w-full', className)}>
            {loading ? (
                <div className={clsx(
                    'w-full rounded-md bg-gray-200',
                    sizeClasses[size],
                    'animate-[shimmer_2s_infinite]'
                )}>
                    <div className="h-full w-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%]" />
                </div>
            ) : (
                <>
                    <select
                        ref={ref}
                        className={clsx(
                            'w-full rounded-md appearance-none transition-colors duration-200',
                            sizeClasses[size],
                            variantClasses[variant],
                            'pr-8',
                            selectClassName
                        )}
                        style={focusColor?.startsWith('#')
                            ? { '--focus-color': focusColor } as React.CSSProperties
                            : undefined
                        }
                        disabled={disabled || loading}
                        value={value}
                        defaultValue={defaultValue}
                        {...props}
                    >
                        {placeholder && (
                            <option value="" disabled hidden>
                                {placeholder}
                            </option>
                        )}
                        {options ? options.map((option) => {
                            if (typeof option === 'object' && 'value' in option && 'label' in option) {
                                return (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                );
                            }
                            return (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            );
                        }) : props.children}
                    </select>

                    {/* Кастомная стрелка */}
                    <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                            <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
                        </svg>
                    </div>
                </>
            )}

            {(error || hint) && (
                <p className={clsx(
                    'mt-1 text-sm',
                    error ? 'text-red-500' : 'text-gray-500'
                )}>
                    {error || hint}
                </p>
            )}
        </div>
    );
});

Select.displayName = 'Select'; 
