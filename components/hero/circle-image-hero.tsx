'use client'

export const CircleImageHero = () => {
    const image_path = process.env.NEXT_PUBLIC_SUPABASE_STORAGE;

    return (
        <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl">
                    <img
                        src={`${image_path}/profile-pic/main.png`}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}