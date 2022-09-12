interface PaintOptions {
    shape: Shape;
    xPos?: number;//đối số không bắt buộc có thể để không truyền vào giá trị của hai thuộc tính này
    yPos?: number;
  }
class Shape{
    name:String
}
// select order where Order order where order.code in :codes

// public List sortJobByOrder(String date){
//     List<Job> jobs = jobRepo.getAllByDate(date);//lay list job -> list order code
//     //lay list order -> list display order
//     List<Order> orders = orderRepo.getAllByCodes(jobs.stream.map(item -> {
//         if(item.getCode == null)
//             return "";
//         else
//             return item.getCode;}).collection(Collection.toList));


//     // job //0011 002   
//     // ///   2     ''
// }
