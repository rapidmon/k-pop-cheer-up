import React from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { Song } from '../types';
import { getYouTubeUrl } from '../utils/youtube';

interface SongCardProps {
    song: Song;
    className?: string;
}

const SongCard: React.FC<SongCardProps> = ({ song, className = '' }) => {
    return (
        <div className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 ${className}`}>
            <div className="text-center">
                <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-2 leading-tight">
                    {song.title}
                </h2>
                <p className="text-xl text-purple-600 font-semibold">
                    {song.artist}
                </p>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 mb-6">
                <blockquote className="text-2xl font-medium text-gray-800 leading-relaxed">
                    <span className="text-purple-400 text-3xl">"</span>
                    {song.encouragingLyric}
                    <span className="text-purple-400 text-3xl">"</span>
                </blockquote>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                    href={getYouTubeUrl(song.youtubeId)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full transition-all duration-200 font-semibold transform hover:scale-105 hover:shadow-lg"
                    aria-label={`${song.title} - ${song.artist} YouTube에서 듣기`}
                >
                    <Play className="w-5 h-5" />
                    YouTube에서 듣기
                    <ExternalLink className="w-4 h-4" />
                </a>
                </div>
                <div className="mt-6 text-sm text-gray-500">
                <p>이 가사로 오늘도 힘내세요! 💪</p>
                </div>
            </div>
        </div>
    );
};

export default SongCard;