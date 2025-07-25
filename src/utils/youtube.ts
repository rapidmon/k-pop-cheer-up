export const getYouTubeUrl = (videoId: string): string => {
    return `https://www.youtube.com/watch?v=${videoId}`;
};

export const getYouTubeThumbnail = ( videoId: string, quality: 'default' | 'mqdefault' | 'hqdefault' | 'sddefault' | 'maxresdefault' = 'hqdefault'): string => {
    return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
};