import Image from "next/image"
import profilePic_SES from '../../public/SES_SC.png'
import profilePic_MDV from '../../public/logo_MDV.png'


const features = [
  { name: 'Ouvidoria', description: 'ouvidoria@saude.sc.gov.br' },
  { name: 'Telefone', description: '(47) 3461-5700' },
  { name: 'Facebook', description: 'facebook.com/mdvsc' },
  { name: 'Instagram', description: '@mdvsc' }
]

export default function Home() {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 bg-transparent
    items-center gap-x-8 gap-y-16 px-4 py-28
    sm:px-6 lg:max-w-5xl lg:grid-cols-2 lg:px-8">
      <div className="">
        <h2 className=" text-center text-4xl tracking-tight text-black">Pesquisa de Satisfação</h2>
        <p className="mt-2 text-lg text-gray-500">
          Participe da nossa pesquisa de satisfação e ajude-nos a melhorar, ainda mais, nossos serviço.<br />
          Maternidade Darcy Vargas, a mais de 70 anos, na vida do povo Joinvillense.
        </p>
        <dl className="mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="border-t border-gray-500 pt-4">
              <dt className="font-medium text-gray-900">{feature.name}</dt>
              <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
        <Image
          src={profilePic_SES}
          alt="Picture of the author"
        />
        <Image
          src={profilePic_MDV}
          alt="Picture of the author"
        />
      </div>
    </div>
  )
}
