import { useState, useCallback } from 'react'
import { AxiosError } from 'axios'
import { apiClient } from '../services/api/client'
import { ApiError, ApiResponse } from '../types/api'

interface UseApiOptions<T> {
    onSuccess?: (data: T) => void
    onError?: (error: ApiError) => void
}

export function useApi<T>() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<ApiError | null>(null)
    const [data, setData] = useState<T | null>(null)

    const request = useCallback(
        async <R = T>(
            url: string,
            method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
            options?: {
                data?: unknown
                params?: Record<string, string>
                config?: UseApiOptions<R>
            }
        ) => {
            try {
                setLoading(true)
                setError(null)

                const response = await apiClient.request<ApiResponse<R>>({
                    url,
                    method,
                    data: options?.data,
                    params: options?.params,
                })

                setData(response.data.data as unknown as T)
                options?.config?.onSuccess?.(response.data.data)
                return response.data.data
            } catch (err) {
                const apiError = err as AxiosError<ApiError>
                const error = {
                    message: apiError.response?.data?.message || 'Произошла ошибка',
                    code: apiError.response?.data?.code || 'UNKNOWN_ERROR',
                    status: apiError.response?.status || 500,
                }
                setError(error)
                options?.config?.onError?.(error)
                throw error
            } finally {
                setLoading(false)
            }
        },
        []
    )

    return { loading, error, data, request }
} 