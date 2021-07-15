import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Personal from "./personal";

import { PrismaClient, Contact, Prisma } from '@prisma/client';

import { useState } from 'react';

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const contacts: Contact[] = await prisma.contact.findMany();
  return {
    props: {
      initialContacts: contacts
    }
  };
}

async function saveContact(contact: Prisma.ContactCreateInput) {
  const response = await fetch('/api/contacts', {
    method: 'POST',
    body: JSON.stringify(contact)
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

export default function Home({ initialContacts }) {
  const [contacts, setContacts] = useState(initialContacts);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Personal/>
      </div>

      <div>
        Go to my own{' '}
        <Link href="/personal">
          <a>Personal Page</a>
        </Link>
      </div>
    </div>
  );
}
