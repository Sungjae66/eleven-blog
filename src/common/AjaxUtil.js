import $ from 'jquery';
var baseUrl= 'http://localhost:808';//本地测试
var ajaxUtil = {

    /**
     * 发送ajax请求，content-type: application/json
     * @param url     -rest api url    可以带参数
     * @param data    -提交的json数据  放入body中，如果无可以传空
     * @param method  - http请求类型
     * @param successCallback -请求成功后的处理方法  如果传空，默认弹出请求成功的弹出框提示
     * @param failCallback    -请求失败后的处理方法  如果传空，默认弹出异常message的弹出框提示
     * @param thisStr:请求页面的this
     */
    ajaxJson: async function (url, data, type, successCallback, failCallback) {
        await $.ajax({
            url: baseUrl + url,
            type: type,
            data: data ,
            dataType: "json",
            success: ((dataObj)=>{
                if (successCallback != null){
                    console.log('请求成功')
                    successCallback(dataObj);
                }
            }),
            error: ((errorObj)=>{
                console.log('请求失败')
                if (failCallback != null){
                    failCallback(errorObj);
                }
            })
        });
    },
};

export {ajaxUtil};
