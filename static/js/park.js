
function call_ajax(area_name) {
    alert(area_name)
    // javascript의 객체는 => {key : value, key : value, ...} 형태
    $.ajax({
        async : true,    // 비동기 방식의 호출(default)
        url : "http://openapi.seoul.go.kr:8088/6a6250617970617232376c4f505871/json/SearchParkInfoService/1/132/",  // 호출할 url
        data : {
        },   // 서버 프로그램에게 넘겨줄 데이터들
        type : "GET",
        timeout : 5000,   // 주어진 시간안에 결과가 안오면 query가 실패한 것으로 간주
        dataType : "json",   // 서버로 부터 받을 데이터 타입
        success : function(result) {
            // alert('성공')
            // 이전에 찾았던 공원들 전부 지우기
            $("tbody").empty()
            park_list = result.SearchParkInfoService.row

            $.each(park_list, function(idx, item) {
                if(item.P_ZONE == area_name) {
                    var tr = $("<tr></tr>")   // <tr></tr>이라는 없는 태그를 하나 만듬
                    var idxTd = $("<td></td>").text(item.P_IDX)   // <td></td>
                    var imgTd = $("<td></td>")
                    var titleTd = $("<td></td>").text(item.P_PARK)   // text 메서드로 태그사이에 문자 넣기 가능
                    var contentTd = $("<td></td>").text(item.P_ZONE)
                    var viewerTd = $("<td></td>").text(item.audiAcc)
                    var img = $("<img />").attr("src",item.img)   // <img src = ...>
                    imgTd.append(img)   // imgTd의 자식으로 img를 붙임
                    tr.append(idxTd)
                    tr.append(imgTd)
                    tr.append(titleTd)
                    tr.append(contentTd)
                    tr.append(viewerTd)
                    var detailTd = $("<td></td>")
                    var detailBtn = $("<input />").attr("type", "button").attr("value", "확인")
                    detailBtn.on("click", function () {
                        go_detail(item.P_IDX)
//                        location.href = item.P_IDX + '/detail'
                    })
                    detailTd.append(detailBtn)
                    tr.append(detailTd)
                }
                $("tbody").append(tr)
            })
        },
        error : function(error) {
            alert("서버호출 실패")
        }
    })

}

function go_detail(park_idx) {
    window.location = "http://127.0.0.1:8000/posts/"+ park_idx + "/detail/";
}