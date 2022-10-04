import { Profile } from "../Icons"

type PersonData = {
  name: string
  bio: string
  image: string
  title: string
  linkedIn?: string
  twitter?: string
  instagram?: string
  dribbble?: string
  cyber?: string
  foundation?: string
  streetArt?: string
}

interface Props {
  person: PersonData
  onClick: () => void
}

export const PersonCard = (props: Props) => {
  const { person, onClick } = props

  const { name = "", image = "", title = "" } = person

  return (
    <div className="md:w-full">
      <div
        onClick={onClick}
        className="cursor-pointer group relative mb-10 flex flex-col items-center rounded-[2.5rem] border border-[#2D2A26] transition ease-in-out hover:border-purple-light lg:flex-row"
      >
        <div className="absolute top-10 right-7">
          <Profile />
        </div>

        <div className="mt- mb-5 pt-7 lg:ml-7">
          <div
            style={{ backgroundImage: `url(${image})` }}
            className={`relative h-[100px] w-[100px] overflow-hidden rounded-full border-2 border-neutral-800 bg-cover bg-top`}
          ></div>
        </div>

        <div className="px-5 text-center lg:text-left">
          <div className="mb-1 text-xl">{name}</div>
          <div className="text-md mb-4  text-gray-400 ">{title}</div>
        </div>
      </div>
    </div>
  )
}
