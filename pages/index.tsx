import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SmashLogo from "../assets/smash.svg";
import Layout from "../components/Layout";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Smashing Magazine | Clone</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/smash.svg" />
            </Head>
        </div>
    );
};

export default Home;
