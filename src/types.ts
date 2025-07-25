// 타입 정의
export interface Song {
    id: string;
    title: string;
    artist: string;
    encouragingLyric: string;
    youtubeId: string;
}

export interface MusixmatchApiResponse {
    message: {
        header: {
            status_code: number;
        };
        body: {
            track_list: Array<{
                track: {
                track_name: string;
                artist_name: string;
                track_id: number;
                };
            }>;
        };
    };
}

// 가사 API 응답 타입
export interface LyricsApiResponse {
    message: {
        header: {
        status_code: number;
        };
        body: {
        lyrics: {
            lyrics_body: string;
        };
        };
    };
}

// 앱 상태 타입
export interface AppState {
    currentSong: Song | null;
    isLoading: boolean;
    error: string;
}