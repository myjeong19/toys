const express = require('express');
const router = express.Router();

const productList = [
  {
    title: 'BRUSHED ALPACA WOOL MELTON HOODED COAT',
    price: '132,000',
    image:
      'https://auralee.jp/photo/23AW/A23AB02AS/z-A23AB02AS-2.jpg?1688784969',
  },

  {
    title: 'CASHMERE WOOL MOSSER SOUTIEN COLLAR COAT',
    price: '159,500',
    image:
      'https://auralee.jp/photo/23AW/A23AC01MC/z-A23AC01MC-2.jpg?1688786030',
  },

  {
    title: 'BLUEFACED WOOL DOBBY OVER JACKET',
    price: '110,000',
    image:
      'https://auralee.jp/photo/23AW/A23AJ01BS/z-A23AJ01BS-2.jpg?1688787127',
  },

  {
    title: 'DOUBLE CLOTH PILE MOSSER HAND SEWN SHIRTS BLOUSON',
    price: '143,000',
    image:
      'https://auralee.jp/photo/23AW/A23AB02PM/z-A23AB02PM-2.jpg?1695350558',
  },

  {
    title: 'WASHED FRENCH MERINO KNIT P/O',
    price: '40,700',
    image:
      'https://auralee.jp/photo/23AW/A23AP01SW/z-A23AP01SW-2.jpg?1697596945',
  },
  {
    title: 'WASHED FRENCH MERINO KNIT TURTLE',
    price: '41,800',
    image:
      'https://auralee.jp/photo/23AW/A23AT03SW/z-A23AT03SW-2.jpg?1689047158',
  },
  {
    title: 'BABY CASHMERE KNIT P/O',
    price: '66,000 ',
    image:
      'https://auralee.jp/photo/23AW/A23AP03BC/z-A23AP03BC-2.jpg?1689045066',
  },
  {
    title: 'BABY CASHMERE KNIT PANTS',
    price: '72,600',
    image:
      'https://auralee.jp/photo/23AW/A23AP05BC/z-A23AP05BC-2.jpg?1689045812',
  },
];

router.get('/', async (req, res, next) => {
  res.render('men', { productList });
});

router.get('/detail/:id', async (req, res, next) => {
  res.render('men', { productList });
});

module.exports = router;
