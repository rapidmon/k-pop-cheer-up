import React from 'react';
import { RefreshCw } from 'lucide-react';
import { useKpopLyrics } from './hooks/useKpopLyrics';
import Header from './components/Header';
import SongCard from './components/SongCard';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';

const App: React.FC = () => {
  const { currentSong, isLoading, error, getRandomSong, clearError,} = useKpopLyrics();

  const handleRetry = () => {
    clearError();
    getRandomSong();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-6">
      <div className="max-w-2xl mx-auto">
        <Header 
          className="animate-fade-in"
        />

        <div className="animate-slide-up">
          {error ? (
            <ErrorMessage 
              message={error}
              onRetry={handleRetry}
              onDismiss={clearError}
              className="mb-6"
            />
          ) : isLoading ? (
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl mb-6">
              <LoadingSpinner />
            </div>
          ) : currentSong ? (
            <SongCard 
              song={currentSong}
              className="mb-6"
            />
          ) : (
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-6">
              <div className="text-center py-12">
                <p className="text-gray-600">응원 가사를 불러올 수 없습니다.</p>
              </div>
            </div>
          )}
        </div>

        <div className="text-center animate-fade-in-delay">
          <button
            onClick={getRandomSong}
            disabled={isLoading}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full transition-all duration-200 font-semibold text-lg border border-white/30 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 hover:shadow-lg"
            aria-label="새로운 응원 가사 가져오기"
          >
            <RefreshCw className={`w-5 h-5 inline mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            새로운 응원 가사
          </button>
        </div>

        <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 animate-fade-in-delay-2">
          <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
            ⚠️ 개발 참고사항
          </h3>
          <ul className="text-white/80 text-sm space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-yellow-300 mt-0.5">•</span>
              현재는 예시 데이터를 사용하고 있습니다
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-300 mt-0.5">•</span>
              실제 가사 사용 시 저작권 허가가 필요합니다
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-300 mt-0.5">•</span>
              Musixmatch API는 CORS 이슈로 백엔드 프록시가 필요할 수 있습니다
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-300 mt-0.5">•</span>
              <code className="bg-white/20 px-1 rounded text-xs">REACT_APP_MUSIXMATCH_API_KEY</code> 환경 변수 설정 필요
            </li>
          </ul>
        </div>

        <footer className="mt-8 text-center text-white/60 text-sm">
          <p>Made with 💜 for K-pop lovers</p>
        </footer>
      </div>
    </div>
  );
};

export default App;