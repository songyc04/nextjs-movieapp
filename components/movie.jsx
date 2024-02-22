"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

import styles from "@styles/movie.module.css";

export default function Movie({id, poster_path, title}) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  }
  return (
    <div className={styles.movie} key={id}>
      <img src={poster_path} alt={title} onClick={onClick} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
);
}