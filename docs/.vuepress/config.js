
module.exports = {
    title: '罗兰测试',
    logo: '/images/logo/猞猁.png',
    head: [
        ['link', { rel: 'icon', href: '/logo/favicon.ico' }], 
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/logo/favicon-32x32.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/logo/favicon-16x16.png' }],
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/logo/apple-touch-icon.png' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }]
    ],
    description: '各类测试理论, 技能, 经验, 故事, 职业发展的博客文档',
    theme: 'reco',
    themeConfig: {
        nav: [{'text': '首页', 'link': '/'}, {'text': '行情交易', 'items': [{'text': '分析方法论', 'link': '/行情交易/分析方法论/基本面分析知识体系'}, {'text': '交易平台与工具', 'link': '/行情交易/交易平台与工具/行情交易平台业务体系'}, {'text': '理解行情数据', 'link': '/行情交易/理解行情数据/K线'}, {'text': '概况', 'link': '/行情交易/概况/行情交易知识体系md'}]}, {'text': '市场与产品', 'link': '/市场与产品/期货/期货知识体系', 'items': [{'text': '期货', 'link': '/市场与产品/期货/期货知识体系'}, {'text': '外汇', 'link': '/市场与产品/外汇/外汇知识体系'}, {'text': '股票', 'link': '/市场与产品/股票/股票知识体系'}, {'text': '期权', 'link': '/市场与产品/期权/期权知识体系'}, {'text': '债券', 'link': '/市场与产品/债券/债券知识体系'}]}, {'text': 'web3', 'link': '/web3/web3技术体系/Web3技术体系', 'items': [{'text': 'web3技术体系', 'link': '/web3/web3技术体系/Web3技术体系'}, {'text': 'web3业务体系', 'link': '/web3/web3业务体系/web3业务体系'}, {'text': '基础术语', 'link': '/web3/基础术语/自建区块链'}, {'text': 'web3钱包', 'link': '/web3/web3钱包/Web3钱包结合资金归集'}]}, {'text': '核心基础与理论', 'link': '/核心基础与理论/基本术语/出入金', 'items': [{'text': '基本术语', 'link': '/核心基础与理论/基本术语/出入金'}, {'text': '宏观经济学', 'link': '/核心基础与理论/宏观经济学/宏观经济学知识体系'}, {'text': '公司金融', 'link': '/核心基础与理论/公司金融/公司金融理论体系'}, {'text': '微观经济学', 'link': '/核心基础与理论/微观经济学/微观经济学知识体系'}, {'text': '货币银行学', 'link': '/核心基础与理论/货币银行学/货币银行学知识体系'}, {'text': '资产定价', 'link': '/核心基础与理论/资产定价/资产定价理论体系'}]}, {'text': '机构与职能', 'link': '/机构与职能/金融职能体系', 'items': []}, {'text': '优质博客', 'items': [{'text': 'AI关乎未来', 'link': 'https://zerozzz.win/'}, {'text': '美团技术团队', 'link': 'https://tech.meituan.com/'}, {'text': 'Java全栈知识体系', 'link': 'https://pdai.tech/'}, {'text': 'BY林子', 'link': 'https://www.bylinzi.com/'}, {'text': 'code2life', 'link': 'https://code2life.top/archives/'}, {'text': '技术圆桌', 'link': 'https://v2think.com/what-is-leadership'}, {'text': 'istqb', 'link': 'https://www.tsting.cn/download/istqb/core'}]}],
        sidebar: {'/行情交易/': [{'title': '分析方法论', 'path': '/行情交易/分析方法论/基本面分析知识体系', 'collapsable': false, 'children': [{'title': '基本面分析知识体系', 'path': '/行情交易/分析方法论/基本面分析知识体系'}, {'title': '量化与程序化分析知识体系', 'path': '/行情交易/分析方法论/量化与程序化分析知识体系'}, {'title': '技术分析知识体系', 'path': '/行情交易/分析方法论/技术分析知识体系'}]}, {'title': '交易平台与工具', 'path': '/行情交易/交易平台与工具/行情交易平台业务体系', 'collapsable': false, 'children': [{'title': '行情交易平台业务体系', 'path': '/行情交易/交易平台与工具/行情交易平台业务体系'}]}, {'title': '理解行情数据', 'path': '/行情交易/理解行情数据/K线', 'collapsable': false, 'children': [{'title': 'K线', 'path': '/行情交易/理解行情数据/K线'}, {'title': '衍生指标与数据', 'path': '/行情交易/理解行情数据/衍生指标与数据'}, {'title': '基础价格数据', 'path': '/行情交易/理解行情数据/基础价格数据'}, {'title': '市场深度数据', 'path': '/行情交易/理解行情数据/市场深度数据'}]}, {'title': '概况', 'path': '/行情交易/概况/行情交易知识体系md', 'collapsable': false, 'children': [{'title': '行情交易知识体系md', 'path': '/行情交易/概况/行情交易知识体系md'}]}], '/市场与产品/': [{'title': '期货', 'path': '/市场与产品/期货/期货知识体系', 'collapsable': false, 'children': [{'title': '期货知识体系', 'path': '/市场与产品/期货/期货知识体系'}]}, {'title': '外汇', 'path': '/市场与产品/外汇/外汇知识体系', 'collapsable': false, 'children': [{'title': '外汇知识体系', 'path': '/市场与产品/外汇/外汇知识体系'}]}, {'title': '股票', 'path': '/市场与产品/股票/股票知识体系', 'collapsable': false, 'children': [{'title': '股票知识体系', 'path': '/市场与产品/股票/股票知识体系'}]}, {'title': '期权', 'path': '/市场与产品/期权/期权知识体系', 'collapsable': false, 'children': [{'title': '期权知识体系', 'path': '/市场与产品/期权/期权知识体系'}, {'title': '期权交易平台', 'path': '/市场与产品/期权/期权交易平台'}]}, {'title': '债券', 'path': '/市场与产品/债券/债券知识体系', 'collapsable': false, 'children': [{'title': '债券知识体系', 'path': '/市场与产品/债券/债券知识体系'}]}], '/web3/': [{'title': 'web3技术体系', 'path': '/web3/web3技术体系/Web3技术体系', 'collapsable': false, 'children': [{'title': 'Web3技术体系', 'path': '/web3/web3技术体系/Web3技术体系'}]}, {'title': 'web3业务体系', 'path': '/web3/web3业务体系/web3业务体系', 'collapsable': false, 'children': [{'title': 'web3业务体系', 'path': '/web3/web3业务体系/web3业务体系'}, {'title': '用户A从自己钱包发送0.1ETH给用户B的场景.1eth给用户b的场景.1eth给用户b的场景', 'path': '/web3/web3业务体系/用户A从自己钱包发送0.1ETH给用户B的场景.1eth给用户b的场景.1eth给用户b的场景'}]}, {'title': '基础术语', 'path': '/web3/基础术语/自建区块链', 'collapsable': false, 'children': [{'title': '自建区块链', 'path': '/web3/基础术语/自建区块链'}, {'title': '波场链', 'path': '/web3/基础术语/波场链'}, {'title': '闪兑的业务体系', 'path': '/web3/基础术语/闪兑的业务体系'}, {'title': '能量租赁', 'path': '/web3/基础术语/能量租赁'}, {'title': '扫块在金融平台中的应用', 'path': '/web3/基础术语/扫块在金融平台中的应用'}, {'title': 'TRX和ARB和BNB', 'path': '/web3/基础术语/TRX和ARB和BNB'}, {'title': '闪兑的技术体系', 'path': '/web3/基础术语/闪兑的技术体系'}, {'title': 'Polygon Mainnet', 'path': '/web3/基础术语/Polygon Mainnet'}, {'title': 'Neteller', 'path': '/web3/基础术语/Neteller'}, {'title': '扫块', 'path': '/web3/基础术语/扫块'}, {'title': '扫块的测试点', 'path': '/web3/基础术语/扫块的测试点'}, {'title': 'Skrill', 'path': '/web3/基础术语/Skrill'}, {'title': 'DEX流动池盈利模式', 'path': '/web3/基础术语/DEX流动池盈利模式'}, {'title': '闪兑', 'path': '/web3/基础术语/闪兑'}]}, {'title': 'web3钱包', 'path': '/web3/web3钱包/Web3钱包结合资金归集', 'collapsable': false, 'children': [{'title': 'Web3钱包结合资金归集', 'path': '/web3/web3钱包/Web3钱包结合资金归集'}, {'title': 'web3钱包业务架构', 'path': '/web3/web3钱包/web3钱包业务架构'}, {'title': 'web3钱包结合出入金', 'path': '/web3/web3钱包/web3钱包结合出入金'}, {'title': 'Web3 钱包测试场景全景图', 'path': '/web3/web3钱包/Web3 钱包测试场景全景图'}]}], '/核心基础与理论/': [{'title': '基本术语', 'path': '/核心基础与理论/基本术语/出入金', 'collapsable': false, 'children': [{'title': '出入金', 'path': '/核心基础与理论/基本术语/出入金'}, {'title': '资金归集', 'path': '/核心基础与理论/基本术语/资金归集'}]}, {'title': '宏观经济学', 'path': '/核心基础与理论/宏观经济学/宏观经济学知识体系', 'collapsable': false, 'children': [{'title': '宏观经济学知识体系', 'path': '/核心基础与理论/宏观经济学/宏观经济学知识体系'}]}, {'title': '公司金融', 'path': '/核心基础与理论/公司金融/公司金融理论体系', 'collapsable': false, 'children': [{'title': '公司金融理论体系', 'path': '/核心基础与理论/公司金融/公司金融理论体系'}]}, {'title': '微观经济学', 'path': '/核心基础与理论/微观经济学/微观经济学知识体系', 'collapsable': false, 'children': [{'title': '微观经济学知识体系', 'path': '/核心基础与理论/微观经济学/微观经济学知识体系'}]}, {'title': '货币银行学', 'path': '/核心基础与理论/货币银行学/货币银行学知识体系', 'collapsable': false, 'children': [{'title': '货币银行学知识体系', 'path': '/核心基础与理论/货币银行学/货币银行学知识体系'}]}, {'title': '资产定价', 'path': '/核心基础与理论/资产定价/资产定价理论体系', 'collapsable': false, 'children': [{'title': '资产定价理论体系', 'path': '/核心基础与理论/资产定价/资产定价理论体系'}]}], '/机构与职能/': [], '/': [{'title': '欢迎交流', 'path': '/', 'collapsable': false, 'children': [{'title': '博客简介', 'path': '/'}]}]},
    },
enhanceAppFiles: [
    {
        name: 'custom-footer',
        content: `
            export default ({
                router
            }) => {
                router.afterEach((to, from) => {
                    if (typeof window !== 'undefined') {
                        // 检查是否已经存在页脚，避免重复添加
                        if (!document.querySelector('.custom-footer')) {
                            const footer = document.createElement('footer');
                            footer.className = 'custom-footer'; // 给页脚加一个类名
                            footer.innerHTML = \`
                            <footer style="text-align: center; margin-top: 0px; padding: 0px;">
                            <p>粤ICP备2024288002号 | copyright © 2024-present</p>
                            </footer>
                            \`;
                            document.body.appendChild(footer);
                        }
                    }
                });
            };
        `
    }
],
plugins: [
    '@vuepress/plugin-back-to-top', // 返回顶部插件
    '@vuepress/plugin-medium-zoom', // 图片放大插件
]
}
