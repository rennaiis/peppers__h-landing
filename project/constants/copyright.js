import { image } from "@/utils/ps/frontend"
import { NOT_MOB } from "./adaptive-settings"
export const intro = {
  header: {
    huntLogo: {
      icon: 'huntLogo',
      href: 'https://www.stoloto.ru/oxota-vyzov/game?int=left'
    }, 
    lotoLogo: {
      icon: 'stolotoLogo', 
      href: 'https://www.stoloto.ru/'
    }, 
   
    caption: [
      {
        text: 'ВЫИГРЫВАЕТ',
        mod: 'thin'
      },
      {
        text: 'КАЖДЫЙ',
        mod: 'bold'
      },
      {
        text: '3-Й БИЛЕТ!',
        mod: 'bold'
      },
    ], 
  },
  coins: {
    mod: 'coins',
    sourceData: {
        sources: [
        {
          srcSet: `${image("intro/coins-m.webp")} 1x, ${image("intro/coins-m@2x.webp")} 2x`, 
          media: `(max-width: ${NOT_MOB - 1}px)`,
          type:"image/webp"
        },
        {
          srcSet: `${image("intro/coins-m.png")} 1x, ${image("intro/coins-m@2x.png")} 2x`, 
          media: `(max-width: ${NOT_MOB - 1}px)`
        },
        {
          srcSet: image("intro/coins.webp"),
          type:"image/webp"
        },
        ]
    },
    imgAttr: {
      src: image("intro/coins.png"),
    }
  },
   bgItems: [
    {
      mod: 'bg',
      sourceData: {
          sources: [
          {
            srcSet: `${image("intro/bg-m.webp")} 1x, ${image("intro/bg-m@2x.webp")} 2x`, 
            media: `(max-width: ${NOT_MOB - 1}px)`,
            type:"image/webp"
          },
          {
            srcSet: `${image("intro/bg-m.png")} 1x, ${image("intro/bg-m@2x.png")} 2x`, 
            media: `(max-width: ${NOT_MOB - 1}px)`
          },
          {
            srcSet: image("intro/bg.webp"),
            type:"image/webp"
          },
          ]
      },
      imgAttr: {
        src: image("intro/bg.png"),
      }
    },
    // {
    //   mod: 'texture',
    //   sourceData: {
    //      sources: [
    //       {
    //         srcSet: `${image("intro/texture-m.webp")} 1x, ${image("intro/texture-m@2x.webp")} 2x`, 
    //         media: `(max-width: ${NOT_MOB - 1}px)`,
    //         type:"image/webp"
    //       },
    //       {
    //         srcSet: `${image("intro/texture-m.png")} 1x, ${image("intro/texture-m@2x.png")} 2x`, 
    //         media: `(max-width: ${NOT_MOB - 1}px)`
    //       },
    //       {
    //         srcSet: image("intro/texture.webp"),
    //         type:"image/webp"
    //       },
    //      ]
    //   },
    //   imgAttr: {
    //     src: image("intro/texture.png"),
    //   }
    // },
    {
      mod: 'man',
      sourceData: {
          sources: [
          {
            srcSet: `${image("intro/man-m.webp")} 1x, ${image("intro/man-m@2x.webp")} 2x`, 
            media: `(max-width: ${NOT_MOB - 1}px)`,
            type:"image/webp"
          },
          {
            srcSet: `${image("intro/man-m.png")} 1x, ${image("intro/man-m@2x.png")} 2x`, 
            media: `(max-width: ${NOT_MOB - 1}px)`
          },
          {
            srcSet: image("intro/man.webp"),
            type:"image/webp"
          },
          ]
      },
      imgAttr: {
        src: image("intro/man.png"),
      }
    },
    
    

    ],
  topText: [
      {
        text: 'Забери СВОЮ ДОБЫЧУ',
        mod: '1'
      },
      {
        text: 'ХХХ ХХХХ ₽',
        mod: '2'
      },
      {
        text: 'пришло твоё время!',
        mod: '3'
      },
  ],
  bottomText: [
      {
        text: '14 НОЯБРЯ 21:55 МСК',
        mod: '4'
      },
      {
        text: 'РАСПРЕДЕЛИМ',
        mod: '5'
      },
      {
        text: '200 000 000 ₽',
        mod: '6'
      },
      {
        text: 'ДОБЫЧА БУДЕТ БОЛЬШЕ',
        mod: '7'
      },
  ],
  button1: {
    icon: 'lightningWhite', 
    href: 'https://www.stoloto.ru/oxota/game?int=left', 
    text: 'Играть',
    className: 'customButton_base'
  },
  button2: {
    icon: 'lightningRed', 
    href: 'https://www.stoloto.ru/oxota/game?int=left', 
    text: 'выйти на охоту',
    className: 'customButton_base'
  },
}
export const cards = {
  button: {
    icon: 'lightningRed', 
    href: 'https://www.stoloto.ru/oxota/game?int=left', 
    text: 'на охоту!',
    className: 'customButton_base'
  },
  list: [
    {
      mod: 'rules', 
      icon: 'card1icon',
      cover: 'ПРАВИЛА &laquo;ОХОТЫ&raquo;',
      title: 'Проверь свой инстинкт прямо сейчас&nbsp;&mdash; правила просты!',
      ol: [
        'Отметь числа в&nbsp;билете: по&nbsp;4&nbsp;в каждом из&nbsp;двух полей',
        'Дождись розыгрыша&nbsp;&mdash; они проходят каждые 15&nbsp;минут', 
        'Забери свою добычу или испытай удачу снова',
      ], 
      bgItems: [
        {
            mod: 'phone',
            sourceData: {
              sources: [
                {
                  srcSet: `${image("cards/phone.webp")} 1x, ${image("cards/phone-m@2x.webp")} 2x`, 
                  media: `(max-width: ${NOT_MOB - 1}px)`,
                  type:"image/webp"
                },
                {
                  srcSet: `${image("cards/phone.png")} 1x, ${image("cards/phone-m@2x.png")} 2x`, 
                  media: `(max-width: ${NOT_MOB - 1}px)`
                },
                {
                  srcSet: image("cards/phone.webp"),
                  type:"image/webp"
                },
              ]
            },
            imgAttr: {
              src: image("cards/phone.png"),
            }
          },
      ]
    },
    {
      mod: 'prize',
      icon: 'card2icon',
      cover: 'Целься в&nbsp;главный трофей',
      title: 'Главный трофей от&nbsp;20&nbsp;000&nbsp;000&nbsp;₽',
      text: 'Пора проверить свой инстинкт и&nbsp;чутьё охотника. Целься в&nbsp;числа и&nbsp;выигрывай миллионы!',
      fact: {
        title: 'Больше чисел&nbsp;&mdash; больше шансов!',
        text: 'С&nbsp;развернутой ставкой средний выигрыш в&nbsp;3&nbsp;раза больше*',
        caption: '* (по&nbsp;данным 07.12.2023&nbsp;&mdash; 09.06.2024)',
        icon: 'x3'
      },
      bgItems: [
         {
            mod: 'crown',
            sourceData: {
              sources: [
                {
                  srcSet: `${image("cards/crown-m.webp")} 1x, ${image("cards/crown-m@2x.webp")} 2x`, 
                  media: `(max-width: ${NOT_MOB - 1}px)`,
                  type:"image/webp"
                },
                {
                  srcSet: `${image("cards/crown-m.png")} 1x, ${image("cards/crown-m@2x.png")} 2x`, 
                  media: `(max-width: ${NOT_MOB - 1}px)`
                },
                {
                  srcSet: image("cards/crown.webp"),
                  type:"image/webp"
                },
              ]
            },
            imgAttr: {
              src: image("cards/crown.png"),
            }
          },
          
         {
            mod: 'trophy',
            sourceData: {
              sources: [
                {
                  srcSet: `${image("cards/trophy-m.webp")} 1x, ${image("cards/trophy-m@2x.webp")} 2x`, 
                  media: `(max-width: ${NOT_MOB - 1}px)`,
                  type:"image/webp"
                },
                {
                  srcSet: `${image("cards/trophy-m.png")} 1x, ${image("cards/trophy-m@2x.png")} 2x`, 
                  media: `(max-width: ${NOT_MOB - 1}px)`
                },
                {
                  srcSet: image("cards/trophy.webp"),
                  type:"image/webp"
                },
              ]
            },
            imgAttr: {
              src: image("cards/trophy.png"),
            }
          },
          
      ]
    },
    {
      mod: 'out',
      icon: 'card3icon',
      cover: 'Выводи трофеи до&nbsp;600&nbsp;000&nbsp;₽',
      text: 'В&nbsp;личном кабинете на&nbsp;сайте и&nbsp;в&nbsp;приложении &laquo;Столото&raquo; можно вывести выигрыши до&nbsp;600&nbsp;000&nbsp;₽',
      boldText: 'Регистрируйся прямо сейчас, если ещё не&nbsp;сделал этого'
    },
    {
      mod: 'table',
      icon: 'card4icon',
      cover: 'ВСЁ о&nbsp;добыче',
      ul: ['Повышенный призовой фонд', 'Крупные выигрыши', 'Выигрывает каждый 3-й билет', 'Билеты от&nbsp;150&nbsp;₽'],
      table: {
        headers: {
          prize: 'Выигрыш в руб.',
          field1: 'Совпало чисел в поле 1',
          field2: 'Совпало чисел в поле 2',
        },
        rows: [
          { 
            prize: 'Суперприз', 
            isRed: true, 
            list: [{ f1: 4, f2: 4 }] 
          },
          { 
            prize: '150 000', 
            list: [{ f1: 4, f2: 3 }, { f1: 3, f2: 4 }] 
          },
          { 
            prize: '15 000', 
            list: [{ f1: 4, f2: 2 }, { f1: 2, f2: 4 }] 
          },
          { 
            prize: '4 500', 
            list: [{ f1: 4, f2: 1 }, { f1: 1, f2: 4 }] 
          },
          { 
            prize: '6 000', 
            list: [{ f1: 4, f2: 0 }, { f1: 0, f2: 4 }]
          },
          { 
            prize: '3 600', 
            list: [{ f1: 3, f2: 3 }] 
          },
          { 
            prize: '1 500', 
            list: [{ f1: 3, f2: 2 }, { f1: 2, f2: 3 }] 
          },
          { 
            prize: '900', 
            list: [{ f1: 3, f2: 1 }, { f1: 1, f2: 3 }] 
          },
          { 
            prize: '750', 
            list: [{ f1: 3, f2: 0 }, { f1: 0, f2: 3 }] 
          },
          { 
            prize: '450', 
            list: [{ f1: 2, f2: 2 }] 
          },
          { 
            prize: '150', 
            list: [{ f1: 2, f2: 1 }, { f1: 1, f2: 2 }] 
          },
          { 
            prize: '150', 
            list: [{ f1: 2, f2: 0 }] 
          },
        ]
      }
    }
  ],

}
export const facts = {
  title: 'Выигрывай по-крупному',
  button: {
    href: 'https://www.stoloto.ru/oxota/game?int=left', 
    text: 'хочу выиграть',
    className: 'customButton_base'
  },
  arrowLeft: {
    icon: 'arrowLeft',
    className: 'customButton_arrow'
  },
  arrowLeftM: {
    icon: 'arrowLeft-m',
    className: 'customButton_arrow customButton_arrow_mobile'
  },
  arrowRight: {
    icon: 'arrowRight',
    className: 'customButton_arrow'
  },
  arrowRightM: {
    icon: 'arrowRight-m',
    className: 'customButton_arrow customButton_arrow_mobile'
  },
  list: [
    {
      mod: '1',
      text: 'Общая сумма выигрышей:',
      title: '2&nbsp;500&nbsp;000&nbsp;000&nbsp;₽',
      caption: '(по&nbsp;данным 07.12.23&nbsp;&mdash; 18.10.24)',
      bgItems: [
      {
        mod: 'back',
        sourceData: {
           sources: [
            {
              srcSet: `${image("rules/rule1/bg-m.webp")} 1x, ${image("rules/rule1/bg-m@2x.webp")} 2x`, 
              media: `(max-width: ${NOT_MOB - 1}px)`,
              type:"image/webp"
            },
            {
              srcSet: `${image("rules/rule1/bg-m.png")} 1x, ${image("rules/rule1/bg-m@2x.png")} 2x`, 
              media: `(max-width: ${NOT_MOB - 1}px)`
            },
            {
              srcSet: image("rules/rule1/bg.webp"),
              type:"image/webp"
            },
           ]
        },
        imgAttr: {
          src: image("rules/rule1/bg.png"),
        }
      },
      {
        mod: 'coin1',
        sourceData: {
           sources: [
            {
              srcSet: `${image("rules/rule1/coin1-m.webp")} 1x, ${image("rules/rule1/coin1-m@2x.webp")} 2x`, 
              media: `(max-width: ${NOT_MOB - 1}px)`,
              type:"image/webp"
            },
            {
              srcSet: `${image("rules/rule1/coin1-m.png")} 1x, ${image("rules/rule1/coin1-m@2x.png")} 2x`, 
              media: `(max-width: ${NOT_MOB - 1}px)`
            },
            {
              srcSet: image("rules/rule1/coin1.webp"),
              type:"image/webp"
            },
           ]
        },
        imgAttr: {
          src: image("rules/rule1/coin1.png"),
        }
      },
      {
        mod: 'coin2',
        sourceData: {
           sources: [
            {
              srcSet: `${image("rules/rule1/coin2-m.webp")} 1x, ${image("rules/rule1/coin2-m@2x.webp")} 2x`, 
              media: `(max-width: ${NOT_MOB - 1}px)`,
              type:"image/webp"
            },
            {
              srcSet: `${image("rules/rule1/coin2-m.png")} 1x, ${image("rules/rule1/coin2-m@2x.png")} 2x`, 
              media: `(max-width: ${NOT_MOB - 1}px)`
            },
            {
              srcSet: image("rules/rule1/coin2.webp"),
              type:"image/webp"
            },
           ]
        },
        imgAttr: {
          src: image("rules/rule1/coin2.png"),
        }
      },
      ]
    },
    {
      mod: '2',
      text: 'Количество выигрышных билетов:',
      title: '7&nbsp;526&nbsp;220&nbsp;₽',
      caption: '(по&nbsp;данным 07.12.23&nbsp;&mdash; 25.09.24)',
      bgItems: [
              {
        mod: 'ticketLeft',
        sourceData: {
           sources: [
            {
              srcSet: `${image("rules/rule2/ticket-m.webp")} 1x, ${image("rules/rule2/ticket-m@2x.webp")} 2x`, 
              media: `(max-width: ${NOT_MOB - 1}px)`,
              type:"image/webp"
            },
            {
              srcSet: `${image("rules/rule2/ticket-m.png")} 1x, ${image("rules/rule2/ticket-m@2x.png")} 2x`, 
              media: `(max-width: ${NOT_MOB - 1}px)`
            },
            {
              srcSet: image("rules/rule2/ticket.webp"),
              type:"image/webp"
            },
           ]
        },
        imgAttr: {
          src: image("rules/rule2/ticket.png"),
        }
      },
        {
        mod: 'ticketRight',
        sourceData: {
           sources: [
            {
              srcSet: `${image("rules/rule2/ticket-m.webp")} 1x, ${image("rules/rule2/ticket-m@2x.webp")} 2x`, 
              media: `(max-width: ${NOT_MOB - 1}px)`,
              type:"image/webp"
            },
            {
              srcSet: `${image("rules/rule2/ticket-m.png")} 1x, ${image("rules/rule2/ticket-m@2x.png")} 2x`, 
              media: `(max-width: ${NOT_MOB - 1}px)`
            },
            {
              srcSet: image("rules/rule2/ticket.webp"),
              type:"image/webp"
            },
           ]
        },
        imgAttr: {
          src: image("rules/rule2/ticket.png"),
        }
      },
        {
        mod: 'coin1',
        sourceData: {
           sources: [
            {
              srcSet: `${image("rules/rule2/coin1-m.webp")} 1x, ${image("rules/rule2/coin1-m@2x.webp")} 2x`, 
              media: `(max-width: ${NOT_MOB - 1}px)`,
              type:"image/webp"
            },
            {
              srcSet: `${image("rules/rule2/coin1-m.png")} 1x, ${image("rules/rule2/coin1-m@2x.png")} 2x`, 
              media: `(max-width: ${NOT_MOB - 1}px)`
            },
            {
              srcSet: image("rules/rule2/coin1.webp"),
              type:"image/webp"
            },
           ]
        },
        imgAttr: {
          src: image("rules/rule2/coin1.png"),
        }
      },
      {
        mod: 'coin2',
        sourceData: {
           sources: [
            {
              srcSet: `${image("rules/rule2/coin2-m.webp")} 1x, ${image("rules/rule2/coin2-m@2x.webp")} 2x`, 
              media: `(max-width: ${NOT_MOB - 1}px)`,
              type:"image/webp"
            },
            {
              srcSet: `${image("rules/rule2/coin2-m.png")} 1x, ${image("rules/rule2/coin2-m@2x.png")} 2x`, 
              media: `(max-width: ${NOT_MOB - 1}px)`
            },
            {
              srcSet: image("rules/rule2/coin2.webp"),
              type:"image/webp"
            },
           ]
        },
        imgAttr: {
          src: image("rules/rule2/coin2.png"),
        }
      },
      {
        mod: 'coin3',
        sourceData: {
           sources: [
            {
              srcSet: `${image("rules/rule2/coin3-m.webp")} 1x, ${image("rules/rule2/coin3-m@2x.webp")} 2x`, 
              media: `(max-width: ${NOT_MOB - 1}px)`,
              type:"image/webp"
            },
            {
              srcSet: `${image("rules/rule2/coin3-m.png")} 1x, ${image("rules/rule2/coin3-m@2x.png")} 2x`, 
              media: `(max-width: ${NOT_MOB - 1}px)`
            },
            {
              srcSet: image("rules/rule2/coin3.webp"),
              type:"image/webp"
            },
           ]
        },
        imgAttr: {
          src: image("rules/rule2/coin2.png"),
        }
      },
      ]
    },
    {
      mod: '3',
      text: 'Ежедневная добыча охотников',
      title: 'более 17&nbsp;000&nbsp;000&nbsp;₽',
      caption: '(по&nbsp;данным 01.09.24&nbsp;&mdash; 29.09.24)',
      bgItems: [
        {
          mod: 'back',
          sourceData: {
            sources: [
              {
                srcSet: `${image("rules/rule3/bg-m.webp")} 1x, ${image("rules/rule3/bg-m@2x.webp")} 2x`, 
                media: `(max-width: ${NOT_MOB - 1}px)`,
                type:"image/webp"
              },
              {
                srcSet: `${image("rules/rule3/bg-m.png")} 1x, ${image("rules/rule3/bg-m@2x.png")} 2x`, 
                media: `(max-width: ${NOT_MOB - 1}px)`
              },
              {
                srcSet: image("rules/rule3/bg.webp"),
                type:"image/webp"
              },
            ]
          },
          imgAttr: {
            src: image("rules/rule3/bg.png"),
          }
        },
        {
          mod: 'coin1',
          sourceData: {
            sources: [
              {
                srcSet: `${image("rules/rule3/coin1-m.webp")} 1x, ${image("rules/rule3/coin1-m@2x.webp")} 2x`, 
                media: `(max-width: ${NOT_MOB - 1}px)`,
                type:"image/webp"
              },
              {
                srcSet: `${image("rules/rule3/coin1-m.png")} 1x, ${image("rules/rule3/coin1-m@2x.png")} 2x`, 
                media: `(max-width: ${NOT_MOB - 1}px)`
              },
              {
                srcSet: image("rules/rule3/coin1.webp"),
                type:"image/webp"
              },
            ]
          },
          imgAttr: {
            src: image("rules/rule3/coin1.png"),
          }
        },
        {
          mod: 'coin2',
          sourceData: {
            sources: [
              {
                srcSet: `${image("rules/rule3/coin2-m.webp")} 1x, ${image("rules/rule3/coin2-m@2x.webp")} 2x`, 
                media: `(max-width: ${NOT_MOB - 1}px)`,
                type:"image/webp"
              },
              {
                srcSet: `${image("rules/rule3/coin2-m.png")} 1x, ${image("rules/rule3/coin2-m@2x.png")} 2x`, 
                media: `(max-width: ${NOT_MOB - 1}px)`
              },
              {
                srcSet: image("rules/rule3/coin2.webp"),
                type:"image/webp"
              },
            ]
          },
          imgAttr: {
            src: image("rules/rule3/coin2.png"),
          }
        },
      ]
    },
    {
      mod: '4',
      text: 'Были в&nbsp;шаге от&nbsp;главного трофея:',
      title: 'более 145 человек',
      caption: '(по&nbsp;данным 07.12.23-25.09.24)',
      bgItems: [
      {
          mod: 'back',
          sourceData: {
            sources: [
              {
                srcSet: `${image("rules/rule4/bg-m.webp")} 1x, ${image("rules/rule4/bg-m@2x.webp")} 2x`, 
                media: `(max-width: ${NOT_MOB - 1}px)`,
                type:"image/webp"
              },
              {
                srcSet: `${image("rules/rule4/bg-m.png")} 1x, ${image("rules/rule4/bg-m@2x.png")} 2x`, 
                media: `(max-width: ${NOT_MOB - 1}px)`
              },
              {
                srcSet: image("rules/rule4/bg.webp"),
                type:"image/webp"
              },
            ]
          },
          imgAttr: {
            src: image("rules/rule4/bg.png"),
          }
          
        },
        {
          mod: 'coin1',
          sourceData: {
            sources: [
              {
                srcSet: `${image("rules/rule4/coin1-m.webp")} 1x, ${image("rules/rule4/coin1-m@2x.webp")} 2x`, 
                media: `(max-width: ${NOT_MOB - 1}px)`,
                type:"image/webp"
              },
              {
                srcSet: `${image("rules/rule4/coin1-m.png")} 1x, ${image("rules/rule4/coin1-m@2x.png")} 2x`, 
                media: `(max-width: ${NOT_MOB - 1}px)`
              },
              {
                srcSet: image("rules/rule4/coin1.webp"),
                type:"image/webp"
              },
            ]
          },
          imgAttr: {
            src: image("rules/rule4/coin1.png"),
          }
        },
        {
          mod: 'coin2',
          sourceData: {
            sources: [
              {
                srcSet: `${image("rules/rule4/coin2-m.webp")} 1x, ${image("rules/rule4/coin2-m@2x.webp")} 2x`, 
                media: `(max-width: ${NOT_MOB - 1}px)`,
                type:"image/webp"
              },
              {
                srcSet: `${image("rules/rule4/coin2-m.png")} 1x, ${image("rules/rule4/coin2-m@2x.png")} 2x`, 
                media: `(max-width: ${NOT_MOB - 1}px)`
              },
              {
                srcSet: image("rules/rule4/coin2.webp"),
                type:"image/webp"
              },
            ]
          },
          imgAttr: {
            src: image("rules/rule4/coin2.png"),
          }
        },
      ]
    }
  ]
}
export const rules = {
  title: 'Начни охоту в&nbsp;приложении &laquo;Столото&raquo;',
  caption: 'Пусть трофеи всегда будут под рукой',
  link: {
    text:'Купить билет можно в&nbsp;любой из&nbsp;точек продаж',
    icon: 'buyTicket',
    className: 'customButton_map'
  },
  list: [
    {
      mod: '1',
      title: 'Забери своё',
      icon: 'rule1icon', 
      text: 'Выигрыш до&nbsp;600&nbsp;000&nbsp;₽ можно получить онлайн. Если охота принесла тебе более крупную добычу, приезжай на&nbsp;оформление в&nbsp;лотерейный центр &laquo;Столото&raquo; или подтверди свою личность в&nbsp;фирменной точке продаж &laquo;Столото&raquo; в&nbsp;своём городе и&nbsp;отправь документы по&nbsp;почте'
    },
    {
      mod: '2',
      title: 'Действуй быстро',
      icon: 'rule2icon', 
      text: 'Очереди и&nbsp;походы в&nbsp;магазин не&nbsp;для тебя&nbsp;&mdash; покупай билеты где и&nbsp;когда удобно. Понадобятся только электронная почта и&nbsp;номер телефона при регистрации.'
    },
    {
      mod: '3',
      title: 'Твоя территория',
      icon: 'rule3icon', 
      text: 'Все билеты будут храниться в&nbsp;твоём личном кабинете. Здесь&nbsp;же можно проверить результаты охоты и&nbsp;вывести трофеи до&nbsp;600&nbsp;000&nbsp;₽ на&nbsp;карту.'
    },
    {
      mod: '4',
      title: 'Будь уверен',
      icon: 'rule4icon', 
      text: '&laquo;Охота&raquo;&nbsp;&mdash; это государственная лотерея. Организатор&nbsp;&mdash; Минспорт России, а&nbsp;контролирует проведение игры ФНС России.'
    },
  ]
}
export const video = {
  title: 'ПРОВЕРЬ СВОЙ ИНСТИНКТ',
  button: {
    href: 'https://www.stoloto.ru/oxota/game?int=left', 
    text: 'играть',
    className: 'customButton_base'
  },
  videoPreview: {
    sourceData: {
      sources: [
        {
          srcSet: `${image("video/videoPreview-m.webp")} 1x, ${image("video/videoPreview-m@2x.webp")} 2x`, 
          media: `(max-width: ${NOT_MOB - 1}px)`,
          type:"image/webp"
        },
        {
          srcSet: `${image("video/videoPreview-m.png")} 1x, ${image("video/videoPreview-m@2x.png")} 2x`, 
          media: `(max-width: ${NOT_MOB - 1}px)`
        },
        {
          srcSet: image("video/videoPreview.webp"),
          type:"image/webp"
        },
      ]
    },
    imgAttr: {
      src: image("video/videoPreview.png"),
    }
  },
  pauseButton: {
    icon: 'playButton',
    className: 'customButton_play'

  }
}
export const footer = {
  text: 'Фраза &laquo;Распределим 200&nbsp;000&nbsp;000&nbsp;₽&raquo; означает, что в&nbsp;тираже &laquo;ВГЛ 2&nbsp;Спорт&raquo;, алгоритм определения выигрышей &#8470;&nbsp;3, 14.11.2024&nbsp;в 21:55 мск между победителями будет распределена указанная сумма, если в&nbsp;тиражах с&nbsp;01.11.2024 по&nbsp;21:55 мск 14.11.2024 победителей в&nbsp;1-й категории. Заявленный размер суперприза (&laquo;Главный трофейот&nbsp;20&nbsp;000&nbsp;000&nbsp;₽&raquo;) является минимально гарантированной суммой, распределяемой среди победителей в&nbsp;соответствующей категории выигрышей. &laquo;Выигрывает каждый 3-й билет!&raquo; указывает на&nbsp;вероятность выигрыша в&nbsp;лотерее &laquo;ВГЛ 2&nbsp;Спорт&raquo;, алгоритм определения выигрышей &#8470;&nbsp;3, рассчитанную математическим путём и&nbsp;равную 1&nbsp;к 3,36. Фраза &laquo;Добыча будет больше&raquo; означает, что в&nbsp;случае распределения части накопленного суперприза призовой фонд каждой из&nbsp;категорий выигрышей, за&nbsp;исключением первой, будет увеличен за&nbsp;счет средств распределяемой суммы. Количество выигрышных билетов приведено по&nbsp;состоянию на&nbsp;25.09.2024. Фраза &laquo;каждые 15&nbsp;минут&raquo; означает проведение розыгрыша призового фонда тиража лотереи &laquo;ВГЛ 2&nbsp;Спорт&raquo;, алгоритм определения выигрышей &#8470;&nbsp;3, каждые 15&nbsp;минут, кроме технических перерывов. Время проведения технических перерывов&nbsp;&mdash; на&nbsp;stoloto.ru. Фраза &laquo;повышенный призовой фонд&raquo; указывает на&nbsp;то, что размер призового фонда лотереи &laquo;ВГЛ 2&nbsp;Спорт&raquo; выше минимально допустимого в&nbsp;соответствии с&nbsp;требованиями законодательства России размера призового фонда лотереи и&nbsp;составляет&nbsp;60% выручки от&nbsp;проведения лотереи. Фраза &laquo;Выигрывает каждый 3-й билет!&raquo; указывает на&nbsp;вероятность выигрыша в&nbsp;лотерее &laquo;ВГЛ 2&nbsp;Спорт&raquo;, алгоритм определения выигрышей &#8470;&nbsp;3, рассчитанную математическим путём и&nbsp;равную 1&nbsp;к 3,36. Фраза &laquo;средний выигрыш в&nbsp;3&nbsp;раза больше&raquo; указывает на&nbsp;статистически собранные данные выигрышей согласно аналитике по&nbsp;данным 07.12.2023&nbsp;&mdash; 09.06.2024. Срок проведения лотереи&nbsp;&mdash; до&nbsp;31.12.2029. Информацию об&nbsp;организаторе лотереи, о&nbsp;правилах ее&nbsp;проведения, призовом фонде лотереи, количестве призов или выигрышей, о&nbsp;сроках, месте и&nbsp;порядке получения призов или выигрышей можно узнать на&nbsp;сайте stoloto.ru.',
  social: {
    logo: 'stolotoLogo', 
    caption: 'Будь в&nbsp;курсе всех новостей', 
    links: [
      {
        href: '', 
        icon: 'vk', 
        className: 'customButton_soc'
      },
      {
        href: '', 
        icon: 'ok', 
        className: 'customButton_soc'
      },
      {
        href: '', 
        icon: 'rutube', 
        className: 'customButton_soc'
      },
      {
        href: '', 
        icon: 'tg', 
        className: 'customButton_soc'
      },
    ]
  },
  app: {
    caption: 'Наведи камеру на&nbsp;QR-код или нажми на&nbsp;кнопку, чтобы скачать мобильное приложение &laquo;Столото&raquo;',
    button: {
      text: 'Скачать', 
      icon: 'mobileLogos',
      className: 'customButton_app'
    },
    qr: {
    sourceData: {
      sources: [
        {
          srcSet: `${image("footer/qr-m.webp")} 1x, ${image("footer/qr-m@2x.webp")} 2x`, 
          media: `(max-width: ${NOT_MOB - 1}px)`,
          type:"image/webp"
        },
        {
          srcSet: `${image("footer/qr-m.png")} 1x, ${image("footer/qr-m@2x.png")} 2x`, 
          media: `(max-width: ${NOT_MOB - 1}px)`
        },
        {
          srcSet: image("footer/qr.webp"),
          type:"image/webp"
        },
      ]
    },
    imgAttr: {
      src: image("footer/qr.png"),
    }
  },
  }
};
