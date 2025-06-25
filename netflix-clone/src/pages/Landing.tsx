import React from 'react';
import { Link } from 'react-router-dom';
import { Tv, Download, Users, ChevronRight, Plus } from 'lucide-react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ContentRow from '../components/ContentRow';
import { getTrendingContent } from '../data/content';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Landing: React.FC = () => {
  const trendingContent = getTrendingContent();

  const features = [
    {
      icon: <Tv className="h-12 w-12" />,
      title: "Enjoy on your TV",
      description: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      image: "/images/content-bg.png"
    },
    {
      icon: <Download className="h-12 w-12" />,
      title: "Download your shows to watch offline",
      description: "Save your favorites easily and always have something to watch.",
      image: "/images/content-bg.png"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Create profiles for kids",
      description: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
      image: "/images/profile-kids.jpg"
    },
    {
      icon: <Tv className="h-12 w-12" />,
      title: "Watch everywhere",
      description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
      image: "/images/content-bg.png"
    }
  ];

  const faqData = [
    {
      question: "What is Netflix?",
      answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies and documentaries on thousands of internet-connected devices. You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
    },
    {
      question: "How much does Netflix cost?",
      answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
    },
    {
      question: "Where can I watch?",
      answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
    },
    {
      question: "How do I cancel?",
      answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
      question: "What can I watch on Netflix?",
      answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
      question: "Is Netflix good for kids?",
      answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header isTransparent={true} showSearch={false} />
      
      {/* Hero Section */}
      <Hero isLandingPage={true} />

      {/* Trending Now Section */}
      <section className="py-16 bg-black">
        <ContentRow title="Trending Now" content={trendingContent} />
      </section>

      {/* More Reasons to Join Section */}
      <section className="py-16 bg-black border-t-8 border-gray-700">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-white text-3xl md:text-5xl font-bold text-center mb-16">
            More reasons to join
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-white">
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-4 rounded-lg mb-4 w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-black border-t-8 border-gray-700">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-white text-3xl md:text-5xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="space-y-2">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-700 rounded-none border-none"
              >
                <AccordionTrigger className="text-white text-xl px-6 py-6 hover:bg-gray-600 rounded-none border-none">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white text-lg px-6 pb-6 border-none">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-16">
            <p className="text-white text-lg mb-6">
              Ready to watch? Enter your email to create or restart your membership.
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-4 text-black text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <Link
                to="/signup"
                className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4 rounded-md font-semibold transition-colors flex items-center justify-center gap-2"
              >
                Get Started <ChevronRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t-8 border-gray-700 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-gray-400 mb-8">
            Questions? Call{' '}
            <a href="tel:000-800-040-1843" className="underline hover:no-underline">
              000-800-040-1843
            </a>
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-400 text-sm">
            <div className="space-y-2">
              <a href="#" className="block hover:underline">FAQ</a>
              <a href="#" className="block hover:underline">Investor Relations</a>
              <a href="#" className="block hover:underline">Privacy</a>
              <a href="#" className="block hover:underline">Speed Test</a>
            </div>
            <div className="space-y-2">
              <a href="#" className="block hover:underline">Help Center</a>
              <a href="#" className="block hover:underline">Jobs</a>
              <a href="#" className="block hover:underline">Cookie Preferences</a>
              <a href="#" className="block hover:underline">Legal Notices</a>
            </div>
            <div className="space-y-2">
              <a href="#" className="block hover:underline">Account</a>
              <a href="#" className="block hover:underline">Ways to Watch</a>
              <a href="#" className="block hover:underline">Corporate Information</a>
              <a href="#" className="block hover:underline">Only on Netflix</a>
            </div>
            <div className="space-y-2">
              <a href="#" className="block hover:underline">Media Center</a>
              <a href="#" className="block hover:underline">Terms of Use</a>
              <a href="#" className="block hover:underline">Contact Us</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700">
            <select className="bg-black border border-gray-600 text-gray-400 px-3 py-2 rounded">
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
            </select>
            
            <p className="text-gray-400 text-sm mt-6">Netflix India</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
