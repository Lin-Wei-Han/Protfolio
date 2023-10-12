import React from 'react';
import { css } from '@emotion/css/macro';
import houseprice from '../dist/image/project/houseprice.png';
import myosotis from '../dist/image/project/myosotis.png';
import palcelantern from '../dist/image/project/palcelantern.png';
import power_bi_covid from '../dist/image/project/power_bi_covid.png';
import powerbi_trafic from '../dist/image/project/powerbi_trafic.png';
import reactobjectdetect from '../dist/image/project/reactobjectdetect.png';
import shinydashboard from '../dist/image/project/shinydashboard.png';
import clinicalTrial from '../dist/image/project/clinicalTrial.png';
import nomenu from '../dist/image/project/nomenu.png';

const projectDetail = [
    {
        title: "旅遊推薦系統平台",
        info: "動態爬蟲Google景點資訊、評論，並使用評論內容建立詞向量模型。並以此結合協同式過濾、雙塔模型建構平台的推薦系統。並且利用Bert語言模型進行景點主題分類，分類結果用於平台使用。",
        img: nomenu,
        url: "https://no-menu.herokuapp.com/",
        type: ["data", "web"]
    },
    {
        title: "六都房價趨勢與預測儀表板",
        info: "以內政部實價登陸公布隻交易紀錄，實現六都房價走勢儀表板，並且以隨機數森林創建預測模型，針對房價做預測。亦提供嚴謹的統計檢定結果，分析六都差異。",
        img: houseprice,
        url: "https://taiwanhouseprice.herokuapp.com/",
        type: ["data", "web"]
    },
    {
        title: "Covid-19 近況數據儀表版",
        info: "透過R語言、Data Visualization與R shiny，將Covid-19對於產業衝擊的影響製作成數據儀表板。並即時產生簡易的描述性統計，方便觀察者知道數據變動的意義。",
        img: shinydashboard,
        url: "https://shinycovid-19.herokuapp.com/",
        type: ["data", "web"]
    },
    {
        title: "即時物件偵測",
        info: "透過tensorflow官方所提供的深度學習框架，串接至React上，透過網站達到即時偵測的效果，並且能偵測多達80多件不同的物件。",
        img: reactobjectdetect,
        url: "https://computervisiontemplate.herokuapp.com/",
        type: ["data"]
    },
    {
        title: "全國交通事故類型 Dashboard",
        info: "利用 Power BI 串接全國交通事故統計資料，以視覺化圖表呈現各地區車禍事故的分布熱點，並進一步觀察主要發生交通事故的肇事主因。並公開部署至雲端，供民眾使用。",
        img: powerbi_trafic,
        url: "https://reurl.cc/6Lnmv5",
        type: ["data", "web"]
    },
    {
        title: "美國退伍軍人醫院肺癌臨床試驗 Dashboard",
        info: "1973 年針對美國退伍軍人醫院進行肺癌臨床試驗，將其資料利用 Power BI 進行視覺化，觀察新舊治療方法，對患者存活時間、KPS指標的影響",
        img: clinicalTrial,
        url: "https://reurl.cc/9Vy1Ga",
        type: ["data", "web"]
    },
    {
        title: "全球新冠肺炎趨勢 Dashboard",
        info: "利用 Power BI 串接衛服部資料庫，抓取全球確診數及本國每日確診等即時資訊。協助使用者觀察疫情發展近況，並公開部署至雲端，供民眾使用。",
        img: power_bi_covid,
        url: "https://reurl.cc/x1VmL5",
        type: ["data"]
    },
    {
        title: "麥索迪斯企業形象網站",
        info: "協助企業打造形象網站，瞄準目標客群，使客戶能夠迅速了解企業的服務項目。不僅網站資訊清晰，並加入動態元素，創造更具現代化的形象網站。(目前暫停使用)",
        img: myosotis,
        url: "https://myosotis.online/",
        type: ["web"]
    },
    {
        title: "競賽活動網站",
        info: "針對年輕族群，設計風格、配色較多元且鮮豔，且喜歡加入動態效果，添加活潑的元素，不僅力求瀏覽體驗也加深了使用者的印象。",
        img: palcelantern,
        url: "https://lin-wei-han.github.io/Palace-Lantern/index.html?fbclid=IwAR0AS0zu7vIVZvwMUOh4uC2oq2X_R12JEvKQ9cgu7hvydXkQOaVkDrnwoXE",
        type: ["web"]
    },
]

