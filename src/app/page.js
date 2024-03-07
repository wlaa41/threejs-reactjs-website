// Relative file path: ./app\page.js
'use client';

import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import Card from '../components/card/Card';


export default function Home() {
  return (
    <div>
        <Card name='Home Page' />
        <main>
        <h1>Home Page</h1>
      </main>
    </div>
  );
}
