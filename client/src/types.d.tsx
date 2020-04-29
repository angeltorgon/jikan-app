export type Video = {
    episode: string;
    image_url: string;
    title: string;
    url: string;
}

export type Picture = {
    large: string;
    small: string;
}

export type Episode = {
    aired: string;
    episode_id: number;
    filler: boolean;
    forum_url: string;
    recap: boolean;
    title: string;
    title_japanese: string;
    title_romanji: string;
    video_url: string;
}

export interface IVideoCardProps {
    video: Video;
}

export interface IPictureCardProps {
    picture: Picture;
}

export interface IEpisodeCardProps {
    episode: Episode;
}