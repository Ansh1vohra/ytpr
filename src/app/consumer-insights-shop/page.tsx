import Image from "next/image"

export default function ConsumerInsightsShop(){
    return(
        <div className="h-[100vh] flex items-center justify-center">
            <Image
                src='/comingsoon.png'
                width={600}
                height={600}
                alt="coming soon"
            />
        </div>
    )
}