const ProjectList = (props) => {
    let tabContactContent = props.tabContactContent

    React.useEffect(() => {
        console.log(tabContactContent);
    }, [tabContactContent])

    return (
        <div className={style()}>
            {projectDetail.map((item, index) => (
                <>
                    {tabContactContent === "all" ?
                        <div className='wrapper' key={index}>
                            <div className="card front-face">
                                <img src={item.img} alt='Project' />
                            </div>
                            <div className="card back-face">
                                <div className="info">
                                    <div className="title"><a href={item.url}>{item.title}</a></div>
                                    <p>{item.info}</p>
                                </div>
                            </div>
                        </div>
                        : item.type.includes(tabContactContent) ?
                            <div className='wrapper' key={index}>
                                <div className="card front-face">
                                    <img src={item.img} alt='Project' />
                                </div>
                                <div className="card back-face">
                                    <div className="info">
                                        <div className="title"><a href={item.url}>{item.title}</a></div>
                                        <p>{item.info}</p>
                                    </div>
                                </div>
                            </div>
                            : ""}
                </>
            ))}
        </div>
    )
}

export default ProjectList

export const style = () => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 5rem 2rem;

    @keyframes scaleUp {
        from {
            transform: scale(0);
        }
        to {
            transform: scale(1);
        }
        }

    .wrapper{
        height: 350px;
        width: 28vw;
        min-width: 400px;
        margin: 1rem auto;
        position: relative;
        transform-style: preserve-3d;
        perspective: 1000px;
        animation : scaleUp 0.3s forwards;
        transition: all 0.5s ease;
        .card{
            position: absolute;
            height: 100%;
            width: 100%;
            padding: 5px;
            background: #fff;
            border-radius: 10px;
            transform: translateY(0deg);
            transform-style: preserve-3d;
            backface-visibility: hidden;
            box-shadow: 0px 10px 15px rgba(0,0,0,0.1);
            transition: transform 0.7s cubic-bezier(0.4,0.2,0.2,1);

            img{
                height: 100%;
                width: 100%;
                object-fit: cover;
                border-radius: 10px;
              }
        }

        .back-face{
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            flex-direction: column;
            transform: rotateY(180deg);
            .info{
                padding: 2rem;
                .title{
                    font-size: 20px;
                    font-weight: 500;
                    a{
                        color: #2D2C2C;
                        text-decoration:none;
                        transition: 0.3s ease;
                        &:hover{
                            color:crimson
                        }
                    }
                }

                p{
                    padding-top: 1rem;
                }
              }
          }

        &:hover > .front-face{
            transform: rotateY(-180deg);
        }

        &:hover > .back-face{
            transform: rotateY(0deg);
        }
      }

@media screen and (max-width:1300px) { 
    grid-template-columns: 1fr 1fr 1fr;
    .wrapper{
        height: 300px;
        width: 28vw;
        min-width: 300px;
    }
}

@media screen and (max-width:1000px) { 
    grid-template-columns: 1fr 1fr 1fr;
        padding: 5rem 1rem;
        .wrapper{
            height: 200px;
            width: 28vw;
            min-width: 240px;
        }
}


@media screen and (max-width:768px) { 
    grid-template-columns: 1fr 1fr;
        padding: 5rem 1rem;
        .wrapper{
            height: 250px;
            width: 45vw;
            min-width: 250px;
        }
}



@media screen and (max-width:540px) {
    grid-template-columns: 1fr;
    padding: 5rem 1rem;
    .wrapper{
        height: 250px;
        width: 80vw;
        min-width: 260px;
    }
}
`
