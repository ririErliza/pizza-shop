
import Image from "next/image";
import Layout from "../../components/Layout";
import { client, urlFor } from "../../lib/client";
import css from "../../styles/Pizza.module.css";
import LeftArrow from "../../assets/arrowLeft.png";
import RightArrow from "../../assets/arrowRight.png"
import { useState } from "react";

export default function Pizza({pizza}) {
    // console.log(pizza)
    const src = urlFor(pizza.image).url()

    const[size,setSize]=useState(1)

    return(
        <Layout>
            <div className={css.container}>
                <div className={css.imageWrapper}>
                    <Image
                    loader={()=>src} 
                    src={src}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    unoptimized
                    />
                </div>
            

                {/* right side */}
                <div className={css.right}>
                    <span>{pizza.name}</span>
                    <span>{pizza.details}</span>
                    <span><span style={{color:"var(--themeRed)"}}>$</span>{pizza.price[1]}</span>

                    <div className={css.size}>
                        <span>Size</span>
                        <div className={css.sizeVariants}>
                            <div>Small</div>
                            <div>Medium</div>
                            <div>Large</div>
                        </div>
                    </div>

                    {/* Quantity counter */}
                    <div className={css.quantity}>
                        <span>Quantity</span>
                        
                        <div className={css.counter}>
                        
                        <Image src={LeftArrow} alt='' objectFit='contain' height={20} width={20} />
                        <span>1</span>
                        <Image src={RightArrow} alt='' objectFit='contain' height={20} width={20} />
                        </div>

                    </div>

                    {/* Button */}
                <div className={`btn ${css.btn}`}>
                    Add to Cart
                </div>

                </div>

                

            </div>

        </Layout>
    );
};

export async function getStaticPaths(){
    const paths = await client.fetch(
        `*[_type=="pizza" && defined(slug.current)][].slug.current`
    );

    return{
        paths: paths.map((slug)=>({params:{slug}})),
        fallback:'blocking',
    };
}

export async function getStaticProps(context){
    const{slug=""} = context.params;
    const pizza = await client.fetch(
        `*[_type=="pizza" && slug.current=='${slug}'][0]`
    );
    return{
        props:{
            pizza,
        },
        
    };
}