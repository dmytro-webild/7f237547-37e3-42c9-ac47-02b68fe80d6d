"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="medium"
        background="grid"
        cardStyle="gradient-radial"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Products",
          id: "products",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Zaytun Market"
      button={{
        text: "Shop Now",
        href: "#products",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "sparkles-gradient",
      }}
      title="Fresh Local Produce, Delivered Fast"
      description="Zaytun Market brings premium vegetables, fruits, and groceries directly to your door. Shop now and enjoy same-day delivery on orders over minimum purchase."
      buttons={[
        {
          text: "Start Shopping",
          href: "#products",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/woman-s-hands-holding-fresh-ripe-organic-broccoli-salad-with-greens-vegetables-cotton-bag-weekend-farmer-s-market_169016-5707.jpg"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Same-Day Delivery",
          description: "Get your groceries delivered to your door within hours.",
          imageSrc: "http://img.b2bpic.net/free-photo/courier-delivering-groceries-home_23-2149737963.jpg",
        },
        {
          title: "Farm-Fresh Quality",
          description: "Sourced daily from trusted local farmers and growers.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=fnc3s0",
        },
        {
          title: "Secure Payments",
          description: "Safe and encrypted checkout process for your peace of mind.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-delivering-groceries-customers_23-2149950083.jpg",
        },
      ]}
      title="Why Zaytun Market?"
      description="We prioritize quality, speed, and sustainability to ensure you get the best local produce."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "1",
          name: "Organic Spinach",
          price: "$2.99",
          variant: "Vegetables",
          imageSrc: "http://img.b2bpic.net/free-photo/cauliflower-broccoli-white-table_114579-76131.jpg",
        },
        {
          id: "2",
          name: "Red Apples",
          price: "$4.50",
          variant: "Fruits",
          imageSrc: "http://img.b2bpic.net/free-photo/colorful-shiny-fresh-fruits-oranges-shelf-supermarket-grocery-store_627829-8292.jpg",
        },
        {
          id: "3",
          name: "Vine Tomatoes",
          price: "$3.25",
          variant: "Vegetables",
          imageSrc: "http://img.b2bpic.net/free-photo/bunch-tomatoes-pot-old-wooden-background-top-view_176474-3713.jpg",
        },
        {
          id: "4",
          name: "Fresh Carrots",
          price: "$1.99",
          variant: "Vegetables",
          imageSrc: "http://img.b2bpic.net/free-photo/hand-holding-bunch-organic-carrots_23-2148332321.jpg",
        },
        {
          id: "5",
          name: "Organic Broccoli",
          price: "$3.50",
          variant: "Vegetables",
          imageSrc: "http://img.b2bpic.net/free-photo/fresh-vegetables-fruits-greenery-healthy-life-food_8353-8605.jpg",
        },
        {
          id: "6",
          name: "Yellow Bananas",
          price: "$2.25",
          variant: "Fruits",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-chooses-fruits-vegetables-supermarket_169016-19314.jpg",
        },
      ]}
      title="Featured Products"
      description="Explore our hand-picked fresh collection for this week."
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Our Local Promise"
      description="At Zaytun Market, we believe in supporting local communities and bringing the freshest ingredients from farm to table. Our mission is to simplify grocery shopping for busy professionals and health-conscious families alike."
      bulletPoints={[
        {
          title: "Community-First",
          description: "We partner exclusively with local regional suppliers.",
        },
        {
          title: "Transparency",
          description: "Know exactly where your fresh food comes from.",
        },
        {
          title: "Sustainability",
          description: "Eco-friendly packaging and green delivery routes.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/wearing-shoes-protection-against-corona-virus-supermarket_342744-1156.jpg"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sarah Ahmed",
          date: "Oct 2023",
          title: "Busy Professional",
          quote: "Zaytun Market saved my week! Freshness like never before.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/smiley-woman-doing-thumbs-up_23-2148628939.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-s-hands-holding-fresh-ripe-organic-broccoli-salad-with-greens-vegetables-cotton-bag-weekend-farmer-s-market_169016-5707.jpg",
          imageAlt: "happy customer portrait",
        },
        {
          id: "2",
          name: "Mark Wilson",
          date: "Nov 2023",
          title: "Parent",
          quote: "My kids love the fruits. Quality is exceptional.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/happy-smiling-woman-close-eyes-showing-okay-ok-sign-zero-gesture-no-proble-praise-awesome-good-thing-standing-stylish-outfit-against-white-background_176420-46697.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/courier-delivering-groceries-home_23-2149737963.jpg",
          imageAlt: "happy customer portrait",
        },
        {
          id: "3",
          name: "Emily Chen",
          date: "Dec 2023",
          title: "Chef",
          quote: "The best ingredients for my home cooking sessions.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/joyful-business-woman-with-coffee-cup_23-2148095746.jpg",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=fnc3s0",
          imageAlt: "happy customer portrait",
        },
        {
          id: "4",
          name: "David Smith",
          date: "Jan 2024",
          title: "Customer",
          quote: "Fast, fresh, and friendly service every time.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/alone-specialist-handsome-daydreaming-collar_1262-870.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/man-delivering-groceries-customers_23-2149950083.jpg",
          imageAlt: "happy customer portrait",
        },
        {
          id: "5",
          name: "Linda Rao",
          date: "Feb 2024",
          title: "Customer",
          quote: "Finally, a market that understands local needs.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/close-up-vertical-image-smiling-african-man-looking_171337-9837.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/cauliflower-broccoli-white-table_114579-76131.jpg",
          imageAlt: "happy customer portrait",
        },
      ]}
      title="Happy Customers"
      description="See why local families love Zaytun Market."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Do you offer same-day delivery?",
          content: "Yes, we offer same-day delivery on orders placed before 2 PM.",
        },
        {
          id: "f2",
          title: "Is my payment information secure?",
          content: "Absolutely. All transactions are encrypted and processed securely.",
        },
        {
          id: "f3",
          title: "What is the minimum purchase?",
          content: "The minimum order amount for free delivery is just $30.",
        },
      ]}
      sideTitle="Common Questions"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient",
      }}
      title="Stay Connected"
      description="Sign up to receive exclusive weekly offers and fresh market updates."
      tag="Get in touch"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Zaytun Market"
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "All Products",
              href: "#products",
            },
            {
              label: "Promotions",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "FAQs",
              href: "#faq",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
