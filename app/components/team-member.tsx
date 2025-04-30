import Image from "next/image"
import Link from "next/link"

interface TeamMemberProps {
  name: string
  imageSrc: string
  instagramLink: string
}

export default function TeamMember({ name, imageSrc, instagramLink }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-lg overflow-hidden mb-2">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={`${name} - Team Member`}
          width={150}
          height={150}
          className="object-cover"
        />
      </div>
      <div className="flex items-center gap-2">
        <Link href={instagramLink} target="_blank" rel="noopener noreferrer">
          <Image 
            src="/instagram.png"
            alt="Instagram"
            width={24}
            height={24}
            className="hover:opacity-80 transition-opacity"
          />
        </Link>
        <Image 
          src={`/${name}.png`}
          alt={name}
          width={70}
          height={40}
          className="hover:opacity-90"
        />
      </div>
    </div>
  )
}
