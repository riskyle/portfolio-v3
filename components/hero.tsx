import FaultyTerminal from './react-bits/faulty-terminal';
import { IntroduceMyself } from "./hero/introduce-myself";
import { SocialLinksHero } from "./hero/social-links-hero";
import { CircleImageHero } from "./hero/circle-image-hero";
import { CurriculumVitae } from "./hero/curriculum-vitae-hero";


export default async function Hero({ user }: any) {
    return (
        <>
            <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

                <div className="absolute inset-0 w-full h-full opacity-20">
                    <FaultyTerminal
                        scale={1.5}
                        gridMul={[2, 1]}
                        digitSize={1.2}
                        timeScale={1}
                        pause={false}
                        scanlineIntensity={1}
                        glitchAmount={1}
                        flickerAmount={1}
                        noiseAmp={1}
                        chromaticAberration={0}
                        dither={0}
                        curvature={0.5}
                        tint="#8AA624"
                        mouseReact={true}
                        mouseStrength={1}
                        pageLoadAnimation={true}
                        brightness={1}
                    />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="order-2 lg:order-1 space-y-6 lg:space-y-8 text-center lg:text-left">
                            <IntroduceMyself user={user} />

                            <CurriculumVitae />

                            <SocialLinksHero links={user.links} />
                        </div>

                        <CircleImageHero />
                    </div>
                </div>
            </section>
        </>
    );
};
