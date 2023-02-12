import pptxgen from 'pptxgenjs'

function render (pages,fileName){ 
    if (pages) {
        const pptx = new pptxgen();
        const sliders = Array.isArray (pages) ? pages : [pages];
        sliders. fortach((item) => {
            const slide = pptx.addslide();
            Worker (slide, item);
        });
        pptx.writeFile({ fileName });
    }
}