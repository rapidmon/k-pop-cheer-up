import { useState, useEffect, useCallback } from 'react';
import { Song } from '../types';
// import { musixmatchApi } from '../services/musixmatchApi';
import { sampleKpopSongs } from '../data';
import { getRandomElement, delay, formatErrorMessage } from '../utils/song_related';

interface UseKpopLyricsReturn {
    currentSong: Song | null;
    isLoading: boolean;
    error: string;
    getRandomSong: () => Promise<void>;
    searchSongs: (query: string) => Promise<Song[]>;
    clearError: () => void;
}

export const useKpopLyrics = (): UseKpopLyricsReturn => {
    const [currentSong, setCurrentSong] = useState<Song | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    // 에러 초기화
    const clearError = useCallback(() => {
        setError('');
    }, []);

    // 실제 API 사용 시 노래 검색
    //   const searchSongsFromApi = useCallback(async (query: string): Promise<Song[]> => {
    //     try {
    //       const response = await musixmatchApi.searchKpopSongs(query);
    //       if (!response) {
    //         throw new Error('API 응답을 받을 수 없습니다.');
    //       }

    //       // 실제 API 응답을 Song 형태로 변환
    //       const songs: Song[] = response.message.body.track_list.map((item, index) => ({
    //         id: item.track.track_id.toString(),
    //         title: item.track.track_name,
    //         artist: item.track.artist_name,
    //         encouragingLyric: '가사를 불러오는 중...', // 별도로 가사 API 호출 필요
    //         youtubeId: '' // YouTube 검색 API 또는 수동 매핑 필요
    //       }));

    //       return songs;
    //     } catch (error) {
    //       console.error('노래 검색 실패:', error);
    //       throw error;
    //     }
    //   }, []);

    // 노래 검색 (현재는 샘플 데이터 사용)
    const searchSongs = useCallback(async (query: string): Promise<Song[]> => {
        try {
        setIsLoading(true);
        setError('');

        // 실제 API 사용 시:
        // return await searchSongsFromApi(query);

        // 현재는 샘플 데이터에서 검색
        await delay(800); // 로딩 시뮬레이션
        
        const term = query.toLowerCase().trim();
        const filtered = sampleKpopSongs.filter(song => 
            song.title.toLowerCase().includes(term) ||
            song.artist.toLowerCase().includes(term) ||
            song.encouragingLyric.toLowerCase().includes(term)
        );

        return filtered;
        } catch (error) {
        const errorMessage = formatErrorMessage(error);
        setError(errorMessage);
        return [];
        } finally {
        setIsLoading(false);
        }
    }, []);

    // 랜덤 노래 선택
    const getRandomSong = useCallback(async (): Promise<void> => {
        try {
        setIsLoading(true);
        setError('');

        // 실제 API 사용 시:
        // const songs = await searchSongsFromApi('kpop');
        // if (songs.length > 0) {
        //   setCurrentSong(getRandomElement(songs));
        // } else {
        //   throw new Error('노래를 찾을 수 없습니다.');
        // }

        // 현재는 샘플 데이터 사용
        await delay(1000); // 로딩 시뮬레이션
        const randomSong = getRandomElement(sampleKpopSongs);
        setCurrentSong(randomSong);
        } catch (error) {
        const errorMessage = formatErrorMessage(error);
        setError(errorMessage);
        console.error('랜덤 노래 선택 실패:', error);
        } finally {
        setIsLoading(false);
        }
    }, []);

    // 특정 노래의 가사 가져오기 (실제 API 사용 시)
    // const fetchLyrics = useCallback(async (trackId: number): Promise<string | null> => {
    //     try {
    //     return await musixmatchApi.getLyrics(trackId);
    //     } catch (error) {
    //     console.error('가사 가져오기 실패:', error);
    //     return null;
    //     }
    // }, []);

    // 컴포넌트 마운트 시 첫 번째 노래 로드
    useEffect(() => {
        getRandomSong();
    }, [getRandomSong]);

    return {
        currentSong,
        isLoading,
        error,
        getRandomSong,
        searchSongs,
        clearError
    };
};