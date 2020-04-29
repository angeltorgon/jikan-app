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

export interface IVideoCardProps {
    video: Video;
}

export interface IPictureCardProps {
    picture: Picture;
}
