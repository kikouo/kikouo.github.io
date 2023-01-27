function tougao(a) {
  var b = new ClipboardJS(a);
  b.on("success", function (e) {
    swal({
      button: "确定",
      title: a.innerText + " 复制成功！",
      icon: "success",
      text: "下个夺冠的就是你！"
    });
  });
  b.on("error", function (e) {
    swal("复制失败 请联系缸子的奶爸");
  });
}