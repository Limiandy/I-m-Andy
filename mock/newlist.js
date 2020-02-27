/*
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-02-08 19:23:30
 * @LastEditors  : Andy
 * @LastEditTime : 2020-02-08 19:45:04
 */
const newslist = [
  {
    src: require('../src/assets/blognews/img01.jpg'),
    imgTitle: 'Article Image',
    auth: 'John Doe',
    releaseDate: 'August 10, 2017',
    title: 'Duis aute irure dolor in reprehenderit in voluptate',
    briefly:
      'Mauris eu eros in metus elementum porta eget sed ligula. Praesent consequat, ipsum molestie pellentesque venenatis.',
    link: '#'
  },
  {
    src: require('../src/assets/blognews/img02.jpg'),
    imgTitle: 'Article Image',
    auth: 'John Doe',
    releaseDate: 'August 10, 2017',
    title: 'Duis aute irure dolor in reprehenderit in voluptate',
    briefly:
      'Mauris eu eros in metus elementum porta eget sed ligula. Praesent consequat, ipsum molestie pellentesque venenatis.',
    link: '#'
  },
  {
    src: require('../src/assets/blognews/img03.jpg'),
    imgTitle: 'Article Image',
    auth: 'John Doe',
    releaseDate: 'August 10, 2017',
    title: 'Duis aute irure dolor in reprehenderit in voluptate',
    briefly:
      'Mauris eu eros in metus elementum porta eget sed ligula. Praesent consequat, ipsum molestie pellentesque venenatis.',
    link: '#'
  },
  {
    src: require('../src/assets/blognews/img04.jpg'),
    imgTitle: 'Article Image',
    auth: 'John Doe',
    releaseDate: 'August 10, 2017',
    title: 'Duis aute irure dolor in reprehenderit in voluptate',
    briefly:
      'Mauris eu eros in metus elementum porta eget sed ligula. Praesent consequat, ipsum molestie pellentesque venenatis.',
    link: '#'
  },
  {
    src: require('../src/assets/blognews/img05.jpg'),
    imgTitle: 'Article Image',
    auth: 'John Doe',
    releaseDate: 'August 10, 2017',
    title: 'Duis aute irure dolor in reprehenderit in voluptate',
    briefly:
      'Mauris eu eros in metus elementum porta eget sed ligula. Praesent consequat, ipsum molestie pellentesque venenatis.',
    link: '#'
  },
  {
    src: require('../src/assets/blognews/img06.jpg'),
    imgTitle: 'Article Image',
    auth: 'John Doe',
    releaseDate: 'August 10, 2017',
    title: 'Duis aute irure dolor in reprehenderit in voluptate',
    briefly:
      'Mauris eu eros in metus elementum porta eget sed ligula. Praesent consequat, ipsum molestie pellentesque venenatis.',
    link: '#'
  }
]

export default {
  'get|/newslist/query': () => {
    return {
      status: 200,
      message: 'success',
      data: newslist
    }
  }
}
