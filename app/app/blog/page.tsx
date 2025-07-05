// app/blog/page.tsx
'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Camera, Calendar, ArrowRight, Gift, Clock, BookOpen, ChevronDown, ChevronUp, Instagram, Facebook, Twitter } from 'lucide-react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to Newborn Photography: Timing, Safety & Tips",
    excerpt: "Everything you need to know about capturing your newborn's first precious moments safely and beautifully. From the perfect timing to safety protocols and styling options.",
    image: "/images/Themes/Flower1.jpg",
    category: "Newborn Photography",
    readTime: "12 min read",
    date: "December 15, 2024",
    featured: true,
    content: {
      sections: [
        {
          title: "1. Best Time to Schedule a Newborn Photoshoot",
          content: "The ideal time for a newborn session is when your baby is between 5 to 15 days old. At this stage:\n\n💤 Babies sleep more deeply and can be gently posed into adorable positions.\n\n🍼 They're easier to feed and settle.\n\n👶 Their tiny features and curly posture are still fresh — perfect for timeless portraits.\n\nAt Lensteasers, we recommend booking your session during the third trimester. Don't worry about the exact date — we keep it flexible based on your delivery."
        },
        {
          title: "2. Safety Comes First — Always",
          content: "At Lensteasers, your baby's safety, hygiene, and comfort are our top priorities.\n\nHere's what we ensure in every shoot:\n\n👩‍🍼 Trained Professionals: Our team is experienced in safely posing and handling newborns.\n\n🧼 Fully Sanitized Props & Space: Every wrap, blanket, and surface is cleaned before each session.\n\n🌡️ Cozy Environment: Our studio is kept warm (~26–28°C) to help babies stay calm and sleepy.\n\n🧍‍♂️ Hands-on Support: A parent or assistant is always nearby to ensure baby's complete safety.\n\n❌ No Risky Setups: We never use unsupported or unsafe props — your baby's wellbeing is non-negotiable."
        },
        {
          title: "3. What to Expect in a Newborn Session?",
          content: "Our newborn shoots typically last 2–3 hours, allowing time for:\n\n• Feeding and diaper changes\n• Multiple themed setups\n• Parent and sibling portraits\n• Breaks to soothe or cuddle your baby\n\nWe create a stress-free, baby-led environment, and everything you need — from props to lighting — is provided by us."
        },
        {
          title: "4. Styling, Themes & Props – All Included!",
          content: "Whether you love simplicity or fantasy, we've got it all covered.\n\n💡 Popular Styles We Offer:\n\n• Natural & Minimal: Soft neutral tones with organic textures\n• Whimsical/Fantasy: Moon, stars, pilot, jungle, floral, fairy-tale\n• Lifestyle-Inspired: Parent-baby bonding moments in cozy home-like setups\n• Festive Themes: Diwali, Christmas, Cake Smash, Birth Countdown\n\nWe provide everything:\n\n🧺 Props (baskets, crates, nameplates)\n👶 Baby wraps, bonnets, outfits\n🎀 Theme-specific backgrounds and lighting\n\nJust bring your baby — we'll handle the rest."
        },
        {
          title: "5. What Should You Bring?",
          content: "Not much — we've got you covered! But here's a helpful checklist:\n\n✅ Diapers and wipes\n✅ Baby's feeding essentials\n✅ Pacifier (if used)\n✅ Favorite blanket or toy\n✅ Extra clothes for baby (and you, just in case)\n✅ Snacks/water for parents"
        },
        {
          title: "6. Why Choose Lensteasers?",
          content: "✨ Because we don't just take pictures — we create memories.\n\n🏆 Over 200+ happy clients\n📸 Fully-equipped baby-safe studio\n💕 Personalized sessions for every family\n📍 Based in [City Name], with flexible packages"
        }
      ]
    }
  },
  {
    id: 2,
    title: "Maternity Photography: Best Time & Stunning Themes",
    excerpt: "Discover the perfect timing for maternity shoots and explore beautiful themes that celebrate your pregnancy journey.",
    image: "/images/Themes/Baby0007.jpg",
    category: "Maternity Photography",
    readTime: "10 min read",
    date: "December 12, 2024",
    featured: false,
    content: {
      sections: [
        {
          title: "Best Time for Maternity Photography",
          content: "The ideal time for a maternity photoshoot is between 28 to 34 weeks of pregnancy.\n\nAt this stage, the baby bump is visibly round and prominent, making it ideal for portraits.\n\nThe mother typically still feels comfortable posing and moving around.\n\nFor twin pregnancies, scheduling the shoot earlier, around 24 to 28 weeks, is recommended."
        },
        {
          title: "Outfit Suggestions",
          content: "• Long, flowing dresses or gowns that highlight the baby bump\n• Solid pastel, earthy, or neutral tones are preferred\n• Avoid busy patterns or logos to keep the focus on the subject\n• Coordinate with a partner or family members for a cohesive look\n• Minimal accessories such as scarves, hats, or flower crowns can enhance the theme"
        },
        {
          title: "Popular Maternity Themes",
          content: "Floral Garden: Soft tones with floral backdrops for a romantic and elegant style\nMoonlight Magic: Celestial-inspired setup with moons, stars, and a dramatic background\nSunflower Field: Bright yellow sunflowers, usually in an outdoor field setting\nGlam Chic / Barbie: High-fashion studio setup with bold lighting and modern styling\nJungle Queen: Nature-inspired, earthy tones, with bold posing and greenery\nGolden Hour Outdoor: Captured during sunset in a natural environment for soft, warm lighting"
        },
        {
          title: "Indoor vs Outdoor Shoots",
          content: "Indoor Shoots:\n• Controlled lighting and temperature\n• Customizable backdrops and themes\n• Greater comfort and privacy\n\nOutdoor Shoots:\n• Utilizes natural light and scenic backdrops\n• Ideal during early morning or golden hour\n• Allows for more candid, natural-looking photos"
        }
      ]
    }
  },
  {
    id: 3,
    title: "Cake Smash Photography: Making Your Baby's First Birthday Special",
    excerpt: "From setup to cleanup, learn how to create the perfect cake smash session for unforgettable memories.",
    image: "/images/3.jpg",
    category: "Baby Photography",
    readTime: "5 min read",
    date: "December 10, 2024",
    featured: false,
    content: {
      sections: [
        {
          title: "1. What is a Cake Smash Session?",
          content: "A cake smash photoshoot is a fun and memorable way to celebrate your baby's first birthday. It's a playful session where your baby gets to explore, smash, and enjoy a cake while we capture all the laughter, mess, and excitement."
        },
        {
          title: "2. Best Time to Schedule",
          content: "The best time to book a cake smash shoot is when your baby is around 11 to 12 months old. This ensures that the photos are ready to share or display by their first birthday celebration. At this age, babies can sit confidently, express emotions, and interact with the cake."
        },
        {
          title: "3. What to Expect During the Session",
          content: "A typical session lasts 45 minutes to 1 hour and includes:\n\n• Clean portraits before the cake is introduced\n• Cake smash fun with themed setup\n• Optional cleanup or splash bath shots afterward\n\nThe session is baby-led, fun-filled, and designed to capture spontaneous joy and curiosity."
        },
        {
          title: "4. Themes We Offer",
          content: "Our cake smash setups are custom-designed based on your preferences. Popular themes include:\n\n• Minimal & Elegant: Neutral tones with simple props and classic styling\n• Cartoon-Inspired: Mickey Mouse, Frozen, Cocomelon, and more\n• Floral Garden: Soft, pastel tones with florals and delicate decor\n• Jungle or Safari: Greenery, animal props, and wild cake styles\n• Color Pop: Bright and vibrant backdrops with confetti and balloons"
        },
        {
          title: "5. What’s Included?",
          content: "We handle everything needed for the shoot:\n\n• Customized themed backdrop and props\n• Cake table, banners, balloons, and decorations\n• Professional lighting and camera setup\n• Optional family portraits before the cake\n\nWe also guide parents throughout to ensure a stress-free experience."
        },
        {
          title: "6. Tips for Parents",
          content: "To get the most out of the session:\n\n• Bring an extra outfit for the baby (and maybe yourself)\n• Avoid chocolate or red icing to keep cleanup simple\n• Let the baby explore the cake naturally\n• Bring a favorite toy or pacifier if needed\n• Plan the session around nap and feeding times for a happy baby"
        }
      ]
    }
  },
  
  {
    id: 4,
    title: "Top 10 Baby Photography Themes for 2024",
    excerpt: "Explore the most popular and trending baby photography themes that parents are loving this year.",
    image: "/images/Themes/Frozen1.jpg",
    category: "Themes & Ideas",
    readTime: "7 min read",
    date: "December 8, 2024",
    featured: false,
    content: {
      sections: [
        {
          title: "1. Why Themes Matter in Baby Photography",
          content: "Themes bring life, personality, and imagination into baby photoshoots. They help set the mood, engage the child, and create visually memorable scenes that reflect your baby's unique spirit or interests. At Lensteasers, we offer over 50+ unique, customizable themes to choose from."
        },
        {
          title: "2. Our Top 10 Most Loved Baby Photography Themes (2024)",
          content: "Here are the most popular themes chosen by parents this year:\n\n• Chef Baby: Cute little aprons, cooking props, and playful kitchen scenes.\n• Pilot: Airplane props, goggles, and sky-inspired backdrops.\n• Jungle Safari: Greenery, stuffed animals, and wild adventure vibes.\n• Barbie: Glam pink sets, doll-inspired props, and stylish outfits.\n• Frozen: Snowflakes, icy blue tones, and wintery elegance.\n• McDonald's: Mini burgers, fries, and adorable uniforms.\n• Music Star: Instruments, microphones, and mini stages.\n• Harry Potter: Magic wands, spell books, and house scarves.\n• Sunflower Field: Bright yellow floral setups and rustic props.\n• Stadium Sports: Mini jerseys, balls, and a sporty backdrop."
        },
        {
          title: "3. Other Available Themes",
          content: "In addition to the top 10, we have 50+ more theme options including:\n\n• Moon & Stars\n• F1 Pit Stop\n• Jungle King\n• Mermaid Princess\n• Royal Throne\n• Space Adventure\n• Sun & Clouds\n• Construction Site\n• Candy World\n• Vintage Classic\n\nThemes are updated regularly based on trends, seasons, and custom requests."
        },
        {
          title: "4. Customization & Setup",
          content: "All our themes are professionally designed and customizable. We provide:\n\n• Backdrops, props, and themed accessories\n• Outfits and coordinated styling (if needed)\n• Age-appropriate setup for safety and comfort\n• Personalization with name boards, numbers, or custom elements"
        },
        {
          title: "5. Choosing the Right Theme",
          content: "When selecting a theme:\n\n• Think about your child's personality or favorite characters.\n• Match the theme with their milestone (first birthday, sitting stage, etc.).\n• Consider the colors and mood you want in your photos.\n• Feel free to consult our team for suggestions or inspiration."
        },
        {
          title: "6. Final Thoughts",
          content: "Themed photography adds charm and creativity to your baby’s photoshoot. Whether you want something elegant, fun, magical, or adventurous, we have the perfect setup waiting for you. Let your baby's personality shine through one of our 50+ handpicked themes."
        }
      ]
    }
  }
  
];

