import React from 'react';
import { Music, Search } from 'lucide-react';

interface HeaderProps {
    showSearch?: boolean;
    onSearchToggle?: () => void;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ showSearch = false, onSearchToggle, className = '' }) => {
    return (
        <div className={`text-center mb-8 ${className}`}>
            <div className="flex items-center justify-center gap-3 mb-4">
                <div className="relative">
                <Music className="w-8 h-8 text-white animate-pulse" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-400 rounded-full animate-ping"></div>
                </div>
                <h1 className="text-4xl font-bold text-white bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                K-pop 응원 가사
                </h1>
                <div className="relative">
                <Music className="w-8 h-8 text-white animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                </div>
            </div>

            <p className="text-white/80 text-lg mb-4 leading-relaxed">
                힘이 되는 K-pop 가사로 오늘을 시작해보세요! ✨
            </p>

            <div className="flex justify-center items-center gap-4">
                {onSearchToggle && (
                <button
                    onClick={onSearchToggle}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${
                    showSearch 
                        ? 'bg-white/20 text-white' 
                        : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                    }`}
                    aria-label="검색 토글"
                >
                    <Search className="w-4 h-4" />
                    <span className="text-sm font-medium">검색</span>
                </button>
                )}
            </div>

            <div className="flex justify-center mt-6 space-x-2">
                <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
        </div>
    );
};

export default Header;