import Pptxgen from 'pptxgenjs'; // http://gitbrent.github.io/PptxGenJS/docs/api-text/
import JSZip from 'jszip';
import FileSaver from 'file-saver';
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
const dataChartAreaLine = [
  {
    name: 'Actual Sales',
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    values: [1500, 4600, 5156, 3167, 8510, 8009, 6006, 7855, 12102, 12789, 10123, 15121],
  },
  {
    name: 'Projected Sales',
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    values: [1000, 2600, 3456, 4567, 5010, 6009, 7006, 8855, 9102, 10789, 11123, 12121],
  },
];

const pdfpage = (text, base64, canvas) => {
  console.log(base64, 'base64');
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
      rowH: 2,
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
    y: 2.2,
    h: 3,
    w: '50%',
    sizing: { type: 'contain' }, // crop:图片不按比例缩放，而是剪切，属性x、y、w、h可以设置剪切区域;containe:图片按比例缩放;cover:图片铺满，会被拉伸
    // 本地图片或者在线图片用path（path: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg'）
    // base64格式的图片用data: (base64);
    path: png,
  });
  slide1.addText('与图片同行的文字', {
    x: 5.8,
    y: 2.2,
    h: 3,
    w: '36%',
    align: 'center',
  });
  const slide2 = pres.addSlide();
  slide2.addImage({
    x: 0.5,
    y: 0.5,
    data: base64,
  });
  const slide3 = pres.addSlide();
  slide3.addImage({
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 4,
    data: canvas,
  });
  const slide4 = pres.addSlide();
  // 不必须使用Pptxgen自带的chart绘制http://gitbrent.github.io/PptxGenJS/docs/api-charts/，
  // 如果熟悉echarts，可以利用echarts转base64添加到ppt也一样的
  slide4.addChart(pres.ChartType.line,
    dataChartAreaLine,
    {
      x: 0.5,
      y: 0.5,
      w: 8,
      h: 4,
    });
  return pres;
  // pres.writeFile({ fileName: 'Sample Presentation.pptx' }).then(() => {
  //   alert('导出成功');
  // });
};

const zipfile = (text, base64, canvas) => {
  const promises = [];
  [1, 2].forEach(() => {
    const pdfdata = pdfpage(text, base64, canvas);
    // http://gitbrent.github.io/PptxGenJS/docs/usage-saving/
    // stream()返回一个promsie，返回是文件处理成二进制流后的格式
    const streamPdf = pdfdata.stream();
    promises.push(streamPdf);
  });
  Promise.all(promises).then((res) => {
    const zip = new JSZip();
    res.forEach((item, index) => {
      // zip.file(name, data,  options);这里的data就可以是string,arraybuffer,base64等,如果是base64，options配置{base64： true}；如果是blob流配置oprtion { binary: true }
      // Buffer.from(字符串/缓冲区/数组/arrayBuffer, encoding )
      zip.file(`文件${index}.ppt`, Buffer.from(item, 'utf-8'));
    });
    zip.generateAsync({ type: 'blob' }).then((content) => {
      // 生成二进制流
      FileSaver.saveAs(content, '批量ppt.zip'); // 利用file-saver保存文件
    });
  });
};
export default pdfpage;
export {
  zipfile,
};
