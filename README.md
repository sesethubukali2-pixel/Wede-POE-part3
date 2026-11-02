Easy Coffee — POE2 and POE3

Project: Easy Coffee coffee-shop website
Technologies: HTML5, CSS3, JavaScript, WebP
Local environment: XAMPP (Apache)
Project folder: EasyCoffee1

Project overview

Easy Coffee is a coffee-shop website developed through POE2 and POE3. It presents the business, menu, special offers, membership information and contact details. POE2 navigation issues were corrected so visitors can move between the main website pages. POE3 focused on improving JavaScript functionality and SEO.

Main pages and functionality

index.html — homepage, navigation, hero slideshow and search.

Menu.html — dynamically generated menu containing 19 products in six categories.

about.html — business information and FAQ accordion.

specialoffers.html — special-offer tabs and promotional modal.

contact.html — contact information and store map.

becomeamember.html, signup.html, login.html — membership and account interface pages.

checkout.html and OrderHistory.html — checkout and locally stored order history.

JavaScript creates product cards, filters products by category and sorts by price or name. The shopping cart supports adding products, changing quantities, removing items, calculating totals and preventing checkout when the cart is empty. Cart and order information use browser localStorage; it is therefore stored in that browser and is not synchronised between devices. Search, the FAQ accordion, offer tabs, modal and scroll-reveal animation add interactivity.

Design, SEO and optimisation updates

The POE2 navigation problem was fixed. Responsive CSS adjusts the layout for smaller screens. Original image files were retained in old_imagies backup, while compressed WebP images were placed in optimized_imgs; the menu product image paths and relevant page/background image references were updated.

SEO work includes page titles and descriptions, robots.txt and sitemap.xml. The sitemap uses the intended domain https://easycoffee.co.za; it will only be publicly accessible after the domain is registered, connected to hosting and configured for HTTPS.

A mobile Lighthouse audit of the local homepage recorded: Performance 62, Accessibility 83, Best Practices 100 and SEO 91. Lighthouse identified opportunities involving image sizing/delivery, cache lifetimes, render-blocking requests and layout shifts. WebP conversion and image-reference updates were completed, but Apache cache configuration and a final post-optimisation Lighthouse retest remain outstanding. These scores are the recorded baseline, not claimed post-optimisation scores.

Authentication scope

OTP authentication was not included in the original proposal. The supplied project archive contains front-end membership/login pages but does not include a completed PHP/MySQL authentication backend or OTP email-verification workflow. OTP must therefore be treated as outside the original proposal scope, not as a completed feature.

How to run the website

Install and open XAMPP.

Extract the EasyCoffee1 folder into C:\xampp\htdocs\.

Start Apache in the XAMPP Control Panel.

Open http://localhost/EasyCoffee1/ in a browser.

The supplied archive is the front-end website project. It does not include a SQL database export or a production server-side account/order system.

POE3 ReadMe Discussion: SEO Questions

1. Define SEO and explain its purpose in web development.

Search Engine Optimisation (SEO) is the process of improving a website so search engines can understand its content and users can find it through relevant searches. Its purpose is to increase the website's visibility in unpaid search results and attract relevant visitors.

2. Explain how SEO practices can improve user experience (UX) and website performance.

SEO encourages clear headings, descriptive page titles, useful content, meaningful links and mobile-friendly layouts, making a website easier to navigate. Optimised images and efficient page loading can reduce waiting time and improve the browsing experience.

3. Discuss the benefits of implementing SEO on a website.

SEO can improve visibility in search results, attract relevant visitors and help customers discover a business, its products and contact information. It can also improve accessibility, usability and long-term organic traffic without relying only on paid advertising.

4. Explain and demonstrate specific SEO techniques using HTML, CSS and JavaScript where applicable.

HTML provides descriptive titles, meta descriptions, semantic headings, meaningful links and image alt text. CSS supports responsive layouts and readable content on mobile devices. JavaScript should add useful interaction without hiding essential page content from users or search engines; the Easy Coffee project also uses robots.txt and sitemap.xml.

5. Explain the purpose of HTML meta elements and demonstrate relevant examples.

Meta elements provide information about a page to browsers and search engines. The description can summarise the page in search results, while viewport helps the page scale correctly on mobile devices. Example:

<title>Easy Coffee | Coffee and Fresh Treats</title>
<meta name="description" content="Discover coffee, fresh treats and special offers at Easy Coffee.">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
