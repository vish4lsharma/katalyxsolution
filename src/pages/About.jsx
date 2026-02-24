import { Helmet } from 'react-helmet-async';
import Timeline from '../components/3d/Timeline';
import AboutUsBanner from '../components/AboutUsBanner';
import MissionValues from '../components/MissionValues';

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Katalyx Solutions – AI Software Company India | Our Story & Mission</title>
                <meta name="description" content="Learn about Katalyx Solutions – an India-based AI software startup on a mission to build intelligent ERPs, SaaS platforms and digital transformation solutions for modern businesses." />
                <meta name="keywords" content="about Katalyx Solutions, AI company India, software startup India, Katalyx team, digital transformation company" />
                <link rel="canonical" href="https://katalyxsolutions.com/about" />
                <meta property="og:title" content="About Katalyx Solutions – Our Story & Mission" />
                <meta property="og:description" content="Katalyx Solutions is an India-based AI software startup building intelligent ERPs and SaaS platforms for startups and enterprises worldwide." />
                <meta property="og:url" content="https://katalyxsolutions.com/about" />
                <meta property="og:image" content="https://katalyxsolutions.com/og-image.png" />
                <meta name="twitter:title" content="About Katalyx Solutions – AI Software Company India" />
                <meta name="twitter:description" content="Meet the team behind AI-powered ERPs and SaaS platforms at Katalyx Solutions." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "AboutPage",
                    "name": "About Katalyx Solutions",
                    "url": "https://katalyxsolutions.com/about",
                    "description": "Katalyx Solutions is an emerging AI and software company building intelligent ERPs, SaaS platforms, and cloud solutions.",
                    "breadcrumb": { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://katalyxsolutions.com/" }, { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://katalyxsolutions.com/about" }] }
                })}</script>
            </Helmet>


            <AboutUsBanner />

            <MissionValues />

            <Timeline />


        </>
    );
};

export default About;
