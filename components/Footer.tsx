import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flexCenter mb-24'>
      <div className='flex flex-col margin-container padding-container w-full gap-14'>
        <div className='flex items-start justify-center gap-[10%] flex-col md:flex-row'>
          <Link href="/" className='mb-10'>
            <Image src="hilink-logo.svg" alt='logo' width={74} height={29} />
          </Link>
        </div>

        <div className='flex flex-wrap gap-10 sm:justify-between'>
          {FOOTER_LINKS.map((item) => (
            <FeatureColumn title={item.title}>
              <ul className='regular-14 gap-4 flex flex-col text-gray-30 flex-1'>
                {item.links.map((link) => (
                  <Link href="/" key={link}>
                    {link}
                  </Link>
                ))}
              </ul>
            </FeatureColumn>
          ))}

          <div className='flex flex-col gap-5'>
            <FeatureColumn title={FOOTER_CONTACT_INFO.title}>
              {FOOTER_CONTACT_INFO.links.map((item) => (
                <Link
                  href="/"
                  key={item.label}
                  className='flex gap-4 md:flex-col lg:flex-row'
                >
                  <p className='whitespace-nowrap'>{item.label}: </p>
                  <p className='medium-16 whitespace-nowrap text-blue-70'>{item.value}</p>
                </Link>
              ))}
            </FeatureColumn>
          </div>

          <div className='flex flex-col gap-5'>
            <FeatureColumn title={SOCIALS.title}>
              <ul className='flex regular-14 gap-4 text-gray-30'>
                {SOCIALS.links.map((item) => (
                  <Link
                    key={item}
                    href="/"
                  >
                    <Image src={item} alt='logo' width={24} height={24} />
                  </Link>
                ))}
              </ul>
            </FeatureColumn>
          </div>
        </div>

        <div className='border bg-gray-20'></div>
        <p className='text-center regular-16 w-full text-gray-30'>2024 Hilink | All rights reserved</p>
      </div>
    </footer>
  )
}

type FeatureColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FeatureColumn = ({ title, children }: FeatureColumnProps) => {
  return (
    <div className='flex flex-col gap-5'>
      <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
      {children}
    </div>
  )
}

export default Footer