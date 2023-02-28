import { BiBitcoin } from 'react-icons/bi';
import { MdOutlineWeb } from 'react-icons/md';
import { AiFillDatabase } from 'react-icons/ai';
import { IoNewspaperSharp } from 'react-icons/io5';
import { BsBarChartFill } from 'react-icons/bs';

export const services = [
    {
        name: "React前端開發",
        description: "React開發經驗一年以上，熟悉團隊協作、Scrum流程，獨力完成PM交付的工作，具備網頁切版、RWD、串接GA、串接API。",
        icon: <MdOutlineWeb className='icon' />
    },
    {
        name: "Web3前端開發",
        description: "參與Dapp項目開發近一年，熟悉MetaMask串接、智能合約串接...等。",
        icon: <BiBitcoin className='icon' />
    },
    {
        name: "機器學習",
        description: "根據歷史數據進行預測分析，具備以R、Python進行機器學習建模的能力，如：SVM、KNN、XGboost...。並且曾利用Python將模型部屬至雲端，與網站串接。",
        icon: <AiFillDatabase className='icon' />
    },
    {
        name: "數據分析",
        description: "使用 R、SAS、Python 完成數據分析，並依據分析結果，提出建議。具備資料清理、異常偵測、特徵篩選、探索式資料分析...等能力。",
        icon: <IoNewspaperSharp className='icon' />
    },
    {
        name: "資料視覺化",
        description: "以圖形或Dashboard的形式，展現數據的意義。熟悉 plotly、ggplot2、Power BI...等視覺化工具。曾以React、R shiny建立視覺化Dashboard。",
        icon: <BsBarChartFill className='icon' />
    }
]