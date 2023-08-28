import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: "https://i.pinimg.com/originals/81/07/b5/8107b5317778399e62d2ee604017275c.jpg",
        name: "Nike Free Run 5",
        price: "₹ 7999.00",
        rating: "4.3",
    },
    {
        imgURL: "https://www.lifestylesports.com/on/demandware.static/-/Sites-LSS_eCommerce_Master/default/dw2c3375a9/images/12695820xlalt4.jpg",
        name: "Nike Pegasus-37",
        price: "₹ 13199.00",
        rating: "4.8",
    },
    {
        imgURL: "https://www.lifestylesports.com/on/demandware.static/-/Sites-LSS_eCommerce_Master/default/dwf6643176/images/12696300xlalt4.jpg",
        name: "Nike Pegasus-2",
        price: "₹ 9999.00",
        rating: "4.7",
    },
    {
        imgURL: "https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background.png",
        name: "Nike Air Max-003",
        price: "₹ 11999.00",
        rating: "4.8",
    },
    {
        imgURL: "https://th.bing.com/th/id/OIP.bXdDnj8Mn9Q2JIzR4H9noQEyDM?pid=ImgDet&rs=1",
        name: "Nike Free Run 3",
        price: "₹ 5999.00",
        rating: "4.2",
    },
    {
        imgURL: "https://i.pinimg.com/736x/5c/02/a2/5c02a20156317e021b353b4625da38c1--nike-free-run--nike-free-shoes.jpg",
        name: "Nike Air Max-01",
        price: "₹ 7999.00",
        rating: "4.4",
    },
    {
        imgURL: "https://i.pinimg.com/originals/01/76/ae/0176ae1335fa663f73430efd5870f79c.jpg",
        name: "Nike Go",
        price: "₹ 9999.00",
        rating: "4.6",
    },
    {
        imgURL: "https://www.theairmax270.com/wp-content/uploads/2020/10/sale-nike-renew-elevate-navy-blue-varsity-red-white-mens-basketball-shoes-600x401.png",
        name: "Nike Elevate",
        price: "₹ 10999.00",
        rating: "4.7",
    },
    {
        imgURL: "https://th.bing.com/th/id/OIP.Q7p4r1TDBBYpiTAxcBlurgHaE9?pid=ImgDet&rs=1",
        name: "Nike KD Trey 5",
        price: "₹ 9999.00",
        rating: "4.5",
    },
    {
        imgURL: "https://th.bing.com/th/id/OIP.236iWEt2e9Yej4x_ErxcyQHaE8?pid=ImgDet&rs=1",
        name: "Nike Hyperdunk",
        price: "₹ 12999.00",
        rating: "4.8",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.7,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    },
    {
        imgURL: "https://th.bing.com/th/id/R.100ccc7f8e37e81751f8b567eeefd338?rik=SLbsChSbs5jxwQ&riu=http%3a%2f%2fimages4.fanpop.com%2fimage%2fphotos%2f16300000%2fRandom-people-random-16382026-600-800.jpg&ehk=G607Osd64KyUcUxc7XDFDiromF%2bKPM863TeHL6o1Wt8%3d&risl=&pid=ImgRaw&r=0",
        customerName: 'Elijah Williams',
        rating: 4.8,
        feedback: "The product didn't just meet my expectations; it went above and beyond. I'll certainly be coming back for more!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];