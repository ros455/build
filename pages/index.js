import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main'
import CallToAction from '../components/CallToAction'
import Header from '../components/Header'
import LiveBackground from '../components/LiveBackground'
import LiveButton from '../components/LiveButton'
import style from '../styles/Home.module.scss'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <LiveBackground />
      <CallToAction />
      <div className={style.container}>
        <Main/>
      </div>
    </>
  )
}