// FAQ data
const faqs = [
  {
    question: "What's the best time for a newborn photoshoot?",
    answer: "The ideal time is between 5-15 days after birth when babies are sleepiest and most flexible for posing. During this window, they're more likely to stay in those adorable curled-up positions and sleep through the session."
  },
  {
    question: "When should I schedule my maternity photoshoot?",
    answer: "The sweet spot is between 28-34 weeks of pregnancy. At this stage, you have a well-defined bump but are still comfortable enough to pose and move around easily."
  },
  {
    question: "What should we bring to the baby photoshoot?",
    answer: "Essential items include extra diapers, wipes, feeding supplies, pacifiers, a change of clothes, and your baby's favorite toy. We provide all props and backdrops, but feel free to bring any special items you'd like included."
  },
  {
    question: "Are the shoots safe for newborns?",
    answer: "Absolutely! We prioritize safety above all else. Our studio is thoroughly sanitized, props are cleaned between sessions, and our photographers are specially trained in newborn safety and handling techniques."
  },
  {
    question: "Can we customize the shoot theme?",
    answer: "Yes! We love creating custom themes based on your ideas. Whether it's a family tradition, favorite storybook, or unique concept, we'll work with you to bring your vision to life."
  },
  {
    question: "How long does a typical session last?",
    answer: "Newborn sessions typically take 2-3 hours to allow for feeding, changing, and soothing breaks. Maternity sessions are usually 1-2 hours, and baby milestone sessions are 1-1.5 hours."
  }
];

