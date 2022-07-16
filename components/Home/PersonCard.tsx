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
  setPerson: (data: any) => void
  onClick: () => void
}

export const PersonCard = (props: Props) => {
  const { person, onClick } = props

  const {
    name = "",
    bio = "",
    image = "",
    title = "",
    linkedIn = "",
    twitter = "",
    instagram = "",
    dribbble = "",
    cyber = "",
    foundation = "",
    streetArt = "",
  } = person
  // console.log('showPerson ', showPerson)
  return (
    <div className="md:w-11/12">
      <div className="relative">
        <div className="absolute top-10 right-7">
          <Profile />
        </div>
      </div>

      <div
        onClick={onClick}
        className="mb-10 flex flex-col items-center rounded-[40px] rounded-[2.5rem] border border-[#2D2A26] hover:border-purple-light lg:flex-row"
      >
        <div className="mt- mb-5 pt-7 lg:ml-7">
          <div
            style={{ backgroundImage: `url(${image})` }}
            className={`relative h-[100px] w-[100px] overflow-hidden rounded-full border-2 border-neutral-800 bg-cover bg-top`}
          ></div>
        </div>

        <div className="px-5 text-left">
          <div className="flex items-center">
            <div className="mb-1 text-xl">{name}</div>
          </div>
          <div className="text-md mb-4 text-center text-gray-400">{title}</div>
        </div>
      </div>
    </div>
  )
}
