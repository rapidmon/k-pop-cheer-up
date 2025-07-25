import React from 'react';
import { AlertCircle, RefreshCw, X } from 'lucide-react';

interface ErrorMessageProps {
    message: string;
    onRetry?: () => void;
    onDismiss?: () => void;
    variant?: 'default' | 'compact';
    className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry,onDismiss, variant = 'default', className = '' }) => {
    if (variant === 'compact') {
        return (
            <div className={`bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg ${className}`}>
                <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
                    <p className="text-red-700 text-sm">{message}</p>
                </div>
                <div className="flex items-center space-x-2">
                    {onRetry && (
                    <button
                        onClick={onRetry}
                        className="text-red-600 hover:text-red-800 transition-colors duration-200"
                        aria-label="다시 시도"
                    >
                        <RefreshCw className="w-4 h-4" />
                    </button>
                    )}
                    {onDismiss && (
                    <button
                        onClick={onDismiss}
                        className="text-red-400 hover:text-red-600 transition-colors duration-200"
                        aria-label="닫기"
                    >
                        <X className="w-4 h-4" />
                    </button>
                    )}
                </div>
                </div>
            </div>
            );
    }

    return (
        <div className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 ${className}`}>
            <div className="text-center">
                <div className="mb-6">
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <AlertCircle className="w-8 h-8 text-red-500" />
                </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                문제가 발생했습니다
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                {message}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {onRetry && (
                    <button
                    onClick={onRetry}
                    className="flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full transition-all duration-200 font-semibold transform hover:scale-105"
                    >
                    <RefreshCw className="w-4 h-4" />
                    다시 시도
                    </button>
                )}
                
                {onDismiss && (
                    <button
                    onClick={onDismiss}
                    className="flex items-center justify-center gap-2 bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-full transition-all duration-200 font-semibold transform hover:scale-105"
                    >
                    <X className="w-4 h-4" />
                    닫기
                    </button>
                )}
                </div>

                <div className="mt-6 text-sm text-gray-500">
                <p>문제가 계속되면 잠시 후 다시 시도해주세요.</p>
                </div>
            </div>
        </div>
    );
};

export default ErrorMessage;