// Tips data
const photographyTips = [
  {
    icon: Calendar,
    title: "Perfect Timing",
    description: "Newborns: 5-15 days, Maternity: 28-34 weeks, Milestones: 3, 6, 9, 12 months"
  },
  {
    icon: Camera,
    title: "Natural Light",
    description: "Golden hour (1-2 hours before sunset) provides the most flattering, warm lighting"
  },
  {
    icon: Heart,
    title: "Comfort First",
    description: "Keep the room warm for newborns and ensure everyone is relaxed and comfortable"
  },
  {
    icon: Gift,
    title: "Props & Outfits",
    description: "Choose simple, solid colors and avoid busy patterns that can distract from your baby"
  }
];

const BlogPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState<{ [src: string]: boolean }>({});
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const handleImageLoad = (src: string) => {
    setImageLoaded((prev) => ({ ...prev, [src]: true }));
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const openArticle = (articleId: number) => {
    setSelectedArticle(articleId);
  };

  const closeArticle = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f6f2] via-[#f3e7d9] to-[#e7d6c6] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#b48b3c]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#e7d6c6]/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-[#b48b3c]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-white text-black overflow-hidden min-h-[400px] md:min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Blog_Background.jpg"
            alt="Blog Hero Background"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10 pt-32 pb-12">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-[#b48b3c]/10 rounded-full px-6 py-2">
              <BookOpen className="w-5 h-5 text-[#b48b3c]" />
              <span className="text-sm font-medium text-[#b48b3c]">Photography Blog</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight text-white">
            Photography
            <span className="block text-[#b48b3c]">Insights & Tips</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            Expert guides, creative ideas, and everything you need to know about maternity and baby photography.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Featured Blog Post */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#232323] mb-4 tracking-tight">Featured Article</h2>
            <p className="text-[#232323]/70 text-lg max-w-2xl mx-auto">
              Our latest insights and expert tips for capturing precious moments
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#f3e7d9]">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-full">
                <LazyMotion features={domAnimation}>
                  <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: imageLoaded[blogPosts[0].image] ? 1 : 0 }}
                    transition={{ duration: 1.5 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      fill
                      className="object-cover"
                      onLoadingComplete={() => handleImageLoad(blogPosts[0].image)}
                      priority
                    />
                  </m.div>
                </LazyMotion>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-[#b48b3c]/10 text-[#b48b3c] px-3 py-1 rounded-full text-sm font-medium">
                    {blogPosts[0].category}
                  </span>
                  <div className="flex items-center space-x-2 text-[#232323]/60">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-[#232323] mb-4 leading-tight">
                  {blogPosts[0].title}
                </h3>
                <p className="text-[#232323]/70 text-lg mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[#232323]/50 text-sm">{blogPosts[0].date}</span>
                  <button 
                    onClick={() => openArticle(blogPosts[0].id)}
                    className="bg-gradient-to-r from-[#b48b3c] to-[#a07a2c] hover:from-[#a07a2c] hover:to-[#8b6b1c] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Photography Tips Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#232323] mb-4 tracking-tight">Essential Photography Tips</h2>
            <p className="text-[#232323]/70 text-lg max-w-2xl mx-auto">
              Professional insights to help you prepare for the perfect photoshoot
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {photographyTips.map((tip) => (
              <div key={tip.title} className="bg-white border border-[#f3e7d9] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-[#b48b3c]/10 p-4 rounded-2xl w-fit mx-auto mb-6">
                  <tip.icon className="w-8 h-8 text-[#b48b3c]" />
                </div>
                <h3 className="text-xl font-bold text-[#232323] mb-4 text-center">{tip.title}</h3>
                <p className="text-[#232323]/70 text-center">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Blog Posts */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#232323] mb-4 tracking-tight">Latest Articles</h2>
            <p className="text-[#232323]/70 text-lg max-w-2xl mx-auto">
              Stay updated with our latest photography insights and creative ideas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <div key={post.id} className="bg-white border border-[#f3e7d9] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <LazyMotion features={domAnimation}>
                    <m.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: imageLoaded[post.image] ? 1 : 0 }}
                      transition={{ duration: 1.5 }}
                      className="w-full h-full"
                    >
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        onLoadingComplete={() => handleImageLoad(post.image)}
                        loading="lazy"
                      />
                    </m.div>
                  </LazyMotion>
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#b48b3c]/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-[#232323]/60">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#232323] mb-3 leading-tight group-hover:text-[#b48b3c] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#232323]/70 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <button 
                    onClick={() => openArticle(post.id)}
                    className="text-[#b48b3c] font-semibold hover:text-[#a07a2c] transition-colors flex items-center space-x-2 group"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#232323] mb-4 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-[#232323]/70 text-lg max-w-2xl mx-auto">
              Get answers to the most common questions about maternity and baby photography
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white border border-[#f3e7d9] rounded-2xl shadow-lg overflow-hidden">
                  <button
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-[#f9f6f2] transition-colors"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="text-lg font-semibold text-[#232323] pr-4">{faq.question}</h3>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-[#b48b3c] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#b48b3c] flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-8 pb-6">
                      <p className="text-[#232323]/70 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-white border border-[#f3e7d9] rounded-3xl shadow-2xl p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#b48b3c]/5 to-transparent rounded-br-full"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#e7d6c6]/30 to-transparent rounded-tl-full"></div>
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center space-x-2 bg-[#b48b3c]/10 rounded-full px-4 py-2 mb-6">
              <Camera className="w-4 h-4 text-[#b48b3c]" />
              <span className="text-sm font-medium text-[#b48b3c]">Ready to Book?</span>
            </div>
            <h2 className="text-4xl font-bold text-[#232323] mb-6 tracking-tight">Ready to Capture Your Precious Moments?</h2>
            <p className="text-[#232323]/70 text-lg mb-8 max-w-2xl mx-auto">
              Don't let these precious moments slip away. Contact us today to schedule your photography session and create memories that will last a lifetime.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-[#b48b3c] to-[#a07a2c] hover:from-[#a07a2c] hover:to-[#8b6b1c] text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Book Your Session</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/gallery" className="bg-white text-[#b48b3c] border-2 border-[#b48b3c] py-4 px-8 rounded-xl font-semibold transition-all duration-300 hover:bg-[#b48b3c] hover:text-white flex items-center justify-center space-x-2">
                <span>View Gallery</span>
                <Camera className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeArticle}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeArticle}
              className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <svg className="w-6 h-6 text-[#232323]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Article Content */}
            {(() => {
              const article = blogPosts.find(post => post.id === selectedArticle);
              if (!article) return null;
              
              return (
                <div className="p-8">
                  {/* Header */}
                  <div className="mb-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-[#b48b3c]/10 text-[#b48b3c] px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                      <div className="flex items-center space-x-2 text-[#232323]/60">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{article.readTime}</span>
                      </div>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-[#232323] mb-4 leading-tight">
                      {article.title}
                    </h1>
                    <p className="text-[#232323]/50 text-sm">{article.date}</p>
                  </div>
                  
                  {/* Featured Image */}
                  <div className="relative h-80 mb-8 rounded-2xl overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Article Sections */}
                  {article.content?.sections && (
                    <div className="space-y-8">
                      {article.content.sections.map((section, index) => (
                        <div key={index} className="border-b border-[#f3e7d9] pb-8 last:border-b-0">
                          <h2 className="text-2xl font-bold text-[#b48b3c] mb-4">
                            {section.title}
                          </h2>
                          <div className="text-[#232323]/70 leading-relaxed whitespace-pre-line">
                            {section.content}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Call to Action */}
                  <div className="mt-12 p-6 bg-[#f9f6f2] rounded-2xl text-center">
                    <h3 className="text-xl font-bold text-[#232323] mb-4">
                      Ready to Book Your Session?
                    </h3>
                    <p className="text-[#232323]/70 mb-6">
                      Don't miss the perfect timing for your photography session. Contact us today!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link 
                        href="/contact"
                        onClick={closeArticle}
                        className="bg-gradient-to-r from-[#b48b3c] to-[#a07a2c] hover:from-[#a07a2c] hover:to-[#8b6b1c] text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
                      >
                        <span>Book Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={closeArticle}
                        className="bg-white text-[#b48b3c] border-2 border-[#b48b3c] py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:bg-[#b48b3c] hover:text-white"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
