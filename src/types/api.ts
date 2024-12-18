export type ApiResponse<T> = {
    data: T
    status: number
    message?: string
}

export type PaginatedResponse<T> = {
    items: T[]
    total: number
    page: number
    limit: number
}

export type ApiError = {
    message: string
    code: string
    status: number
} 