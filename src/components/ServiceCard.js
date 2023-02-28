import React from 'react';
import { css } from "@emotion/css/macro";
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import "react-multi-carousel/lib/styles.css";
import { services } from '../data/services';
import Carousel from 'react-elastic-carousel';

const ServiceCard = () => {
    const carouselRef = React.useRef(null);
    let resetTimeout;

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1 },
        { width: 768, itemsToShow: 2 },
        { width: 980, itemsToShow: 3 },
        { width: 1200, itemsToShow: 3 },
    ];

    return (
        <Carousel className={style()}
            breakPoints={breakPoints}
            ref={carouselRef}
            enableAutoPlay={true}
            showArrows={false}
            autoPlaySpeed={4000}
            transitionMs={1000}
            onNextEnd={({ index }) => {
                clearTimeout(resetTimeout);
                resetTimeout = setTimeout(() => {
                    carouselRef?.current?.goTo(0);
                }, 4000); // same time
            }}>
            {services.map((item, index) => (
                <div className='service-card' sx={{ minWidth: 285 }} key={index}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            <div className='icon-circle'>{item.icon}</div>{item.name}
                        </Typography>
                        <Typography variant="body2">
                            {item.description}
                        </Typography>
                    </CardContent>
                </div>
            ))}
        </Carousel>
    )
}

export default ServiceCard

export const style = () => css`
    .rec.rec-swipable{
        margin: 5rem auto;
    }

    .service-card{
        box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.25);
        margin:2rem 1.5rem;
        border-radius: 25px;
        height: 25rem;

        .MuiCardContent-root{
            padding:4rem 1.5rem;
            .MuiTypography-h5{
                display: flex;
                margin: auto 0;
                line-height:2.5rem;
                font-size:1.8rem;
                color: crimson;
                font-weight:600;
                .icon-circle{
                    line-height:2.5rem;
                    margin: auto 1rem auto 0;
                    background: #DC143C;
                    height: 2.5rem;
                    width: 2.5rem;
                    border-radius:25px;
                    .icon{
                        display: block;
                        margin: 5px auto 0 auto;
                        color: white;
                        width: 1.7rem;
                    }
                }
            }
            .MuiTypography-body2{
                padding-top:2rem;
                font-size:1.2rem;
            }
        }
    }

    .rec-pagination{
        .rec-dot{
            box-shadow: 0 0 1px 3px #DC143C;
            &.rec-dot_active{
                background: #DC143C;
            }
        }
    }

@media screen and (max-width:1060px) { 
    .service-card{
        .MuiCardContent-root{
            .MuiTypography-h5{
                font-size:1.6rem;
                .icon-circle{
                    .icon{
                        margin: 7px auto 0 auto;
                    }
                }
            }
            }
        }
    }
}

@media screen and (max-width:980px) { 
    .service-card{
        height: 20rem;
        .MuiCardContent-root{
            .MuiTypography-body2{
                font-size:1.2rem;
            }
        }
    }
}

@media screen and (max-width:400px) { 
    .service-card{
        height: 18rem;
        .MuiCardContent-root{
            padding:2rem 1.5rem;
            .MuiTypography-h5{
                font-size:1.6rem;
                .icon-circle{
                    height: 2rem;
                    width: 2rem;
                    .icon{
                        width: 1.2rem;
                    }
                }
            }
            .MuiTypography-body2{
                font-size:1rem;
            }
        }
    }
}

`