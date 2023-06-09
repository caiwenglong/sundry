import type { NavLink } from '../components/type'

interface NavData {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: 'AI 聊天与助手',
    items: [
      {
        icon: 'https://www.naviai.cn/wp-content/uploads/2023/04/android-chrome-512x512-1.png',
        title: 'Aivesa 智聊',
        desc: '免费的 国内直连 chatGPT 网站',
        link: 'https://aivesa.com/'
      },
      {
        icon: 'https://www.naviai.cn/wp-content/uploads/2023/05/1bf7f-chat.openai.com.png',
        title: 'ChatGPT',
        desc: 'ChatGPT可以通过对用户输入的语句进行分析和理解，生成符合语境和逻辑的自然语言回复。',
        link: 'https://www.naviai.cn/tools/4854'
      },
      {
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPg0KICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9InJnYigyMjksMTc1LDEzNykiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPSJyZ2IoMCwwLDApIiBjeD0iMTMiIGN5PSI2LjUiIHI9IjYwIiAgb3BhY2l0eT0iLjQiPjwvY2lyY2xlPg0KICAgICAgICAgICAgICAgIDxjaXJjbGUgZmlsbD0icmdiKDIxMCwyMjksMTE0KSIgY3g9IjY1IiBjeT0iMTMwIiByPSI1MCIgIG9wYWNpdHk9Ii42Ij48L2NpcmNsZT4NCiAgICAgICAgICAgICAgICA8dGV4dCB4PSI1MCIgeT0iNTAiIGZvbnQtc2l6ZT0iNTAiIHRleHQtY29weT0iZmFzdCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgdGV4dC1yaWdodHM9ImFkbWluIiBhbGlnbm1lbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGZvbnQtZmFtaWx5PSInUGluZ0ZhbmcgU0MnLCdNaWNyb3NvZnQgWWFoZWknIj5BPC90ZXh0Pjwvc3ZnPg==',
        title: 'AI论文出稿',
        desc: '免费论文查重_论文降重_论文检测-科学降重',
        link: 'https://www.naviai.cn/tools/ai_lun_wen_chu_gao'
      },
      {
        icon: 'https://api.iowen.cn/favicon/openai.com.png',
        title: 'OpenAI',
        desc: 'OpenAI是一家进行AGI（通用人工智能）研究的先锋机构，拥有可以通过AI转变工作和创造力的产品。他们拥有一个名为ChatGPT的模型，以对话方式进行交互，并使用人类反馈的强化学习进行训练。您可以在chat.openai.com上尝试ChatGPT。',
        link: 'https://www.naviai.cn/tools/openai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.hayo.com.png',
        title: 'Hayo',
        desc: 'Hayo是一款综合AI平台，提供AI艺术、新闻和更多功能。',
        link: 'https://www.naviai.cn/tools/hayo'
      },
      {
        icon: 'https://api.iowen.cn/favicon/open-gpt.app.png',
        title: 'OpenGPT',
        desc: 'OpenGPT 是一个网站，允许用户通过 API 调用创建自己的 ChatGPT 应用程序，支持多语言、即时通讯、语音识别和自然语言处理等功能。该网站还提供了一些推荐的应用程序，例如用于在社交媒体上生成流行标题的工具。该网站的源代码可在 Github 上获取。最近还发布了下一代语言模型 OpenAI 的 GPT-4。',
        link: 'https://www.naviai.cn/tools/opengpt'
      },
      {
        icon: 'https://api.iowen.cn/favicon/mygpt.thesamur.ai.png',
        title: 'MyGPT',
        desc: '这是一个ChatGPT API前端网站，内置提示库和聊天历史记录支持。',
        link: 'https://www.naviai.cn/tools/mygpt'
      },
      {
        icon: 'https://api.iowen.cn/favicon/monica.im.png',
        title: 'Monica',
        desc: 'Monica是一款由ChatGPT API驱动的Chrome浏览器插件，为您提供个人AI助手的服务，帮助您更高效地沟通和写作。',
        link: 'https://www.naviai.cn/tools/monica'
      },
      {
        icon: 'https://api.iowen.cn/favicon/poe.com.png',
        title: 'Poe',
        desc: 'Poe是一个AI聊天助手，提供即时答案和双向对话。由Quora提供支持。',
        link: 'https://www.naviai.cn/tools/poe'
      },
      {
        icon: 'https://api.iowen.cn/favicon/snackprompt.com.png',
        title: 'Snack Prompt',
        desc: 'Snack Prompt是一个社区驱动的平台，可以发现、点赞和分享ChatGPT和Bard的最佳AI提示。关注话题、创建和组织提示，并与专家提示器联系。通过Snack Prompt发挥AI的全部潜力。',
        link: 'https://www.naviai.cn/tools/snack_prompt'
      },
      {
        icon: 'https://api.iowen.cn/favicon/opener.chat.png',
        title: 'Opener',
        desc: 'Opener是一款AI约会社交平台，旨在帮助用户通过生成基于对方简介的个性化开场白来与感兴趣的人开始对话，使得每个人都更容易主动发起对话。',
        link: 'https://www.naviai.cn/tools/opener'
      },
      {
        icon: 'https://api.iowen.cn/favicon/merlin.foyer.work.png',
        title: 'Merlin',
        desc: 'Merlin是一个强大的工具，让你在所有你喜欢的网站上使用OpenAI的ChatGPT。',
        link: 'https://www.naviai.cn/tools/merlin'
      },
      {
        icon: 'https://api.iowen.cn/favicon/poe.com.png',
        title: 'MindBot',
        desc: 'MindBot是一款由OpenAI提供支持、@sapo1运营的AI聊天机器人，可通过Poe.com访问。Poe.com是一个平台，在登录时使用您的手机进行验证。MindBot还在WhatTheAI.tech上列为免费的教育和生活助手工具，付费计划从每月1美元开始。',
        link: 'https://www.naviai.cn/tools/mindbot'
      },
      {
        icon: 'https://api.iowen.cn/favicon/promptstorm.app.png',
        title: 'Prompt Storm',
        desc: 'Prompt Storm是一个易于使用的AI提示工程Chrome扩展程序，为ChatGPT提供强大的支持。它可以回答查询，帮助创建写作、市场营销和社交媒体策略，提高生产效率并节省时间。网站提供登录选项和YouTube演示视频。',
        link: 'https://www.naviai.cn/tools/prompt_storm'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.textwithchatgpt.com.png',
        title: 'Text With Chat GPT',
        desc: 'Text With Chat GPT是一款免费的文字聊天机器人，可以通过短信与AI进行交流，无需下载应用程序、记住密码或管理API令牌。',
        link: 'https://www.naviai.cn/tools/text_with_chat_gpt'
      },
      {
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPg0KICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9InJnYigyMjksMjA5LDEzNykiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPSJyZ2IoMjI5LDExOCwxMTQpIiBjeD0iMTgiIGN5PSI5IiByPSI2MCIgIG9wYWNpdHk9Ii40Ij48L2NpcmNsZT4NCiAgICAgICAgICAgICAgICA8Y2lyY2xlIGZpbGw9InJnYigxNjgsMjI5LDExNCkiIGN4PSI4NyIgY3k9IjE3NCIgcj0iNTAiICBvcGFjaXR5PSIuNiI+PC9jaXJjbGU+DQogICAgICAgICAgICAgICAgPHRleHQgeD0iNTAiIHk9IjUwIiBmb250LXNpemU9IjUwIiB0ZXh0LWNvcHk9ImZhc3QiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHRleHQtcmlnaHRzPSJhZG1pbiIgYWxpZ25tZW50LWJhc2VsaW5lPSJjZW50cmFsIiBmb250LWZhbWlseT0iJ1BpbmdGYW5nIFNDJywnTWljcm9zb2Z0IFlhaGVpJyI+QzwvdGV4dD48L3N2Zz4=',
        title: 'ChatPlugin.top',
        desc: 'ChatPlugin.top',
        link: 'https://www.naviai.cn/tools/chatplugin_top'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.warp.dev.png',
        title: 'Warp AI',
        desc: 'Warp AI是一个完全将人工智能与您的终端集成在一起的工具，允许与终端输入和输出进行交互。它还包括一个AI命令搜索功能，根据自然语言输入建议命令。在测试期间，每个用户每天可以免费使用100次。在接受和运行建议之前，可以获取有关命令的更多信息。',
        link: 'https://www.naviai.cn/tools/warp_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/neeva.com.png',
        title: 'NeevaAI',
        desc: 'NeevaAI是一个提供真实、实时的人工智能搜索的项目。它将人工智能技术与搜索引擎技术相结合，为用户提供快速、准确、最新的搜索结果，并且提供了信息来源。无论您是在寻找新闻、娱乐、健康、商业或其他信息，NeevaAI都能为您提供最好的搜索体验。',
        link: 'https://www.naviai.cn/tools/neevaai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/noluai.com.png',
        title: 'NOLU',
        desc: '这是一个聊天机器人网站。',
        link: 'https://www.naviai.cn/tools/nolu'
      },
      {
        icon: 'https://api.iowen.cn/favicon/neon.ai.png',
        title: 'Neon AI',
        desc: 'Neon AI是一个先进的语音应用程序开发平台，它集成了先进的人工智能和自然语言理解技术。它类似于Amazon Alexa、Google Home、Apple Siri和Microsoft Cortana等语音助手，但是它是一个免费的开源软件。此外，他们还在他们的网站上列出了适用于Mycroft Mark II的AI操作系统。使用Neon AI，您可以创建最先进的语音应用程序。',
        link: 'https://www.naviai.cn/tools/neon_ai'
      }
    ]
  },
  {
    title: 'AI写作与文本',
    items: [
      {
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPg0KICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9InJnYigyMjksMTc1LDEzNykiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPSJyZ2IoMCwwLDApIiBjeD0iMTMiIGN5PSI2LjUiIHI9IjYwIiAgb3BhY2l0eT0iLjQiPjwvY2lyY2xlPg0KICAgICAgICAgICAgICAgIDxjaXJjbGUgZmlsbD0icmdiKDIxMCwyMjksMTE0KSIgY3g9IjY1IiBjeT0iMTMwIiByPSI1MCIgIG9wYWNpdHk9Ii42Ij48L2NpcmNsZT4NCiAgICAgICAgICAgICAgICA8dGV4dCB4PSI1MCIgeT0iNTAiIGZvbnQtc2l6ZT0iNTAiIHRleHQtY29weT0iZmFzdCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgdGV4dC1yaWdodHM9ImFkbWluIiBhbGlnbm1lbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGZvbnQtZmFtaWx5PSInUGluZ0ZhbmcgU0MnLCdNaWNyb3NvZnQgWWFoZWknIj5BPC90ZXh0Pjwvc3ZnPg==',
        title: 'AI论文出稿',
        desc: '免费论文查重_论文降重_论文检测-科学降重',
        link: 'https://www.naviai.cn/tools/ai_lun_wen_chu_gao'
      },
      {
        icon: 'https://api.iowen.cn/favicon/writegpt.ai.png',
        title: 'WriteGPT',
        desc: 'WriteGPT是一个能够让专业人士变得超凡的项目。通过使用无缝键盘热键访问WriteGPT，克服不良的浏览习惯。此外，我们还能够快速地处理工程问题，有效地阅读、写作、重写、回复电子邮件，编写代码和研究任何内容。',
        link: 'https://www.naviai.cn/tools/writegpt'
      },
      {
        icon: 'https://api.iowen.cn/favicon/junia.ai.png',
        title: 'Junia.AI',
        desc: 'Junia是一款最佳的人工智能写作工具，可以创建高质量的内容和图片。它具有批量内容生成、多功能模板、文章编辑器和易于导出等功能，可以轻松提高文章质量，吸引更多的流量和转化。',
        link: 'https://www.naviai.cn/tools/junia_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/platform.openai.com.png',
        title: 'GPT3 Playground',
        desc: 'GPT3 Playground是一个非常有趣的项目，它可以根据你提供的指令或选择的预设，自动回应一个完整的句子，尽可能地与你提供的上下文或模式匹配。你可以通过更改模型来控制API的响应，以获得更好的结果。这个项目非常紧凑，让人感到非常有趣和好玩。',
        link: 'https://www.naviai.cn/tools/gpt3_playground'
      },
      {
        icon: 'https://api.iowen.cn/favicon/on-page.ai.png',
        title: 'On-Page.ai',
        desc: '这是一款AI写作与检测工具，具备链接建设、内容编辑等功能。',
        link: 'https://www.naviai.cn/tools/on-page_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.getmagical.com.png',
        title: 'Magical AI',
        desc: 'Magical AI是一款免费的AI写作助手和提高生产力的应用',
        link: 'https://www.naviai.cn/tools/magical_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/prompt.noonshot.com.png',
        title: 'MidJourney Prompt Helper',
        desc: 'MidJourney Prompt Helper是一个开源工具，可以帮助人们更好地理解和应对中途提示，让你的写作更加流畅自然。',
        link: 'https://www.naviai.cn/tools/midjourney_prompt_helper'
      },
      {
        icon: 'https://api.iowen.cn/favicon/paperwizard.ai.png',
        title: 'Paper Wizard',
        desc: 'Paper Wizard是一个提供AI生成论文和文章引用的网站',
        link: 'https://www.naviai.cn/tools/paper_wizard'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.tryarvin.com.png',
        title: 'Arvin',
        desc: 'Arvin是一个全能的AI写作工具，能够帮助你节省时间和精力，让你的文本更加专业、引人注目。',
        link: 'https://www.naviai.cn/tools/arvin'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.novelflow.ai.png',
        title: 'NovelFlow AI',
        desc: 'NovelFlow.ai是一个使用人工智能自动生成小说初稿的平台。通过一系列问题生成小说的初步大纲和草稿。告别写作障碍，轻松完成小说创作。',
        link: 'https://www.naviai.cn/tools/novelflow_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/chatgpt4google.com.png',
        title: 'ChatGPT for Google',
        desc: 'ChatGPT for Google是一款免费的浏览器扩展程序，可以将ChatGPT响应与普通搜索引擎结果一起显示，增强搜索引擎的功能。它支持Google、Baidu、Bing、DuckDuckGo、Brave、Yahoo、Naver、Yandex、Kagi和Searx等搜索引擎。用户需要拥有ChatGPT帐户才能使用此扩展，而创建帐户是免费的。',
        link: 'https://www.naviai.cn/tools/chatgpt_for_google'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.frase.io.png',
        title: 'Frase',
        desc: 'Frase是一款提供人工智能写作工具的网站，包括文案、总结、释义和广告。',
        link: 'https://www.naviai.cn/tools/frase'
      },
      {
        icon: 'https://api.iowen.cn/favicon/octie.ai.png',
        title: 'Octie.ai',
        desc: 'Octie.ai是一款AI写作工具，可用于编写电子邮件、产品描述等。',
        link: 'https://www.naviai.cn/tools/octie_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/promptable.ai.png',
        title: 'Promptable',
        desc: 'Promptable是一个高级工具和功能的平台，可以简化GPT-3提示工程流程。您可以组织您的提示，跟踪更改，评估和部署您的提示。此外，还有一个社区与之相关联。通过Promptable，您可以轻松地管理您的GPT-3提示，提高工作效率。',
        link: 'https://www.naviai.cn/tools/promptable'
      },
      {
        icon: 'https://api.iowen.cn/favicon/apps.apple.com.png',
        title: 'Jester AI - Caption Writer',
        desc: 'Jester AI Caption Writer是一款AI写作助手App，可帮助用户在iPhone、iPad和iPod Touch设备上生成标题、字幕和标语。',
        link: 'https://www.naviai.cn/tools/jester_ai_-_caption_writer'
      },
      {
        icon: 'https://api.iowen.cn/favicon/plotprompts.com.png',
        title: 'PlotPrompts',
        desc: 'PlotPrompts是一个提供AI生成的小说情节和角色的网站',
        link: 'https://www.naviai.cn/tools/plotprompts'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.helloscribe.ai.png',
        title: 'HelloScribe',
        desc: 'HelloScribe是专为公关和营销专业人员打造的AI工具包，提供创造新鲜想法，创作惊人内容，提升您的工作水平的工具。',
        link: 'https://www.naviai.cn/tools/helloscribe'
      },
      {
        icon: 'https://api.iowen.cn/favicon/wisio.app.png',
        title: 'Wisio',
        desc: 'Wisio是一个基于人工智能技术的科学写作平台，它能够为用户提供个性化的文本建议，将任何语言翻译成科学英语，并能够即时搜索和引用最新的研究成果。通过Wisio，用户可以更加高效地进行科学写作，提高写作质量和效率。',
        link: 'https://www.naviai.cn/tools/wisio'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.botsheets.com.png',
        title: 'Botsheets',
        desc: 'Botsheets是一个聊天数据提取和自动化工具，它能帮助用户通过一些简单的步骤，将聊天数据自动提取到Google Sheets中。',
        link: 'https://www.naviai.cn/tools/botsheets'
      },
      {
        icon: 'https://api.iowen.cn/favicon/quickpenai.com.png',
        title: 'QuickPenAI',
        desc: 'QuickPenAI是一款能帮助你生成独特、优化SEO的内容的AI助手。无论是博客、广告、电子邮件还是网站，QuickPenAI都能帮助你10倍快速地生成内容。现在就开始尝试我们的7天免费试用吧！',
        link: 'https://www.naviai.cn/tools/quickpenai'
      }
    ]
  },
  {
    title: 'AI图像与设计',
    items: [
      {
        icon: 'https://api.iowen.cn/favicon/www.midjourney.com.png',
        title: 'Midjourney',
        desc: 'Midjourney是一个探索新媒体以扩展人类想象力的人工智能实验室。',
        link: 'https://www.naviai.cn/tools/midjourney'
      },
      {
        icon: 'https://api.iowen.cn/favicon/stability.ai.png',
        title: 'Stable Diffusion',
        desc: 'Stable Diffusion是一个2022年发布的深度学习文本到图像模型，主要用于生成基于文本描述的详细图像，为图像生成和处理提供了更多的可能性。',
        link: 'https://www.naviai.cn/tools/stable_diffusion'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.aipicasso.app.png',
        title: 'AI Picasso',
        desc: 'AI Picasso 是一款使用人工智能技术来创造艺术品的网站。',
        link: 'https://www.naviai.cn/tools/ai_picasso'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.movio.la.png',
        title: 'Movio',
        desc: 'Movio是一款顶级的合成媒体工具，它可以将你的文字转化为视频，无需支付代言人费用',
        link: 'https://www.naviai.cn/tools/movio'
      },
      {
        icon: 'https://api.iowen.cn/favicon/lucidpic.com.png',
        title: 'Lucidpic',
        desc: 'Lucidpic是一个AI照片工作室，可以在几秒钟内生成高质量的虚拟人物库存照片。',
        link: 'https://www.naviai.cn/tools/lucidpic'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.bing.com.png',
        title: 'Bing Image Creator',
        desc: 'Bing Image Creator是一个AI图像工具，可以通过对话或访问网页页面创建图片和艺术画。',
        link: 'https://www.naviai.cn/tools/bing_image_creator'
      },
      {
        icon: 'https://api.iowen.cn/favicon/avatarify.art.png',
        title: 'Avatarify',
        desc: 'Avatarify 是一个 AI 个性化头像生成器，可以通过上传自拍照片，选择提示或自己创作提示，等待处理完成来创建个性化头像。由于 AI 模型需要昂贵的硬件来快速准确地处理大量数据，因此这项服务是收费的。Avatarify 的价格为 5 美元，可提供 20 个头像，并附带 1 个自定义训练模型和 20 张高清图像生成。该网站还包括关于我们、联系我们、隐私政策、退款和结算、条款和条件以及常见问题解答等页面的链接。',
        link: 'https://www.naviai.cn/tools/avatarify'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.booth.ai.png',
        title: 'Booth.AI',
        desc: 'Booth.AI是一个利用人工智能快速生成高质量产品图像的网站。只需几个步骤，通过AI快速、廉价、高质量地生成专业级产品照片，无需实物样品。',
        link: 'https://www.naviai.cn/tools/booth_ai-2'
      },
      {
        icon: 'https://api.iowen.cn/favicon/pixian.ai.png',
        title: 'Pixian',
        desc: 'Pixian.AI 是一个帮助用户从图像中删除背景的网站。它是免费、高清，无需注册。',
        link: 'https://www.naviai.cn/tools/pixian'
      },
      {
        icon: 'https://api.iowen.cn/favicon/drawthings.ai.png',
        title: 'Draw Things',
        desc: 'Draw Things是一款AI辅助图像生成工具，可帮助用户在几分钟内创建他们心目中的图像。',
        link: 'https://www.naviai.cn/tools/draw_things'
      },
      {
        icon: 'https://api.iowen.cn/favicon/maskr.ai.png',
        title: 'Maskr.AI',
        desc: 'Maskr.AI是一个使用人工智能生成与名人合影的网站。',
        link: 'https://www.naviai.cn/tools/maskr_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/clipdrop.co.png',
        title: 'Relight',
        desc: 'ClipDrop是一个AI图像工具网站，提供多种工具来增强图像和创建惊人的视觉效果，包括Relight、Cleanup、Image upscaler、Remove background、Replace background、Stable Diffusion及Text remover等。网站提供API密钥以在任何地方集成Clipdrop Relight API，并提供联盟计划、支持、法律、隐私、使用条款等内容。网站有超过1500万用户，处理超过1亿张图片，曾在Product Hunt上被评为第五名的产品。',
        link: 'https://www.naviai.cn/tools/relight'
      },
      {
        icon: 'https://api.iowen.cn/favicon/photor.io.png',
        title: 'Photor AI',
        desc: 'Photor AI是一个利用先进的图像识别和机器学习技术的工具，可以分析和选择最适合在LinkedIn、社交媒体和约会应用程序等平台上使用的专业或个人照片。它可以帮助你展示最好的自己。',
        link: 'https://www.naviai.cn/tools/photor_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.kaiber.ai.png',
        title: 'Kaiber',
        desc: 'Kaiber是一个AI创意生成工具的网站，提供视频生成引擎，免费使用。',
        link: 'https://www.naviai.cn/tools/kaiber'
      },
      {
        icon: 'https://api.iowen.cn/favicon/prompthero.com.png',
        title: 'PromptHero',
        desc: 'PromptHero是一个AI艺术生成服务网站，提供DALL-E、Stable Diffusion、Midjourney等模型生成的数百万张艺术图片的快速搜索和浏览。',
        link: 'https://www.naviai.cn/tools/prompthero'
      },
      {
        icon: 'https://api.iowen.cn/favicon/photofix.io.png',
        title: 'PhotoFix',
        desc: 'PhotoFix是一家使用AI从照片中删除不需要的人、动物或物品的照片编辑网站。',
        link: 'https://www.naviai.cn/tools/photofix'
      },
      {
        icon: 'https://api.iowen.cn/favicon/portrait.vana.com.png',
        title: 'Vana Portrait',
        desc: 'Vana Portrait是一个生成艺术工作室，可以为你创造无限风格的自画像。',
        link: 'https://www.naviai.cn/tools/vana_portrait'
      },
      {
        icon: 'https://api.iowen.cn/favicon/extrapolate.app.png',
        title: 'Extrapolate',
        desc: 'Extrapolate是一个免费的AI人脸变老预测应用，可以上传照片预测用户未来的样子，非常有趣。',
        link: 'https://www.naviai.cn/tools/extrapolate'
      },
      {
        icon: 'https://api.iowen.cn/favicon/predis.ai.png',
        title: 'Predis',
        desc: 'Predis是一个基于人工智能的内容生成器，能够在几秒钟内帮助用户创建令人惊叹的社交媒体帖子。使用Predis，用户可以轻松地创建出引人注目的社交媒体内容，提高品牌的曝光度和影响力。',
        link: 'https://www.naviai.cn/tools/predis'
      },
      {
        icon: 'https://api.iowen.cn/favicon/promptomania.com.png',
        title: 'promptoMANIA',
        desc: 'PromptoMANIA是一款AI艺术社区，提供在线AI艺术生成器',
        link: 'https://www.naviai.cn/tools/promptomania'
      }
    ]
  },
  {
    title: 'AI商业与管理',
    items: [
      {
        icon: 'https://api.iowen.cn/favicon/qatalog.com.png',
        title: 'Qatalog',
        desc: 'Qatalog是一个定制化的工作操作系统，它是一个项目管理/协作人工智能工具，可以无缝地管理人员、运营和知识。',
        link: 'https://www.naviai.cn/tools/qatalog'
      },
      {
        icon: 'https://api.iowen.cn/favicon/ortto.com.png',
        title: 'Ortto',
        desc: 'Ortto是一款人工智能营销工具，能帮助你撰写高效的电子邮件主题行和吸引人的短信和电子邮件内容。',
        link: 'https://www.naviai.cn/tools/ortto'
      },
      {
        icon: 'https://api.iowen.cn/favicon/procys.com.png',
        title: 'Procys',
        desc: 'Procys是一个自动化的数据提取项目，可以帮助您自动从发票中提取数据，省去手动处理文件的时间和精力。通过智能自动化的流程，Procys可以快速、准确地处理文件，让您的工作更加高效。无需手动输入和整理数据，Procys可以帮助您轻松地管理您的发票和账单。',
        link: 'https://www.naviai.cn/tools/procys'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.browse.ai.png',
        title: 'Browse AI',
        desc: 'Browse AI是一个网站，允许用户从任何网站上爬取和监控数据，无需编码。它提供了可预先构建的机器人，可以在Indie Hackers和Google Maps搜索结果上设置监视器。网站可扩展，能够快速提取数千个URL的数据。机器人可以处理像数字页、加载更多和无限滚动之类的分页。网站还提供了一个仪表板供用户登录并访问其功能。',
        link: 'https://www.naviai.cn/tools/browse_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.kadoa.com.png',
        title: 'Kadoa',
        desc: 'Kadoa是一个使用生成式AI创建网络爬虫并自动提取所需数据的工具。',
        link: 'https://www.naviai.cn/tools/kadoa'
      },
      {
        icon: 'https://api.iowen.cn/favicon/outboundly.app.png',
        title: 'Outboundly',
        desc: 'Outboundly是一款谷歌浏览器插件，用于个性化的冷外展。',
        link: 'https://www.naviai.cn/tools/outboundly'
      },
      {
        icon: 'https://api.iowen.cn/favicon/iquit.ai.png',
        title: 'IQuit.ai',
        desc: 'IQuit.ai是一个生成辞职信的项目。它可以帮助你快速生成一份辞职信，让你不必费心思去想如何表达自己的离职原因和感受。此外，该项目还提供了多个辞职信的示例，让你可以参考和借鉴。使用IQuit.ai，你可以轻松地完成辞职信的撰写，让你的离职变得更加简单和顺利。',
        link: 'https://www.naviai.cn/tools/iquit_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/giftastic.ai.png',
        title: 'Giftastic.ai',
        desc: 'Giftastic.ai是一个个性化礼物推荐引擎，为你提供最佳的礼物选择。',
        link: 'https://www.naviai.cn/tools/giftastic_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/proposalgenie.ai.png',
        title: 'ProposalGenie',
        desc: 'ProposalGenie是使用AI为自由职业者网站（如Upwork）创建定制提案的SaaS。它可以帮助用户在几分钟内生成专业的提案，节省时间和精力。网站还提供了登录页面供用户访问其帐户。此外，ProposalGenie有一个Twitter帐户，他们在其中分享有关其基于AI技术的平台的更新和新闻。',
        link: 'https://www.naviai.cn/tools/proposalgenie'
      },
      {
        icon: 'https://api.iowen.cn/favicon/poly.ai.png',
        title: 'Poly ai',
        desc: 'Poly ai是一个超级人工智能语音助手项目，可以为用户提供高效、便捷的电话服务体验，通过人工智能技术为用户提供快速、准确的电话接听和处理服务，让用户的生活更加轻松、自由。',
        link: 'https://www.naviai.cn/tools/poly_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/instantly.ai.png',
        title: 'Instantly',
        desc: 'Instantly是一个能够帮助你更快地回复邮件、提高收入的项目。通过无限的邮件发送账户、无限的预热时间和智能AI，你可以轻松扩大你的营销活动规模。无论你是在做什么，Instantly都能够帮助你更高效地完成任务，让你的工作效率更高，收益更大。',
        link: 'https://www.naviai.cn/tools/instantly'
      },
      {
        icon: 'https://api.iowen.cn/favicon/qualifyed.ai.png',
        title: 'Qualifyed.ai',
        desc: 'Qualifyed.ai是一款媒体购买平台，旨在促进销售。该平台使用AI算法进行自动化的潜在客户评分和筛选，并基于销售概率对潜在客户进行验证和评分。此外，它还能够在Facebook广告和其他媒体购买平台上创建类似受众。Qualifyed.ai提供业界领先的机器学习系统，主动地定位潜在客户，提高转化率。',
        link: 'https://www.naviai.cn/tools/qualifyed_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/reetail.store.png',
        title: 'Reetail',
        desc: 'Reetail Store是一个在线销售产品的平台。它支持以135种货币销售订阅、实体和数字产品。它的价格计划从每个商店每月12美元开始。Reetail Store还为产品提供无限的人工智能营销想法和人工智能广告。有20%的早鸟折扣可用。此外，在dealspotr.com上有可用的优惠代码，最高可享受50%的折扣。',
        link: 'https://www.naviai.cn/tools/reetail'
      },
      {
        icon: 'https://api.iowen.cn/favicon/excelformularizer.com.png',
        title: 'Excel Formularizer',
        desc: 'Excel Formularizer是一个AI平台，可以将文本指令转换成Excel和Google Sheets公式。它是一个Excel AI公式生成器，可以自动生成公式。Excel Formulator可以用普通英语解释任何现有的Excel/Sheets/Airtable公式。它还提供了一系列功能，如登录、定价信息和支持，并可免费使用，无使用限制或信用卡要求。',
        link: 'https://www.naviai.cn/tools/excel_formularizer'
      },
      {
        icon: 'https://api.iowen.cn/favicon/qakaa.com.png',
        title: 'Qakaa',
        desc: 'Qakaa是一个现代化的市场，用于交易定制的AI创建内容。',
        link: 'https://www.naviai.cn/tools/qakaa'
      },
      {
        icon: 'https://api.iowen.cn/favicon/operand.ai.png',
        title: 'Operand AI',
        desc: 'Operand AI是一个专为现代、以产品为中心的团队打造的项目，它通过搜索团队成员使用的工作应用程序，为谷歌添加额外的搜索结果。它可以与Linear、Github、Slack、Discord和Notion等软件集成，帮助团队更高效地协作和管理工作。',
        link: 'https://www.naviai.cn/tools/operand_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/noty.ai.png',
        title: 'Noty.ai',
        desc: 'Noty.ai是一个AI会议助手，可以将Google Meet转化为行动、任务和后续跟进。使用ChatGPT-powered AI将会议转录为文字稿、行动事项、摘要和后续跟进，可以与Gmail、Google日历、Google Meet、Zoom和Google Docs集成。已有超过10,000个用户使用，还有LinkedIn页面。收费，提供试用，$14.99/mo。',
        link: 'https://www.naviai.cn/tools/noty_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/flowshot.ai.png',
        title: 'Flowshot',
        desc: 'Flowshot是一个全能的AI工具包，可以与20亿Google Sheets用户的工作流程集成，帮助用户更高效地完成任务，提高工作效率。',
        link: 'https://www.naviai.cn/tools/flowshot'
      },
      {
        icon: 'https://api.iowen.cn/favicon/pipl.ai.png',
        title: 'Pipl.ai',
        desc: 'Pipl.ai是一个提供数字信任服务和深度连接的公司。Pipl.ai是一个工具，提供冷邮件自动化，电子邮件验证，数据清洗，AI驱动的序列和模板编写等功能。此外，Pipl AI还可以为您的每个联系人定制个性化和引人入胜的图像、GIF和视频。该工具适用于初创企业、代理商和潜在客户生成公司。',
        link: 'https://www.naviai.cn/tools/pipl_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.monitaur.ai.png',
        title: 'Monitaur',
        desc: 'Monitaur是一家AI商业管理工具公司，提供一站式AI生命周期管理解决方案。',
        link: 'https://www.naviai.cn/tools/monitaur'
      }
    ]
  },
  {
    title: 'AI教育与学习',
    items: [
      {
        icon: 'https://api.iowen.cn/favicon/paperlist.io.png',
        title: 'PaperList',
        desc: 'PaperList是一个分享和阅读研究论文的网站。用户可以通过注册登录来使用该网站，方便地阅读和分享研究论文。',
        link: 'https://www.naviai.cn/tools/paperlist'
      },
      {
        icon: 'https://api.iowen.cn/favicon/nolej.io.png',
        title: 'Nolej',
        desc: 'Nolej是一个学习项目，它可以帮助你上传任何你想学习的东西，自动生成摘要、闪卡和测验等多种学习方式。',
        link: 'https://www.naviai.cn/tools/nolej'
      },
      {
        icon: 'https://api.iowen.cn/favicon/praxylabs.com.png',
        title: 'Praxy AI',
        desc: 'Praxy AI是面向学生的AI助手工具，用于提高学生的学习生产力。',
        link: 'https://www.naviai.cn/tools/praxy_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/movie-and-book-recommender.vercel.app.png',
        title: 'Movie & Book Recommender',
        desc: '这是一个提供电影和书籍推荐的工具。',
        link: 'https://www.naviai.cn/tools/movie_book_recommender'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.heyscience.ai.png',
        title: 'HeyScience',
        desc: 'HeyScience是一款帮助研究人员分析科学研究论文的工具。',
        link: 'https://www.naviai.cn/tools/heyscience'
      },
      {
        icon: 'https://api.iowen.cn/favicon/tome.app.png',
        title: 'Tome',
        desc: 'Tome是一个AI驱动的故事叙述网站，提供iOS应用程序帮助用户讲述引人入胜的故事，可在不同设备间无缝同步。Tome适用于任何想要讲述故事的人，包括那些领导大型公司、开始个人业务或为自己创造内容的人。网站的beta版本Tome for Edu，使解释复杂概念变得更加容易，配有叙述和交互式嵌入式内容。',
        link: 'https://www.naviai.cn/tools/tome'
      },
      {
        icon: 'https://api.iowen.cn/favicon/praktika.ai.png',
        title: 'Praktika ai',
        desc: 'Praktika ai - 沉浸式语言学习应用程序',
        link: 'https://www.naviai.cn/tools/praktika_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/interviewprep-ai.com.png',
        title: 'Interview Prep AI',
        desc: '这是一个针对求职者的人工智能面试培训网站',
        link: 'https://www.naviai.cn/tools/interview_prep_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/oscarstories.com.png',
        title: 'Oscar - bedtime story generator',
        desc: 'Oscar是一个床头故事生成器，它利用人工智能技术帮助父母为孩子们生成个性化的睡前故事。这个应用程序采用了最先进的AI技术，创造出独特而引人入胜的故事，完全根据用户的喜好量身定制。',
        link: 'https://www.naviai.cn/tools/oscar_-_bedtime_story_generator'
      },
      {
        icon: 'https://api.iowen.cn/favicon/soofy.io.png',
        title: 'Soofy',
        desc: 'Soofy是一款AI语言学习应用程序，帮助用户掌握新语言，提供了创新的学习方法，注重实践和真实场景，提供了发音、写作和对话技能的提高功能。',
        link: 'https://www.naviai.cn/tools/soofy'
      },
      {
        icon: 'https://api.iowen.cn/favicon/prompthub.nl.png',
        title: 'Prompthub',
        desc: 'Prompthub是一个提供各种用途的有用和高质量提示的网站，例如工作流自动化、视频脚本生成、播客主题生成和电子邮件标题转换。他们还为学生和学习者提供考试准备提示。PromptHub正在招聘和寻找热情的开发人员和终端用户，引领LLM革命。',
        link: 'https://www.naviai.cn/tools/prompthub'
      },
      {
        icon: 'https://api.iowen.cn/favicon/apps.apple.com.png',
        title: 'ProjectAi',
        desc: 'ProjectAi是一个学习与研究类的网站，提供学生有用的工具和资源来帮助他们提高学习和研究的能力。',
        link: 'https://www.naviai.cn/tools/projectai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.yarnit.app.png',
        title: 'Yarnit',
        desc: 'Yarnit是一个数字故事/内容创作项目，利用故事讲述和多媒体传播的最佳实践，减少数字故事/内容创作的时间、成本和复杂性，通过基于人工智能的指导服务，帮助用户更轻松地创作出高质量的数字故事和内容。',
        link: 'https://www.naviai.cn/tools/yarnit'
      },
      {
        icon: 'https://api.iowen.cn/favicon/heymindai.co.png',
        title: 'HeyMind',
        desc: 'HeyMind是一款移动应用程序，让用户获得历史名人的智慧和教诲，特别是老子等哲学家，增进对生活、心灵和周围世界的认识。',
        link: 'https://www.naviai.cn/tools/heymind'
      },
      {
        icon: 'https://api.iowen.cn/favicon/lorro.io.png',
        title: 'Lorro',
        desc: 'Lorro网站是一个使用GPT驱动的AI机器人练习说英语的研究教育平台。',
        link: 'https://www.naviai.cn/tools/lorro'
      },
      {
        icon: 'https://api.iowen.cn/favicon/hebrewbible.app.png',
        title: 'Rabbi AI',
        desc: 'Rabbi AI是一个基于犹太教经文的在线聊天助手，可提供有关犹太教的即时答案。',
        link: 'https://www.naviai.cn/tools/rabbi_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.wisdolia.com.png',
        title: 'Wisdolia',
        desc: 'Wisdolia是一个AI研究教育平台，为任何文章/PDF生成抽认卡，以便更轻松地进行主动学习。',
        link: 'https://www.naviai.cn/tools/wisdolia'
      },
      {
        icon: 'https://api.iowen.cn/favicon/puzzlelabs.ai.png',
        title: 'Puzzle Labs',
        desc: 'Puzzle Labs是一个用于创建词汇表的工具网站，旨在帮助用户更好地理解复杂信息。',
        link: 'https://www.naviai.cn/tools/puzzle_labs'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.prepai.in.png',
        title: 'PrepAI',
        desc: 'PrepAI是一个基于人工智能的问题生成器，可以生成定制的试卷、测验、评估、小游戏等。使用PrepAI，您可以轻松创建多种问题格式，是创建引人入胜和具有挑战性的评估的绝佳资源。无论您是教育工作者、内容创作者还是企业主，PrepAI都可以帮助您创建有效、引人入胜和信息丰富的评估和测验。',
        link: 'https://www.naviai.cn/tools/prepai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/iris.ai.png',
        title: 'Iris.ai',
        desc: 'Iris.ai是一个全面的研究处理平台，提供智能搜索和广泛的智能过滤器、阅读列表分析、自动生成摘要、自主提取和系统化数据等功能。',
        link: 'https://www.naviai.cn/tools/iris_ai'
      }
    ]
  },
  {
    title: 'AI音频与视频',
    items: [
      {
        icon: 'https://api.iowen.cn/favicon/pod-genie.com.png',
        title: 'Pod Genie',
        desc: 'Pod Genie是一个AI播客应用，提供定制个性化新闻播客和订阅RSS提要服务。',
        link: 'https://www.naviai.cn/tools/pod_genie'
      },
      {
        icon: 'https://api.iowen.cn/favicon/dumme.com.png',
        title: 'Dumme',
        desc: 'Dumme是一个短视频生成和上传网站，提供字幕、标题和描述功能。',
        link: 'https://www.naviai.cn/tools/dumme'
      },
      {
        icon: 'https://api.iowen.cn/favicon/miao.wondershare.cn.png',
        title: '万兴喵影',
        desc: '万兴喵影2023是一款易上手、功能强大的国产视频剪辑软件，支持一键导入SRT字幕，界面简洁时尚，拥有灵活的时间轴剪辑功能和丰富的资源特效。',
        link: 'https://www.naviai.cn/tools/wan_xing_miao_ying'
      },
      {
        icon: 'https://api.iowen.cn/favicon/elai.io.png',
        title: 'Elai io',
        desc: 'Elai.io是一个自动化的AI视频生成平台，允许用户仅使用文本创建定制的AI视频。该平台提供无缝视频生成，无需使用摄像机、工作室或绿屏。Elai.io提供免费试用，并是领先的文本到视频平台。该公司为私人持有，专门从事电子学习、SaaS和视频演示。',
        link: 'https://www.naviai.cn/tools/elai_io'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.listnr.tech.png',
        title: 'Listnr',
        desc: 'Listnr是一个提供AI语音生成器和文本转语音服务的网站，拥有超过900种语言和方言的声音库，用户可以使用先进的文本转语音编辑器轻松生成逼真的AI语音。网站还提供收听广播、播客、音乐和新闻等服务，用户可以下载名为LiSTNR的应用程序，并登录账户进行使用。',
        link: 'https://www.naviai.cn/tools/listnr'
      },
      {
        icon: 'https://api.iowen.cn/favicon/openai.com.png',
        title: 'Whisper (OpenAI)',
        desc: '这是一个OpenAI的Whisper项目网站，该项目可以将语音或视频翻译成文本，并进行语言翻译。',
        link: 'https://www.naviai.cn/tools/whisper_openai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/play.ad-auris.com.png',
        title: 'Ad Auris',
        desc: 'Ad Auris是一个让你在Spotify、Apple Podcasts和Google Podcasts上创建文章播放列表的工具',
        link: 'https://www.naviai.cn/tools/ad_auris'
      },
      {
        icon: 'https://api.iowen.cn/favicon/openai.com.png',
        title: 'Musenet (OpenAI)',
        desc: 'Musenet (OpenAI)是一个基于深度神经网络的生成模型，可生成长度为4分钟，包含10种不同乐器和多种风格的音乐作品。该模型使用了类似于GPT-2的无监督学习方法，通过学习预测数十万个MIDI文件中的下一个标记，从而发现了和声、节奏和风格的模式。',
        link: 'https://www.naviai.cn/tools/musenet_openai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/hourone.ai.png',
        title: 'Hourone',
        desc: 'Hourone是一个AI视频制作项目，能将文字转化为视频，使学习和发展更加有趣和有效',
        link: 'https://www.naviai.cn/tools/hourone'
      },
      {
        icon: 'https://api.iowen.cn/favicon/pictory.ai.png',
        title: 'Pictory',
        desc: 'Pictory是一个视频营销工具，可以将长篇内容转换成短小精悍的品牌视频，让您的品牌更具吸引力。',
        link: 'https://www.naviai.cn/tools/pictory'
      },
      {
        icon: 'https://api.iowen.cn/favicon/muse.ai.png',
        title: 'Muse.ai',
        desc: 'Muse.ai是一款下一代的无广告视频托管平台，包括功能强大的嵌入式视频播放器和最先进的视频搜索。',
        link: 'https://www.naviai.cn/tools/muse_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/podcast.ai.png',
        title: 'Podcast',
        desc: 'Podcast.ai是一个完全由人工智能生成的播客，听众可以为未来的剧集提供主题或嘉宾建议。Podcastle是一个面向专业和业余播客制作者的基于AI的音频创作平台，提供易于使用的工具来创建、编辑和分发高质量的播客。它还可以通过在转录文本中进行更改来编辑音频轨道。',
        link: 'https://www.naviai.cn/tools/podcast'
      },
      {
        icon: 'https://api.iowen.cn/favicon/lovo.ai.png',
        title: 'Lovo',
        desc: 'LOVO AI是一款AI语音生成器和文字转语音平台，可为创作者节省90%的时间和预算。它使用领先的AI技术提供优质的结果。随着语音AI发展的速度，可能性是无限的。LOVO AI总部位于加州伯克利，成立于2019年。它拥有11-50名员工，是一家私有的软件开发公司。',
        link: 'https://www.naviai.cn/tools/lovo'
      },
      {
        icon: 'https://api.iowen.cn/favicon/mubert.com.png',
        title: 'Mubert',
        desc: 'Mubert是一个提供AI生成音乐的网站，为应用和内容创作者提供免版税音乐生成服务。网站提供不同类型的用户订阅计划，每月可以生成不同数量的音轨。用户可以通过选择流派、心情和活动类型来生成音轨，并设置音轨的时长。Mubert还根据用户的制作需求提供定制音乐曲目。网站提供不同类型的音乐流派可供选择。',
        link: 'https://www.naviai.cn/tools/mubert'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.songtell.com.png',
        title: 'Songtell',
        desc: 'Songtell是一个利用AI生成的歌曲含义库来帮助用户理解歌词真正含义的网站。它拥有114,948个条目，并允许用户按艺术家名称排序。该网站还提供充值功能，用户可以购买积分以获得更多服务。',
        link: 'https://www.naviai.cn/tools/songtell'
      },
      {
        icon: 'https://api.iowen.cn/favicon/huggingface.co.png',
        title: 'YouWhisper',
        desc: 'YouWhisper是一款AI视频制作编辑应用程序',
        link: 'https://www.naviai.cn/tools/youwhisper'
      },
      {
        icon: 'https://api.iowen.cn/favicon/egp--timebolt.thrivecart.com.png',
        title: 'Timebolt',
        desc: 'Timebolt是一个视频编辑网站',
        link: 'https://www.naviai.cn/tools/timebolt'
      },
      {
        icon: 'https://api.iowen.cn/favicon/koe.ai.png',
        title: 'Koe Recast',
        desc: 'Koe Recast是一个将声音转换为不同风格的应用程序。使用AI转换您的声音。',
        link: 'https://www.naviai.cn/tools/koe_recast'
      },
      {
        icon: 'https://api.iowen.cn/favicon/myvocal.ai.png',
        title: 'MyVocal.ai',
        desc: 'MyVocal.ai提供语音同步和语音克隆服务的网站，用户可以免费在60秒内将其语音与热门音乐同步并克隆其语音。网站还有一个FAQ部分，回答了关于其服务的常见问题。',
        link: 'https://www.naviai.cn/tools/myvocal_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/huggingface.co.png',
        title: 'Whisper to Stable Diffusion',
        desc: 'Whisper to Stable Diffusion是一个Hugging Face Space，由fffiloni创建。它为文本处理提供机器学习应用程序、模型、数据集和工具。该网站提供了各种自然语言处理任务的解决方案，如机器翻译、文本摘要、问答和文本生成。',
        link: 'https://www.naviai.cn/tools/whisper_to_stable_diffusion'
      }
    ]
  },
  {
    title: 'AI开发与编程',
    items: [
      {
        icon: 'https://api.iowen.cn/favicon/openai.com.png',
        title: 'ChatGPT Plugins',
        desc: '这是一个关于ChatGPT plugins的网站简介。',
        link: 'https://www.naviai.cn/tools/chatgpt_plugins'
      },
      {
        icon: 'https://api.iowen.cn/favicon/meetmaya.world.png',
        title: 'Maya AI',
        desc: 'Maya AI是一个使用生成AI来回答任何数据问题的深度研究和战略机器人。',
        link: 'https://www.naviai.cn/tools/maya_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/marketplace.visualstudio.com.png',
        title: 'Code GPT',
        desc: 'Visual Studio Marketplace是一个提供Visual Studio、Azure DevOps Services、Azure DevOps Server和Visual Studio Code扩展的平台，用户可以通过网站发现、安装和订阅扩展，以创建所需的开发环境。网站还包括扩展市场，用户可以在其中添加语言、调试器和工具以支持其开发工作流程。',
        link: 'https://www.naviai.cn/tools/code_gpt'
      },
      {
        icon: 'https://api.iowen.cn/favicon/liner.ai.png',
        title: 'Liner.ai',
        desc: 'Liner.ai是一个免费的工具，可帮助您在几分钟内构建和部署机器学习应用程序。无需编码或机器学习专业知识。费用： Free',
        link: 'https://www.naviai.cn/tools/liner_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/picoapps.xyz.png',
        title: 'Pico',
        desc: 'Pico是一个基于GPT-4的“文本到应用”平台，允许用户使用简单的英语或其他语言构建简单的Web应用程序。它专为想要创建Web应用程序但不想编写代码的企业家、顾问和小企业主设计。Pico已经创建了超过4000个Pico，并提供免费试用。它与Zyro、Unbounce和B12等顶级AI网站构建商店竞争。Pico Apps在自己的网站和合作伙伴网站上销售中等购买量的商品，在竞争激烈的在线AI网站构建行业中处于领先地位。',
        link: 'https://www.naviai.cn/tools/pico'
      },
      {
        icon: 'https://api.iowen.cn/favicon/interaxai.com.png',
        title: 'WidgetsAI',
        desc: '这是一个AI开发编程工具网站，提供无代码AI小部件白标平台',
        link: 'https://www.naviai.cn/tools/widgetsai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/bito.ai.png',
        title: 'Bito AI',
        desc: 'Bito是一款AI工具，可帮助生成代码、单元测试和注释，提高代码性能。它可以安装在各种IDE、VS Code、Chrome扩展和CLI上。AI是基于OpenAI和ChatGPT构建的。该网站提供了用户的推荐，他们节省了时间，并发现Bito很有帮助。该网站强调数据隐私和安全，声明Bito从不存储、查看或复制代码，并在任何时候加密所有数据。有链接到定价、公司信息和资源。',
        link: 'https://www.naviai.cn/tools/bito_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.codemate.ai.png',
        title: 'CodeMate',
        desc: 'CodeMate是一家网站，利用AI在几秒钟内解释代码片段。它还提供了一个AI驱动的Web IDE和VS Code扩展。在YouTube上有一个演示视频展示了平台的功能。CodeMate被营销为“程序员的语法纠错器。”',
        link: 'https://www.naviai.cn/tools/codemate'
      },
      {
        icon: 'https://api.iowen.cn/favicon/lightning.ai.png',
        title: 'Lightning AI',
        desc: 'Lightning AI是一个全栈AI应用程序的项目，可以帮助您快速实现AI应用程序的开发，让您更专注于业务逻辑和创新。',
        link: 'https://www.naviai.cn/tools/lightning_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/crfm.stanford.edu.png',
        title: 'Alpaca羊驼（斯坦福最新模型）',
        desc: '这是一个名为斯坦福CRFM的网站，其中有一篇关于开源指令跟随模型Alpaca的博客文章。这个模型由一组研究人员开发，从LLaMA 7B模型的52000个指令跟随演示中进行微调。这个项目有一个Github存储库，其中包括用于微调模型和生成数据的代码和数据。此外，StanfordNLP还发布了一条推文，询问是否有人看到过羊驼，并提供了博客文章的链接。',
        link: 'https://www.naviai.cn/tools/alpaca_yang_tuo_si_tan_fu_zui_xin_mo_xing'
      },
      {
        icon: 'https://api.iowen.cn/favicon/github.com.png',
        title: 'ComfyUI',
        desc: 'ComfyUI是一个模块化的、优化的GUI，用于稳定的扩散。',
        link: 'https://www.naviai.cn/tools/comfyui'
      },
      {
        icon: 'https://api.iowen.cn/favicon/aigur.dev.png',
        title: 'Aigur',
        desc: 'Aigur是一个提供建立基于生成式人工智能的应用程序的平台。',
        link: 'https://www.naviai.cn/tools/aigur'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.obviously.ai.png',
        title: 'Obviously AI',
        desc: 'Obviously AI是一个无代码AI工具，可以在几分钟内将原始数据转换为预测模型。网站提供了AI和机器学习背后的原理和概念介绍，以及关于如何构建机器学习模型所需的数据结构和标签的教育视频。用户还可以构建高度准确的Auto ML和Time Series模型，并在网站上注册账户。',
        link: 'https://www.naviai.cn/tools/obviously_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/prisms.ai.png',
        title: 'Prisms AI',
        desc: 'Prisms AI是一个无代码平台，用于构建基于人工智能的应用程序。',
        link: 'https://www.naviai.cn/tools/prisms_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/petals.ml.png',
        title: 'Petals',
        desc: 'Petals是一个开源工具，用于协同运行大型语言模型，例如BLOOM-176B。',
        link: 'https://www.naviai.cn/tools/petals'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.convai.com.png',
        title: 'Convai',
        desc: 'Convai是一个提供语音识别、语言理解和生成、以及文本转语音等对话人工智能API的项目。',
        link: 'https://www.naviai.cn/tools/convai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/pliny.app.png',
        title: 'Pliny',
        desc: 'Pliny是一个将命令行转化为可共享的应用程序的工具，用户可以创建，共享和重新混合GPT-3应用程序。',
        link: 'https://www.naviai.cn/tools/pliny'
      },
      {
        icon: 'https://api.iowen.cn/favicon/openvoiceos.com.png',
        title: 'Open Voice OS',
        desc: 'Open Voice OS 是一个展示开源语音人工智能在各种设备上的强大能力的项目。',
        link: 'https://www.naviai.cn/tools/open_voice_os'
      },
      {
        icon: 'https://api.iowen.cn/favicon/qdrant.tech.png',
        title: 'Qdrant Vector Database',
        desc: 'Qdrant是一个开源的矢量数据库和矢量搜索引擎，提供方便的API服务。它可以将嵌入式向量或神经网络编码器转化为匹配、搜索、推荐等应用程序。该网站还有一个博客部分，介绍了矢量相似性搜索技术、度量学习以及您可以基于它们构建的项目。',
        link: 'https://www.naviai.cn/tools/qdrant_vector_database'
      },
      {
        icon: 'https://api.iowen.cn/favicon/promptitude.io.png',
        title: 'Promptitude.io',
        desc: 'Promptitude.io 是一个提供快速集成 GPT 到您的应用和工作流的简单方法的网站。您可以在一个地方开发、测试、管理和改进所有提示，并使用一个简单的 API 调用进行集成。该网站提供免费计划和演示。他们还有一个社区部分，包括书签、头脑风暴、代码、市场营销、销售、社交媒体、摘要、支持和翻译。',
        link: 'https://www.naviai.cn/tools/promptitude_io'
      }
    ]
  },
  {
    title: 'AI游戏与娱乐',
    items: [
      {
        icon: 'https://api.iowen.cn/favicon/apps.apple.com.png',
        title: 'StoryAI',
        desc: 'StoryAI是一个阅读AI生成故事的应用程序。',
        link: 'https://www.naviai.cn/tools/storyai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/latitude.io.png',
        title: 'latitude.io',
        desc: '该网站为AI游戏开发设计网站，提供AI生成游戏的相关服务。',
        link: 'https://www.naviai.cn/tools/latitude_io'
      },
      {
        icon: 'https://api.iowen.cn/favicon/korewa.ai.png',
        title: 'Korewa AI',
        desc: 'Korewa AI是一个为动漫爱好者设计的AI聊天平台，可以创建自己的AI动漫角色并与之交流。',
        link: 'https://www.naviai.cn/tools/korewa_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.playstrict.com.png',
        title: 'Playstrict',
        desc: 'Playstrict是一个游戏网站，提供各种类型的游戏，包括休闲游戏、角色扮演游戏、策略游戏等。',
        link: 'https://www.naviai.cn/tools/playstrict'
      },
      {
        icon: 'https://api.iowen.cn/favicon/ludo.ai.png',
        title: 'Ludo',
        desc: 'Ludo AI是一个基于AI的游戏开发平台，提供游戏研究和设计的辅助工具。',
        link: 'https://www.naviai.cn/tools/ludo'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.humanornot.ai.png',
        title: 'Human or Not?',
        desc: 'Human or Not?是一个社交图灵测试游戏，玩家可以和一个人或者一个AI聊两分钟，并且猜测是人还是机器。网站由AI21 Labs开发，提供早期访问代码和游戏应用',
        link: 'https://www.naviai.cn/tools/human_or_not'
      },
      {
        icon: 'https://api.iowen.cn/favicon/chessgpt.gducrash.com.png',
        title: 'ChessGPT',
        desc: 'ChessGPT是一个能让用户与ChatGPT下国际象棋的工具。',
        link: 'https://www.naviai.cn/tools/chessgpt'
      },
      {
        icon: 'https://api.iowen.cn/favicon/endlessvn.io.png',
        title: 'EndlessVN',
        desc: 'EndlessVN是一个AI故事游戏项目，游戏的素材均由AI生成，每次游戏体验都是独一无二的。',
        link: 'https://www.naviai.cn/tools/endlessvn'
      },
      {
        icon: 'https://api.iowen.cn/favicon/pixela.ai.png',
        title: 'Pixela AI',
        desc: 'Pixela AI是一个生成游戏纹理和图案的AI工具，旨在为游戏玩家和快速指南爱好者上传和共享纹理和图案。该工具使用稳定扩散算法生成高质量的纹理。它还有一个社区，用户可以分享和浏览由AI生成的艺术品和文本。此外，Pixela.ai还提供了AI角色引擎。',
        link: 'https://www.naviai.cn/tools/pixela_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/apps.apple.com.png',
        title: 'Pheon',
        desc: 'Pheon数字孪生-与真人数字化身聊天的应用',
        link: 'https://www.naviai.cn/tools/pheon'
      },
      {
        icon: 'https://api.iowen.cn/favicon/cards.langa.me.png',
        title: 'Langame card game',
        desc: 'Langame卡牌游戏网站',
        link: 'https://www.naviai.cn/tools/langame_card_game'
      },
      {
        icon: 'https://api.iowen.cn/favicon/beta.character.ai.png',
        title: 'Character AI',
        desc: 'Character.AI是一个网站，允许用户创建角色并使用人工智能技术与他们交谈。该网站提供了几个预先制作的角色，如名人和游戏角色，以及创建自定义角色的能力。用户可以与这些角色聊天，讨论各种主题，包括语言学习、历史和哲学。该网站还提供练习新语言、头脑风暴和玩游戏等功能。该网站告诫用户，角色说的一切都是虚构的，他们可能会偶尔说出冒犯性的话语。',
        link: 'https://www.naviai.cn/tools/character_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/charisma.ai.png',
        title: 'Charisma',
        desc: 'Charisma是一个插拔式的平台，用于创建具有可信度虚拟角色的互动故事。',
        link: 'https://www.naviai.cn/tools/charisma'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.scenario.gg.png',
        title: 'Scenario',
        desc: 'Scenario是一个AI生成游戏素材的项目，可以为你的游戏创造高质量、风格一致、专有的素材，使用它可以节省大量时间和精力，提高游戏开发效率。',
        link: 'https://www.naviai.cn/tools/scenario'
      },
      {
        icon: 'https://api.iowen.cn/favicon/chatfai.com.png',
        title: 'ChatFAI',
        desc: 'ChatFAI是一款使用AI技术的网络应用程序，可以让用户与电影、电视剧、书籍和历史上的喜爱角色聊天。网站提供了一个公共角色列表，用户可以与之聊天，也可以将自己喜欢的角色添加到ChatFAI账户中。对话感觉自然且生动，还会安全地存储用户的隐私信息。ChatFAI对任何人都是可用的，用户可以免费尝试任何角色。网站还提供帮助和支持信息。',
        link: 'https://www.naviai.cn/tools/chatfai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/apps.apple.com.png',
        title: 'Digirama',
        desc: 'Digirama是一个移动应用程序，用于创建人工智能角色。',
        link: 'https://www.naviai.cn/tools/digirama'
      },
      {
        icon: 'https://api.iowen.cn/favicon/arcane.land.png',
        title: 'ArcaneLand',
        desc: 'ArcaneLand是一个AI地牢大师网站，拥有XP、物品、任务等功能，由ChatGPT驱动，提供了一个充满想象力的魔幻世界和现实生活的AI大脑调整版等游戏模式。网站还提供自定义游戏模式。',
        link: 'https://www.naviai.cn/tools/arcaneland'
      },
      {
        icon: 'https://api.iowen.cn/favicon/play.aidungeon.io.png',
        title: 'AIDungeon',
        desc: 'AIDungeon是一个基于人工智能技术的冒险游戏项目，它可以让你创造出无限可能的故事情节。',
        link: 'https://www.naviai.cn/tools/aidungeon'
      },
      {
        icon: 'https://api.iowen.cn/favicon/fablesimulation.com.png',
        title: 'The Simulation',
        desc: 'The Simulation是一个以人工智能为核心的元宇宙项目。',
        link: 'https://www.naviai.cn/tools/the_simulation'
      },
      {
        icon: 'https://api.iowen.cn/favicon/g3d.ai.png',
        title: 'G3DAI {Jedi}',
        desc: 'G3DAI {Jedi}是一个利用领先的人工智能技术的创新项目，让用户只需输入文本提示，就能轻松创建任何需要的3D模型。',
        link: 'https://www.naviai.cn/tools/g3dai_jedi'
      }
    ]
  },
  {
    title: 'AI医疗与健康',
    items: [
      {
        icon: 'https://api.iowen.cn/favicon/medicodio.com.png',
        title: 'MediCodio',
        desc: 'MediCodio是一家医疗保健技术公司，通过自动化医疗编码工作流程，使编码人员更专注于患者护理交付。他们提供一种名为CODIO的AI驱动的医学编码助手，可将编码成本降低并为RCM公司和医院计费部门提高效率高达45％。该公司在LinkedIn上有更多关于其产品和服务的信息。',
        link: 'https://www.naviai.cn/tools/medicodio'
      },
      {
        icon: 'https://api.iowen.cn/favicon/glass.health.png',
        title: 'Glass.health',
        desc: 'Glass.health是一个医疗AI项目，旨在提供有效的问题诊断。该项目通过AI技术提供更加准确和高效的医疗诊断服务。',
        link: 'https://www.naviai.cn/tools/glass_health'
      },
      {
        icon: 'https://api.iowen.cn/favicon/labworks.ai.png',
        title: 'Sage AI',
        desc: '这是一个提供个人健康AI助手服务的网站。',
        link: 'https://www.naviai.cn/tools/sage_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/heliopolistech.com.png',
        title: 'HELIOPOLISTECH',
        desc: 'HELIOPOLISTECH是一个专注于发现和开发新的治疗蛋白的网站。',
        link: 'https://www.naviai.cn/tools/heliopolistech'
      },
      {
        icon: 'https://api.iowen.cn/favicon/doctor.yourmed.app.png',
        title: 'YourDoctor AI',
        desc: '提供健康建议的AI助手',
        link: 'https://www.naviai.cn/tools/yourdoctor_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/hippocratic-medical-questions.herokuapp.com.png',
        title: 'Hippocratic AI',
        desc: 'Hippocratic AI是一个免费的搜索工具，用于寻找同行评审的医学知识。',
        link: 'https://www.naviai.cn/tools/hippocratic_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/app.sttabot.io.png',
        title: 'AnalyzGPT',
        desc: '网站提供两个不同的工具：AnalyzGPT Demo和React Coder。React Coder是一个专业的工具，用于编写简洁的ReactJS代码。AnalyzGPT Demo是一个支持AI的工具，用于分析人手或脚的X光图像，以识别骨折和事故场景。用户可以通过提供图像的公共链接免费获得有关其X光图像的详细报告。网站提到了出版商详细信息、发布日期以及两个工具都是使用Sttabot.io构建的。网站还提供通知功能。',
        link: 'https://www.naviai.cn/tools/analyzgpt'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.upheal.io.png',
        title: 'Upheal',
        desc: 'Upheal是一款帮助心理保健专业人员自动记录笔记和视频通话的平台。',
        link: 'https://www.naviai.cn/tools/upheal'
      },
      {
        icon: 'https://api.iowen.cn/favicon/geniea.com.png',
        title: 'Geniea',
        desc: 'Geniea是一家专注于改善个性化、以患者为中心医疗保健系统的健康分析解决方案和服务提供商。他们帮助医院、医生、健康计划和雇主改善健康结果，降低成本，并为执业医生带来医学的乐趣。',
        link: 'https://www.naviai.cn/tools/geniea'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.sommerai.com.png',
        title: 'SommerAI',
        desc: 'SommerAI是一款基于人工智能的心理治疗师，通过每周的时间表，利用认知行为治疗（CBT）、解决方案聚焦短期治疗（SFBT）和追溯性决议治疗（RRT）等证据支持的方法，以及生活技巧来为个人提供个性化的心理健康支持。',
        link: 'https://www.naviai.cn/tools/sommerai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/glow-ai.vercel.app.png',
        title: 'GlowAI',
        desc: 'GlowAI是一个个性化护肤程序生成器，可以根据预算、肤质和皮肤问题生成个性化的护肤程序。',
        link: 'https://www.naviai.cn/tools/glowai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/glowai.xyz.png',
        title: 'Glow AI',
        desc: 'Glow AI是一款个性化护肤解决方案。',
        link: 'https://www.naviai.cn/tools/glow_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/mydoula.pro.png',
        title: 'AI Doula',
        desc: 'AI Doula是一个为孕产妇提供人工智能支持的项目。它提供个性化的护理、孕期健康、育儿技巧和情感健康方面的帮助。无论您是准妈妈还是新妈妈，AI Doula都能为您提供全方位的支持，帮助您度过孕期和产后的旅程。通过AI Doula，您可以获得专业的建议和指导，以及与其他妈妈分享经验和知识的机会。这个项目是一个非常有用的资源，可以帮助您更好地应对孕期和育儿的挑战。',
        link: 'https://www.naviai.cn/tools/ai_doula'
      },
      {
        icon: 'https://api.iowen.cn/favicon/openbioml.org.png',
        title: 'OpenBioML',
        desc: 'OpenBioML是一个去中心化的研究社区，旨在将机器学习和生物学相结合，实现科学研究的民主化。',
        link: 'https://www.naviai.cn/tools/openbioml'
      },
      {
        icon: 'https://api.iowen.cn/favicon/generatebiomedicines.com.png',
        title: 'Generate:Biomedicines',
        desc: 'Generate Biomedicines是一家生物技术公司，利用生物学、机器学习、生物工程等技术开发新型治疗方法。',
        link: 'https://www.naviai.cn/tools/generate_biomedicines'
      },
      {
        icon: 'https://api.iowen.cn/favicon/drinkwater.ai.png',
        title: 'Water',
        desc: 'Water是一个智能饮水提醒项目，它可以帮助你保持身体健康，让你时刻保持饮水的习惯。它可以根据你的身体情况和饮水习惯，定制化提醒你饮水的时间和量。同时，它还可以与Airtable和Zapier等无代码平台进行集成，让你更加方便地管理和记录自己的饮水情况。让Water成为你健康生活的好伙伴，让你的身体时刻保持水润。',
        link: 'https://www.naviai.cn/tools/water'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.tinderglowup.com.png',
        title: 'Tinder Glowup',
        desc: 'Tinder Glowup是一个AI医疗健康管理网站，可以生成显示腹肌外观的图像。',
        link: 'https://www.naviai.cn/tools/tinder_glowup'
      },
      {
        icon: 'https://api.iowen.cn/favicon/pplegpt.vercel.app.png',
        title: 'PPLEGPT',
        desc: 'PPLEGPT是一个基于人工智能的健身项目，为用户提供个性化的PPL锻炼计划。无论您是初学者还是有经验的健身爱好者，PPLEGPT都能够为您提供适合的训练方案。',
        link: 'https://www.naviai.cn/tools/pplegpt'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.liftz.ai.png',
        title: 'LIFTZ AI',
        desc: 'LIFTZ AI-智能健身应用',
        link: 'https://www.naviai.cn/tools/liftz_ai'
      },
      {
        icon: 'https://api.iowen.cn/favicon/happy-mama.vercel.app.png',
        title: 'Happy Mama',
        desc: 'Happy Mama是一个孕妇专属的智能问答平台，能够为孕妇们提供即时的怀孕问题解答。',
        link: 'https://www.naviai.cn/tools/happy_mama'
      }
    ]
  }
]
