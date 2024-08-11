
const result_showing = document.getElementById("result_showing");

//  Triangle section 
const tri_base= document.getElementById("tri_base");
const tri_height= document.getElementById("tri_height");
function triangle_cal(){
      let calculate=0.5 * parseInt(tri_base.value) * parseInt(tri_height.value);
      let div= document.createElement('div');
      div.classList.add("showing");
      
      div.innerHTML=`<p>Triangle</p>
                                <p>${calculate}cm<sup>2</sup></p>`;
      result_showing.append(div);
      tri_base.value="";
      tri_height.value="";
}


// Rectangle section

const rec_width=document.getElementById("rec_width");
const rec_height=document.getElementById("rec_height");


function rectangle_cal(){
    let calculate = parseInt(rec_height.value) * parseInt(rec_width.value);
    
    let div= document.createElement('div');
    div.classList.add("showing");
    
    div.innerHTML=`<p>Rectangle</p>
                              <p>${calculate}cm<sup>2</sup></p>`;
    result_showing.append(div);
    rec_height.value="";
    rec_width.value="";
    
}


// Parallelogram section

const para_base = document.getElementById("para_base");
const para_height=document.getElementById("para_height");

function parallelogram(){
       let calculate = parseInt(para_base.value) * parseInt(para_height.value);

       let div= document.createElement('div');
    div.classList.add("showing");
    
    div.innerHTML=`<p>Parallelogram</p>
                              <p>${calculate}cm<sup>2</sup></p>`;
    result_showing.append(div);
    para_base.value="";
    para_height.value="";
    
}



// Rhombus section 

 const rhom_d1 = document.getElementById("rhom_d1");
 const rhom_d2 = document.getElementById("rhom_d2");



function rhombus(){
      let calculate =0.5* parseInt(rhom_d1.value) * parseInt(rhom_d2.value);

      let div= document.createElement('div');
   div.classList.add("showing");
   
   div.innerHTML=`<p>Rhombus</p>
                             <p>${calculate}cm<sup>2</sup></p>`;
   result_showing.append(div);
   rhom_d1.value="";
   rhom_d2.value="";
}



// Pentagon section 


const penta_p = document.getElementById("penta_p");
const penta_b = document.getElementById("penta_b");


function pentagon(){
       let calculate = 0.5 * parseInt(penta_b.value) * parseInt(penta_p.value);

       let div= document.createElement('div');
       div.classList.add("showing");
       
       div.innerHTML=`<p>Pentagon</p>
                                 <p>${calculate}cm<sup>2</sup></p>`;
       result_showing.append(div);
       penta_b.value="";
       penta_p.value="";

}


// Ellipse section 


const ellip_a = document.getElementById("ellip_a");
const ellip_b = document.getElementById("ellip_b");


function ellipse(){
      let calculate = 3.1416 * parseInt(ellip_a.value) * parseInt(ellip_b.value);

      let div= document.createElement('div');
      div.classList.add("showing");
      
      div.innerHTML=`<p>Ellipse</p>
                                <p>${calculate.toFixed(2)}cm<sup>2</sup></p>`;
      result_showing.append(div);
      ellip_a.value="";
      ellip_b.value="";
}