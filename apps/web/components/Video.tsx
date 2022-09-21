import Image from 'next/image';
import React, { useRef, useState } from 'react';
import type { ExtractedInfoWithProvider } from './FormInput';
import Play from '../static/images/play.webp';
import Pause from '../static/images/pause.png';
export const VideoComponent = ({ data }: { data: ExtractedInfoWithProvider }) => {
    const videoRef = useRef<any>(null);
    const [state, setState] = useState(false);
    // const copyUrl = (url: string) => {
    //     navigator.clipboard.writeText(url);
    //     if (typeof window !== 'undefined') {
    //         window.alert('URL Copied');
    //     }
    // };
    const handleClick = () => {
        if (state) {
            videoRef?.current?.pause();
        } else {
            videoRef?.current?.play();
        }
        setState(!state);
    };
    return (
        <React.Fragment>
            {/* This video is downloaded from{' '}
            <span className="font-semibold">{data.provider}</span>.
            {data.caption && <pre>{data.caption}</pre>} */}

            <div className="VideoPlayer__Wrapper" onClick={handleClick}>
                <div className="VideoPlayer__Wrapper__Play">
                    <div className="VideoPlayer__Wrapper__Image">
                        {state ? (
                            <Image
                                src={Play}
                                layout={'fixed'}
                                width={'50'}
                                height={'50'}
                            />
                        ) : (
                            <Image
                                src={Pause}
                                layout={'fixed'}
                                width={'50'}
                                height={'50'}
                            />
                        )}
                    </div>
                </div>
                <video
                    controls={false}
                    autoPlay={false}
                    className="rounded-md h-100 w-100"
                    ref={videoRef}
                >
                    <source src={data.video?.urls[0]} />
                </video>
                {/* <div className="flex flex-row font-sans basis-8 mt-2">
                    {data.video?.urls.map((url, index) => (
                        <button
                            key={index.toString()}
                            className="mr-1 bg-teal-400 md:p-2 p-1 rounded-md shadow"
                            onClick={() => copyUrl(url)}
                        >
                            LINK {index + 1}
                        </button>
                    ))}
                </div> */}
            </div>
        </React.Fragment>
    );
};
