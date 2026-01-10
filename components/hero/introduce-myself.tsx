'use client'

export const IntroduceMyself = ({ user }: any) => {
    return (
        <div className="space-y-3 lg:space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Hi There,</span>
                <br />
                <span className="text-gray-900">I'm </span>
                <span className="bg-gradient-to-r from-gray-400 via-black bg-[length:400%_100%] animate-wave-colors to-white bg-clip-text text-transparent">
                    {user.name}
                </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 font-medium">
                I Am Into{" "}
                <span className="text-orange-500 font-semibold">
                    {user.title}
                </span>
            </p>
        </div>
    );
}