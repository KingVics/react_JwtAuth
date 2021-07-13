import React, {useState, useEffect} from 'react'
import Carousels from 'react-multi-carousel';
import style from "../styles/home.module.css"

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1// optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1100, min: 601 },
        items: 1,
        slidesToSlide: 1// optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    }
};



export default function CardSlider() {
    const [custom, setCustom] = useState(true)
    const mediaQuery = window.matchMedia('(max-width: 700px)')  

    useEffect(() => {
        if (mediaQuery.matches) {
            setCustom(false)
        }

        else {
            setCustom(true)
        }
    }, [mediaQuery]);
    return (
        <>
            <Carousels
                swipeable={true}
                draggable={true}
                arrows={true}
                showDots={false}
                responsive={responsive}
                centerMode={custom}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={10000}
                keyBoardControl={true}
                customTransition="transform 300ms ease-in-out"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet"]}
                //deviceType={deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >

                <div className={style.practiceBriefCard}>
                    <div>
                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40.9317 25.0006L40.9378 24.9985L34.2063 10.3111L35.8388 9.49864L35.2279 8.27549L33.6364 9.06815L33.4212 8.5987C33.2638 8.25567 32.8583 8.10508 32.5152 8.26233C32.3664 8.33058 32.2471 8.44991 32.1789 8.5987L31.9868 9.01826C30.8286 8.48032 29.5671 8.20118 28.29 8.20032H22.55V6.83367H23.9167V5.46702H22.742L23.2333 3.50108C23.6105 1.99153 22.6926 0.461989 21.1831 0.0847075C19.6735 -0.292489 18.144 0.62539 17.7667 2.13494C17.6546 2.58338 17.6546 3.05257 17.7667 3.501L18.258 5.46693H17.0833V6.83358H18.45V8.20024H12.7134C11.4351 8.20126 10.1723 8.48108 9.01317 9.02023L8.82116 8.60067C8.66391 8.25764 8.25826 8.10705 7.91523 8.2643C7.76643 8.33255 7.64711 8.45187 7.57886 8.60067L7.36361 9.07011L5.77212 8.27404L5.16122 9.49856L6.79371 10.3144L0.0621924 24.9985C0.0206799 25.0878 -0.000503418 25.1851 9.08198e-06 25.2835C0.00299866 27.9239 2.14286 30.0638 4.78334 30.0668H11.6167C14.2572 30.0638 16.397 27.9239 16.4 25.2835C16.3983 25.1853 16.375 25.0887 16.3317 25.0006L9.58171 10.2578C10.5629 9.80238 11.6317 9.56663 12.7134 9.56698H18.45V34.5672L16.1171 36.9H13.6667C11.7807 36.9023 10.2522 38.4307 10.25 40.3167C10.25 40.694 10.556 41 10.9333 41H30.0667C30.444 41 30.75 40.694 30.75 40.3167C30.7478 38.4307 29.2193 36.9023 27.3333 36.9H24.8829L22.55 34.5672V9.56698H28.29C29.3717 9.56663 30.4405 9.80238 31.4217 10.2578L24.6622 24.9985C24.6207 25.0878 24.5995 25.1851 24.6 25.2835C24.603 27.9239 26.7429 30.0638 29.3833 30.0668H36.2167C38.8572 30.0638 40.997 27.9239 41 25.2835C40.9984 25.1853 40.9751 25.0887 40.9317 25.0006ZM11.6167 28.7001H4.78334C3.16025 28.6983 1.76173 27.5567 1.43501 25.9668H14.965C14.6384 27.5567 13.2398 28.6983 11.6167 28.7001ZM14.652 24.6002H1.74798L8.02507 10.9056C8.1397 10.9364 8.26031 10.9364 8.37494 10.9056L14.652 24.6002ZM19.3568 1.92465C19.8889 1.29326 20.8322 1.21288 21.4636 1.74502C21.5284 1.79969 21.5886 1.85982 21.6432 1.92465C21.9196 2.27622 22.0173 2.7361 21.9077 3.16967L21.333 5.46702H19.667L19.0923 3.16967C18.9827 2.7361 19.0805 2.27622 19.3568 1.92465ZM19.8167 8.20032V6.83367H21.1833V8.20032H19.8167ZM21.1833 9.56698V34.1667H19.8167V9.56698H21.1833ZM27.3333 38.2667C28.2019 38.2677 28.9758 38.8149 29.2665 39.6333H11.7335C12.0242 38.8149 12.7982 38.2677 13.6667 38.2667H27.3333ZM22.9504 36.9H18.0496L19.4162 35.5334H21.5838L22.9504 36.9ZM32.6237 10.9077C32.7365 10.9474 32.8603 10.9423 32.9695 10.8933L39.252 24.6002H26.348L32.6237 10.9077ZM36.2167 28.7001H29.3833C27.7602 28.6983 26.3617 27.5567 26.035 25.9668H39.565C39.2384 27.5567 37.8398 28.6983 36.2167 28.7001Z" fill="#111353" fill-opacity="0.7"/>
                        </svg>
                    </div>
                    <div>
                        <h5>Litigation</h5>
                        <p>We provide excellent services in all facets of civil/criminal litigation prosecution and defense.</p>
                    </div>
                </div>
                <div className={style.practiceBriefCard}>
                    <div>
                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.5 41C9.1965 41 0 31.8035 0 20.5C0 9.1965 9.1965 0 20.5 0C31.8035 0 41 9.1965 41 20.5C41 31.8035 31.8035 41 20.5 41ZM20.5 2.56251C10.6091 2.56251 2.56251 10.6091 2.56251 20.5C2.56251 30.3909 10.6091 38.4375 20.5 38.4375C30.3909 38.4375 38.4375 30.3909 38.4375 20.5C38.4375 10.6091 30.3909 2.56251 20.5 2.56251Z" fill="#111353" fill-opacity="0.7"/>
                            <path d="M20.5 30.75C14.8483 30.75 10.25 26.1518 10.25 20.5C10.25 14.8481 14.8482 10.2499 20.5 10.2499C23.2789 10.2499 25.879 11.3435 27.8234 13.3292L25.9917 15.1209C24.534 13.6319 22.5846 12.8124 20.5 12.8124C16.2608 12.8124 12.8125 16.2607 12.8125 20.4999C12.8125 24.7391 16.2608 28.1874 20.5 28.1874C22.5833 28.1874 24.5327 27.3679 25.9917 25.8789L27.8209 27.6732C25.8777 29.6576 23.2777 30.7499 20.5 30.75Z" fill="#111353" fill-opacity="0.7"/>
                        </svg>
                    </div>
                    <div>
                        <h5>Copyright &#38; Trademarks</h5>
                        <p>We provide excellent services in all facets of civil/criminal litigation prosecution and defense.</p>
                    </div>
                </div>
                <div className={style.practiceBriefCard}>
                    <div>
                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40.3387 14.5484C40.7044 14.5484 41 14.2521 41 13.8871V3.30645C41 2.94142 40.7044 2.64516 40.3387 2.64516H39.6774V0.66129C39.6774 0.296258 39.3818 0 39.0161 0H1.98387C1.61818 0 1.32258 0.296258 1.32258 0.66129V2.64516H0.66129C0.295597 2.64516 0 2.94142 0 3.30645V13.8871C0 14.2521 0.295597 14.5484 0.66129 14.5484H1.32258V37.0323H0.66129C0.295597 37.0323 0 37.3285 0 37.6936V40.3387C0 40.7037 0.295597 41 0.66129 41H40.3387C40.7044 41 41 40.7037 41 40.3387V37.6936C41 37.3285 40.7044 37.0323 40.3387 37.0323H39.6774V14.5484H40.3387ZM2.64516 1.32258H38.3548V2.64516H2.64516V1.32258ZM1.32258 3.96774H39.6774V13.2258H1.32258V3.96774ZM38.3548 21.1613H30.4194V17.1935H38.3548V21.1613ZM29.0968 21.1613H21.1613V17.1935H29.0968V21.1613ZM19.8387 21.1613H11.9032V17.1935H19.8387V21.1613ZM10.5806 21.1613H2.64516V17.1935H10.5806V21.1613ZM39.6774 39.6774H1.32258V38.3548H39.6774V39.6774ZM22.4839 37.0323H21.1613V27.1129C21.1613 26.7479 20.8657 26.4516 20.5 26.4516H7.27419C6.9085 26.4516 6.6129 26.7479 6.6129 27.1129V37.0323H5.29032V25.129H22.4839V37.0323ZM7.93548 37.0323V27.7742H13.2258V37.0323H7.93548ZM14.5484 27.7742H19.8387V37.0323H14.5484V27.7742ZM35.7097 37.0323H27.7742V25.129H35.7097V37.0323ZM37.0323 37.0323V24.4677C37.0323 24.1027 36.7367 23.8065 36.371 23.8065H27.1129C26.7472 23.8065 26.4516 24.1027 26.4516 24.4677V37.0323H23.8065V24.4677C23.8065 24.1027 23.5109 23.8065 23.1452 23.8065H4.62903C4.26334 23.8065 3.96774 24.1027 3.96774 24.4677V37.0323H2.64516V22.4839H38.3548V37.0323H37.0323ZM38.3548 15.871H2.64516V14.5484H38.3548V15.871Z" fill="#111353" fill-opacity="0.7"/>
                            <path d="M11.9033 5.29028H9.25809C8.8924 5.29028 8.5968 5.58654 8.5968 5.95157V11.2419C8.5968 11.6069 8.8924 11.9032 9.25809 11.9032H11.9033C12.997 11.9032 13.8871 11.0131 13.8871 9.91932C13.8871 9.41144 13.6953 8.94788 13.3806 8.59674C13.6953 8.24559 13.8871 7.78203 13.8871 7.27415C13.8871 6.18038 12.997 5.29028 11.9033 5.29028ZM11.9033 10.5806H9.91938V9.25803H11.9033C12.2683 9.25803 12.5645 9.55494 12.5645 9.91932C12.5645 10.2837 12.2683 10.5806 11.9033 10.5806ZM11.9033 7.93544H9.91938V6.61286H11.9033C12.2683 6.61286 12.5645 6.90978 12.5645 7.27415C12.5645 7.63853 12.2683 7.93544 11.9033 7.93544Z" fill="#111353" fill-opacity="0.7"/>
                            <path d="M17.8549 5.29028C16.3961 5.29028 15.2097 6.47664 15.2097 7.93544V11.9032H16.5323V9.91932H19.1774V11.9032H20.5V7.93544C20.5 6.47664 19.3137 5.29028 17.8549 5.29028ZM16.5323 8.59674V7.93544C16.5323 7.20604 17.1255 6.61286 17.8549 6.61286C18.5843 6.61286 19.1774 7.20604 19.1774 7.93544V8.59674H16.5323Z" fill="#111353" fill-opacity="0.7"/>
                            <path d="M25.7903 9.25806L23.0129 5.55483C22.8422 5.32735 22.546 5.2341 22.2749 5.32404C22.0044 5.41464 21.8225 5.66659 21.8225 5.95161V11.9032H23.1451V7.93548L25.9225 11.6387C26.0495 11.808 26.2472 11.9032 26.4516 11.9032C26.521 11.9032 26.5918 11.892 26.6605 11.8695C26.931 11.7789 27.1129 11.5269 27.1129 11.2419V5.29031H25.7903V9.25806Z" fill="#111353" fill-opacity="0.7"/>
                            <path d="M32.4032 5.29028H31.0806C31.0806 6.22799 30.5748 7.07048 29.7581 7.51883V5.29028H28.4355V11.9032H29.7581V9.67464C30.5748 10.123 31.0806 10.9655 31.0806 11.9032H32.4032C32.4032 10.531 31.6884 9.29506 30.5278 8.59674C31.6884 7.89841 32.4032 6.66246 32.4032 5.29028Z" fill="#111353" fill-opacity="0.7"/>
                            <path d="M29.7581 31.7419H33.7258C34.0915 31.7419 34.3871 31.4457 34.3871 31.0806V27.1129C34.3871 26.7479 34.0915 26.4516 33.7258 26.4516H29.7581C29.3924 26.4516 29.0968 26.7479 29.0968 27.1129V31.0806C29.0968 31.4457 29.3924 31.7419 29.7581 31.7419ZM30.4194 27.7742H33.0645V30.4193H30.4194V27.7742Z" fill="#111353" fill-opacity="0.7"/>
                        </svg>
                    </div>
                    <div>
                        <h5>Banking &#38; Insurance</h5>
                        <p>We provide excellent services in all facets of civil/criminal litigation prosecution and defense.</p>
                    </div>
                </div>
                <div className={style.practiceBriefCard}>
                    <div>
                        <svg width="33" height="41" viewBox="0 0 33 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.0283 32.532L23.9473 24.613L24.8806 25.5463L16.9616 33.4653L16.0283 32.532Z" fill="#111353"/>
                            <path d="M17.8198 28.38C18.9115 28.38 19.7998 27.4917 19.7998 26.4C19.7998 25.3084 18.9115 24.42 17.8198 24.42C16.7282 24.42 15.8398 25.3084 15.8398 26.4C15.8398 27.4917 16.7282 28.38 17.8198 28.38ZM17.8198 25.74C18.1842 25.74 18.4798 26.0357 18.4798 26.4C18.4798 26.7644 18.1842 27.06 17.8198 27.06C17.4555 27.06 17.1598 26.7644 17.1598 26.4C17.1598 26.0357 17.4555 25.74 17.8198 25.74Z" fill="#111353"/>
                            <path d="M23.1001 29.7C22.0085 29.7 21.1201 30.5883 21.1201 31.68C21.1201 32.7716 22.0085 33.66 23.1001 33.66C24.1918 33.66 25.0801 32.7716 25.0801 31.68C25.0801 30.5883 24.1918 29.7 23.1001 29.7ZM23.1001 32.34C22.7358 32.34 22.4401 32.0443 22.4401 31.68C22.4401 31.3156 22.7358 31.02 23.1001 31.02C23.4644 31.02 23.7601 31.3156 23.7601 31.68C23.7601 32.0443 23.4644 32.34 23.1001 32.34Z" fill="#111353"/>
                            <path d="M2.64008 13.2001H26.4001V14.5201H2.64008V13.2001Z" fill="#111353"/>
                            <path d="M2.64008 15.84H11.2201V17.16H2.64008V15.84Z" fill="#111353"/>
                            <path d="M12.54 15.84H13.86V17.16H12.54V15.84Z" fill="#111353"/>
                            <path d="M2.64008 18.48H13.8601V19.8H2.64008V18.48Z" fill="#111353"/>
                            <path d="M2.64008 21.12H3.96008V22.44H2.64008V21.12Z" fill="#111353"/>
                            <path d="M5.27997 21.12H13.86V22.44H5.27997V21.12Z" fill="#111353"/>
                            <path d="M2.64008 23.7599H9.24008V25.0799H2.64008V23.7599Z" fill="#111353"/>
                            <path d="M29.04 4.62V0H0V28.8803C0 29.5753 0.28182 30.2557 0.77352 30.7468L4.62 34.5932V40.92H33V4.62H29.04ZM1.32 1.32H27.72V35.64H8.58V29.04H1.33584C1.32924 28.9865 1.32 28.9337 1.32 28.8803V1.32ZM7.26 35.3463C7.22172 35.3159 7.18146 35.2882 7.14648 35.2532L2.25324 30.36H7.26V35.3463ZM31.68 39.6H5.94V35.9132L6.21324 36.1865C6.70428 36.6782 7.38474 36.96 8.07972 36.96H29.04V5.94H31.68V39.6Z" fill="#111353"/>
                            <path d="M21.1199 10.7798L22.4399 9.01958L23.7599 10.7798V11.88H25.0799V10.3402L23.2649 7.92002L25.0799 5.4998V3.96002H23.7599V5.06024L22.4399 6.82046L21.1199 5.06024V3.96002H19.7999V5.4998L21.6149 7.92002L19.7999 10.3402V11.88H21.1199V10.7798Z" fill="#111353"/>
                            <path d="M13.2 10.56H15.84V11.88H17.16V9.90002L15.6955 3.96002H13.3445L11.9005 9.7403L11.88 11.88H13.2V10.56ZM14.6645 5.28002L15.6545 9.24002H13.3855L14.3755 5.28002H14.6645Z" fill="#111353"/>
                            <path d="M6.60002 11.88H7.92002V5.28002H10.56V3.96002H3.96002V5.28002H6.60002V11.88Z" fill="#111353"/>
                        </svg>

                    </div>
                    <div>
                        <h5>Taxation</h5>
                        <p>Our wealth of experience in the practice area dates back to the 70’s giving us an edge in tax practice.</p>
                    </div>
                </div>
                <div className={style.practiceBriefCard}>
                    <div>
                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40.9317 25.0006L40.9378 24.9985L34.2063 10.3111L35.8388 9.49864L35.2279 8.27549L33.6364 9.06815L33.4212 8.5987C33.2638 8.25567 32.8583 8.10508 32.5152 8.26233C32.3664 8.33058 32.2471 8.44991 32.1789 8.5987L31.9868 9.01826C30.8286 8.48032 29.5671 8.20118 28.29 8.20032H22.55V6.83367H23.9167V5.46702H22.742L23.2333 3.50108C23.6105 1.99153 22.6926 0.461989 21.1831 0.0847075C19.6735 -0.292489 18.144 0.62539 17.7667 2.13494C17.6546 2.58338 17.6546 3.05257 17.7667 3.501L18.258 5.46693H17.0833V6.83358H18.45V8.20024H12.7134C11.4351 8.20126 10.1723 8.48108 9.01317 9.02023L8.82116 8.60067C8.66391 8.25764 8.25826 8.10705 7.91523 8.2643C7.76643 8.33255 7.64711 8.45187 7.57886 8.60067L7.36361 9.07011L5.77212 8.27404L5.16122 9.49856L6.79371 10.3144L0.0621924 24.9985C0.0206799 25.0878 -0.000503418 25.1851 9.08198e-06 25.2835C0.00299866 27.9239 2.14286 30.0638 4.78334 30.0668H11.6167C14.2572 30.0638 16.397 27.9239 16.4 25.2835C16.3983 25.1853 16.375 25.0887 16.3317 25.0006L9.58171 10.2578C10.5629 9.80238 11.6317 9.56663 12.7134 9.56698H18.45V34.5672L16.1171 36.9H13.6667C11.7807 36.9023 10.2522 38.4307 10.25 40.3167C10.25 40.694 10.556 41 10.9333 41H30.0667C30.444 41 30.75 40.694 30.75 40.3167C30.7478 38.4307 29.2193 36.9023 27.3333 36.9H24.8829L22.55 34.5672V9.56698H28.29C29.3717 9.56663 30.4405 9.80238 31.4217 10.2578L24.6622 24.9985C24.6207 25.0878 24.5995 25.1851 24.6 25.2835C24.603 27.9239 26.7429 30.0638 29.3833 30.0668H36.2167C38.8572 30.0638 40.997 27.9239 41 25.2835C40.9984 25.1853 40.9751 25.0887 40.9317 25.0006ZM11.6167 28.7001H4.78334C3.16025 28.6983 1.76173 27.5567 1.43501 25.9668H14.965C14.6384 27.5567 13.2398 28.6983 11.6167 28.7001ZM14.652 24.6002H1.74798L8.02507 10.9056C8.1397 10.9364 8.26031 10.9364 8.37494 10.9056L14.652 24.6002ZM19.3568 1.92465C19.8889 1.29326 20.8322 1.21288 21.4636 1.74502C21.5284 1.79969 21.5886 1.85982 21.6432 1.92465C21.9196 2.27622 22.0173 2.7361 21.9077 3.16967L21.333 5.46702H19.667L19.0923 3.16967C18.9827 2.7361 19.0805 2.27622 19.3568 1.92465ZM19.8167 8.20032V6.83367H21.1833V8.20032H19.8167ZM21.1833 9.56698V34.1667H19.8167V9.56698H21.1833ZM27.3333 38.2667C28.2019 38.2677 28.9758 38.8149 29.2665 39.6333H11.7335C12.0242 38.8149 12.7982 38.2677 13.6667 38.2667H27.3333ZM22.9504 36.9H18.0496L19.4162 35.5334H21.5838L22.9504 36.9ZM32.6237 10.9077C32.7365 10.9474 32.8603 10.9423 32.9695 10.8933L39.252 24.6002H26.348L32.6237 10.9077ZM36.2167 28.7001H29.3833C27.7602 28.6983 26.3617 27.5567 26.035 25.9668H39.565C39.2384 27.5567 37.8398 28.6983 36.2167 28.7001Z" fill="#111353" fill-opacity="0.7"/>
                        </svg>
                    </div>
                    <div>
                        <h5>Intellectual Property</h5>
                        <p>We provide excellent services in all facets of civil/criminal litigation prosecution and defense.</p>
                    </div>
                </div>
            </Carousels>
            
        </>
    )
}