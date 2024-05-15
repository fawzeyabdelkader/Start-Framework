import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  imageSrc:string='';
  clicked:boolean=false;
  close(){
    this.clicked=false;
  }
  open(image:string){
    this.clicked=true;
    this.imageSrc='../../assets/imagesPortfolio/'+image;
  }
}



// var imgList=Array.from(document.querySelectorAll('.item img'));
// var lightBoxContainer=document.querySelector('.lightbox-container');
// var lightBox=document.querySelector('.lightbox-item');
// var nextBtn=document.getElementById('next');
// var prevBtn=document.getElementById('prev');
// var closeBtn=document.getElementById('close');
//  // var currentSlide;

// for (var i=0; i<imgList.length; i++){
//     imgList[i].addEventListener('click', function(e){
//         lightBoxContainer.classList.replace('d-none','d-flex');
//         var imgSrc=e.target.getAttribute('src');
//         lightBox.style.backgroundImage=`url(${imgSrc})`;

//         currentSlide=imgList.indexOf(e.target);

//     })
// }

// function slide(step){
//   currentSlide=currentSlide+step;
//   if(currentSlide==imgList.length ) {
//       currentSlide=0;
//   }
//   if(currentSlide<0 ) {
//       currentSlide=imgList.length-1;
//   }
//   var imgSrc=imgList[currentSlide].getAttribute('src');
//   lightBox.style.backgroundImage=`url(${imgSrc})`;
// }
// nextBtn.addEventListener('click',function(){slide(1)});
// prevBtn.addEventListener('click',function(){slide(-1)})

// function closeSlide(){
//   lightBoxContainer.classList.add('d-none');
// }
// closeBtn.addEventListener('click',closeSlide)

// document.addEventListener('keydown',function(e){
//       if(e.code=='ArrowRight'){
//           slide(1)
//           }
//           if(e.code=='ArrowLeft'){
//               slide(-1)
//   }
//   if(e.code=='Escape'){
//           closeSlide()
//       }
//   })
//               //دى بتوقف موضوع البابلينج bubbling من عند الدفايه بتاع الصوره الى بتظهر
//   lightBoxContainer.addEventListener('click',function(e){
//       closeSlide()
//   })

//   lightBox.addEventListener('click',function(e){
//       e.stopPropagation();
//    })