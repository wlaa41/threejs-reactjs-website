'use client';

import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import Card from '../components/card/Card';
import Header from '../components/header/Header'


export default function Home() {
  return (
    <div>
          <Header />
          <Card />

        <main>
        <h1>Home Page</h1>
        <Link href="/about">Go to About</Link>
      </main>
    </div>
  );
}
