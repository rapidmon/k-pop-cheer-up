import React from 'react';
import { RefreshCw, Music } from 'lucide-react';

interface LoadingSpinnerProps {
    message?: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ message = '새로운 응원 가사를 찾고 있어요...', size = 'md',className = '' }) => {
    const sizeClasses = {
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-16 h-16'
    };

    const textSizeClasses = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg'
    };

    return (
        <div className={`text-center py-12 ${className}`}>
        <div className="relative mb-4">
            <RefreshCw className={`${sizeClasses[size]} text-purple-500 animate-spin mx-auto`} />
            <Music className="w-4 h-4 text-purple-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        
        <p className={`text-gray-600 ${textSizeClasses[size]} animate-pulse`}>
            {message}
        </p>
        
        <div className="flex justify-center space-x-1 mt-3">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
        </div>
    );
};

export default LoadingSpinner;