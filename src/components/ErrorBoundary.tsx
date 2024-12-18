import { Component, ErrorInfo, ReactNode } from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

interface Props {
    children: ReactNode
    fallback?: ReactNode
}

interface State {
    hasError: boolean
    error: Error | null
}

// Компонент для отображения ошибок маршрутизации
export function RouteErrorBoundary() {
    const error = useRouteError()

    if (isRouteErrorResponse(error)) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center p-4">
                <h1 className="text-4xl font-bold text-red-500">{error.status}</h1>
                <p className="mt-2 text-gray-600">{error.statusText}</p>
                {error.data?.message && (
                    <p className="mt-4 text-sm text-gray-500">{error.data.message}</p>
                )}
                <button
                    className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                    onClick={() => window.location.href = '/'}
                >
                    Вернуться на главную
                </button>
            </div>
        )
    }

    return <DefaultErrorUI error={error as Error} />
}

// Компонент для отображения общих ошибок
function DefaultErrorUI({ error }: { error: Error }) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-4">
            <h1 className="text-4xl font-bold text-red-500">Что-то пошло не так</h1>
            <p className="mt-2 text-gray-600">
                {error.message || 'Произошла непредвиденная ошибка'}
            </p>
            {process.env.NODE_ENV === 'development' && (
                <pre className="mt-4 max-w-xl overflow-auto rounded bg-gray-100 p-4 text-sm">
                    {error.stack}
                </pre>
            )}
            <button
                className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                onClick={() => window.location.reload()}
            >
                Попробовать снова
            </button>
        </div>
    )
}

// Классовый компонент для отлова ошибок
export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    }

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error }
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo)
        // Здесь можно отправить ошибку в сервис аналитики
        // sendErrorToAnalytics(error, errorInfo)
    }

    public render() {
        if (this.state.hasError) {
            return this.props.fallback || <DefaultErrorUI error={this.state.error!} />
        }

        return this.props.children
    }
} 