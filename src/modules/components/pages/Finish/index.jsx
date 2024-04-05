import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from "swiper/modules";

const benefits = [
  {
    id: 1,
    title: 'Almoço',
    description: 'Um almoço saudável deve incluir uma variedade de nutrientes. Nós te indicamos...',
    img: '/images/plate1.png',
  },
  {
    id: 2,
    title: 'Lanche',
    description: 'Para um lanche da tarde saudável, é bom escolher opções que ofereçam energia sustentável e nutrientes...',
    img: '/images/sandwich.png',
  },
  {
    id: 3,
    title: 'Jantar',
    description: 'Um jantar saudável deve ser leve e equilibrado, fornecendo os nutrientes necessários sem sobrecarr...',
    img: '/images/plate2.png',
  },
]

const results7Day = [
  'Perda de 2 a 8 quilos',
  'Regulagem do organismo',
  'Redução da ansiedade, cansaço e fome descontrolada', 'Redução de até 7cm em medidas',
  'Redução de de gordura corporal',
]

const access = [
  'Plano alimentar de 7 dias',
  'Suporte para dúvidas',
  'Grupo de acompanhamento com dicas para atingir resultados mais rápidos',
  'Bioimpedância completa',
]

const Finish = () => {
  const _uLocalStore = localStorage.getItem('_u')
  const { name } = JSON.parse(_uLocalStore)
  const firstName = name.split(' ')[0]

  return (
    <div className='max-w-[390px] mx-auto'>
      <section className="flex flex-col items-center py-11 px-[1.625rem]">
        <div className="flex flex-col items-center mb-7">
          <Image
            src="/images/parabens.svg"
            width={124}
            height={42}
            alt="parabéns"
          />
          <strong className="text-[2rem] text-theme-orange -mt-2">{firstName}</strong>
        </div>
        <h1 className="max-w-[259px] text-center font-bold">
          Baseado nas suas respostas, sua participação no <strong className="text-theme-orange uppercase">pqg 7d</strong> foi...
        </h1>
        <Image
          src="/images/aprovada.svg"
          width={280}
          height={111}
          alt="aprovada"
          className="w-[262.06px] h-[110.63px] -mt-4"
        />
      </section>

      <section className="pl-[1.625rem]">
        <Swiper
          spaceBetween={12}
          slidesPerView={1.1}
          className="overflow-visible"
        >
          {benefits.map(({ id, title, description, img }, index) => (
            <SwiperSlide key={id}>
              <div
                className={`
                  ${index === 2 && 'mr-[1.625rem]'} 
                  ${index === 1 ? 'flex-row-reverse justify-end gap-3' : 'justify-between'} 
                  flex rounded-[11px] h-[121px] max-w-[334px] bg-white overflow-hidden
                  `
                }
              >
                <div
                  className={`
                    ${index === 0 && 'w-[126px]'}
                    ${index === 1 && 'w-[145px]'}
                    ${index === 2 && 'w-[139px]'}
                    ${index !== 1 && 'ml-4'} 
                    mt-3`
                  }>
                  <div className='flex gap-[6px] mb-1'>
                    <strong className='text-xl leading-[25.2px]'>{title}</strong>
                    <Image
                      src="/images/lock-icon-2.svg"
                      width={7.56}
                      height={9.63}
                      alt=''
                    />
                  </div>
                  <p className='font-semibold text-[.625rem] leading-[12.6px] text-black opacity-50'>{description}</p>
                </div>
                <Image
                  src={img}
                  width={151}
                  height={121}
                  alt=''
                  className='w-[46%]'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className='relative mx-[1.625rem] mt-[52px] mb-[21px] px-[1.625rem] py-[1.1875rem] rounded-[11px] bg-white'>
        <Image
          src="/images/flash.png"
          width={93.62}
          height={93.62}
          alt=''
          className='absolute h-28 right-0 -top-12'
        />
        <h2 className='font-bold text-xl leading-[25.2px] mb-4 text-theme-orange'>Resultados <br /> esperados nos 7 dias</h2>
        <ul className='flex flex-col gap-[10px]'>
          {results7Day.map((result, index) => (
            <li
              key={index}
              className='flex items-center gap-[10px] font-medium text-[clamp(13px,4vw,14px)]'
            >
              <Image src='/images/approved.svg' width={16} height={16} alt='' className='w-h-3 h-3' />
              {result}
            </li>
          ))}
        </ul>
      </section>

      <section className='relative mx-[1.625rem] px-[1.625rem] py-[1.1875rem] rounded-[11px] bg-white'>
        <Image
          src="/images/key.png"
          width={60.86}
          height={103.71}
          alt=''
          className='absolute -top-11 left-0 h-[7.8rem] w-28'
        />
        <h2 className='text-xl text-center font-bold leading-[25.2px] mb-[17px]'> O que você <br /> <strong className='text-theme-orange'>terá acesso?</strong></h2>
        <ul className='flex flex-col gap-[10px]'>
          {access.map((result, index) => (
            <li
              key={index}
              className='flex items-center gap-[10px] font-medium text-[clamp(13px,4vw,14px)]'
            >
              <Image src='/images/approved.svg' width={16} height={16} alt='' className='w-3 h-3' />
              {result}
            </li>
          ))}
        </ul>
      </section>

      <section className='my-[34px]'>
        <div className='py-[34px] px-[1.625rem]'>
          <h2 className='font-bold text-center'>Veja o <strong className='text-theme-cyan'>resultado</strong> das nossas alunas <br /> que destravaram a...</h2>

          <div className='relative max-w-[330px] mx-auto'>
            <Image
              src='/images/arrow.svg'
              width={63}
              height={64}
              alt=''
              className='absolute top-0 left-3'
            />
            <Image
              src='/images/gordura-fire.svg'
              width={208}
              height={126}
              alt='Queima de gordura'
              className='mx-auto'
            />
          </div>
        </div>

        <div className="pl-7">
          <Swiper
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={500}
            loop={true}
            spaceBetween={5}
            slidesPerView={1.2}
            className="w-full overflow-visible"
            modules={[Autoplay]}
          >
            {Array(10)
              .fill(" ")
              .map((_, index) => {
                return (
                  <SwiperSlide key={index + Math.random(1.5)}>
                    <Image
                      src={`/images/${index + 1}.png`}
                      alt=''
                      width={300}
                      height={300}
                      className="rounded-lg"
                    />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </section>

      <section>
        <h2 className='mx-7 text-end text-[clamp(26px,8.1vw,32px)] font-bold'>No <strong className='uppercase text-theme-orange'>pqg</strong>, você tem um grupo de suporte e acompanhamento</h2>

        <div className='relative mt-[33px] mr-[31px] h-[24rem]'>
          <Image
            src='/images/doctor.png'
            width={388}
            height={532}
            alt=''
            className='absolute -top-36 left-0 h-[33rem]'
          />
          <div className='absolute top-0 right-0 w-[240px] flex flex-col items-end gap-4'>
            <p className='text-end font-medium'>para aprender a colocar em <span className='font-bold'>prática</span>, esclarecer dúvidas e ainda receber análise das refeições feitas no seu dia a dia.</p>

            <p className='text-sm text-end font-medium w-[193px]'>O objetivo deste grupo é  <span className='text-theme-cyan'>te ajudar a...</span></p>

            <Image
              src='/images/cycleColocarEmPratica.svg'
              width={250.82}
              height={85.38}
              alt='Colocar em prática'
              className='-mr-8'
            />

            <p className='text-end font-medium text-sm w-[177px]'>e com isso você vai ter a <strong className='text-theme-orange'>certeza</strong> de que está fazendo corretamente.</p>
          </div>
        </div>
      </section>

      <section className='relative overflow-hidden bg-[url("/images/bg-food.png")] h-[365px] flex items-center justify-center'>
        <div className='absolute py-[39px] px-[25px] mx-[17px] bg-white rounded-[11px] flex flex-col gap-[1.875rem]'>
          <h2 className='relative font-bold text-[clamp(18.24px,5.7vw,23.8px)] text-center'>No PQG, você nunca <br /> estará <strong className='text-theme-orange'>sozinha ou perdida!</strong>
            <Image
              src='/images/line-bottom-orange.svg'
              width={235}
              height={4}
              alt=''
              className='absolute bottom-0 right-3'
            />
          </h2>
          <p className='font-medium text-sm text-center'><strong className='text-theme-cyan'>Diferente de outros métodos</strong> que você apenas recebe as aulas gravadas ou um planejamento e precisa torcer para não ficar com <strong className='text-theme-orange'>nenhuma dúvida</strong>
          </p>
        </div>

        <Image
          src='/images/like.png'
          width={164}
          height={164}
          alt=''
          className='absolute -bottom-5 -right-10'
        />
      </section>
    </div>
  )
}

export { Finish }