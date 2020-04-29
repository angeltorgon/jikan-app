export type Video = {
    episode: string;
    image_url: string;
    title: string;
    url: string;
}

export interface IVideoCardProps {
    video: Video;
}
