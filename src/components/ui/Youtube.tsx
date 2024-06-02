"use client"
import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'


const Youtube = (props: { id: string, title: string }): React.JSX.Element => {
    return (
        <div className="rounded-lg">
            <LiteYouTubeEmbed
                id={props.id}
                title={props.title}
                noCookie
                webp
            />
        </div>
    )
}
export default Youtube;