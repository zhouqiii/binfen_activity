import renderPPT from './ppt-render'
function getDataAnaPpData(data) {
    if (!data) return;
    const {
        fileName,// 文件名
        title,// 标题
        content, // html
        heatImage,// 热力图
    } = data;
    return {
        data: [
            [
                {
                    type: 0, //BlockType. TEXT
                    top: "2%",
                    left: "2%",width: "100%",height: "10%",content: title,
                    color:"#0c72bd",
                    fontSize:14,
                },
                {
                    type: 3,
                    top: "12%",
                    left: "0%",width: "30%",height: "30%",
                    fontsize: 14,
                    backgroundColor:'#B49BF9',
                    content: content,
                },
                {
                    type: 1,
                    top:"45%",left:"0%",
                width: "100%",height: "55%", content: heatImage,
                }
                ],
            ],
                title: fileName,
        }
    }

export function exportDataAna(data) {
    const result = getDataAnaPpData(data)
    if(!result) return
    // renderPPT(result.data, result.title)
}