import Pptxgen from 'pptxgenjs';
import png from '../assets/logo.png';

const row = []; // 创建数组
const border = [ // 表格边框-上右下左的顺序或者border是一个对象
  { pt: 0.5, color: 'eeeeee' },
  { type: 'none' },
  { pt: 0.5, color: 'eeeeee' },
  { type: 'none' },
];
const options = { valign: 'middle', border }; // 单元格样式配置
row.push([ // 表头
  { text: '平台名称', options: { ...options, fill: 'eeeeee' } },
  { text: '标题', options: { ...options, fill: 'eeeeee' } },
  { text: '发布账号', options: { ...options, fill: 'eeeeee' } },
  { text: '播放/阅读', options: { ...options, fill: 'eeeeee' } },
]);

row.push([ // 表格数据
  { text: 'csdn', options },
  { text: '关于pptxgen', options },
  { text: '半个绿豆饼', options },
  { text: '100', options },
]);

const pdfpage = (text) => {
  const pres = new Pptxgen();// 1. 创建PPT
  const slide1 = pres.addSlide(); // 2. 创建一个PPT页面，每调用一次 pres.addSlide() 都可以生成一张新的页面
  slide1.addText( // 3. 调用addTetx()，在PPT页面中插入文字
    [
      {
        text,
        options: {
          fontSize: 18, color: '99ABCC', align: 'left', breakLine: true,
        },
      },
      {
        text,
        options: {
          fontSize: 24, color: 'FFFF00', align: 'left',
        },
      },
    ],
    {
      x: 0.5,
      y: 0.5,
      rowH: 1,
      fill: { color: 'F1F1F1' },
    },
  );
  slide1.addTable(row, { // 表格默认配置
    x: 0.5,
    y: 1,
    // w: '90%',
    rowH: 0.5, // 单元格默认高度
    valign: 'middle',
    fontSize: 12,
    color: '333333',
    align: 'center',
    colW: [2.0, 2.0, 1, 4.0], // 表格每一列宽度 累计是10就相当于w:'100%',累计是9相当于w: '90%',然后按比例分
  });
  slide1.addImage({
    x: 0.5,
    y: 1.8,
    h: 3.4,
    w: '50%',
    sizing: { type: 'contain' }, // crop:图片不按比例缩放，而是剪切，属性x、y、w、h可以设置剪切区域;containe:图片按比例缩放;cover:图片铺满，会被拉伸
    path: png, // 本地图片用path
  });
  pres.writeFile({ fileName: 'Sample Presentation.pptx' }).then(() => {
    alert('导出成功');
  });
};
export default pdfpage;
