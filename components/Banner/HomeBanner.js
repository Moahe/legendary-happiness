import { BadgeGroup, BadgeIcon, BadgeMessage } from "@components/Badge";
import { Button, ButtonGroup } from "@components/Button";
import { Content } from "@components/Content";
import { MotionBTTContainer, MotionInfiniteImage } from "@components/Motion";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

export const HomeBanner = () => {
    const videoRef = React.useRef();
    const [playbackRate, setPlaybackRate] = React.useState(0.8);
    const [isMobileView, setIsMobileView] = React.useState(false);

    React.useEffect(() => {
        setIsMobileView(window.innerWidth <= 768);
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    React.useEffect(() => {
        console.log("playbackRate", playbackRate);
        videoRef.current.defaultMuted = true;
        videoRef.current.playbackRate = playbackRate;
    }, [playbackRate]);

    const setPlayBack = (e) => {
        setPlaybackRate(e.target.value);
    };

    const getRandomValueBetween1and4 = () => {
        return Math.floor(Math.random() * 4) + 1;
    };

    return (
        <SectionContainer className="">
            <SectionContainer className="">
                {/* Appear First */}
                {/* <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
                    <BadgeGroup alignment="center">
                        <BadgeMessage>Discover NutriTrack!</BadgeMessage>
                        <BadgeIcon icon="game-icons:meal" />
                    </BadgeGroup>
                </MotionBTTContainer> */}
                {/* Appear Second */}
                <div
                    className={`flex ${
                        isMobileView ? "flex-col items-center" : "flex-row"
                    }`}
                >
                    <div
                        className={`flex flex-col justify-center align-middle px-14 py-12 pt-20`}
                    >
                        <MotionBTTContainer
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <PageTitle className="mx-auto" type="heavy">
                                För utvecklare, av utvecklare
                            </PageTitle>
                        </MotionBTTContainer>
                        {/* Appear Third */}

                        <MotionBTTContainer
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <Content className="" alignment="center">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </p>
                            </Content>
                            <div className="mt-6 mb-16">
                                {/* <ButtonGroup alignment="center">
                            <Button href="#features">Features</Button>
                            <a
                                role="button"
                                href="https://avenuelabs.lemonsqueezy.com/checkout/buy/df8ccd46-fa63-4384-b2aa-c4c9b8ad3ef0?embed=1"
                                className="btn btn--secondary lemonsqueezy-button"
                            >
                                Get Template
                                <Icon icon="material-symbols:arrow-forward-rounded" />
                            </a>
                        </ButtonGroup> */}
                            </div>
                        </MotionBTTContainer>
                    </div>
                    <div className="page-banner--image flex flex-col align-middle">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            ref={videoRef}
                            style={{
                                height: "80vh",
                                width: "80vw",
                                objectFit: "cover"
                            }}
                        >
                            <source
                                src={
                                    "/banner-video" +
                                    getRandomValueBetween1and4() +
                                    ".mp4"
                                }
                                type="video/mp4"
                            />
                        </video>
                        <form>
                            Video speed: <br />
                            <input
                                onInput={setPlayBack}
                                type="range"
                                value={playbackRate}
                                min="0.5"
                                max="4"
                                step="0.1"
                            />
                        </form>
                    </div>
                </div>
                {/* Appear Fourth */}
            </SectionContainer>
        </SectionContainer>
    );
};
